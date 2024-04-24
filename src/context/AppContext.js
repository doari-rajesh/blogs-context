import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//step 1
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPosts(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("Fetching Blogs...........");
      console.log(data);
      setPost(data?.posts);
      setPage(data?.page);
      setTotalPages(data?.totalPages);
    } catch (error) {
      console.log("Error in Fetching Blogs............");
      console.log(error);
      setPage(1);
      setPost([]);
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPosts(page);
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPost,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

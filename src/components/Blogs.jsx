import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
const Blogs = () => {
  const { loading, posts, fetchBlogPosts } = useContext(AppContext);
  console.log("Blogs.......");
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div
      className="w-11/12 max-w-[650px] min-h-[100vh] flex flex-col gap-y-3 items-center justify-center 
    my-[6rem]"
    >
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No post Found</p>
        </div>
      ) : (
        posts.map((post, index) => (
          <div  key={index}>
            <p>{post.title}</p>
            <p>
              By <span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p>Posted On {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag, index) => (
                <span key={index}>{`${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;

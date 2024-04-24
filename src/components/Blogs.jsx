import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Posts from "./Posts";

const Blogs = () => {
  const { loading, posts, fetchBlogPosts } = useContext(AppContext);
  console.log("Blogs.......");
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className="w-11/12  min-h-[100vh] flex flex-col gap-y-10 items-center justify-center my-[6rem]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No post Found</p>
        </div>
      ) : (
        posts.map((post, index) => (
          <>
            {/* <div className="w-11/12 max-w-2xl mx-auto" key={index}>
              <p className="text-lg font-bold">{post.title}</p>
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
            </div> */}
            <Posts post={post} id={index} />
          </>
        ))
      )}
    </div>
  );
};

export default Blogs;

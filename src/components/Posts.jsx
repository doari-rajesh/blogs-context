import React from "react";

const Posts = ({ post, id }) => {
  return (
    <div className="w-11/12 max-w-2xl mx-auto" key={id}>
      <p className="text-lg font-bold">{post.title}</p>
      <p className="text-sm my-1">
        By <span className="italic">{post.author}</span> on{" "}
        <span className="underline font-semibold cursor-pointer">
          {post.category}
        </span>
      </p>
      <p className="text-sm">Posted On {post.date}</p>
      <p className="mt-4 mb-2">{post.content}</p>
      <div className="flex items-center gap-x-2 ">
        {post.tags.map((tag, index) => (
          <span
            className="text-xs text-blue-700 font-semibold underline cursor-pointer"
            key={index}
          >
            #{`${tag}`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Posts;

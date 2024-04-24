import React from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";

import "./App.css";

export default function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

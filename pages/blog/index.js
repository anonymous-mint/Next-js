import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div>Blog page</div>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default Blog;

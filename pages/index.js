import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div>Home page</div>
      <Link href="/blog">
        <a>Blog page</a>
      </Link>
      <Link href="/product">
        <a>Product page</a>
      </Link>
    </>
  );
};

export default Home;

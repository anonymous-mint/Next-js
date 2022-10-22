import React from "react";
import Link from "next/link";

const Product = () => {
  return (
    <>
      <div>Product page</div>
      <span>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
        <Link href="/product/3" replace>
          <a>Product 3</a>
        </Link>
      </span>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default Product;

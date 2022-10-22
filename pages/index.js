import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';

const Home = () => {
	
	const route = useRouter()
	
	const clickHandler = ()=>{
		console.log("Placed order");
		route.push("/docs/1")
	}

  return (
    <>
      <div>Home page</div>
      <Link href="/blog">
        <a>Blog page</a>
      </Link>
      <Link href="/product">
        <a>Product page</a>
      </Link>
			<button onClick={clickHandler}>
				See docs
			</button>
    </>
  );
};

export default Home;

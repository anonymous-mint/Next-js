import React from "react";
import { useRouter } from "next/router";

//We also can define the file as [[..params]] -> this also takes /docs route as param
const Docs = () => {
  const { query } = useRouter();
  const routes = query.params || [];
  console.log(routes);
  return (
    <div>
      Docs page loaded
      <p>Depth of routes {routes.length}</p>
      <p>Passed routes {routes.map((r) => r + " ")}</p>
    </div>
  );
};

export default Docs;

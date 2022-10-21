import React, { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import Child from "../Child/Child";

const Father = () => {
  const { name } = useContext(AppContext);
  return (
    <div>
      <h1>{name}</h1>
      <Child />
    </div>
  );
};

export default Father;

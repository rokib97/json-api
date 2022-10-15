import React, { useContext } from "react";
import { AppContext } from "../App";

const GrandChild = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => setUserName("Hasan")}>Chnage UserName</button>
    </div>
  );
};

export default GrandChild;

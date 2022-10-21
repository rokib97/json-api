import React, { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

const GrandChild = () => {
  const { setName, myName } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => setName(myName)}>Chnage Name</button>
    </div>
  );
};

export default GrandChild;

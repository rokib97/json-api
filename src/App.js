import { createContext, useState } from "react";
import "./App.css";
import Child from "./Componenets/Child";
export const AppContext = createContext(null);
function App() {
  const [userName, setUserName] = useState("Rokib");
  return (
    <AppContext.Provider value={{ setUserName }}>
      <div className="App">
        {userName}
        <Child />
      </div>
    </AppContext.Provider>
  );
}

export default App;

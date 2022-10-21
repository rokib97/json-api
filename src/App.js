import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./Componenets/Cart/Cart";
import Products from "./Componenets/Products/Products";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Products />,
          loader: async () => {
            const res = await fetch(`data.json`);
            const data = await res.json();
            return data;
          },
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

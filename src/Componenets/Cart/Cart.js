import React, { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import Product from "../Product/Product";

const Cart = () => {
  const { cart, setCart } = useContext(AppContext);
  return (
    <div>
      {cart.length === 0 ? (
        <h1 className="text-3xl font-bold my-4">
          Hello ! User . You don't have any cart added yet
        </h1>
      ) : (
        <h1 className="text-3xl font-bold my-4">
          Hello ! User . Please Manage your Cart Here
        </h1>
      )}
      <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {cart?.map((item) => (
          <Product key={item.id} item={item} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

const Product = ({ item }) => {
  const { cart, setCart } = useContext(AppContext);
  const { color, name, pairImage, price } = item || {};
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={pairImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{color}</div>
          </h2>
          <div className="card-actions">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            <div className="badge badge-outline">${price}</div>
          </div>
          {cart.includes(item) ? (
            <div className="text-start">
              <button
                onClick={() => setCart(cart.filter((c) => c.id !== item.id))}
                className="btn btn-sm btn-danger"
              >
                Delete From Cart
              </button>
            </div>
          ) : (
            <div className="text-start">
              <button
                onClick={() => setCart([...cart, item])}
                className="btn btn-sm btn-primary"
              >
                Add To Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;

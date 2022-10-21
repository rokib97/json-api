import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl my-6 font-bold">Welcome To Dj Sonika Shop</h1>
      <p className="text-xl my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Sequi eum veritatis labore? Illum ad laboriosam delectus
        consequatur sapiente accusamus, <br /> aut sit aliquam illo eveniet ea
        amet ducimus optio inventore nisi.
      </p>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;

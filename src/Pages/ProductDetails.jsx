import React from "react";
import { useParams } from "react-router-dom";
import products from "../Data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  return (

<div>
  <h1>{product.name}</h1>
  <h2>{product.price}</h2>

  <img src={product.image} alt="product image" width={200} />

  <p>{product.desc}</p>
</div>

  );
}

export default ProductDetails;

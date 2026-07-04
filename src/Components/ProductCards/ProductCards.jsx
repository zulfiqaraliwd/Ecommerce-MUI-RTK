import React from 'react'
import products from '../../Data/products'
import Button from '../Buttons/Button'
import Increament from "../../Pages/Increament";

function ProductCards({product}) {
const carts = {
  border: "1px solid black",
  padding: "10px",
  margin: "10px",
  marginTop : "70px",
  width: "250px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between" 
}

  
  return (
    <>
    <div style={carts}>
      <h1>Title : {product.name}</h1>
      <h2>Price : PKR :{product.price}/-</h2>
      <h2>Weight : {product.weight}</h2>
      <img src={product.image} alt=""  style={{ width: "100%",height: "300px",  objectFit: "cover", borderRadius: "8px"}}/>
      <p><h2>Description :</h2>{product.desc}</p>
       <Button price={product.price} />
       
    </div>

    </>
  )
}


export default ProductCards;

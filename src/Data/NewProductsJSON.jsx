import React from 'react'
import products from './products'
import ProductCards from '../Components/ProductCards/ProductCards'

function NewProductsJSON() {

  const newProducts = products.slice(0, 10);

  return (
    <>
<div style={{
      display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "10px"}} >

{newProducts.map((product) => (
        <ProductCards key={product.id} product={product} />
      ))}

  </div>
      
    </>
  )
}

export default NewProductsJSON

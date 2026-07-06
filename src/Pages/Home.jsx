import React from 'react'
import ProductCards from "../Components/ProductCards/ProductCards";

import products from "../Data/products";


function Home() {
  return (
    <div>

      <div>
        <img src="/assets/images/mainimage.png" alt="" height={600} width="100%" />
      </div>
      <h1 style={{textAlign:"center"}}>OUR PRODUCTS</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        gap: "10px"
      }}>



        {products.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}

      </div>
    </div>
  )
}

export default Home

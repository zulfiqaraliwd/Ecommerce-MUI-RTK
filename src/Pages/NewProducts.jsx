import React from 'react'
import { Link } from 'react-router-dom'
import NewProductsJSON from "../Data/NewProductsJSON";


function NewProducts() {
  return (
    <div>
      <h1>NewProducts</h1>

        <NewProductsJSON/>
    </div>
  )
}

export default NewProducts

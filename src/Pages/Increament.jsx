import React, { useState } from "react";
import products from "../Data/products";
function Increament() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
    {products.map((e) => (
  <div>
    <button onClick={() => setCounter(counter + e.price)}>
      +
    </button>
  </div>
))}


  <h1>Total price : {counter}</h1>


    </div>
  );
}

export default Increament;

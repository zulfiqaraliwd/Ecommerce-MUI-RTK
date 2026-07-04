import React, { useEffect, useState } from 'react'




function Button({price}) {
const [increment,setIncrement] = useState(1)

let total = price*increment

  const btn = {
    background: "linear-gradient(135deg, #ff7a18, #ffb347)",
    color: "white",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "600"
  }

  const plusBtn = {
  background: "linear-gradient(135deg, #00c853, #64dd17)",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  fontSize: "22px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  transition: "all 0.3s ease"
}

  return (
    <div>

<button style={plusBtn} onClick={()=>setIncrement(increment > 1 ? increment -1 : 1 )}>-</button>
<button style={btn}>Shop now</button>
<button style={plusBtn} onClick={()=>setIncrement(increment+1)}>+</button>

<p>Number of Product : {increment}</p>
<p>Total price : {total}</p>



    </div>
  )
}

export default Button
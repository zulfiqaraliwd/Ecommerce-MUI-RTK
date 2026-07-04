import React from 'react'
import products from '../../Data/products';
import "./Navbar.css"
import { Link,NavLink } from 'react-router-dom';
import Home from '../../Pages/Home';
function Navbar() {

const navstyle = ({isActive})=>{
return{
color: isActive ? "yellow" : "white", 
textDecoration: isActive  ? "none": "none",
fontWeight: isActive ? "bold" : "normal"

}
}

  return (
    <div>
    <div className='navbar'>
        <div>
            <img className ="main-logo" src="/assets/images/dryF-logo.png" width={90} alt="logo" />
        </div>
<nav className='pages' >
<NavLink style={navstyle} to="/">Home</NavLink>
<NavLink style={navstyle} to="/about">About</NavLink>
<NavLink style={navstyle} to="/contact">Contact</NavLink>
<NavLink style={navstyle} to="/newproducts">NewProducts</NavLink>

</nav>
    </div>
    </div>
  )
}

export default Navbar;

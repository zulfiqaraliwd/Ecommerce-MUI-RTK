import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Orders from "./Pages/NewProducts";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductCards from "./Components/ProductCards/ProductCards";
import NewProducts from "./Pages/NewProducts";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";


function AppRoutes() {
  return (
    
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newproducts" element={<NewProducts />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  
    
  );
}

export default AppRoutes;


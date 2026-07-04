import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./AppRoutes";
import ProductCards from "./Components/ProductCards/ProductCards";
import products from "./Data/products";
import Whatsapp from "./Components/Whatsapp";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      

  
   <Whatsapp  />
  
  <Footer />
    </>
  );
}

export default App;
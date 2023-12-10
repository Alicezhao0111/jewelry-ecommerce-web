import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "./components/navbar/Navbar";
import { useEffect, useRef, useState } from "react";
import { HashRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/Shop/Shop";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./reset.scss"
import Product from "./pages/product/product";
import Cart from "./components/cart/Cart";

const Layout = () => {
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const addToCart = (product) => {
    setSelectedItem((prev) => [...prev, product]);
  };

  useEffect(()=>{
    window.scrollTo(0,0);
    console.log(location);
  },[location])

  return (
    <div className="app">
      <Navbar setCartOpen={setCartOpen}/>
      {cartOpen && <Cart setCartOpen={setCartOpen} selectedItem={selectedItem}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:productID" element={<Product addToCart={addToCart} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};


function App() {
  
  return (
          <>
          <HashRouter>
            <Layout />
          </HashRouter>
          </>
  );
}

export default App;

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "./components/navbar/Navbar";
import { useEffect, useRef } from "react";
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
  useEffect(()=>{
    window.scrollTo(0,0);
    console.log(location);
  },[location])
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:productID" element={<Product/>}/>
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

  const containerRef = useRef(null);
  return (
    <>

        <LocomotiveScrollProvider
          options={{
            smooth: true,
            initPosition: { x: 0, y: 0 },
            offset: [0, 0]
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
          <HashRouter>
            <Layout />
          </HashRouter>
          </main>
        </LocomotiveScrollProvider>
    </>
  );
}

export default App;

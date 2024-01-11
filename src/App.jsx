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
import Product from "./pages/product/Product";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import ShopCategory from "./components/shopCategory/ShopCategory";
import CheckOut from "./pages/checkOut/CheckOut";
import Form from "./components/form/Form";
import FinalCart from "./components/finalCart/FinalCart";
import ConfirmCart from "./pages/confirmCart/confirmCart";
import User from "./pages/user/User";


const Layout = () => {
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);


  const addToCart = (product) => {

    //根據規格的不同創建新id避免重複id的問題
    const uniqueId = `${product.id}-${product.selectedOption}-${product.selectedColor}`;

    const productWithUniqueId = {
      ...product,
      uniqueId: uniqueId,
    };
    
    // 檢查購物車中是否已經有相同商品和相同選項
    const existingItemIndex = selectedItem.findIndex(
      (item) =>
        item.id === product.id &&
        item.selectedColor === product.selectedColor &&
        item.selectedOption === product.selectedOption
    );
  
    if (existingItemIndex !== -1) {
      // 如果找到相同商品，則更新數量
      const updatedCart = [...selectedItem];
      updatedCart[existingItemIndex].selectedQuantity += product.selectedQuantity;
      setSelectedItem(updatedCart);
    } else {
      // 如果購物車中沒有相同商品，則將新商品添加到購物車
      setSelectedItem((prev) => [...prev, productWithUniqueId]);
    }
  
    console.log("選我", product);
    console.log("uniqueId", uniqueId);
    console.log("productWithUniqueId", productWithUniqueId);
    console.log("existingItemIndex", existingItemIndex);
    console.log("updatedCart",[...selectedItem]);
  };

  const updateCart = (item, value) => {
    const newCart = selectedItem.map((cartItem) => {
      if (
        cartItem.id === item.id &&
        cartItem.selectedColor === item.selectedColor &&
        cartItem.selectedOption === item.selectedOption
      ) {
        return {
          ...cartItem,
          selectedQuantity: parseInt(value),
        };
      }
      return cartItem;
    });
    setSelectedItem(newCart);
    console.log("更新數量的購物車 ", newCart);
  };

  const handleDeleteItem = (itemUniqueId) => {
    const newCart = selectedItem.filter(
      (item) => item.uniqueId !== itemUniqueId
    );
    setSelectedItem(newCart);
    console.log("unique", itemUniqueId);
  };
  

  useEffect(()=>{
    window.scrollTo(0,0);
    console.log(location);
  },[location])

  return (
    <div className="app">
      <Navbar setCartOpen={setCartOpen} selectedItem={selectedItem}/>
      {cartOpen && <Cart setCartOpen={setCartOpen} selectedItem={selectedItem} setSelectedItem={setSelectedItem} updateCart={updateCart} handleDeleteItem={handleDeleteItem}/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productID" element={<Product addToCart={addToCart} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>} />
        <Route path="/shop" element={<Shop />}>
          <Route path="/shop/:categoryName" element={<Products />} />
        </Route>
        <Route path="/cart" element={<ConfirmCart selectedItem={selectedItem} setSelectedItem={setSelectedItem} updateCart={updateCart} handleDeleteItem={handleDeleteItem}/>}/>
        <Route path="/checkout" element={<CheckOut />}/>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
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

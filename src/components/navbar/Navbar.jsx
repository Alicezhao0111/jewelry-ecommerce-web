import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../cart/Cart";

const Navbar = ({ setCartOpen, selectedItem }) => {
  const [activeNav, setActiveNav] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [darkBg, setDarkBg] = useState(false);
  const [cartQuantity, setCartQuantity] = useState("0");
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const location = useLocation();

  //item動畫底線&特殊情況nav樣式設定
  useEffect(() => {
    const path = location.pathname;
    const activePath = path.split("/")[1]; // 獲取第一個數組
    setActiveItem(activePath); //動畫底線

    function changeBg() {
      //nav樣式設定
      const hasShopPath =
        location.pathname.includes("/shop") ||
        location.pathname.includes("/product") ||
        location.pathname.includes("/checkout") ||
        location.pathname.includes("/cart");
      setDarkBg(hasShopPath);
    }

    changeBg();
    console.log(darkBg);
  }, [location.pathname]); //當 location的pathname 變化時重新運行

  useEffect(() => {
    const scrollStyle = () => {
      if (window.scrollY > 0) {
        setActiveNav(true);
      } else {
        setActiveNav(false);
      }
    };
    window.addEventListener("scroll", scrollStyle);

    return () => {
      window.removeEventListener("scroll", scrollStyle);
    };
  }, []);

  //購物車顯示數量
  useEffect(() => {
    const totalQuantity = selectedItem.reduce(
      (prev, next) => prev + next.selectedQuantity,
      0
    );
    setCartQuantity(totalQuantity);
  }, [selectedItem]);

  const openThisMenu=()=>{
    setMenuOpen(true)
    setColorChange(true)
    console.log("menu狀態",menuOpen)
    document.body.style.overflow ="hidden"
  }
  const closeThisMenu=()=>{
    setMenuOpen(false)
    setColorChange(false)
    console.log("menu狀態",menuOpen)
    document.body.style.overflow ="auto"
  }

  return (
    <div className="navbar">
      <div
        className={activeNav || darkBg === true ? "wrapper active" : "wrapper"}
      >
        <div className="left">
          <div className={colorChange === true ? "logo active":"logo"} onClick={closeThisMenu}>
            <Link to="/">Boho Daze</Link>
          </div>
          <ul className="menu">
            <li className={activeItem === "shop" ? "item active" : "item"}>
              <Link to="/shop">SHOP</Link>
            </li>
            <li className={activeItem === "about" ? "item active" : "item"}>
              <Link to="/about">ABOUT</Link>
            </li>
            <li className={activeItem === "blog" ? "item active" : "item"}>
              <Link to="/blog">BLOG</Link>
            </li>
            <li className={activeItem === "faq" ? "item active" : "item"}>
              <Link to="/faq">FAQ</Link>
            </li>
            <li className={activeItem === "contact" ? "item active" : "item"}>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="right">
          <div className="icons">
            <SearchOutlinedIcon className="hiddenIcon" />
            <div className={colorChange === true ? "cartIcon active":"cartIcon"} onClick={() => {setCartOpen(true); closeThisMenu();}}>
              <ShoppingCartOutlinedIcon />
              <span>{cartQuantity}</span>
            </div>
            <Link to="/user">
              <PersonOutlineOutlinedIcon className="hiddenIcon" />
            </ Link>
          </div>
                  {/* 漢堡菜單圖示 */}
        <div className="toggleNavbar">
          <MenuIcon
            className="menuIcon"
            onClick={openThisMenu}
          />
        </div>
        </div>



        {/* 條件渲染菜單和圖示 */}
        {menuOpen && (
          <div className="mobileMenu">
            <div className="closeNavbar">
              <CloseIcon
                className="closeIcon"
                onClick={closeThisMenu}
              />
            </div>
            <ul className="mobileList">
              <li className="mobileItem" onClick={closeThisMenu}>
                <Link to="/shop">SHOP</Link>
              </li>
              <li className="mobileItem" onClick={closeThisMenu}>
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="mobileItem" onClick={closeThisMenu}>
                <Link to="/blog">BLOG</Link>
              </li>
              <li className="mobileItem" onClick={closeThisMenu}>
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="mobileItem" onClick={closeThisMenu}>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li className="mobileItem" onClick={closeThisMenu}>
                <span>SEARCH</span>
              </li>
              <li className="mobileItem login" onClick={closeThisMenu}>
                <span>Login</span>
              </li>
            </ul>

          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

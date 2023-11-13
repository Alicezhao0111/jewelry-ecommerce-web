import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  //item動畫底線&特殊情況nav樣式設定
  useEffect(() => {
    const path = location.pathname;
    const activePath = path.split('/')[1]; // 獲取第一個數組
    setActiveItem(activePath); //動畫底線

    function changeBg(){ //nav樣式設定
      const path = location.pathname;
      
      if (window.scrollY>0 || path==="/shop"){
        setActiveNav(true);
      }else{
        setActiveNav(false);
      }
  
    };

    changeBg();

    window.addEventListener('scroll',changeBg);

    return()=>{
      window.removeEventListener('scroll',changeBg);
    } //移除監聽器

  }, [location]); //當 location 變化時重新運行


  return (
    <div className="navbar">
      <div className={activeNav===true?"wrapper active":"wrapper"}>
        <div className="left">
            <div className="logo">
          <Link to="/">Boho Daze</Link>
          </div>
          <ul className="menu">

            <li className={activeItem ==="shop" ? "item active":"item"} >
              <Link to="/shop" >SHOP</Link>
            </li>
            <li className={activeItem ==="about" ? "item active":"item"}>
              <Link to="/about">ABOUT</Link>
            </li>
            <li className={activeItem ==="blog" ? "item active":"item"}>
              <Link to="/blog">BLOG</Link>
            </li>
            <li className={activeItem ==="faq" ? "item active":"item"}>
              <Link to="/faq">FAQ</Link>
            </li>
            <li className={activeItem ==="contact" ? "item active":"item"}>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="right">
          <div className="icons">
            <SearchOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
            <PersonOutlineOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

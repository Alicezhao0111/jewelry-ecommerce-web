import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
            <div className="logo">
          <Link to="/">Boho Daze</Link>
          </div>
          <ul className="menu">
            <li className={activeItem ==="home" ? "item active":"item"} onClick={()=>{setActiveItem("home")}}>
              <Link to="/">HOME</Link>
            </li>
            <li className={activeItem ==="shop" ? "item active":"item"} onClick={()=>{setActiveItem("shop")}}>
              <Link to="/">SHOP</Link>
            </li>
            <li className={activeItem ==="about" ? "item active":"item"} onClick={()=>{setActiveItem("about")}}>
              <Link to="/">ABOUT</Link>
            </li>
            <li className={activeItem ==="blog" ? "item active":"item"} onClick={()=>{setActiveItem("blog")}}>
              <Link to="/">BLOG</Link>
            </li>
            <li className={activeItem ==="faq" ? "item active":"item"} onClick={()=>{setActiveItem("faq")}}>
              <Link to="/">FAQ</Link>
            </li>
            <li className={activeItem ==="contact" ? "item active":"item"} onClick={()=>{setActiveItem("contact")}}>
              <Link to="/">CONTACT</Link>
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

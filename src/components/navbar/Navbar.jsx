import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
            <div className="logo">
          <Link to="/">Boho Daze</Link>
          </div>
          <div className="menu">
            <div className="item">
              <Link to="/">HOME</Link>
            </div>
            <div className="item">
              <Link to="/">SHOP</Link>
            </div>
            <div className="item">
              <Link to="/">ABOUT</Link>
            </div>
            <div className="item">
              <Link to="/">BLOG</Link>
            </div>
            <div className="item">
              <Link to="/">FAQ</Link>
            </div>
            <div className="item">
              <Link to="/">CONTACT</Link>
            </div>
          </div>
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

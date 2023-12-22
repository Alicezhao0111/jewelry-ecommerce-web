import React from "react";
import "./FinalCart.scss";
import { Step } from "../step/Step";
import arrowStep from "../../assets/arrowStep.svg"
import necklace from "../../assets/necklace.png";
import bracelet from "../../assets/bracelet.png";
import earrings from "../../assets/earrings.png";
import anklet from "../../assets/anklet.png";
import crochetBag from "../../assets/crochetBag.png";

function FinalCart(selectedItem, setSelectedItem) {
  const data = [
    {
      id: 1,
      name: "necklace",
      img: necklace,
    },
    {
      id: 2,
      name: "bracelet",
      img: bracelet,
    },
    {
      id: 3,
      name: "earrings",
      img: earrings,
    },
    {
      id: 4,
      name: "anklet",
      img: anklet,
    },
    {
      id: 5,
      name: "crochet bag",
      img: crochetBag,
    },
  ];
  return (
    <div className="finalCart">
      <Step />
      <div className="wholeArea">
        <div className="shoppingCart">
          <div className="title">
            <h2>Shopping Cart</h2>
          </div>
          <div className="cartDetail">
            <div className="formTitle">
              <h3>Product</h3>
              <h3>Description</h3>
              <h3>Quantity</h3>
              <h3>Price</h3>
            </div>
            <div className="productsForm">
              <div className="singleProduct">
                <div className="picBox">
                  <img src="" alt="" />
                </div>
                <div className="description">
                  <h2></h2>
                  <span></span>
                  <span></span>
                </div>
                <div className="quantity">
                  <div className="quantityBox">
                    <button className="setQuantity">-</button>
                    <span>1</span>
                    <button className="setQuantity">+</button>
                  </div>
                </div>
                <div className="price">
                    <span>NT $620</span>
                </div>
              </div>
            </div>
            <div className="noticeContainer">
                <p>Another NTS880 to benefit from free delivery costs</p>
            </div>
            <div className="btnContainer">
                <a href="">Continue Shopping</a>
                <div className="next">
                    <a href="">
                        <h3>Next Step</h3>
                        <img src={arrowStep} alt="" />
                    </a>
                   
                </div>
            </div>
          </div>
        </div>
        <div className="summary"></div>
      </div>
    </div>
  );
}

export default FinalCart;

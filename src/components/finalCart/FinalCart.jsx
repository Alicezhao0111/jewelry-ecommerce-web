import React, { useState } from "react";
import "./FinalCart.scss";
import { Step } from "../step/Step";
import arrowStep from "../../assets/arrowStep.svg";
import whiteArrow from "../../assets/whiteArrow.svg";
import necklace from "../../assets/necklace.png";
import bracelet from "../../assets/bracelet.png";
import { Link } from "react-router-dom";

function FinalCart({selectedItem, updateCart, setSelectedItem}) {
  const [sum, setSum] = useState(0);
  console.log("傳遞進來的",selectedItem)

  
  return (
    <div className="finalCart">
      <Step />
      <div className="wholeArea">
        <div className="shoppingCart">
          <div className="title">
            <h2>Shopping Cart</h2>
          </div>
          <div className="cartDetail">
            <div className="row formTitle">
              <h3 className="cell">Product</h3>
              <h3 className="cell description">Description</h3>
              <h3 className="cell">Quantity</h3>
              <h3 className="cell">Price</h3>
            </div>
            <div className="productsForm">
              {selectedItem.map((item) => (
                <div key={item.uniqueId} className="row singleProduct">
                  <div className="cell picBox">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="cell description">
                    <h2>{item.name}</h2>
                    <span>{item.selectedOption}</span>
                    <span>{item.selectedColor}</span>
                  </div>
                  <div className="cell quantity">
                    <div className="quantityBox">
                      <button className="setQuantity" onClick={() =>
                            updateCart(item, item.selectedQuantity - 1)
                          }
                          disabled={item.selectedQuantity <= 1}>-</button>
                      <span>{item.selectedQuantity}</span>
                      <button className="setQuantity" onClick={() =>
                            updateCart(item, item.selectedQuantity + 1)
                          }>+</button>
                    </div>
                  </div>
                  <div className="cell price">
                    <span>NT${item.price * item.selectedQuantity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="noticeContainer">
              <p>
            {sum < 1500
                ? `Another NT$${1500 - sum} to benefit from free delivery costs`
                : "Nice! You Get Free Delivery!"}
                {/* 12/27 sum功能尚未成功 */}
                </p>
            </div>
            <div className="btnContainer">
              <Link to="/shop" className="shoppingText">
                Continue Shopping
              </Link>
              <div className="next">
                <a href="" className="nextText">
                  <h3>Next Step</h3>
                  <img src={arrowStep} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="summaryBox">
            <div className="summaryTitle">
              <h2>Summary</h2>
            </div>
            <div className="summaryDetail">
              <div className="sum itemDetail">
                <span>1 item</span>
                <span>NT $620</span>
              </div>
              <div className="sum shippingDetail">
                <span>Shipping</span>
                <span>NT $60</span>
              </div>
            </div>
            <div className="coupon">
              <input type="text" placeholder="Discount code"/>
              <button>
                <span>APPLY</span>
              </button>
            </div>
            <div className="sum totalDetail">
              <span>Total</span>
              <span>NT $620</span>
            </div>
            <div className="nextBtn">
              <div className="btnBox">
                <h3>NEXT STEP</h3>
                <img src={whiteArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalCart;

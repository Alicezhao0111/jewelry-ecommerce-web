import React, { useState } from "react";
import "./Cart.scss";

function Cart({setCartOpen, selectedItem}) {
  const [num, setNum] = useState(1);

  console.log("傳遞的",selectedItem);


  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="textTop">
          <h3>Shopping Cart</h3>
          <span onClick={() => setCartOpen(false)}>CLOSE</span>
        </div>
        {selectedItem.map((item) => (
          <div className="itemList" key={item.id}>
            <div className="infoBox">
              <div className="imgBox">
                <img src={item.img} alt="" />
              </div>
              <div className="detail">
                <h3>{item.name}</h3>
                <h4>{item.color}</h4>
                <h4>{item.option}</h4>
                <div className="quantity">
                  <div className="quantityBox">
                    <h5>Qty :</h5>
                    <span
                      className="setQuantity"
                      onClick={() =>
                        setNum((prev) => (prev === 1 ? 1 : prev - 1))
                      }
                    >
                      -
                    </span>
                    <span>{num}</span>
                    <span
                      className="setQuantity"
                      onClick={() => setNum((prev) => prev + 1)
                    }
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
              <div className="priceBox">
                <span>{item.price}</span>
              </div>
            </div>
            <div className="underline">
              <svg
                width="448"
                height="1"
                viewBox="0 0 448 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4.37114e-08"
                  y1="0.5"
                  x2="448"
                  y2="0.500039"
                  stroke="#D1C9C0"
                />
              </svg>
            </div>
          </div>
        ))}
                <div className="textBottom">
          <div className="noticeBox">
            <span>Another NTS880 to benefit from free delivery costs</span>
          </div>
          <div className="totalPrice">
            <div className="priceInput">
              <h4>Total:</h4>
              <span>NT $620</span>
            </div>
            <div className="deliveryInput">
              <h4>Delivery :</h4>
              <span>NT $60</span>
            </div>
          </div>
          <div className="checkBtn">
            <button>
              <span>CHECKOUT</span>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Cart;

import React, { useState } from "react";
import "./Cart.scss";

function Cart() {
  const [num, setNum] = useState(1);
  const data = [
    {
      id: "1",
      category: "earrings",
      name: "nebula earrings",
      price: "NTD: 580",

      composition:
        "14k Gold Plated Hooks / Raw Brass / Japanese Beads / Wax Cord",
      color: "Starry night",
      option: "earring hooks",
      stock: 20,
      img: "images/products/nebula1.jpg",
      shipping: 1,
      quantity: 0,
    },
    {
      id: "2",
      category: "earrings",
      name: "mars earrings",
      price: "NTD: 580",

      composition:
        "14k Gold Plated Hooks / Raw Brass / Japanese Beads / Wax Cord",
      color: "Starry night",
      option: "earring hooks",
      stock: 20,
      img: "images/products/mars1.jpg",
      shipping: 1,
      quantity: 0,
    },
  ];

  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="textTop">
          <h3>Shopping Cart</h3>
          <span>CLOSE</span>
        </div>
        {data?.map((item) => (
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
                  <span className="setQuantity"
                    onClick={() =>
                      setNum((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </span>
                  <span>
                  {num}
                  </span>
                  <span className="setQuantity" onClick={() => setNum((prev) => prev + 1)}>+</span>
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
            <h4>Total:</h4>
            <span>NT $620</span>
            <h4>Delivery :</h4>
            <span>NT $60</span>
            <hr />
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

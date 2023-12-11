import React, { useEffect, useState } from "react";
import "./Cart.scss";

function Cart({setCartOpen, selectedItem, setSelectedItem}) {
    const [sum, setSum] = useState(0);

  const updateCart = (item, value) =>{
    const newCart = selectedItem.map((cartItem)=>{
        if (cartItem.id===item.id){
            return {
                ...cartItem,
                selectedQuantity: parseInt(value),
                
            }
        }
        return cartItem;

    });
    setSelectedItem(newCart);
    console.log("更新數量的購物車 ", newCart);
  };

  useEffect(()=>{
    const total=selectedItem.reduce((prev,next)=>{
        return prev+next.price*next.selectedQuantity
    },0)
    setSum(total)
    console.log(total);
},[selectedItem])


  return (
    <div className="cart">
      <div className="cartContainer">
        <div className="textTop">
          <h3>Shopping Cart</h3>
          <span onClick={() => setCartOpen(false)}>CLOSE</span>
        </div>
        {selectedItem?.map((item) => (
          <div className="itemList" key={item.id}>
            <div className="infoBox">
              <div className="imgBox">
                <img src={item.img} alt="" />
              </div>
              <div className="detail">
                <h3>{item.name}</h3>
                {item.selectedColor.length>0 && (<h4>{item.selectedColor}</h4>)}
                {item.selectedOption.length>0 && (<h4>{item.selectedOption}</h4>)}
                <div className="quantity">
                  <div className="quantityBox">
                    <h5>Qty :</h5>
                    <button
                      className="setQuantity"
                      onClick={() => updateCart(item, item.selectedQuantity - 1)}
                      disabled={item.selectedQuantity<=1}
                    >
                      -
                    </button>
                    <span>{item.selectedQuantity}</span>
                    <button
                      className="setQuantity"
                      onClick={() => updateCart(item, item.selectedQuantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="priceBox">
                <span>NT${item.price*item.selectedQuantity}</span>
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
            <span>{sum<1500?`Another NT$${1500-sum} to benefit from free delivery costs`:"Nice! You Get Free Delivery!"}</span>
          </div>
          <div className="totalPrice">
            <div className="priceInput">
              <h4>Total:</h4>
              <span>NT ${sum}</span>
            </div>
            <div className="deliveryInput">
              <h4>Delivery :</h4>
              <span>{sum<1500?"NT $60":"Free"}</span>
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

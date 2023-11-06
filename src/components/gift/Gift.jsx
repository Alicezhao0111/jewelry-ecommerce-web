import React from "react";
import "./Gift.scss";
import gift from "../../assets/gift.png";
import gift2 from "../../assets/gift2.png";
import gift3 from "../../assets/gift3.png";

const Gift = () => {
  return (
    <div className="gift">
      <div className="container">
        <div className="left">
          <img src={gift} alt="" />
        </div>
        <div className="center">
          <div className="top">
            <h3>Best</h3>
            <h3>Gift</h3>
            <h3>Option</h3>
          </div>
          <div className="bottom">
            <p>
              凡購買飾品 <br />
              即加贈品牌束口袋
              <br /> 方便送禮
            </p>
            <p>
              All jewelry will come
              <br /> with a beautiful brand bag <br /> for gifting
            </p>
          </div>
        </div>
        <div className="right">
          <img src={gift2} alt="" />
          <img src={gift3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gift;

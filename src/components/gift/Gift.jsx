import React from "react";
import "./Gift.scss";

const Gift = () => {
  return (
    <div className="gift">
      <div className="container">
        <div className="left">
          <div className="frame"></div>
          <div className="center">
            <div className="top">
              <h3>
                Best <br /> Gift <br /> Option
              </h3>
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
        </div>
        <div className="right">
          <div className="first"></div>
          <div className="second"></div>
        </div>
      </div>
    </div>
  );
};

export default Gift;

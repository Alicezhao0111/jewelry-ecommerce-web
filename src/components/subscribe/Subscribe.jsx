import React from "react";
import "./Subscribe.scss";
import userIcon from "../../assets/userIcon.svg"
import starIcon from "../../assets/starIcon.svg"
import globalIcon from "../../assets/globalIcon.svg"
import subBg from "../../assets/subBg.jpg"

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">

          <div className="content">
            
            <h2>Free the spirit</h2>
            <h3>Sign up to receive free delivery for your first order</h3>
            <p>加入會員即贈免運卷 </p>
            <div className="btn">
              <span>JOIN NOW</span>
              <svg
                width="38"
                height="6"
                viewBox="0 0 38 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38 3L33 0.113249V5.88675L38 3ZM0 3.5H33.5V2.5H0V3.5Z"
                  fill="white"
                />
              </svg>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="items">
            <div className="item">
                <div className="box">
                <img src={userIcon} alt="" />
                </div>
                <p>Customized service available</p>
            </div>
            <div className="item">
                <div className="box">
                    <img src={starIcon} alt="" />
                </div>
                <p>5 stars rating on Pinkoi and Shopee</p>
            </div>
            <div className="item">
            <div className="box">
                <img src={globalIcon} alt="" />
                </div>
                <p>Worldwide shipping available</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;



import React from "react";
import "./Bestsellers.scss";
import sun from "../../assets/bestSun.png";
import ocean from "../../assets/bestOcean.png";
import moon from "../../assets/bestMoon.png";

const Bestsellers = () => {
  return (
    <div className="bestsellers">
      <div className="container">
        <div className="top">
          <h3>Bestsellers</h3>
        </div>
        <div className="bottom">
          <div className="collection">
            <div className="items">
              <div className="item">
                <img src={moon} alt="" />
                <p></p>
              </div>
              <div className="btn">
                <span>SHOP NOW</span>
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
            <div className="items">
              <div className="item">
                <img src={ocean} alt="" />
                <p></p>
              </div>
              <div className="btn">
                <span>SHOP NOW</span>
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
            <div className="items">
              <div className="item">
                <img src={sun} alt="" />
                <p></p>
              </div>
              <div className="btn">
                <span>SHOP NOW</span>
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
          <div className="chnTitle">
            <h3>熱門商品</h3>
            <svg
              width="1"
              height="454"
              viewBox="0 0 1 454"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.49998"
                y2="454"
                stroke="#6F6152"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;

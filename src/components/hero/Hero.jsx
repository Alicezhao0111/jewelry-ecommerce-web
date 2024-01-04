import React from "react";
import "./Hero.scss";
import landingpic1 from "../../assets/landingpic1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="top">
        <div className="pic">
          <img src={landingpic1} alt="" />
        </div>
        <div className="text">
          <h2>Handmade</h2>
          <h2>Macrame</h2>
          <h2>Bohemian</h2>
          <Link to="/shop" className="btn">
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
          </Link>
        </div>
        <div className="decor">
          <svg
            width="26"
            height="624"
            viewBox="0 0 26 624"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="13.5" y1="363" x2="13.5" y2="624" stroke="white" />
            <line
              x1="13.5"
              y1="-2.18557e-08"
              x2="13.5"
              y2="261"
              stroke="white"
            />
            <circle cx="13.5" cy="289.5" r="2.5" fill="white" />
            <line
              x1="1.06066"
              y1="296.939"
              x2="14.0607"
              y2="309.939"
              stroke="white"
              strokeWidth="3"
            />
            <line
              y1="-1.5"
              x2="18.3848"
              y2="-1.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 26 298)"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="1.06066"
              y1="309.939"
              x2="14.0607"
              y2="322.939"
              stroke="white"
              strokeWidth="3"
            />
            <line
              y1="-1.5"
              x2="18.3848"
              y2="-1.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 26 311)"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="1.06066"
              y1="322.939"
              x2="14.0607"
              y2="335.939"
              stroke="white"
              strokeWidth="3"
            />
            <line
              y1="-1.5"
              x2="18.3848"
              y2="-1.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 26 324)"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>
      <div className="bottom">
        <div className="marquee">
          <span>For all the free spirits living in this modern world . For all the free spirits living in this modern world . </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

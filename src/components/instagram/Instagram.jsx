import React from "react";
import "./Instagram.scss";
import ig from "../../assets/ig.jpg";
import ig2 from "../../assets/ig2.jpg";
import ig3 from "../../assets/ig3.jpg";
import ig4 from "../../assets/ig4.jpg";

const pics = [
  {
    id: 1,
    img: ig,
    url: "https://www.instagram.com/p/CvHm_ZCPJP3/?img_index=1",
  },
  {
    id: 2,
    img: ig2,
    url: "https://www.instagram.com/p/CwXmEKhPW3R/?img_index=1",
  },
  {
    id: 3,
    img: ig3,
    url: "https://www.instagram.com/p/CzTB1UkPRUR/?img_index=1",
  },
  {
    id: 4,
    img: ig4,
    url: "https://www.instagram.com/p/Cyn0cRMP-zi/?img_index=1",
  },
];

const Instagram = () => {
  return (
    <div className="instagram">
      <div className="container">
        <div className="title">
            <h3>
            Follow boho journey on Instagram
            </h3>
            </div>
        <div className="gallery">
          {pics.map((pic) => {
            return (
              <a className="img-item" href={pic.url} key={pic.id}>
                <img src={pic.img} alt="instagram" />
              </a>
            );
          })}
        </div>
        
        <a href="https://www.instagram.com/boho.daze/" target="_blank" className="account">
            <div className="icon">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 28.7223C24.4182 28.7223 28 25.041 28 20.5001C28 15.959 24.4182 12.2778 20 12.2778C15.5817 12.2778 12 15.959 12 20.5001C12 25.041 15.5817 28.7223 20 28.7223Z"
              stroke="#BDA18C"
              stroke-width="3.99"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 28.7222V12.2778C2 6.60153 6.47716 2 12 2H28C33.5228 2 38 6.60153 38 12.2778V28.7222C38 34.3984 33.5228 39 28 39H12C6.47716 39 2 34.3984 2 28.7222Z"
              stroke="#BDA18C"
              stroke-width="3.99"
            />
            <path
              d="M31 9.21586L31.0211 9.19238"
              stroke="#BDA18C"
              stroke-width="3.99"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </div>
          
          <h3>boho.daze</h3>
          </a>
        
      </div>
    </div>
  );
};

export default Instagram;

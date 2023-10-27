import React from "react";
import "./intro.scss";
import intro from "../../assets/intro.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="left">
          <div className="title">
            <div className="title-top">
              <h3>About</h3>
              <h3>關於我們</h3>
            </div>
            <div className="title-bottom">
              <h3>Boho Daze</h3>
            </div>
          </div>
          <div className="text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nemo deserunt omnis quas. Assumenda aliquid aperiam
              iste atque nihil, ea blanditiis voluptas quod saepe sequi libero
              minus voluptatum, magni repudiandae!Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus nemo deserunt omnis quas.
              Assumenda aliquid aperiam iste atque nihil, ea blanditiis voluptas
              quod saepe sequi libero minus voluptatum, magni
              repudiandae!vLorem, ipsum dolor sit amet consectetur adipisicing
              elit. Temporibus nemo deserunt omnis quas. Assumenda aliquid
              aperiam iste atque nihil, ea blanditiis voluptas quod saepe sequi
              libero minus voluptatum, magni repudiandae!
            </p>
          </div>
        </div>
        <div className="right">
          <span>Handmade with Love</span>
          <img src={intro} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;

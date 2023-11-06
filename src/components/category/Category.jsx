import React from "react";
import "./Category.scss";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import necklace from "../../assets/necklace.png";
import bracelet from "../../assets/bracelet.png";
import earrings from "../../assets/earrings.png";
import anklet from "../../assets/anklet.png";
import crochetBag from "../../assets/crochetBag.png";

const data = [
  {
    id: 1,
    name: "necklace",
    img: necklace,
  },
  {
    id: 2,
    name: "bracelet",
    img: bracelet,
  },
  {
    id: 3,
    name: "earrrings",
    img: earrings,
  },
  {
    id: 4,
    name: "anklet",
    img: anklet,
  },
  {
    id: 5,
    name: "crochet bag",
    img: crochetBag,
  },
];

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="title">
          <h2>What We Have</h2>
        </div>

        <div className="slider">
          <Swiper spaceBetween={10} slidesPerView="auto">
            {data.map((data) => {
              return (
                <SwiperSlide>
                  <a key={data.id} href="#" className="list-group-item">
                    <img src={data.img} alt="bestseller" className="img-item" />
                    <div className="box">
                      <span>{data.name}</span>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="slogan">
          <span>Whatever makes your soul happy</span>
          <span>Do that</span>
        </div>
      </div>
    </div>
  );
};

export default Category;

import React from "react";
import "./Bestseller.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import moonNecklace from "../../assets/moonNecklace.jpg"
import brassBracelet from "../../assets/brassBracelet.jpg"
import oceanNecklace from "../../assets/oceanNecklace.jpg"
import flowerNecklace from "../../assets/flowerNecklace.jpg"
import newMoonNecklace from "../../assets/newMoonNecklace.jpg"
import sunBracelet from "../../assets/sunBracelet.jpg"

// Import Swiper styles
import "swiper/css";

const data =[
    {
        id: 1,
        name: "New moon necklace",
        img:newMoonNecklace
    },
    {
        id: 2,
        name: "Ocean necklace",
        img:oceanNecklace
    },
    {
        id: 3,
        name: "Sun bracelet",
        img:sunBracelet
    },
    {
        id: 4,
        name: "Flower necklace",
        img:flowerNecklace
    },
    {
        id: 5,
        name: "Brass bracelet",
        img:brassBracelet
    },
    {
        id: 6,
        name: "Moonlight necklace",
        img:moonNecklace
    }
];

const Bestseller = () => {
  return (
    <div className="bestseller">
      <div className="container">
        <div className="left">
          <h2>Bestsellers</h2>
          <p>
            Explore our Bestsellers
            <br />
            Handcrafted treasures that capture the essence of wanderlust.
            Limited stock available!
          </p>
          <div className="button">
            <span>Shop More</span>
            <svg
              width="31"
              height="8"
              viewBox="0 0 31 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z"
                fill="#B14E31"
              />
            </svg>
          </div>
        </div>
        <div className="right">
            
          <Swiper spaceBetween={35} slidesPerView={3.3}>
            
                {data.map((data)=>{
                    return (
                        <SwiperSlide key={data.id} >
                            <a href="#" className="list-group-item">
                                <img src={data.img} alt="bestseller" className="img-item"/>
                                <span>{data.name}</span>
                            </a>
                        </SwiperSlide>
                    )
                })}
                
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;

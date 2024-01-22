import React from "react";
import "./Bestseller.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";

const Bestseller = ({products}) => {

  const selectedBestId = [25,20,7,26,10,11];
  const selectedBestSeller = products.filter((item)=>selectedBestId.includes(parseInt(item.id)));
  
  return (
    <div className="bestseller">
      <div className="container">
        <div className="left">
          <h2>Bestsellers</h2>
          <p>
            Explore our Bestsellers
            <br />
            Handcrafted treasures that capture the essence of wanderlust.
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
            
          <Swiper scrollbar={{
          hide: false, draggable:true,
        }} spaceBetween={25} slidesPerView={3} freeMode={true} modules={[FreeMode, Scrollbar]} grabCursor={true} 
        breakpoints={{
          100:{
            slidesPerView: 2.5,
            spaceBetween: 20,

          },
          577: {
            slidesPerView: 3,
            spaceBetween: 25,
          },}}
        >
            
                {selectedBestSeller.map((data)=>{
                    return (
                        <SwiperSlide key={data.id} >
                          <Link to={`/product/${data.id}`} className="list-group-item">
                            
                              
                                <img src={data.img[0]} alt="bestseller" className="img-item"/>
                                <span>{data.name}</span>
                            
                            </Link>
                        </SwiperSlide>
                    )
                })}

<SwiperSlide>
        <div className="empty-slide"> {/* 或者放一個空白圖片 */}
            {/* 可以放置一些文本或保持空白 */}
        </div>
    </SwiperSlide>
                
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Bestseller;

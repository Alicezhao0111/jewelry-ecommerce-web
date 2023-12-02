import React, { useEffect, useState } from "react";
import "./product.scss";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import {FreeMode, Thumbs} from 'swiper/modules';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [num, setNum] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        const product = data.filter((p) => p.id == productID);
        console.log(product);

        setProducts(product[0]); //僅需取陣列的第一個物件
      } catch (err) {
        console.log("fetch data error", err);
      }
    }
    fetchData();
  }, [productID]);

  const {
    category,
    series,
    name,
    price,
    color,
    option,
    stock,
    img,
    shipping,
    quantity,
  } = products;
  const displayImg = img && img.length > 0 ? img.map((g, index) => (
    <SwiperSlide key={index}>
      <img src={g} alt="" />
    </SwiperSlide>
  )) : null;

  const displayPrice = price ? `NT$${price.NTD} / USD$${price.USD}`: "Loading...";
  const colorOption = color ? color.map((c, index) => ( <option key={index} value={c}> {c} </option>)): null;
  const styleOption = option ? option.map((o, index) => (<option key={index} value={o}>{o} </option>)): null;

  return (
    <div className="product">
      <div className="productContainer">
        <div className="top">
          <div className="breadcrumb">
            <a href="">SHOP-</a>
            <a href="">BRACELET-</a>
            <a href="">SUN BRACELET</a>
          </div>
          </div>
          <div className="bottom">
            
          <Swiper className="productSlider" 
                    loop={true}
                    spaceBetween={20}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[Thumbs]}>
                    
          
            {displayImg}
         
          </Swiper>
          <Swiper onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="otherSlider">

          </Swiper>

          
        
        <div className="right">
          <div className="titleBox">
            <h1>{name}</h1>
            <span>{displayPrice}</span>
          </div>
          <div className="compoBox">
            <h3>Composition</h3>
            <span>quality</span>
          </div>
          <div className="optionBox">
            <h3>Option</h3>
            {color && colorOption.length > 0 && (
              <select name="color" id="color">
                <option>color</option>
                {colorOption}
              </select>
            )}

            {option && styleOption.length > 0 && (
              <select name="style" id="style">
                <option>style</option>
                {styleOption}
              </select>
            )}
          </div>
          <div className="quantity">
            <h3>Quantity</h3>
            <div className="quantityBox">
            <span
              onClick={() => setNum((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </span>
            {num}
            <span onClick={() => setNum((prev) => prev + 1)}>+</span>
            </div>
          </div>
          <div className="cartBtn">
            <button>
                <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
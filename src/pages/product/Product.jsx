import React, { useEffect, useState } from "react";
import "./product.scss";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';

const Product = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [num, setNum] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedOption, setSelectedOption] = useState("");



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
    composition,
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

  const restImg = img && img.length > 1 ? img.slice(1).map((g, index) => (
    <SwiperSlide key={index}>
      <img src={g} alt="" />
    </SwiperSlide>
  )) : null;

  const displayPrice = price ? `NT$${price.NTD} / USD$${price.USD}`: "Loading...";
  const colorOption = color ? color.map((c, index) => ( <option key={index} value={c} > {c} </option>)): null;
  const styleOption = option ? option.map((o, index) => (<option key={index} value={o}  >{o} </option>)): null;

  function handleAddToCart(){
    if (colorOption&&!selectedColor || styleOption&&!selectedOption) {
      alert("Please select color and style before adding to cart.");
      return;
    }
    const selectedItem = {
      id: products.id,
      name: products.name,
      img:products.img[0],
      price:products.price.NTD,
      selectedQuantity: num,
      selectedColor,
      selectedOption,      
    };
    addToCart(selectedItem);
    console.log("被選擇",selectedItem)
  }

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
            <div className="sliderBox">
          <Swiper className="productSlider" 
                    loop={true}
                    spaceBetween={20}
                    navigation={true}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[FreeMode, Navigation, Thumbs]}>
                    
          
            {displayImg}
         
          </Swiper>
          <Swiper className="otherSlider"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          >

          {displayImg}

          </Swiper>

          </div>
        
        <div className="right">
          <div className="titleBox">
            <h1>{name}</h1>
            <span>{displayPrice}</span>
          </div>
          <div className="compoBox">
            <h3>Composition</h3>
            <span>{composition}</span>
          </div>
          <div className="optionBox">
            
            {color && colorOption.length > 0 && (
                <>
                <h3>Color Option</h3>
              <select name="color" id="color" onChange={(e)=>setSelectedColor(e.target.value)}>
                <option disabled selected value="">color</option>
                {colorOption}
              </select>
              </>
            )}

            {option && styleOption.length > 0 && (
              <>
              <h3>Style Option</h3>
              <select name="style" id="style" onChange={(e) => setSelectedOption(e.target.value)}>
                <option disabled selected value="">style</option>
                {styleOption}
              </select>
              </>
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
            <button onClick={handleAddToCart}>
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
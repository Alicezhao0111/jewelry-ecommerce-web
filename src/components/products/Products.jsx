import React, { useState } from "react";
import productData from "../../products.json";
import "./Products.scss";

const Products = () => {
  const [typeChange, setTypeChange] = useState("all");

  const categoryChange = (e, category) => {
    e.preventDefault();
    setTypeChange(category);

    console.log(typeChange);
  };

  const filterCategory = productData.filter((product) => {
    if (typeChange === "all") {
      return true;
    } else {
      return product.category === typeChange || product.series && product.series.includes(typeChange);
    }
  });

  return (
    <div className="products">
      <div className="container">
        <div className="category">
          <ul className="title">
            <h2>SHOP</h2>
            <div className="group">
              <li>
                <a href="" onClick={(e) => categoryChange(e, "all")}>
                  all
                </a>
              </li>
              <li>
                <a href="" onClick={(e) => categoryChange(e, "earrings")}>
                  earrings
                </a>
              </li>
              <li>
                <a href="" onClick={(e) => categoryChange(e, "bracelet")}>
                  bracelet
                </a>
              </li>
              <li>
                <a href="" onClick={(e) => categoryChange(e, "necklace")}>
                  necklace
                </a>
              </li>
              <li>
                <a href="" onClick={(e) => categoryChange(e, "anklet")}>
                  anklet
                </a>
              </li>
              <li>
                <a href="">crochet bag</a>
              </li>
            </div>
          </ul>
          <ul className="title">
            <h2>SERIES</h2>
            <div className="group">
              <li>
                <a href="" onClick={(e) => categoryChange(e, "flower collection")}>flower collection</a>
              </li>
              <li>
                <a href="" onClick={(e) => categoryChange(e, "sun collection")}>sun collection</a>
              </li>
              <li>
                <a href="" onClick={(e) => categoryChange(e, "moon collection")}>moon collection</a>
              </li>
              <li>
                <a href="" onClick={(e) => categoryChange(e, "gemstone collection")}>gemstone collection</a>
              </li>
              <li>
                <a href="" onClick={(e) => categoryChange(e, "brass collection")}>brass collection</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="right">
          <div className="top">
            <h2>
              Wear your dreams <br />
              let each piece rekindle your goals in moments of doubt.
            </h2>
            <div className="function">
              <select name="currency" id="currency">
                <option value="USD">USD</option>
                <option value="NTD">NTD</option>
              </select>
              <select name="sort" id="sort">
                <option value="">SORT BY</option>
                <option value="date">Date, new to old</option>
                <option value="price">Price, low to high</option>
              </select>
            </div>
          </div>
          <div className="productList">
            {filterCategory.map((product) => (
              <div key={product.id} className="wholeBox">
                <div className="box">
                  <img src={product.img[0]} alt="" />
                </div>
                <div className="text">
                  <h3>{product.name}</h3>
                  <span>NT {product.price.NTD}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import productData from "../../products.json";
import "./Products.scss";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="category">
          <ul className="title">
            <h2>SHOP</h2>
            <div className="group">
              <li>
                <a href="">all</a>
              </li>
              <li>
                <a href="">earrings</a>
              </li>
              <li>
                <a href="">bracelet</a>
              </li>
              <li>
                <a href="">necklace</a>
              </li>
              <li>
                <a href="">anklet</a>
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
                <a href="">flower collection</a>
              </li>
              <li>
                <a href="">sun collection</a>
              </li>
              <li>
                <a href="">moon collection</a>
              </li>
              <li>
                <a href="">gemstone collection</a>
              </li>
              <li>
                <a href="">brass collection</a>
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
            {productData.map(product=>(
              <div key={product.id}>
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

import React, { useEffect, useState } from "react";
import "./Products.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Pagination from "../pagination/pagination";
import ShopCategory from "../shopCategory/ShopCategory";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [typeChange, setTypeChange] = useState("all");
  const [currency, setCurrency] = useState("");
  const [displayProducts, setDisplayProducts] = useState(products);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
        setDisplayProducts(data);
      } catch (err) {
        console.log("fetch data error", err);
      }
    }
    fetchData();
  }, []);

  //設定頁面
  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = displayProducts.slice(firstPostIndex, lastPostIndex);

  //排序商品

  const sortProducts = (sortType, productsToSort) => {
    if (sortType === "price") {
      return productsToSort.sort((a, b) => a.price.NTD - b.price.NTD);
    } else if (sortType === "date") {
      return productsToSort.sort((a, b) => b.id - a.id);
    }
    return productsToSort;
  };

  const handleSortChange = (event) => {
    const newSortType = event.target.value;
    setSortType(newSortType);
    console.log(sortType);
    setDisplayProducts(sortProducts(newSortType, displayProducts));
  };

  //轉換貨幣

  const currencyChange = (event) => {
    setCurrency(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="products">
      <div className="container">
        <ShopCategory
          products={products}
          setTypeChange={setTypeChange}
          setDisplayProducts={setDisplayProducts}
          sortType={sortType}
          sortProducts={sortProducts}
        />
        <div className="right">
          <div className="top">
            <h2>
              Wear your dreams <br />
              let each piece rekindle your goals in moments of doubt.
            </h2>
            <div className="function">
              <select name="currency" id="currency" onChange={currencyChange}>
                <option value="NTD">NTD</option>
                <option value="USD">USD</option>
              </select>
              <select name="sort" id="sort" onChange={handleSortChange}>
                <option>SORT BY</option>
                <option value="date">Date, new to old</option>
                <option value="price">Price, low to high</option>
              </select>
            </div>
          </div>
          <div className="productList">
            {currentPosts.map((product) => (
              <div key={product.id} className="wholeBox">
                <Link to={`/shop/${product.id}`}>
                  <div className="box">
                    <img className="showImg" src={product.img[0]} alt="" />
                    <img className="hoverImg" src={product.img[1]} alt="" />
                  </div>
                </Link>
                <div className="text">
                  <h3>{product.name}</h3>
                  <span>
                    {currency === "USD"
                      ? ` USD ${product.price.USD}`
                      : `NT ${product.price.NTD}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="pageBox">
            <Pagination
              totalPosts={displayProducts.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

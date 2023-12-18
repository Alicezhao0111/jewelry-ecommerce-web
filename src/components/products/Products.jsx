import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Pagination from "../pagination/pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [typeChange, setTypeChange] = useState("all");
  const [currency, setCurrency] = useState("");
  const [displayProducts, setDisplayProducts] = useState([]);
  const [sortType, setSortType] = useState("");
  const { categoryName } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setProducts(data);
        setTypeChange(categoryName || "all");
      } catch (err) {
        console.log("fetch data error", err);
      }
    }
    
    fetchData();
    console.log("typeChange",typeChange)
  }, [categoryName]);

  //當分類、排序、產品任一數組發生改變時，重新設置展示的產品
  
  useEffect(() => {
    const filtered = products.filter((product) => {
      return typeChange === "all"
        ? true
        : product.category === typeChange ||
          (product.series && product.series.includes(typeChange));
    });
  
    // 只在 sortType 有值時進行排序
    const sortedProducts = sortType ? sortProducts(sortType, filtered) : filtered;
    setDisplayProducts(sortedProducts);
  }, [typeChange, products, sortType]);

  //改變分類
  
  const categoryChange = (e, category) => {
    e.preventDefault();
    setTypeChange(category);
    setCurrentPage(1);
    navigate(`/shop/${category}`);
  };

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
    setSortType(event.target.value);
  };


  //轉換貨幣

  const currencyChange = (event) => {
    setCurrency(event.target.value);
    console.log(event.target.value);
  };

  //設定頁面
  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = displayProducts.slice(firstPostIndex, lastPostIndex);

  //12/18 Finish Notion Note


  return (
    <div className="products">
      <div className="container">
      <div className="category">
      <ul className="title">
        <h2>SHOP</h2>
        <div className="group">
          <li>
            <Link to="/shop/all" onClick={(e) => categoryChange(e, "all")}>
              all
            </Link>
          </li>
          
          <li>
          <Link to="/shop/earrings" onClick={(e) => categoryChange(e, "earrings")}>
              earrings
            </Link>
          </li>
          
          <li>
          <Link to="/shop/bracelet" onClick={(e) => categoryChange(e, "bracelet")}>
              bracelet
            </Link>
          </li>
          <li>
          <Link to="/shop/necklace" onClick={(e) => categoryChange(e, "necklace")}>
              necklace
            </Link>
          </li>
          <li>
          <Link to="/shop/anklet" onClick={(e) => categoryChange(e, "anklet")}>
              anklet
            </Link>
          </li>
          <li>
          <Link to="/shop/crochet%20bag" onClick={(e) => categoryChange(e, "crochet bag")}>
              crochet bag
            </Link>
          </li>
        </div>
      </ul>
      <ul className="title">
        <h2>SERIES</h2>
        <div className="group">
          <li>
            <Link to="/shop/flower%20collection" onClick={(e) => categoryChange(e, "flower collection")}>
              flower collection
            </Link>
          </li>
          <li>
          <Link to="/shop/sun%20collection" onClick={(e) => categoryChange(e, "sun collection")}>
              sun collection
            </Link>
          </li>
          <li>
            <Link to="/shop/moon%20collection" onClick={(e) => categoryChange(e, "moon collection")}>
              moon collection
            </Link>
          </li>
          <li>
            <Link to="/shop/gemstone%20collection"
              onClick={(e) => categoryChange(e, "gemstone collection")}
            >
              gemstone collection
            </Link>
          </li>
          <li>
            <Link to="/shop/brass%20collection" onClick={(e) => categoryChange(e, "brass collection")}>
              brass collection
            </Link>
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
                <Link to={`/product/${product.id}`}>
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

import React, { useEffect, useState } from "react";
import "./Products.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Pagination from "../pagination/pagination";


const Products = () => {
  const [products, setProducts] =useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);
  const [typeChange, setTypeChange] = useState("all");
  const [currency, setCurrency] = useState("");
  const [displayProducts, setDisplayProducts] = useState(products);
  const [sortType, setSortType]=useState("");
  const navigate = useNavigate();
  
  

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch('products.json');
        const data = await response.json();
        setProducts(data);
        setDisplayProducts(data);

      }catch(err){
        console.log("fetch data error", err);

      }
    }
    fetchData();
  },[])

  //設定頁面
  const lastPostIndex = postsPerPage * currentPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = displayProducts.slice(firstPostIndex,lastPostIndex);


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

    //分類商品加排序
    const categoryChange = (e, category) => {
    e.preventDefault();
    setTypeChange(category);
  
    const filtered = products.filter((product) => {
      return category === "all" ? true : product.category === category || (product.series && product.series.includes(category));
    });
    setDisplayProducts(sortProducts(sortType, filtered));

    navigate(`/shop/${category.toLowerCase()}`);

  };

  //轉換貨幣

  const currencyChange = (event)=>{
    setCurrency(event.target.value);
    console.log(event.target.value);
  }


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
                <a href="" onClick={(e) => categoryChange(e, "crochet bag")}>crochet bag</a>
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
              <select name="currency" id="currency" onChange={currencyChange}>
                <option value="NTD" >NTD</option>
                <option value="USD" >USD</option>
              </select>
              <select name="sort" id="sort" onChange={handleSortChange}>
                <option>SORT BY</option>
                <option value="date">Date, new to old</option>
                <option value="price" >Price, low to high</option>
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
                  <span>{currency==="USD"?` USD ${product.price.USD}`:`NT ${product.price.NTD}`}</span>
                </div>
              </div>
            ))}
            
          </div>
          <div className="pageBox">
          <Pagination totalPosts={displayProducts.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

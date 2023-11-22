import React, { useEffect, useState } from "react";
import "./Products.scss";

const Products = () => {
  const [products, setProducts] =useState([]);
  const [typeChange, setTypeChange] = useState("all");
  const [currency, setCurrency] = useState("");
  const [displayProducts, setDisplayProducts] = useState(products);

  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await fetch('products.json');
        const data = await response.json();
        setProducts(data);

      }catch(err){
        console.log("fetch data error", err);

      }
    }
    fetchData();
  },[])

  //顯示分類產品
  const categoryChange = (e, category) => {
    e.preventDefault();
    setTypeChange(category);

    console.log(typeChange);
 
  const filtered = products.filter((product) => {
    return category === "all" ? true : product.category===category|| product.series && product.series.includes(category);

  });
  setDisplayProducts(filtered);

};

  // 排序改變處理
  const handleSortChange = (event) => {
    sortProducts(event.target.value);
  };

  //排序管理
  const sortProducts = (sortType)=>{
    let sorted = [...displayProducts];
    if (sortType==="price"){
    sorted.sort((a,b)=>a.price.NTD-b.price.NTD);
  }else if (sortType==="date"){
    sorted.sort((a,b)=>b.id-a.id);
  }
  setDisplayProducts(sorted)
  }
  

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
                <option value="">SORT BY</option>
                <option value="date">Date, new to old</option>
                <option value="price" >Price, low to high</option>
              </select>
            </div>
          </div>
          <div className="productList">
            {displayProducts.map((product) => (
              <div key={product.id} className="wholeBox">
                <div className="box">
                  <img src={product.img[0]} alt="" />
                </div>
                <div className="text">
                  <h3>{product.name}</h3>
                  <span>{currency==="USD"?` USD ${product.price.USD}`:`NT ${product.price.NTD}`}</span>
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

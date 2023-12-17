import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ShopCategory = ({
  products,
  setTypeChange,
  setDisplayProducts,
  sortType,
  sortProducts,
}) => {

    const navigate = useNavigate();
    const { categoryName } = useParams();
    console.log("分類",categoryName);

  //分類商品加排序
  const categoryChange = (e, category) => {
    
    e.preventDefault();
    setTypeChange(category);

    const filtered = products.filter((product) => {
      return category === "all"
        ? true
        : product.category === category ||
          (product.series && product.series.includes(category));
    });

    setDisplayProducts(sortProducts(sortType, filtered));

    // 使用 navigate 函數改變路徑
    navigate(`/shop/${category}`);
  };

  // 現在filter功能無法跨頁正常使用12/17

  return (
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
            <a href="" onClick={(e) => categoryChange(e, "crochet bag")}>
              crochet bag
            </a>
          </li>
        </div>
      </ul>
      <ul className="title">
        <h2>SERIES</h2>
        <div className="group">
          <li>
            <a href="" onClick={(e) => categoryChange(e, "flower collection")}>
              flower collection
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => categoryChange(e, "sun collection")}>
              sun collection
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => categoryChange(e, "moon collection")}>
              moon collection
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={(e) => categoryChange(e, "gemstone collection")}
            >
              gemstone collection
            </a>
          </li>
          <li>
            <a href="" onClick={(e) => categoryChange(e, "brass collection")}>
              brass collection
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default ShopCategory;

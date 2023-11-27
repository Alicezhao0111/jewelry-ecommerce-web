import React, { useEffect, useState } from 'react'
import "./product.scss"
import { useParams } from 'react-router-dom'

const Product = () => {
    const [products, setProducts]=useState([]);


    const {productID} = useParams();
    console.log(productID)

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('products.json');
                const data = await response.json();
                const product = data.filter((p)=>p.id == productID)
                // console.log(product)
                
                setProducts(product[0]); //僅需取陣列的第一個物件


            }catch(err){
                console.log("fetch data error",err)
            }
        }
        fetchData();

    },[productID])

    const {category, series, name, price, color, stock, img, shipping, quantity} = products;

  return (
    <div className="product">
        <div className="left">
            <div className="mainImg">
                <img src="" alt="" />
            </div>
            <div className="otherImg">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
        <div className="right"></div>

    </div>
  )
}

export default Product
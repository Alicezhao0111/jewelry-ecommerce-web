import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/navbar/Navbar'
// import Bestsellers from '../../components/bestsellers/Bestsellers'
import "./home.scss"
import Artist from '../../components/artist/Artist'
import Bestseller from '../../components/bestseller/Bestseller'
import Subscribe from '../../components/subscribe/Subscribe'
import Category from '../../components/category/Category'
import Gift from '../../components/gift/Gift'
import Instagram from '../../components/instagram/Instagram'

function Home() {
  const [products, setProducts] = useState([]);

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
    console.log('有抓到')
  },[])

  return (
    <div className="home">
    <Hero />
    <Artist />
    <Bestseller products={products}/>
    <Subscribe />
    <Category />
    <Gift />
    <Instagram />
    
    
    </div>

  )
}

export default Home

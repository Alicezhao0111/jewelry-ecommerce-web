import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/navbar/Navbar'
// import Bestsellers from '../../components/bestsellers/Bestsellers'
import "./home.scss"
import Artist from '../../components/artist/Artist'
import Bestseller from '../../components/bestseller/Bestseller'
import Subscribe from '../../components/subscribe/Subscribe'
import Category from '../../components/category/Category'

function Home() {
  return (
    <div className="home">
    <Hero />
    <Artist />
    <Bestseller />
    <Subscribe />
    <Category />
    
    
    </div>

  )
}

export default Home

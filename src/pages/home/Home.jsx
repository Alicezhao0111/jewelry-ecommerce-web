import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/navbar/Navbar'
// import Bestsellers from '../../components/bestsellers/Bestsellers'
import "./home.scss"
import Artist from '../../components/artist/Artist'
import Bestseller from '../../components/bestseller/Bestseller'

function Home() {
  return (
    <div className="home">
    <Hero />
    <Artist />
    <Bestseller />
    
    
    </div>

  )
}

export default Home

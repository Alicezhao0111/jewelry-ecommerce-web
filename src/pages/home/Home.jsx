import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/navbar/Navbar'
// import Bestsellers from '../../components/bestsellers/Bestsellers'
import "./home.scss"
import Artist from '../../components/artist/Artist'

function Home() {
  return (
    <div className="home">
    <Hero />
    <Artist />
    
    
    </div>

  )
}

export default Home

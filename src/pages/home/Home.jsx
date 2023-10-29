import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Intro from '../../components/intro/intro'
import Bestsellers from '../../components/bestsellers/Bestsellers'
import "./home.scss"

function Home() {
  return (
    <div className="home">
    <Hero />
    <Intro />
    <Bestsellers />
    </div>

  )
}

export default Home

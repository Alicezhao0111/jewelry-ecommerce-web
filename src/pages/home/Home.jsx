import React from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Intro from '../../components/intro/intro'
import "./home.scss"

function Home() {
  return (
    <div className="home">
    <Hero />
    <Intro />
    </div>

  )
}

export default Home

import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="top">
            <div className="pic">
                <img src="src/assets/landingpic.png" alt="" />
            </div>
            <div className="text">
                <h2>Handmade</h2>
                <h2>Macrame</h2>
                <h2>Bohemian</h2>
                <button>btn</button>
            </div>
        </div>
        <div className="bottom">
            <div className="marquee">
                <span>For all the free spirits living in this modern world</span>
            </div>
        </div>
    </div>
  )
}

export default Hero
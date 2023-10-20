import React from 'react'
import './Header.css'

const Header = () => {
  return (
<section className='h-wrapper'>
    <div className='h-container'>
        <h1>Boho Daze</h1>
        <div className='h-menu'>
            <a href="">
                HOME
                </a>
            <a href="">
                SHOP
                </a>
            <a href="">
                ABOUT
                </a>
            <a href="">
                BLOG
                </a>
            <a href="">
                FAQ
                </a>
            <a href="">
                CONTACT
            </a>
        </div>
    </div>
</section>
  )
}

export default Header

import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <h3>LET'S SHOP</h3>
        <span>ALL</span>
        <span>Earrings</span>
        <span>Bracelet</span>
        <span>Necklace</span>
        <span>Anklet</span>
        <span>Mama's bag</span>

      </div>
      <div className="center">
        <h3>YOU CAN ALSO SHOP ON...</h3>
        <span>Shopee(Taiwan only)</span>
        <span>Pinkoi(Worldwide shipping)</span>
      </div>
      <div className="right">
        <div className="icon">
          <div className="ig"></div>
          <div className="fb"></div>
          <div className="youtube"></div>
        </div>
        <img src="" alt="signature" />
        <span>© 2023 Boho Daze All rights reserved</span>

      </div>
    </div>
  )
}

export default Footer
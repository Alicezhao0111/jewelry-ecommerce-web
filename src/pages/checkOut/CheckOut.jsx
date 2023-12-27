import React from 'react'
import "./CheckOut.scss"
import FinalCart from '../../components/finalCart/FinalCart'

const CheckOut = ({selectedItem, updateCart, setSelectedItem}) => {
  return (
    <div className='checkOut'>
        <FinalCart selectedItem={selectedItem} updateCart={updateCart} setSelectedItem={setSelectedItem}/>
    </div>
  )
}

export default CheckOut
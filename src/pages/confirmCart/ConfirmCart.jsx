import React from 'react'
import FinalCart from '../../components/finalCart/FinalCart'
import "./ConfirmCart.scss"

const ConfirmCart = ({selectedItem, updateCart, handleDeleteItem}) => {
  return (
    <div className='confirmCart'>
        <FinalCart selectedItem={selectedItem} updateCart={updateCart} handleDeleteItem={handleDeleteItem}/>
    </div>
  )
}

export default ConfirmCart
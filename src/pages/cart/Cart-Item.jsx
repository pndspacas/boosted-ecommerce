import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context'

const CartItem = ({ data }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, deleteCart } = useContext(ShopContext)
  return (
    <div className='main-card'>
      <img src={data.productImage} className="images" />
      <div className='cart-item'>
        <div className='cart-items'>
          <p>
            <b>{data.productName}</b>
          </p>
          <p >€{data.price}</p>
          <div className='input-btn'>
            <button className="input-button" onClick={() => removeFromCart(data.id)}>-</button>
            <input value={cartItems[data.id]} className='' onChange={(e) => updateCartItemCount(Number(e.target.value), data.id)} />
            <button className="input-button" onClick={() => addToCart(data.id)}>+</button>
            <button className="delete-btn" onClick={() => deleteCart(data.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
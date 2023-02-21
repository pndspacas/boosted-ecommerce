import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/Shop-context'
import CartItem from './Cart-Item'
import { useNavigate } from 'react-router-dom'


const Cart = ({ data }) => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()
    return (
        <div>
            <div className='cart-main'>
                {totalAmount > 0 ? <h1>Cart Items</h1> : <h1>Your Cart is Empty</h1>}
            </div>
            <div className='cart-product'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            <div className='cart-totals'>
                {totalAmount > 0 && <div>
                    <p className='p-cart'>Subtotal:€ {totalAmount}</p>
                    <button className="button-cart flex" onClick={() => navigate("/")}>Continue Shopping</button>
                    <button className="button-cart flex">Checkout</button>
                </div>}
            </div>
        </div>
    )
}

export default Cart
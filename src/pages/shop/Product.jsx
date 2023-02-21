import React, { useContext } from 'react'
import { ShopContext } from "../../context/Shop-context"
const Product = ({ data }) => {
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[data.id]
    return (
        <div>
            <div className='product-container'>
                <img src={data.productImage} className="images" />
                <div className='text-content'>
                    <p>
                        <b>{data.productName}</b>
                    </p>
                    <p>€{data.price}</p>
                    <div>
                        <button className="button-cart" onClick={() => addToCart(data.id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Product
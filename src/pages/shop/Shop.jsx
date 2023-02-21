import React from 'react'
import { PRODUCTS } from "../../products"
import Product from './Product'
const Shop = () => {
    return (
        <div className='shop-main'>
            <div className='shop-header'>
                <h1>Latest Products</h1>
            </div>
            <div className='products-content'>
                <div className='products'>
                    {PRODUCTS.map((product) => <Product data={product} />)}
                </div>
            </div>

        </div>
    )
}

export default Shop
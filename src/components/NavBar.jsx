import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className="logo">
                <h1>Boosted</h1>
            </div>
            <div className='links'>
                <Link to="/"><span>Shop</span></Link>
                <Link to="/cart"><span><i className="fa-solid fa-cart-shopping"></i></span></Link>
            </div>
        </div>
    )
}

export default NavBar
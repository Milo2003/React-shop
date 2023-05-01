import React, { useContext } from 'react'

import '../style/orderItem.scss'
import { AppContext } from '../context/AppContext'
export const OrderItem = ({ product }) => {
    const { removeToCart } = useContext(AppContext);
    const handleRemove = product => {
        removeToCart(product)
    }
    return (
        <div className="order-item">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p 
                className='close'
                onClick={() => { handleRemove(product) }} 
            >X</p>
        </div>

    )
}

import React, { useContext, useEffect } from 'react';

import '../style/myOrder.scss';
import arrow from '../assets/icons/flechita.svg';

import { OrderItem } from '../components/OrderItem';
import { AppContext } from '../context/AppContext';

export const MyOrder = ({ handleToggleOrders }) => {
    const { shoppingCart } = useContext(AppContext);

    const sumTotal = () => {
        const sum = shoppingCart.cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
        return sum;
    }
    return (
        <aside className='MyOrder'>
            <div className="title-container">
                <img onClick={handleToggleOrders} src={arrow} alt="arrow" />
                <p className='title'>My Order</p>
            </div>
            <div className='my-order-content'>
                {shoppingCart.cart.map((item, index) => (
                    <OrderItem product={item} key={index} />
                ))}
            </div>
            <div className="total-checkout">
                <div className='order'>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <button className='primary-button'>Checkout</button>
            </div>
        </aside>
    )
}

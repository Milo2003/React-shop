import React from 'react';

import '../style/orders.scss';
import { Order } from '../components/Order';


export const Orders = () => {
    return (
        <div className="my-order">
            <div className="myorder-container">
                <h1 className="orders-title">My orders</h1>
                <div className="myorders-content">
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                    <Order />
                </div>
            </div>
        </div>
    )
}

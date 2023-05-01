import React from 'react'

import '../style/Order.scss';
import ArrowIcon from '../assets/icons/flechita.svg'

export const Order = () => {
    return (
        <div className="Order">
            <p>
                <span>23.10.22</span>
                <span>6 articles</span>
            </p>
            <p>$ 1800,00</p>
            <img src={ArrowIcon} alt="flecha-icon" />
        </div>
    )
}
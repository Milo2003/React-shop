import React from 'react';

import '../style/menuMobile.scss';
export const MenuMobile = () => {
    return (
        <div className="menu-mobile-container">
            <h1>CATEGORIES</h1>
            <ul className="menu-mobile">
                <li>All</li>
                <li>Clothes</li>
                <li>Electronics</li>
                <li>Furniture</li>
                <li>Toys</li>
                <li>Others</li>
            </ul>
            <div className="min-menu-mobile">
                <ul>
                    <li><a href="/orders">My orders</a></li>
                    <li><a href="/account">My account</a></li>
                    <li>miloplatzi@gmail.com</li>
                    <li><a href="">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

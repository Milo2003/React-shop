import React, { useContext, useState } from 'react';

import '@styles/header.scss';
import notificationsIcon from '@icons/icon_shopping_cart.svg';
import arrowIcon from '@icons/flechita.svg';
import navLogo from '@logos/logo_yard_sale.svg';
import menuIcon from '@icons/icon_menu.svg';
import { Menu } from '../components/Menu';
import { AppContext } from '../context/AppContext';
import { MyOrder } from './MyOrder';
import { MenuMobile } from '../containers/MenuMobile';
export const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const { shoppingCart } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders)
    }
    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <nav className="container">
            <img onClick={handleToggleMenu} className="icon-menu" src={menuIcon} alt="icon-menu" />
            <div className="navbar-left">
                <img className="nav-logo" src={navLogo} alt="logo" />
                <ul className="menu">
                    <li><a href="">All</a></li>
                    <li><a href="">Clothes</a></li>
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Furniture</a></li>
                    <li><a href="">Toys</a></li>
                    <li><a href="">Others</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li
                        className="email"
                        onClick={handleToggle}>miloplatzi@gmail.com</li>
                    <li
                        className="arrow"
                        onClick={handleToggle}>
                        <img src={arrowIcon} alt="arrow-icon" />
                    </li>
                    <li className="shopping-cart" onClick={handleToggleOrders}>
                        <img src={notificationsIcon} alt="notifications" />
                        {shoppingCart.cart.length > 0 ? <div>{shoppingCart.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder handleToggleOrders={handleToggleOrders} />}
            {toggleMenu && <MenuMobile />}
        </nav>
    )
}

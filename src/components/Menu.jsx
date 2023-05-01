import React from 'react';

import '../style/menu.scss';
export const Menu = () => {
    return (
        <div className="min-menu">
            <ul>
                <li><a href="/orders">My orders</a></li>
                <li><a href="/account">My account</a></li>
                <li><a href="">Sign out</a></li>
            </ul>
        </div>
    )
}

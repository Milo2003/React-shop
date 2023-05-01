import React from 'react';

import '../style/myAccount.scss';
export const MyAccount = () => {
    return (
        <div className="account">
            <div className="account-container">
                <img className="account-logo" src="logos/logo_yard_sale.svg" alt="logo-principal" />
                <h1 className="title-account">My account</h1>
                <form action="/" className="form">
                    <label htmlFor="create" className="name">Name</label>
                    <input id="create" type="text" placeholder="El Mikelson" className="create" />
                    <label htmlFor="confirm" className="emailAdress">Email address</label>
                    <input id="confirm" type="email" placeholder="mikelson@gmail.com" className="confirm" />
                    <label htmlFor="password" className="password">Password</label>
                    <input type="password" id="password" placeholder="********" />
                    <input type="submit" value="Edit" className="button_primary login-button" />
                </form>
            </div>
        </div>
    )
}

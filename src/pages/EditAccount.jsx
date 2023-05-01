import React from 'react';

import '../style/editAccount.scss';
export const EditAccount = () => {
    return (
        <div className="login">
            <div className="form_container">
                <img className="logo" src="logos/logo_yard_sale.svg" alt="logo-principal" />
                <h1 className="title">My account</h1>
                <form action="/" className="form">
                    <label htmlFor="create" className="name">Name</label>
                    <p id="create" className="name">El Mikelson</p>

                    <label htmlFor="confirm" className="emailAdress">Email address</label>
                    <p className="emailAddress" id="confirm">mikelson@gmail.com</p>

                    <label htmlFor="password" className="password">Password</label>
                    <p id="password" className="password">********</p>
                </form>
                <button className="button_primary login-button">Edit</button>
            </div>
        </div>
    )
}

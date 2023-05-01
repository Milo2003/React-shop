import React from 'react'
import '../style/createPassword.scss'

export const CreatePassword = () => {
    return (
        <div className="newPassword">
            <div className="newPassword-container">
                <img className="newPassword-logo" src="../assets/logos/logo_yard_sale.svg" alt="logo-principal" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for you account</p>
                <form action="/" className="form">
                    <label htmlFor="create">Password</label>
                    <input id="create" type="password" placeholder="**********" className="create" />
                    <label htmlFor="confirm">Confirm password</label>
                    <input id="confirm" type="password" placeholder="**********" className="confirm" />
                    <input type="submit" value="Confirm" className="button_primary login-button" />
                </form>
            </div>
        </div>
    )
}

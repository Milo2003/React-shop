import React from 'react';

import '../style/sendEmail.scss'
import emailLogo from '../assets/icons/email.svg';
export const SendEmail = () => {
    return (
        <div className="email">
            <div className="email-container">
                <img className="logo" src="/logos/logo_yard_sale.svg" alt="logo-principal" />
                <h1 className="send-email-title">Email has been sent!</h1>
                <p className="text">Please check your inbox for instructions
                    on how to reset the password
                </p>
                <div className="container-logo">
                    <img className="email-logo" src={emailLogo} />
                </div>
                <input type="submit" value="Login" className="button_login login-email" />
                <div>
                    <p className="not-resend">Didn't receive the email?
                        <a className="link-resend" href="">Resend</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

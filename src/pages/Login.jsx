import React, { useRef } from 'react';

import '../style/login.scss';
import logo from '../assets/logos/logo_yard_sale.svg';
export const Login = () => {
    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data)
    }

    return (
        <div className="login">
            <div className="login-container">
                <img className="login-logo" src={logo} alt="logo-principal" />
                <form action="/" className="form" ref={form}>
                    <label htmlFor="create">Email address</label>
                    <input name="email" type="email" placeholder="Platzi@gmail.com" className="create" />
                    <label htmlFor="confirm">Password</label>
                    <input name="password" type="password" placeholder="**********" className="confirm" />
                    <button
                        onClick={handleSubmit} 
                        className="button-primary login-button" >
                        Login
                    </button>
                    <a className="forgot-password" href="#">Forgot my password</a>
                </form>
                <button type="submit" className="button-secondary signUp-button">Sign up</button>
            </div>
        </div>
    )
}

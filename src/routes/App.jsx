import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../style/global.scss';
import { CreatePassword } from '../pages/CreatePassword';
import { Layout } from '../containers/Layout';
import { SendEmail } from '../pages/SendEmail';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
import { MyAccount } from '../pages/MyAccount';
import { Orders } from '../pages/Orders';
import { AppContext } from '../context/AppContext';
import { useInitialState } from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter basename='/React-shop'>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/create-new-password' element={<CreatePassword />} />
                        <Route path='/send-email' element={<SendEmail />} />
                        <Route path='/account' element={<MyAccount />} />
                        {/* <Route path='/signup' element={<CreateAccount/>} /> */}
                        <Route path='/login' element={<Login />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
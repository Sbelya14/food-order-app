import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Summary from './pages/Summary';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import ThankYou from './pages/ThankYou';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="summary" element={<Summary />} />
                    <Route path="order" element={<Order />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;




import React, { lazy, Suspense, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png';

const Shop = lazy(() => import('./pages/Shop'));
const ShopCategory = lazy(() => import('./pages/ShopCategory'));
const Cart = lazy(() => import('./pages/Cart'));
const Product = lazy(() => import('./pages/Product'));
const Checkout = lazy(() => import('./pages/checkout'));
const LoginSignup = lazy(() => import('./pages/LoginSignup'));

const LoadingScreen = () => (
    <div className='loading-screen'>
        <div className='square-container'>
            <div className='square'></div>
            <div className='square'></div>
            <div className='square'></div>
        </div>
    </div>
);

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 2000); // Show loading for 2 seconds
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <Suspense fallback={<LoadingScreen />}>
                    <Routes>
                        <Route path='/' element={<Shop />} />
                        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
                        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
                        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
                        <Route path='/product/:productId' element={<Product />} />
                        <Route path='/signup' element={<LoginSignup setIsAuthenticated={setIsAuthenticated} />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </Suspense>
            )}
            <Footer />
        </div>
    );
}

export default App;

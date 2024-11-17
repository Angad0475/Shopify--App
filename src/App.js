import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import { useState } from 'react';

// Import assets at the top
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png';

// Lazy-loaded components
const Shop = lazy(() => import('./pages/Shop'));
const ShopCategory = lazy(() => import('./pages/ShopCategory'));
const Cart = lazy(() => import('./pages/Cart'));
const Product = lazy(() => import('./pages/Product'));
const Checkout = lazy(() => import('./pages/checkout')); // Match file name casing
const LoginSignup = lazy(() => import('./pages/LoginSignup'));

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            {/* Pass isAuthenticated and setIsAuthenticated to the Navbar */}
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

            {/* Wrap Routes in Suspense for lazy loading */}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Automatically load Shop on homepage */}
                    <Route path='/' element={<Shop />} />
                    
                    {/* Define category-specific routes */}
                    <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
                    <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
                    <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
                    
                    {/* Route for product details by productId */}
                    <Route path="/product/:productId" element={<Product />} />
                    
                    {/* Route for login/signup page with authentication state */}
                    <Route path='/signup' element={<LoginSignup setIsAuthenticated={setIsAuthenticated} />} />
                    
                    {/* Routes for cart and checkout pages */}
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />

                    {/* Redirect any undefined route to the Shop page */}
                    <Route path="*" element={<Navigate to="/"/>} />
                </Routes>
            </Suspense>

            <Footer />
        </div>
    );
}

export default App;

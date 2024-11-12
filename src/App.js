import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from './components/Footer/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png';
import Checkout from './pages/checkout';
import { useState } from 'react';
import LoginSignup from './pages/LoginSignup';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            {/* Pass isAuthenticated and setIsAuthenticated to the Navbar */}
            <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

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
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;

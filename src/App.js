import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from './components/Footer/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png';
import SignUp from './pages/LoginSignup';
import Checkout from './pages/checkout';

function App() {
    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Shop />} />
                    <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
                    <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
                    <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
                    <Route path="/product/:productId" element={<Product />} /> {/* Updated */}
                    <Route path='/signup' element={<SignUp />} /> {/* Updated */}
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;

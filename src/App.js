import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
 import Shop from './pages/Shop';
 import ShopCategory from './pages/ShopCategory';
 import Cart from './pages/Cart';
 import Product from './pages/Product';
 import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kid_banner from './Assets/banner_kids.png';

function App(){
    return(
        <div>
                
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Shop/>}></Route>
                    <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
                    <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
                    <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}></Route>


                    <Route path="/product" element={<Product/>}>
                    <Route path=':productId' element={<Product/>}/>
                    </Route>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<LoginSignup/>}/>
                </Routes>
                <Footer/>
                
        </div>
    );
}

export default App;


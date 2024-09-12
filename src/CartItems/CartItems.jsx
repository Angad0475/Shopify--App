import React from "react";
import './CartItems.scss';
import { useDispatch,useSelector } from "react-redux";
import {removeFromCart,getTotalCartAmount} from '../Redux/cartSlice';

import all_product from "../Assets/all_product";

import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from "react-router-dom";

function CartItems(){
    const dispatch= useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalCartAmount = useSelector(getTotalCartAmount);

    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return(
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon"/>
                                <p>{e.name}</p>
                                <p>{e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='remove' src={remove_icon} onClick={() => dispatch(removeFromCart(e.id))} alt='' />  
                            </div>
                            <hr/>
                        </div>


                    );
                }
                return null;
            })}
            <div className="cartitems-down">
            <div className="cartitems-total">
          <h1>Cart Totals </h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${totalCartAmount}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${totalCartAmount}</h3>
            </div>
          </div>
          <Link to='/checkout'><button>PROCEED TO CHECKOUT</button></Link>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here. </p>
          <div className="cartitems-promobox">
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
    </div>
</div>

    )
}
export default CartItems;
import React from "react";
import './CartItems.scss';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, getTotalCartAmount } from '../Redux/cartSlice';
import all_product from "../Assets/all_product";
import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";

function CartItems() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems); // This is an array now
    const totalCartAmount = useSelector(getTotalCartAmount);

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Size</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {cartItems.map((cartItem) => {
                // Find the product in the all_product array using the cart item id
                const product = all_product.find(p => p.id === cartItem.id);
                if (product) {
                    return (
                        <div className="details" key={product.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={product.image} alt="" className="carticon-product-icon"/>
                                <p className="name">{product.name}</p>
                                <p className="size">{cartItem.size}</p> {/* Show selected size */}
                                <p className="price">{product.new_price}</p>
                                <button className="cartitems-quantity">{cartItem.quantity}</button>
                                <p className="total">${product.new_price * cartItem.quantity}</p>
                                <div className='remove' ><MdDeleteOutline
                                    onClick={() => dispatch(removeFromCart({ id: product.id, size: cartItem.size }))} 
                                    alt='Remove item'/>
                                  </div>   
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
                    <Link to='/checkout'><button className='checkouts'>PROCEED TO CHECKOUT</button></Link>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here. </p>
                    <div className="cartitems-promobox">
                        <input  className='promo'type='text' placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;

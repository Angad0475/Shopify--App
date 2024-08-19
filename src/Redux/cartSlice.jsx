import {createSlice} from '@reduxjs/toolkit';
import all_product from '../Assets/all_product';

const getDefaultCart=()=>{
    let cart={};
    for(let index=0; index<all_product.length;index++){
        cart[index]=0;
    }
    return cart;
};

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        cartItems: getDefaultCart(),
    },
    reducers:{
        addToCart: (state,action)=>{
            const itemId= action.payload;
            state.cartItems[itemId]+=1;
        },
      removeFromCart:(state,action)=>{
        const itemId= action.payload;
        state.cartItems[itemId]-=1;
      },
    }, 
});

export const getTotalCartAmount=(state)=>{
    let totalAmount =0;
    for(const item in state.cart.cartItems){
        if(state.cart.cartItems[item]>0){
            let itemInfo = all_product.find((product)=>product.id===Number(item));
            totalAmount+=itemInfo.new_price*state.cart.cartItems[item];
        }
    }
    return totalAmount;
};

export const getTotalCartItems= (state)=>{
    let totalItem =0;
    for(const item in state.cart.cartItems){
        if(state.cart.cartItems[item]>0){
            totalItem+=state.cart.cartItems[item];
        }
    }
    return totalItem;
};

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
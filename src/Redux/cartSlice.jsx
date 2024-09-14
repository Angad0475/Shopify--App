import { createSlice } from '@reduxjs/toolkit';
import all_product from '../Assets/all_product';

// Create a Redux slice to manage the cart
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [], // Now an array to store product items with size
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, size } = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === id && item.size === size
            );

            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity if the same size and product already exists
            } else {
                state.cartItems.push({ id, size, quantity: 1 }); // Add a new item with selected size
            }
        },
        removeFromCart: (state, action) => {
            const { id, size } = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === id && item.size === size
            );

            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1; // Decrease quantity if more than 1
            } else {
                state.cartItems = state.cartItems.filter(
                    (item) => !(item.id === id && item.size === size)
                ); // Remove the item if quantity reaches 0
            }
        },
    },
});

// Function to calculate total cart amount
export const getTotalCartAmount = (state) => {
    return state.cart.cartItems.reduce((totalAmount, item) => {
        const itemInfo = all_product.find((product) => product.id === item.id);
        if (itemInfo) {
            totalAmount += itemInfo.new_price * item.quantity;
        }
        return totalAmount;
    }, 0);
};

// Function to calculate total number of items in the cart
export const getTotalCartItems = (state) => {
    return state.cart.cartItems.reduce((totalItems, item) => totalItems + item.quantity, 0);
};

// Export actions and reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

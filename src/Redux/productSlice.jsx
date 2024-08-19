import { createSlice } from '@reduxjs/toolkit';
import all_product_data from '../Assets/all_product'; // Import your products data

const initialState = {
    all_product: all_product_data, // Initialize with your product data
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // You can define actions to modify the products data here if needed
        setAllProducts: (state, action) => {
            state.all_product = action.payload;
        },
        // Additional reducers can be added here if needed
    },
});

export const { setAllProducts } = productSlice.actions;

export default productSlice.reducer;

// Selector to access `all_product` from the state
export const selectAllProducts = (state) => state.products.all_product;
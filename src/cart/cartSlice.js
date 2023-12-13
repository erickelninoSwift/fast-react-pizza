import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      // Adding a new object in the cart
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {},
    addQuantity(state, action) {},
    removeQuantity(state, action) {},
    clearCart(state, action) {},
  },
});

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
    deleteItem(state, action) {
      //payload will be equal to the id of the item
      state.cart = state.cart.filter((data) => {
        return data.pizzaId !== action.payload;
      });
    },
    addQuantity(state, action) {
      const item = state.cart.find((data) => {
        return data.pizzaId === action.payload;
      });

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    removeQuantity(state, action) {
      const item = state.cart.find((data) => {
        return data.pizzaId === action.payload;
      });

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) {
        state.cart = state.cart.filter((data) => {
          return data.pizzaId !== action.payload;
        });
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, addQuantity, removeQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

export const getCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

export const getCart = (state) => {
  return state.cart.cart;
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {

      const exist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (exist) {
        exist.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }

    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    increaseQty: (state, action) => {

      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity++;
      }

    },

    decreaseQty: (state, action) => {

      const item = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity--;
      }

    },

  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
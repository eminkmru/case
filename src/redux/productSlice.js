import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.total += action.payload.price;
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;

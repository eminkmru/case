import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    cartItems: [],
    count: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.total += action.payload.price;
      state.count += 1;
    },
  },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import { save, load } from '../features/localstorage'

const preloadedState = {
  cart: load(),
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState
});


store.subscribe(() => {
  const state = store.getState();
  save(state.cart);
})

export default store;
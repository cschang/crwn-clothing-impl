import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./product/product.reducer";
import shopReducer from "./shops/shop.reducer";
import cartReducer from './cart/cart.reducer';
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  directory: productReducer,
  shop: shopReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);

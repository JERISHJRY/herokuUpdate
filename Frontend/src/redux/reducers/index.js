import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import { HomeProductReducer } from "./homeProductReducer";
import { BlogReducer } from "./blogReducer";
import WishlistReducer from "./wishListReducer";
import { Productreducer } from "./productreducer";
import { loginReducer } from "./LoginReducer";
import CartSubTotalReducer from "./cartSubTotalReducer";
import OrderReducer from "./OrderReducer";

export default combineReducers({
  productData: Productreducer,
  cart: CartReducer,
  CartSubTotalReducer: CartSubTotalReducer,
  WishlistReducer: WishlistReducer,
  loginResult: loginReducer,
  blog: BlogReducer,
  homeProduct: HomeProductReducer,
  order:OrderReducer
});

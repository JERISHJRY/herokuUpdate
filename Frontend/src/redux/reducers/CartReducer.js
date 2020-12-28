
import * as ActionType from 'constants/action-types';
const InitialState={
  addtocart:[],
 
}
const CartReducer=(state = InitialState, action)=> {
  switch (action.type) {
    case ActionType.ADD_TO_CART:     
      return { ...state, addtocart:action.payload.cartItems};
    case ActionType.REMOVE_FROM_CART:     
      return { ...state, addtocart:action.payload.cartItems};
    
    default:
      return state;
  }
}
export default CartReducer;
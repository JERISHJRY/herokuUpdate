import * as ActionType from '../../constants/action-types';
const initialState={
  addtowishlist:[],
}
const CartReducer=(state = initialState, action)=> {
  switch (action.type) {
    case ActionType.ADD_TO_WISHLIST:     
      return { ...state, addtowishlist:  action.payload.wishlistItems};
    
    default:
      return state;
  }
}
export default CartReducer;
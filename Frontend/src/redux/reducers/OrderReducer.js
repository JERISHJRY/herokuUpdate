import * as ActionType from "constants/action-types";
const InitialState = {
  confirmOrder: [],
 
};
const OrderReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.ORDER:
      return { ...state, confirmOrder: action.payload.orderItems,
     };
   
    default:
      return state;
  }
};
export default OrderReducer;
import * as ActionType from "constants/action-types";
export const ConfirmOrder = (items, product) => (dispatch) => {
  let orderItems = [];
  if (items.confirmOrder !== undefined) {
    orderItems = items.confirmOrder;
  }
    orderItems.push(product);
  dispatch({ type: ActionType.ORDER, payload: { orderItems } });
};


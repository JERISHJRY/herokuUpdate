import * as ActionType from "constants/action-types";
export const addToCart = (items, product, quantity) => (dispatch) => {
  let cartItems = [];
  if (items.addtocart !== undefined) {
    cartItems = items.addtocart;
  }

  let isproductincart = false;
  cartItems.forEach((cp) => {
    if (cp.web_id === product.web_id) {
      isproductincart = true;
    }
  });
  let val = 0;
  quantity ? (val = { count: quantity }) : (val = { count: 1 });

  if (!isproductincart) {
    cartItems.push({ ...product, ...val });
  }

  cartItems.map((e) => (e.incart = true));

  dispatch({ type: ActionType.ADD_TO_CART, payload: { cartItems } });
};
export const RemovefromCart = (items, product) => (dispatch) => {
  const cartItems = items.addtocart.filter(
    (itm) => itm.web_id !== product.web_id
  );
  dispatch({ type: ActionType.REMOVE_FROM_CART, payload: { cartItems } });
};

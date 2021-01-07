import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addToCart, RemovefromCart } from "redux/actions/CartAction";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Button from "./button";

const CartButton = (props) => {
  const it = props.item;
  const quality = props.count;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart.addtocart);
  
  const location = useLocation();
  const { id } = queryString.parse(location.search);
  const [empty, isEmpty] = useState(true);
  useEffect(() => {
    if (it) {
      if (cart.filter((e) => e.web_id === it.web_id).length) {
        isEmpty(false);
      } else {
        isEmpty(true);
      }
    } else {
      if (cart.filter((e) => e.web_id === id).length) {
        isEmpty(false);
      } else {
        isEmpty(true);
      }
    }
  }, []);

  return (
    <>
      {empty === false && (
        <Button
          className={"add-to-cart"}
          handleClick={(e) => {
            dispatch(RemovefromCart(cartItems, it));
            isEmpty(true);
            toast("Removed from cart", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: true,
            });
          }}
          iconToDisplay={<i className="fa fa-shopping-cart"></i>}
          buttonLabel={"Remove from Cart"}
        />
      )}

      {empty === true && (
        <Button
          className={"add-to-cart"}
          handleClick={(e) => {
            dispatch(addToCart(cartItems, it, quality));
            isEmpty(false);
            toast("added to cart", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: true,
            });
          }}
          iconToDisplay={<i className="fa fa-shopping-cart"></i>}
          buttonLabel={"Add to cart"}
        />
      )}
    </>
  );
};
export default CartButton;

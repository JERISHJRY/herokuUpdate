import { ListItemSecondaryAction } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import CartButton from "../commons/addToCartButton";
import AddWishlistButton from "../Home/addWishlistButton";
import { productclick } from "components/commons/productClick";
import { Loader } from "components/commons/loader";
import { toast } from "react-toastify";
import {offer} from 'components/commons/offerCalculation';

const Features = (props) => {
  let errorStatus = props.ErrorSearch;
  let array = [];
  const content = props.data;
  if (content) {
    content.message.forEach((e) => {
      if (e.features_item) {
        array.push(e.features_item);
      }
    });
  }

  const Toast = () => {
    toast("not implemented", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  return (
    <>
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {errorStatus === true ? (
          <div className="text-center itemNotFound">
            <h4> Item Not Found</h4>
          </div>
        ) : (
          <>
            {array.length ? (
              <>
                {array.map((item) =>
                  item.map((it, i) => (
                    <div className="col-sm-4" key={i}>
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <div className="proImageDiv">
                              {it.discount?
                              <span className="offerbadge">{it.discount}% off</span>:null}
                              <img
                                src={it.image}
                                onClick={() => productclick(it.web_id)}
                                alt=""
                              />
                            </div>
                            <p>{it.image_name}</p>
                            <div className="priceContainer">
                              {it.discount ? (
                                <>
                                  <span className="priceDetail">
                                    <span>{it.currency_type}</span>
                                    {offer( it.price,it.discount) }
                                  </span>
                                  <span className="originalPrice">
                                    <strike>
                                      <span>{it.currency_type}</span>
                                      {it.price}
                                    </strike>
                                  </span>
                                  {/* <span className="offer"></span> */}
                                </>
                              ) : (
                                <>
                                  <span className="priceDetail">
                                    <span>{it.currency_type}</span>
                                    {it.price}
                                  </span>
                                </>
                              )}
                            </div>
                            <CartButton item={it} />
                          </div>
                        </div>
                        <div className="choose text-center">
                          <ul className="nav ml-3">
                            <li>
                              <AddWishlistButton product={it} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </>
            ) : (
              Loader
            )}
          </>
        )}
      </div>
    </>
  );
};
export default Features;

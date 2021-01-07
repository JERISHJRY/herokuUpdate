import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productclick } from "components/commons/productClick";
import {offer} from 'components/commons/offerCalculation';

import CartButton from "../commons/addToCartButton";
import Netpay from "./netpay";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const RecommendedItems = (props) => {
  let array = [];
  const content = props.data;
  if (content) {
    content.message.forEach((e) => {
      if (e.offer_item) {
        array.push(e.offer_item);
      }
    });
  }

  return (
    <>
      <div className="recommended_items">
        <h2 className="title text-center">Offer Zone</h2>

        <Carousel responsive={responsive} >
          {array.map((item) =>
            item.map((it) => (
              <div
                id="recommended-item-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="col">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                          {it.discount?
                              <span className="offerbadge">{it.discount}% off</span>:null}
                            <img
                              src={it.image}
                              onClick={() => productclick(it.web_id)}
                              alt=""
                            />
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </Carousel>
      </div>
    
    </>
  );
};
export default RecommendedItems;

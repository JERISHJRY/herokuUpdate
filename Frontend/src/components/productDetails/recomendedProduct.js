import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CartButton from "../commons/addToCartButton";
import { productclick } from "components/commons/productClick";
import {offer} from 'components/commons/offerCalculation';

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
const RecomendedProduct = (props) => {
  const content = props.data;
  return (
    <>
      <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>

        <Carousel responsive={responsive}>
          {content.map((item) => (
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
                          <img
                            src={item.image}
                            onClick={() => productclick(item.web_id)}
                            alt=""
                          />
                          <p>{item.image_name}</p>
                          <div className="priceContainer">
                              {item.discount ? (
                                <>
                                  <span className="priceDetail">
                                    <span>{item.currency_type}</span>
                                    {offer( item.price,item.discount) }
                                  </span>
                                  <span className="originalPrice">
                                    <strike>
                                      <span>{item.currency_type}</span>
                                      {item.price}
                                    </strike>
                                  </span>
                                  <span className="offer">{item.discount}% off</span>
                                </>
                              ) : (
                                <>
                                  <span className="priceDetail">
                                    <span>{item.currency_type}</span>
                                    {item.price}
                                  </span>
                                </>
                              )}
                            </div>
                          <CartButton item={item} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default RecomendedProduct;

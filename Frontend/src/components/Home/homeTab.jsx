import React, { useState } from "react";

import { productclick } from "components/commons/productClick";
import { offer } from "components/commons/offerCalculation";

import CartButton from "../commons/addToCartButton";

const HomeTab = (props) => {
  let array = [];
  let vegetables = [];
  let fruits = [];
  let stationery = [];
  let fish = [];
  let poultry_and_meat = [];
  let organicproduct = [];

  const content = props.data;
  if (content) {
    content.message.forEach((e) => {
      if (e.shoping_item !== undefined || null) {
        array.push(e.shoping_item);
      }
    });
  }
  array.forEach((item) => {
    item.forEach((it) => {
      if (it.VEGETABLES) {
        vegetables.push(it.VEGETABLES);
      }
      if (it.FRUITS) {
        fruits.push(it.FRUITS);
      }
      if (it.STATIONERY) {
        stationery.push(it.STATIONERY);
      }
      if (it.FISH) {
        fish.push(it.FISH);
      }
      if (it.POULTRY_AND_MEATS) {
        poultry_and_meat.push(it.POULTRY_AND_MEATS);
      }
      if (it.ORGANIC_PRODUCTS) {
        organicproduct.push(it.ORGANIC_PRODUCTS);
      }
      
    });
  });

  return (
    <>
      <div className="category-tab" key="1">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#tshirt" data-toggle="tab">
              VEGETABLES
              </a>
            </li>
            <li>
              <a href="#blazers" data-toggle="tab">
                FRUITS
              </a>
            </li>
            <li>
              <a href="#sunglass" data-toggle="tab">
              STATIONERY
              </a>
            </li>
            <li>
              <a href="#kids" data-toggle="tab">
              FISH
              </a>
            </li>
            <li>
              <a href="#poloshirt" data-toggle="tab">
              POULTRY_AND_MEATS
              </a>
            </li>
            <li>
              <a href="#organic" data-toggle="tab">
              ORGANIC_PRODUCTS
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="tshirt">
            {vegetables.map((e) =>
              e.map((el, i) => (
                <div className="col-sm-3" key={i}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                      {el.discount?
                        <span className="offerbadge">{el.discount}% off</span>:null}
                        <img
                          src={el.image}
                          onClick={() => productclick(el.web_id)}
                          alt=""
                        />
                        <p>{el.image_name}</p>
                        <div className="priceContainer">
                          {el.discount ? (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {offer(el.price, el.discount)}
                              </span>
                              <span className="originalPrice">
                                <strike>
                                  <span>{el.currency_type}</span>
                                  {el.price}
                                </strike>
                              </span>
  
                            </>
                          ) : (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {el.price}
                              </span>
                            </>
                          )}
                        </div>
                        <CartButton item={el} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="tab-pane fade" id="blazers">
            {fruits.map((e) =>
              e.map((el, i) => (
                <div className="col-sm-3" key={i}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                      {el.discount?
                        <span className="offerbadge">{el.discount}% off</span>:null}
                        <img
                          src={el.image}
                          onClick={() => productclick(el.web_id)}
                          alt=""
                        />
                        <p>{el.image_name}</p>
                        <div className="priceContainer">
                          {el.discount ? (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {offer(el.price, el.discount)}
                              </span>
                              <span className="originalPrice">
                                <strike>
                                  <span>{el.currency_type}</span>
                                  {el.price}
                                </strike>
                              </span>
                             
                            </>
                          ) : (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {el.price}
                              </span>
                            </>
                          )}
                        </div>
                        <CartButton item={el} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="tab-pane fade" id="sunglass">
            {stationery.map((e) =>
              e.map((el, i) => (
                <div className="col-sm-3" key={i}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                      {el.discount?
                        <span className="offerbadge">{el.discount}% off</span>:null}
                        <img
                          src={el.image}
                          onClick={() => productclick(el.web_id)}
                          alt=""
                        />
                        <p>{el.image_name}</p>
                        <div className="priceContainer">
                          {el.discount ? (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {offer(el.price, el.discount)}
                              </span>
                              <span className="originalPrice">
                                <strike>
                                  <span>{el.currency_type}</span>
                                  {el.price}
                                </strike>
                              </span>
                            
                            </>
                          ) : (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {el.price}
                              </span>
                            </>
                          )}
                        </div>
                        <CartButton item={el} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="tab-pane fade" id="kids">
            {fish.map((e) =>
              e.map((el, i) => (
                <div className="col-sm-3" key={i}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <div className="proImageDiv">
                        {el.discount?
                        <span className="offerbadge">{el.discount}% off</span>:null}
                          <img
                            src={el.image}
                            onClick={() => productclick(el.web_id)}
                            alt=""
                          />
                        </div>
                        <p>{el.image_name}</p>
                        <div className="priceContainer">
                          {el.discount ? (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {offer(el.price, el.discount)}
                              </span>
                              <span className="originalPrice">
                                <strike>
                                  <span>{el.currency_type}</span>
                                  {el.price}
                                </strike>
                              </span>
                           
                            </>
                          ) : (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {el.price}
                              </span>
                            </>
                          )}
                        </div>
                        <CartButton item={el} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="tab-pane fade" id="poloshirt">
            {poultry_and_meat.map((e) =>
              e.map((el, i) => (
                <div className="col-sm-3" key={i}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                      {el.discount?
                        <span className="offerbadge">{el.discount}% off</span>:null}
                        <img
                          src={el.image}
                          onClick={() => productclick(el.web_id)}
                          alt=""
                        />
                        <p>{el.image_name}</p>
                        <div className="priceContainer">
                          {el.image_name ? (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {offer(el.price, 10)}
                              </span>
                              <span className="originalPrice">
                                <strike>
                                  <span>{el.currency_type}</span>
                                  {el.price}
                                </strike>
                              </span>
                             
                            </>
                          ) : (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {el.price}
                              </span>
                            </>
                          )}
                        </div>
                        <CartButton item={el} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="tab-pane fade" id="organic">
            {organicproduct.map((e) =>
              e.map((el, i) => (
                <div className="col-sm-3" key={i}>
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                      {el.discount?
                        <span className="offerbadge">{el.discount}% off</span>:null}
                        <img
                          src={el.image}
                          onClick={() => productclick(el.web_id)}
                          alt=""
                        />
                        <p>{el.image_name}</p>
                        <div className="priceContainer">
                          {el.discount ? (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {offer(el.price, el.discount)}
                              </span>
                              <span className="originalPrice">
                                <strike>
                                  <span>{el.currency_type}</span>
                                  {el.price}
                                </strike>
                              </span>
                              
                            </>
                          ) : (
                            <>
                              <span className="priceDetail">
                                <span>{el.currency_type}</span>
                                {el.price}
                              </span>
                            </>
                          )}
                        </div>
                        <CartButton item={el} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeTab;

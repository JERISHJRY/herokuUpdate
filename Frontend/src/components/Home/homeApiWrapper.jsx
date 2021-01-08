import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Features from "./features_item";
import HomeTab from "./homeTab";
import RecommendedItems from "./recommendedItem";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { Loader } from "components/commons/loader";
import { Server } from "services/commonServer";
import * as actionType from "constants/action-types";
const Apiwrapper = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector((state) => state.homeProduct);
console.log(process.env,'env');
  useEffect(() => {
    if (location.search == "") {
      dispatch(
        Server(
          "get",
          `/product/items`,
          null,
          actionType.PRODUCT_GET
        )
      );
    } else {
      let payload = queryString.parse(location.search);
      let key = Object.keys(payload)[0];
      if (key == "price") {
        let price = payload[key];
        dispatch(
          Server(
            "get",
            `${process.env.REACT_APP_BASE_URL}/product/priceFilter/:${price}`,
            null,
            actionType.PRODUCT_GET
          )
        );
      } else if (key == "image_name") {
        let searchValue = payload[key];
        dispatch(
          Server(
            "get",
            `${process.env.REACT_APP_BASE_URL}/product/search/:${searchValue}`,
            null,
            actionType.PRODUCT_GET
          )
        );
      } else {
        dispatch(
          Server(
            "post",
            `${process.env.REACT_APP_BASE_URL}/product/filterProduct`,
            payload,
            actionType.PRODUCT_GET
          )
        );
      }
    }
  }, [dispatch, location]);

  console.log(products, "homePage");
  const value = products?.data;
  const loaderCondition = useSelector(
    (state) => state.productData.productLoader
  );
  const searchError = products?.error;

  return (
    <>
      {value?.message ? (
        <>
          <Features data={value} ErrorSearch={searchError} />
          <HomeTab data={value} />
          <RecommendedItems data={value} />
        </>
      ) : (
        Loader
      )}
    </>
  );
};
export default Apiwrapper;

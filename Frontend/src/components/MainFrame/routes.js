import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "components/Home/home";
import Layout from "components/MainFrame/defaultLayout";
import Cart from "components/cart/Index";
import LOGIN_RESULT from "components/login/loginResult";
import Login from "components/login";
import BlogList from "../Blog/blog";
import BlogSingle from "components/Blog/blogSingle";
import ContactUs from "../contact/contactUs";
import Productdetail from "components/productDetails/index";
import Checkout from "components/checkout/index";
import WishList from "components/wishlist/wishlist";
import NotFound from "components/404";

const AuthorizedRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={`/home`}
        render={(props) => <Layout renderingComponent={<Home {...props} />} />}
      />
      <Route
        exact
        path={`/Cart`}
        render={(props) => <Layout renderingComponent={<Cart {...props} />} />}
      />
      <Route
        exact
        path={`/blog`}
        render={(props) => (
          <Layout renderingComponent={<BlogList {...props} />} />
        )}
      />
      <Route
        exact
        path={`/blog-single`}
        render={(props) => (
          <Layout renderingComponent={<BlogSingle {...props} />} />
        )}
      />
      <Route
        exact
        path={`/Contact-us`}
        render={(props) => (
          <Layout renderingComponent={<ContactUs {...props} />} />
        )}
      />
      <Route
        path={`/product`}
        render={(props) => (
          <Layout renderingComponent={<Productdetail {...props} />} />
        )}
      />
      <Route
        exact
        path={`/checkout`}
        render={(props) => (
          <Layout renderingComponent={<Checkout {...props} />} />
        )}
      />
      <Route
        exact
        path={`/wishlist`}
        render={(props) => (
          <Layout renderingComponent={<WishList {...props} />} />
        )}
      />
      <Route exact path={`/404`} render={(props) => <NotFound {...props} />} />
      <Redirect from={"/"} to={"/home"} />
      <Redirect from={"/Login_Status"} to={"/home"} />
      <Redirect from={"/login"} to={"/home"} />
      <Redirect to={"/404"} />
    </Switch>
  );
};

const UnAuthorizedRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={`/login`}
        render={(props) => <Layout renderingComponent={<Login {...props} />} />}
      />
      <Route
        exact
        path={`/Login_Status`}
        render={(props) => (
          <Layout renderingComponent={<LOGIN_RESULT {...props} />} />
        )}
      />
      <Redirect to={"/login"} />
    </Switch>
  );
};

const AllRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={`/login`}
        render={(props) => <Layout renderingComponent={<Login {...props} />} />}
      />
      <Route
        exact
        path={`/Login_Status`}
        render={(props) => (
          <Layout renderingComponent={<LOGIN_RESULT {...props} />} />
        )}
      />
      <Route
        exact
        path={`/home`}
        render={(props) => <Layout renderingComponent={<Home {...props} />} />}
      />
      <Route
        exact
        path={`/Cart`}
        render={(props) => <Layout renderingComponent={<Cart {...props} />} />}
      />
      <Route
        exact
        path={`/blog`}
        render={(props) => (
          <Layout renderingComponent={<BlogList {...props} />} />
        )}
      />
      <Route
        exact
        path={`/blog-single`}
        render={(props) => (
          <Layout renderingComponent={<BlogSingle {...props} />} />
        )}
      />
      <Route
        exact
        path={`/Contact-us`}
        render={(props) => (
          <Layout renderingComponent={<ContactUs {...props} />} />
        )}
      />
      <Route
        path={`/product`}
        render={(props) => (
          <Layout renderingComponent={<Productdetail {...props} />} />
        )}
      />
      <Route
        exact
        path={`/checkout`}
        render={(props) => (
          <Layout renderingComponent={<Checkout {...props} />} />
        )}
      />
      <Route
        exact
        path={`/wishlist`}
        render={(props) => (
          <Layout renderingComponent={<WishList {...props} />} />
        )}
      />      
      <Route exact path={`/404`} render={(props) => <NotFound {...props} />} />
      <Redirect from={"/"} to={"/home"} />
      <Redirect to={"/404"} />
    </Switch>
  );
};

export { AuthorizedRoutes, UnAuthorizedRoutes,AllRoutes };

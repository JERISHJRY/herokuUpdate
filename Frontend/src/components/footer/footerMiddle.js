import React from "react";

const Middlefooter = () => {
  return (
    <div className="footer-widget">
      <div className="container">
        <div className="row">
          <Sevice />
          <Quick />
          <Policy />
          <Aboutshop />
          <Update />
        </div>
      </div>
    </div>
  );
};

const Sevice = () => {
  return (
    <div className="col-sm-2">
      <div className="single-widget">
        <h2>Service</h2>
        <ul className="nav navbar-nav nav-stacked">
          <li>
            <a href="">Online Help</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Order Status</a>
          </li>
          <li>
            <a href="">Change Location</a>
          </li>
          <li>
            <a href="">FAQ’s</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Quick = () => {
  return (
    <div className="col-sm-2">
      <div className="single-widget">
        <h2>Quick Shop</h2>
        <ul className="nav navbar-nav nav-stacked">
          <li>
            <a href="">T-Shirt</a>
          </li>
          <li>
            <a href="">Mens</a>
          </li>
          <li>
            <a href="">Womens</a>
          </li>
          <li>
            <a href="">Gift Cards</a>
          </li>
          <li>
            <a href="">Shoes</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Policy = () => {
  return (
    <div className="col-sm-2">
      <div className="single-widget">
        <h2>Policies</h2>
        <ul className="nav navbar-nav nav-stacked">
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">Privecy Policy</a>
          </li>
          <li>
            <a href="">Refund Policy</a>
          </li>
          <li>
            <a href="">Billing System</a>
          </li>
          <li>
            <a href="">Ticket System</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Aboutshop = () => {
  return (
    <div className="col-sm-2">
      <div className="single-widget">
        <h2>About Shopper</h2>
        <ul className="nav navbar-nav nav-stacked">
          <li>
            <a href="">Company Information</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Store Location</a>
          </li>
          <li>
            <a href="">Affillate Program</a>
          </li>
          <li>
            <a href="">Copyright</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
const Update = () => {
  return (
    <div className="col-sm-4 ">
      <div className="single-widget">
        <h2>About Shopper</h2>
        <form action="#" className="searchform">
          <input type="text" placeholder="Your email address" />
          <button type="submit" className="btn btn-default">
            <i className="fa fa-arrow-circle-o-right"></i>
          </button>
          <p>
            Get the most recent updates from <br />
            our site and be updated your self...
          </p>
        </form>
      </div>
    </div>
  );
};

export default Middlefooter;

import React from "react";
import Button from "components/commons/button";

const Tabsection = (props) => {
  return (
    <>
      <div className="category-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li>
              <a href="#DETAILS" data-toggle="tab">
                DETAILS
              </a>
            </li>
            <li className="active">
              <a href="#reviews" data-toggle="tab">
                REVIEWS (5)
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <Details {...props} />
          <Review {...props} />
        </div>
      </div>
    </>
  );
};

const Review = (props) => {
  const { data } = props;
  const value = data[0].review;
  return (
    <>
      <div className="tab-pane fade active in" id="reviews">
        <div className="col-sm-12">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-user"></i>
                {value.name}
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-clock-o"></i>
                {value.time}
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-calendar-o"></i>
                {value.date}
              </a>
            </li>
          </ul>
          <p>{value.message}</p>
          <p>
            <b>Write Your Review</b>
          </p>

          <form action="#">
            <span>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
            </span>
            <textarea name=""></textarea>
            <b>Rating: </b>{" "}
            <img src="images/product-details/rating.png" alt="" />
            <Button className={"pull-right"} buttonLabel={"Submit"} />
          </form>
        </div>
      </div>
    </>
  );
};
const Details = (props) => {
  const { data } = props;
  const value = data[0].detail;
  return (
    <>
      <div className="tab-pane fade " id="DETAILS">
        <div className="col-sm-12">
          <h3>Product Details</h3>
          <p>{value.message}</p>
        </div>
      </div>
    </>
  );
};

export default Tabsection;

import React, { useCallback, useEffect, useState } from "react";
import CartButton from "components/commons/addToCartButton";
import newimage from "assets/pics/images/product-details/new.jpg";
import shareimage from "assets/pics/images/product-details/share.png";
import ratingimage from "assets/pics/images/product-details/rating.png";
import "react-medium-image-zoom/dist/styles.css";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import { GlassMagnifier } from "react-image-magnifiers";
import { offer } from "components/commons/offerCalculation";
import ReactImageMagnify from 'react-image-magnify';

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { data } = props;
  return (
    <>
      {data.map((element, i) => (
        <>
          <div className="product-details" key={element.web_id}>
            <div className="col-sm-5" id='zIndex'>
              <div className="view-product">
                <div class="img-container">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: element.image,
                        sizes: '(max-width: 1000px) 100vw, (max-width: 1200px) 30vw, 360px'
                      },
                      largeImage: {
                        src: element.image,
                        width: 1500,
                        height: 1800,
                      },
                      shouldUsePositiveSpaceLens: true,
                      enlargedImageContainerDimensions: {
                        width: '200%',
                        height: '120%',
                    },
                    }}
                  />
                </div>
              </div>
              <SimilarProducts {...props} />
            </div>
            <div className="col-sm-7">
              <div className="product-information" id="proDiv">
                <img src={newimage} className="newarrival" alt="" />
                <h2>{element.image_name}</h2>
                <p>Web ID: {element.web_id}</p>
                <img src={ratingimage} alt="" />
                <br></br>
                <div>
                  {element.discount ? (
                    <>
                      <span className="priceDetailProduct">
                        {element.currency_type}
                        {offer(element.price, element.discount)}
                      </span>
                      <span className="originalPriceProduct">
                        <strike>
                          {element.currency_type}
                          {element.price}
                        </strike>
                      </span>
                      <span className="offerProduct">
                        {element.discount}% off
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="priceDetailProduct">
                        <label>{element.currency_type}</label>
                        {element.price}
                      </span>
                    </>
                  )}
                </div>
                <span>
                  <label>Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <CartButton item={element} count={quantity} />
                </span>
                <p>
                  <b>Availability:</b> In Stock
                </p>
                <p>
                  <b>Condition:</b> New
                </p>
                <p>
                  <b>Brand:</b> E-SHOPPER
                </p>
                <a href="">
                  <img
                    src={shareimage}
                    className="share img-responsive"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

const SimilarProducts = (props) => {
  const photo = props.data[0].sub_images;
  const photo1 = photo.image1;
  const photo2 = photo.image2;
  const photo3 = photo.image3;
  const photo4 = photo.image4;
  return (
    <>
      <div id="similar-product" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active">
            <a href="">
              <GlassMagnifier
                zoom={"70%"}
                square={true}
                magnifierSize={"50%"}
                imageSrc={photo1}
              />
            </a>
          </div>
          <div className="item">
            <a href="">
              <GlassMagnifier
                zoom={"70%"}
                square={true}
                magnifierSize={"50%"}
                imageSrc={photo2}
              />
            </a>
          </div>
          <div className="item">
            <a href="">
              <GlassMagnifier
                zoom={"70%"}
                square={true}
                magnifierSize={"50%"}
                imageSrc={photo3}
              />
            </a>
          </div>
          <div className="item">
            <a href="">
              <GlassMagnifier
                zoom={"70%"}
                square={true}
                magnifierSize={"50%"}
                imageSrc={photo4}
              />
            </a>
          </div>
        </div>
        <a
          className="left item-control"
          href="#similar-product"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </a>
        <a
          className="right item-control"
          href="#similar-product"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </>
  );
};

export default Product;

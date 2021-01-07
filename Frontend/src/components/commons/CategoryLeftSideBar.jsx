import React from "react";
import { filter } from "./filter";

const CategoryLeftSideBar = () => {
  return (
    <div className="panel-group category-products" id="accordian">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a
              data-toggle="collapse"
              data-parent="#accordian"
              href="#sportswear"
            >
              <span className="pull-right">
                <i className="fa fa-plus"></i>
              </span>
              non vegetarian
            </a>
          </h4>
        </div>
        <div id="sportswear" className="panel-collapse collapse">
          <div className="panel-body">
            <ul>
              <li
                className="filterBrand"
                onClick={() => filter({ brand: "freshfish" })}
              >
                Fish{" "}
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ brand: "chickenzone" })}
              >
                chicken{" "}
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ brand: "meatworld" })}
              >
                Meat
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordian" href="#mens">
              <span className=" pull-right">
                <i className="fa fa-plus"></i>
              </span>
              Fruits
            </a>
          </h4>
        </div>
        <div id="mens" className="panel-collapse collapse">
          <div className="panel-body">
            <ul>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Kinnow Orange, 6 Pcs, 1 kg" })}
              >
                Orange{" "}
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Apple Shimla, 4 Pieces" })}
              >
                Apple
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Mango, Thothapuri, 1 kg" })}
              >
                Mango
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Grapes Sharad Seedless, 500 g" })}
              >
                Grapes
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Water Melon - Kiran, 1 Pc" })}
              >
               Water Melon
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Pineapple, 1 Pc" })}
              >
               Pineapple
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordian" href="#womens">
              <span className=" pull-right">
                <i className="fa fa-plus"></i>
              </span>
              Vegetables
            </a>
          </h4>
        </div>
        <div id="womens" className="panel-collapse collapse">
          <div className="panel-body">
            <ul>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Cauliflower(400 - 600 g)" })}
              >
                Cauliflower{" "}
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Beet Root, 250g " })}
              >
                Beet Root{" "}
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Potato, 1kg" })}
              >
                Potato{" "}
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Bhendi, 500g" })}
              >
                lady's finger{" "}
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Tomato Hybrid, 1kg" })}
              >
                Tomato{" "}
              </li>
              <li
                className="filterBrand"
                onClick={() => filter({ "image_name": "Fresh Carrot, Orange, 500g" })}
              >
                Carrot{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4
            className="panel-title filterBrand"
            onClick={() => filter({ "type": "stationery" })}
          >
            <a>Stationery </a>
          </h4>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4
            className="panel-title filterBrand"
            onClick={() =>
              filter({ "type": "organicproduct" })
            }
          >
            <a>Organic products</a>
          </h4>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4
            className="panel-title filterBrand"
            onClick={() => filter({ "type": "household" })}
          >
            <a>Households</a>
          </h4>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4
            className="panel-title filterBrand"
            onClick={() => filter({ "type": "Dairy" })}
          >
            <a>Dairy</a>
          </h4>
        </div>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4
            className="panel-title filterBrand"
            onClick={() => filter({"type": "Drinks","brand": "Coca-Cola" })}
          >
            <a>Drink</a>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default CategoryLeftSideBar;

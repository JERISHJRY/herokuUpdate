import React, { useState, useEffect } from "react";
import CategoryLeftSideBar from "./CategoryLeftSideBar";
import shipping from "../../assets/images/Home/shipping.jpg";
import { Slider } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { filter, filterPrice } from "./filter";
import { useHistory } from "react-router-dom";

const LeftSideBar = () => {
  const history = useHistory();
  const [val, setval] = useState(0);
  const updateVal = (e, item) => {
    setval(item);
  };

  useEffect(() => {
    if (val > 9) {
      const timeOutId = setTimeout(() => filterPrice(val), 200);
      return () => clearTimeout(timeOutId);
    }
  }, [val]);

  const muiTheme = createMuiTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          color: "#FE980F",
        },
        track: {
          color: "#FE980F",
          padding: "3px",
        },
        rail: {
          color: "rgba(0,0,0,.1)",
          padding: "4px",
        },
      },
    },
  });

  return (
    <>
      <div className="left-sidebar">
        <h2>Category</h2>
        <CategoryLeftSideBar />
        <div className="brands_products">
          <h2>Brands</h2>
          <div className="leftSidebarBrands panel-title">
            <ul className="">
              <li className="filterBrand mt-3">
                <a onClick={() => filter({ brand: "fresh" })}> Fresh</a>
              </li>
              <li className="filterBrand mt-3">
                <a onClick={() => filter({ brand: "Coca-Cola" })}> Coca-Cola</a>
              </li>
              <li className="filterBrand mt-3">
                <a onClick={() => filter({ brand: "AmazonBasics" })}> AmazonBasics</a>
              </li>
              <li className="filterBrand mt-3">
                <a onClick={() => filter({ brand: "meatworld" })}> meatworld</a>
              </li>
              <li className="filterBrand mt-3">
                <a onClick={() => filter({ brand: "chickenzone" })}> chickenzone</a>
              </li>
              <li className="filterBrand mt-3">
                <a onClick={() => filter({ brand: "freshfish" })}> freshfish</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="price-range">
          <h2>Price Range</h2>
          <div className="well text-center">
            <ThemeProvider theme={muiTheme}>
              <Slider
                value={val}
                max={600}
                onChange={updateVal}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
              />
            </ThemeProvider>
            <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
          </div>
        </div>
        <div className="shipping text-center">
          <img src={shipping} alt="shipping" />
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;

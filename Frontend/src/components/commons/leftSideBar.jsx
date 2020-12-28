import React, { useState,useEffect } from "react";
import CategoryLeftSideBar from "./CategoryLeftSideBar";
import shipping from "../../assets/images/Home/shipping.jpg";
import { Slider } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import {filter,filterPrice} from "./filter"
import {useHistory} from "react-router-dom"

const LeftSideBar = () => { 
  const history = useHistory();  
  const [val, setval] = useState(0);
  const updateVal = (e, item) => {
    setval(item);
  };
  
  useEffect(() => {
    if(val > 0){
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
          <div className="brands-name">
            <ul className="nav-pills nav-stacked">
              <li>
                <a
                  className="filterBrand"
                  onClick={()=> filter({ brand: "adidas" })}
                >
                  {" "}
                  Adidas
                </a>
              </li>
              <li>
                <a
                  className="filterBrand"
                  onClick={()=> filter({ brand: "nike" })}
                >
                  {" "}
                  Nike
                </a>
              </li>
              <li>
                <a
                  className="filterBrand"
                  onClick={()=> filter({ brand: "ManQ" })}
                >
                  {" "}
                  ManQ
                </a>
              </li>
              <li>
                <a
                  className="filterBrand"
                  onClick={()=> filter({ brand: "Mi" })}
                >
                  {" "}
                  Mi
                </a>
              </li>
              <li>
                <a
                  className="filterBrand"
                  onClick={()=> filter({ brand: "GESPO" })}
                >
                  {" "}
                  GESPO
                </a>
              </li>
			  <li>
                <a
                  className="filterBrand"
                  onClick={()=> filter({ brand: "puma" })}
                >
                  {" "}
                  Puma
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="price-range">
          <h2>Price Range</h2>
          <div className="well text-center">
            {/* <input type="range" className="span2" value="" data-slider-min="0" data-slider-max="600"
                                  data-slider-step="5" data-slider-value="[250,450]" id="sl2" />
								  <br />
								 <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b> */}
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

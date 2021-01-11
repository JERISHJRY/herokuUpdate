import React from "react";
import HomeCarousel from "./carousel";
import LeftSideBar from "components/commons/leftSideBar";
import Apiwrapper from "./homeApiWrapper";
import GlobalSearch from './globalSearch';
//import Netpayable from "./netpay";
import {Title} from 'components/commons/titleChange';

const Home = (props) => {
  return (
    <>
      <Title title={'Home'}/>
      <HomeCarousel />
      <div className="conatiner">
      
          <GlobalSearch/>
       
         {/*<Netpayable/> */} 
       
      </div>
     
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm-3">
              <LeftSideBar {...props} />
            </div>
            <div className="col-sm-9">
              <Apiwrapper {...props} />
            </div>
          </div>
        </div>
      </section>
     
      
    </>
  );
};
export default Home;

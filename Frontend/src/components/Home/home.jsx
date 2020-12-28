import React from "react";
import HomeCarousel from './carousel';
import LeftSideBar from 'components/commons/leftSideBar';
import Apiwrapper from './homeApiWrapper';

const Home=(props)=>{
    return(<>
       <HomeCarousel/>
       <section>
       <div className="container">
			    <div className="row mt-5">
			      <div className="col-sm-3">
              <LeftSideBar {...props}/>
            </div>
            <div className="col-sm-9">
              <Apiwrapper {...props} />
            </div>
          </div>
      </div>
      </section>
    </>);
  
}
export default Home;

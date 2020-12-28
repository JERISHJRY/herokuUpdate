import React from "react";
import {Carousel} from 'react-bootstrap';
import girl1 from '../../assets/images/Home/girl1.jpg';
import girl2 from '../../assets/images/Home/girl2.jpg';
import girl3 from '../../assets/images/Home/girl3.jpg';



const HomeCarousel=()=> {
  
 
    return(<div className ="container">
  <div className="row">
				<div className="col-sm-12">
  <Carousel>
    <Carousel.Item data-interval="2000">
        <div className="item active">
        <div className="col-sm-6">
			<h1><span>E</span>-SHOPPER</h1>
				<h2>Free E-Commerce Template</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				<button type="button" className="btn btn-default get">Get it now</button>
		</div>
        <div className="col-sm-6">
			<img src={girl1} className="girl img-responsive" alt="" />
			<img src="images/home/pricing.png"  className="pricing" alt="" />
			</div>
        </div>
    </Carousel.Item>
    <Carousel.Item interval={500}>
        <div className="item active">
        <div className="col-sm-6">
            <h1><span>E</span>-SHOPPER</h1>
				<h2>100% Responsive Design</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				<button type="button" className="btn btn-default get">Get it now</button>
								
		</div>
        <div className="col-sm-6">
			<img src={girl2} className="girl img-responsive" alt="" />
			<img src="images/home/pricing.png"  className="pricing" alt="" />
			</div>
        </div>
    </Carousel.Item>
    <Carousel.Item interval={500}>
        <div className="item active">
        <div className="col-sm-6">
            <h1><span>E</span>-SHOPPER</h1>
				<h2>100% Responsive Design</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				<button type="button" className="btn btn-default get">Get it now</button>
								
		</div>
        <div className="col-sm-6">
			<img src={girl3} className="girl img-responsive" alt="" />
			<img src="images/home/pricing.png"  className="pricing" alt="" />
			</div>
        </div>
    </Carousel.Item>
    
    </Carousel>
  <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
  <i className="fa fa-angle-left"></i>
	</a>
  <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
	<i className="fa fa-angle-right"></i>
	</a>
                       
</div></div>    
</div>);
  
}
export default HomeCarousel;
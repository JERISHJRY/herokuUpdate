import React ,{useState,useEffect} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {productclick} from 'components/commons/productClick';





import CartButton from '../commons/addToCartButton';





const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const RecommendedItems=(props)=>{
		let array=[];
		const content=props.data;
		if(content){
			content.message.forEach((e)=>{
				if(e.reccomended_item){
					array.push(e.reccomended_item);
				}
			})
		}
		

    return(
		
        <>
			 <div className="recommended_items">
			 <h2 className="title text-center">recommended items</h2>
			 
			 <Carousel responsive={responsive}>
			 {array.map((item)=>(
			 item.map((it)=>
			  <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
								 <div className="carousel-inner">
								 <div className="item active">	 
										  <div className="col"> 
											 <div className="product-image-wrapper">
												<div className="single-products">
													 <div className="productinfo text-center">
														 <img src={it.image} onClick={()=>productclick(it.web_id)} alt="" />
														 <h2>${it.price}</h2>
														 <p>{it.image_name}</p>
												
													<CartButton item={it}/>
																				
													</div>
													 
												  </div>
											 </div>
										   </div> 
									  </div>
								  </div>
									  
							 </div>
	 
			 )))	}       
			 </Carousel>
			 
			 </div>
		 
		
        </>
	);
	
}
export default RecommendedItems;

 
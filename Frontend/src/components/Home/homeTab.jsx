import React ,{useState} from "react";

import {productclick} from 'components/commons/productClick';

import CartButton from '../commons/addToCartButton';

const HomeTab=(props)=>{
	
	
	  let array=[];
	  let shirts=[];
	  let blazers=[];
	  let sunglass=[];
	  let kids=[];
	  let poloshirts=[];
	  const content=props.data;
		if(content){
			content.message.forEach((e)=>{
				if(e.shoping_item!==undefined||null){
					array.push(e.shoping_item);
				}
			})
		}
		array.forEach((item)=>{
			item.forEach((it)=>{
				if(it.T_SHIRT){
				shirts.push(it.T_SHIRT);
			
			}
				if(it.BLAZERS){
					blazers.push(it.BLAZERS);
			
				}
				if(it.SUNGLASS){
					sunglass.push(it.SUNGLASS);
				
				}
				if(it.KIDS){
					kids.push(it.KIDS);
			
				}
				if(it.POLO_SHIRTS){
					poloshirts.push(it.POLO_SHIRTS);
					
				}
				
			})
		})
		
		
		
    return(<>
	
				
			
       <div className="category-tab" key='1'>
			<div className="col-sm-12">
				<ul className="nav nav-tabs">
					<li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
					<li><a href="#blazers" data-toggle="tab">Blazers</a></li>
					<li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
					<li><a href="#kids" data-toggle="tab">Kids</a></li>
					<li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
				</ul>
			</div>
			<div className="tab-content">
				<div className="tab-pane fade active in" id="tshirt" >
					{shirts.map((e)=>(
						e.map((el,i)=>(
					<div className="col-sm-3" key={i}>
						<div className="product-image-wrapper" >
							<div className="single-products">
								<div className="productinfo text-center">
									<img src={el.image} onClick={()=>productclick(el.web_id)}alt="" />
									<h2><span>{el.currency_type}</span>{el.price}</h2>
									<p>{el.image_name}</p>
									<CartButton item={el} />
								</div>
								
							</div>
						</div>
					</div>
					))						
					))}
				</div>
				<div className="tab-pane fade" id="blazers" >
				{blazers.map((e)=>(
						e.map((el,i)=>(
					<div className="col-sm-3"  key={i}>
						<div className="product-image-wrapper">
							<div className="single-products">
								<div className="productinfo text-center">
									<img src={el.image} onClick={()=>productclick(el.web_id)}alt="" />
									<h2><span>{el.currency_type}</span>{el.price}</h2>
									<p>{el.image_name}</p>
									<CartButton item={el}/>				
							 	</div>
								
							</div>
						</div>
					</div>
					))						
					))}
				</div>
				<div className="tab-pane fade" id="sunglass" >
				{sunglass.map((e)=>(
						e.map((el,i)=>(
					<div className="col-sm-3" key={i}>
						<div className="product-image-wrapper">
							<div className="single-products">
								<div className="productinfo text-center">
									<img src={el.image} onClick={()=>productclick(el.web_id)}alt="" />
									<h2><span>{el.currency_type}</span>{el.price}</h2>
									<p>{el.image_name}</p>
									<CartButton item={el}/>	
								</div>
								
							</div>
						</div>
					</div>
					))						
					))}
				</div>
				<div className="tab-pane fade" id="kids" >
				{kids.map((e)=>(
						e.map((el,i)=>(
					<div className="col-sm-3"  key={i}>
						<div className="product-image-wrapper">
							<div className="single-products">
								<div className="productinfo text-center">
									<div className='proImageDiv'>
										<img src={el.image} onClick={()=>productclick(el.web_id)}alt="" />
									</div>
									<h2><span>{el.currency_type}</span>{el.price}</h2>
									<p>{el.image_name}</p>
									<CartButton item={el}/>	
								</div>
							</div>
						</div>
					</div>
					))						
					))}
				</div>
				<div className="tab-pane fade" id="poloshirt" >
				{poloshirts.map((e)=>(
						e.map((el,i)=>(
					<div className="col-sm-3" key={i}>
						<div className="product-image-wrapper">
							<div className="single-products">
								<div className="productinfo text-center">
									<img src={el.image} onClick={()=>productclick(el.web_id)}alt="" />
									<h2><span>{el.currency_type}</span>{el.price}</h2>
									<p>{el.image_name}</p>
									<CartButton item={el}/>	
								</div>
								
							</div>
						</div>
					</div>
					))						
					))}
				</div>
			</div>
        </div>  
    </>);
  
}
export default HomeTab;

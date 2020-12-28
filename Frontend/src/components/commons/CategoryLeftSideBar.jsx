import React from "react";
 import {filter} from "./filter"

const CategoryLeftSideBar=()=>{

    return(
        <div className="panel-group category-products" id="accordian">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                        <span className="pull-right"><i className="fa fa-plus"></i></span>
                        Sportswear
                    </a>
                </h4>
            </div>
            <div id="sportswear" className="panel-collapse collapse">
				<div className="panel-body">
					<ul>
						<li className="filterBrand" onClick={()=> filter({brand:"nike"})}>Nike </li>						
						<li className="filterBrand" onClick={()=> filter({brand:"adidas"})}>Adidas </li>   
						<li className="filterBrand" onClick={()=> filter({brand:"puma"})}>Puma</li>
					</ul>
				</div>
			</div>
        </div>
        <div className="panel panel-default">
			<div className="panel-heading">
				<h4 className="panel-title">
				<a data-toggle="collapse" data-parent="#accordian" href="#mens">
				<span className=" pull-right"><i className="fa fa-plus"></i></span>
					Mens
				</a>
				</h4>
				</div>
				<div id="mens" className="panel-collapse collapse">
				<div className="panel-body">
					<ul>						
						<li className="filterBrand" onClick={()=> filter({brand:"ManQ"})}>Formal wear </li>   
						<li className="filterBrand" onClick={()=> filter({type:"casual_Wear"})}>Casual wear</li>
						<li className="filterBrand" onClick={()=> filter({type:"sports_Wear"})}>Sports wear</li>
					</ul>
				</div>
				</div>
		</div>
        <div className="panel panel-default">
			<div className="panel-heading">
				<h4 className="panel-title">
					<a data-toggle="collapse" data-parent="#accordian" href="#womens">
						<span className=" pull-right"><i className="fa fa-plus"></i></span>
						Womens
					</a>
				</h4>
			</div>
			<div id="womens" className="panel-collapse collapse">
			<div className="panel-body">
			<ul>
				<li className="filterBrand" onClick={()=> filter({brand:"vinayak trendz"})}>Formal wear </li>   			
			</ul>
		    </div>
			</div>
		</div>
        <div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title filterBrand" onClick={()=> filter({type:"kids_Wear"})}><a >Kids </a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title filterBrand" onClick={()=> filter({brand:"vinayak trendz",type:"casual_Wear"})}><a >Fashion</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title filterBrand" onClick={()=> filter({type:"tv",brand:"auspicious home"})}><a>Households</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title filterBrand" onClick={()=> filter({brand:"ManQ",type:"casual_Wear"})}><a >Clothing</a></h4>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4 className="panel-title filterBrand" onClick={()=> filter({brand:"puma"})}><a >Shoes</a></h4>
								</div>
							</div>
     </div>
    );
}
export default CategoryLeftSideBar;
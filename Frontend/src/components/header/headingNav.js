import React,{useState,useEffect} from 'react';
import Layout from 'components/commons/layout';
import {searchProduct} from 'components/commons/search';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";


const BottomNav= ()=> {
    return (
        <div className='header-bottom'>
            <Layout Component={<Bottom />}/>  
        </div>
    )
}
const Bottom =() => {
    const [inputvalue,searchInput]=useState('');
    
    return(
        <>
            <div className="col-sm-9">
                <div className="mainmenu pull-left">
                    <ul className="nav navbar-nav collapse navbar-collapse">
                        <li><NavLink  to='/home' className="main-nav" activeClassName='main-nav-active'>Home</NavLink></li>
                        <li className="dropdown"><NavLink to='/shop' activeClassName='main-nav-active'>Shop<i className="fa fa-angle-down"></i></NavLink>
                            <ul role="menu" className="sub-menu">
                                <li><NavLink exact to="/checkout">Checkout</NavLink></li> 
                                <li><NavLink exact to="/cart">Cart</NavLink></li> 
                                <li><NavLink exact to='/login'>Login</NavLink></li> 
                            </ul>
                        </li> 
                        <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down"></i></a>
                            <ul role="menu" className="sub-menu">
                                <li><NavLink to="/blog">Blog List</NavLink></li>
                                <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                            </ul>
                        </li> 
                        <li><NavLink to="/404">404</NavLink></li>
                        <li><NavLink to="/contact-us">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="search_box pull-right">
                        
                        <input type="text" placeholder="Search & enter" value={inputvalue || ""}
                         onChange={event => { searchInput(event.target.value);}}
                         onKeyPress={event => {
                         if (event.key === 'Enter') {
                         searchProduct(inputvalue);
                         }
                         }}/>                                      
                </div>
            </div>
        </>
    )
}

export default BottomNav;
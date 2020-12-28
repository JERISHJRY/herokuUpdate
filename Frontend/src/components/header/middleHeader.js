import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import logo from 'assets/pics/images/home/logo.png';
import BlogContentHandler from "components/Blog/blogContentHandler"
import history from 'components/history';
import {
    BrowserRouter as Router,
    Link,
    NavLink
  } from "react-router-dom";

const Middleheader=(props)=> {   
    const token = localStorage.getItem("userToken");
    const removeToken =()=>{
        localStorage.removeItem("userToken");
       
    }
    const cartResult = useSelector((state) => state.cart);
        return (
            <div className="header-middle">
                <div className='container'>
                    <div className="row">
                        <Righthead />
                        <div className="col-sm-8">
                            <div className="shop-menu pull-right">
                                <ul className="nav">
                                    <li><NavLink exact to='/'><i className="fa fa-user"></i> Account</NavLink></li>
                                    <li><NavLink exact to='/wishlist'><i className="fa fa-star"></i> Wishlist</NavLink></li>
                                    <li><NavLink exact to='/checkout'><i className="fa fa-crosshairs"></i> Checkout</NavLink></li>
                                    <li><NavLink exact to='/cart'><i className="fa fa-shopping-cart"></i><label>{cartResult.addtocart.length}</label> Cart</NavLink></li>
                                    {
                                    token ?
                                     <li><Link activeclassName='main-nav-active' onClick={()=>removeToken()} to={"/login"} ><i className="fa fa-lock"></i> Logout</Link></li>
                                    :<li><NavLink activeclassName='main-nav-active' exact to='/login'><i className="fa fa-lock"></i> Login</NavLink></li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        )
}
const Righthead=()=> {
    const homeclick =()=>{
    history.push('/home');
    }
    return(
        <div className="col-sm-4">
        <div className="logo pull-left">
        <img onClick={()=>homeclick()}  src={logo}></img>
        </div> 
        <div className="btn-group pull-right">
        <Dropdownbtn name={'USA'} value={['Canada','UK']}/>
        <Dropdownbtn name={'DOLLAR'} value={['Canadian Dollar','Pound']}/>
        <BlogContentHandler/>
        </div>
        </div>
    )
}
const Dropdownbtn=(props)=> {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
             {props.name}
            </button>
            <ul className="dropdown-menu">
            <li><Link to={"/404"}>{props.value[0]}</Link></li>
            <li><a >{props.value[1]}</a></li>
            </ul>
        </div>
    )
}
const Shopmenu=(props)=> {
    return(
    <li><i className={props.icon}></i> {props.name}</li>
    )
}

export default Middleheader;
import React from "react";
import Img404 from "assets/pics/images/404/404.png"
import Logo from "assets/pics/images/home/logo.png"
import {Link} from "react-router-dom"

const NotFound = (props) => {
  
  return (
    <div className="container text-center">
		<div className="logo-404">
			<Link to={"/home"}><img src={Logo} alt="" /></Link>
		</div>
		<div className="content-404">
			<img src={Img404} className="img-responsive" alt="" />
			<h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
			<p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
			<h2><Link to={"/home"}>Bring me back Home</Link></h2>
		</div>
	</div>
  );
};

export default NotFound;

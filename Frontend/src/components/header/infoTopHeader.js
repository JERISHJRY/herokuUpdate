import React from 'react';
import Layout from '../commons/layout';
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

const Topheader =()=> {
        return (
            <div className="header_top">
                <Layout Component={<Top />} />
            </div>
        )
}
const Top =()=> {
    return(
        <>
            <div className="col-sm-6">
                <div className="contactinfo">
                    <ul className="nav nav-pills">
                        <li><NavLink to="/"><i className="fa fa-phone"></i> +2 95 01 88 821</NavLink></li>
                        <li><NavLink to="/"><i className="fa fa-envelope"></i> info@domain.com</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="social-icons pull-right">
                    <ul className="nav nav-pills">
                        <li><NavLink to="/"><i className="fa fa-facebook"></i></NavLink></li>
                        <li><NavLink to="/"><i className="fa fa-twitter"></i></NavLink></li>
                        <li><NavLink to="/"><i className="fa fa-linkedin"></i></NavLink></li>
                        <li><NavLink to="/"><i className="fa fa-dribbble"></i></NavLink></li>
                        <li><NavLink to="/"><i className="fa fa-google-plus"></i></NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Topheader;
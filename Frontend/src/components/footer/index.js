import React from 'react';
import Topfooter from 'components/footer/footerTop';
import Middlefooter from 'components/footer/footerMiddle';

const Footer=()=> {
    return (
        <footer id='footer'>
            <Topfooter />
            <Middlefooter />
            <div className="footer-bottom" >
                <div className="container">
                    <div className="row">
                        <p className="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
                        <p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
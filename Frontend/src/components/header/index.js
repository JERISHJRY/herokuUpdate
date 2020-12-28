import React from 'react';
import {useSelector} from 'react-redux'
import Topheader from 'components/header/infoTopHeader';
import Middleheader from 'components/header/middleHeader';
import BottomNav from './headingNav'; 


const Header=()=> {
    return (
        <header id="header">
            <Topheader />
            <Middleheader  />
            <BottomNav />
        </header>
    )
}

export default Header;

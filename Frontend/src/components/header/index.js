import React from "react";
import { useSelector } from "react-redux";
import Middleheader from "components/header/middleHeader";
import BottomNav from "./headingNav";

const Header = () => {
  return (
    <header id="header">
      <div className="mid_bottom_header_styling">
      <Middleheader />
      <BottomNav />
      </div>
    </header>
  );
};

export default Header;

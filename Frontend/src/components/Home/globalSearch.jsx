import React,{useEffect,useState} from "react";
import {searchProduct} from '../commons/search';

const GlobalSearch = (props) => {
    const [inputvalue,searchInput]=useState('');
    const handleChange = event => {
         searchInput(event.target.value);
        
      };
      useEffect(() => {
        if(inputvalue){
          searchProduct(inputvalue);
        }
      }, [inputvalue]);
  return (
    <>
    <div className="container mt-5">
    <div className="col-sm-3">
        <div className="search_box pull-right">
          <input type="text" placeholder="Search items" value={inputvalue ||""}
          onChange={(e)=>{handleChange(e)}}/>
        </div>
    </div>
    </div>
    </>
  );
};
export default GlobalSearch;
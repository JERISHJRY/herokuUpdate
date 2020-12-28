import React ,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom'
import queryString from 'query-string';
import Tabsection from './Tabsection';
import Product from './product';
import {Loader} from 'components/commons/loader';
import RecomendedProduct from './recomendedProduct';
import {Server} from 'services/commonServer';
import *as actionType from "constants/action-types";


const ProductDatas=(props)=> {
    const dispatch = useDispatch();	
    const location=useLocation();
	useEffect(() => { 
        const {id} = queryString.parse(location.search);  
        console.log(id,'query string')     
		dispatch(Server("get",`/product/:${id}`,null,actionType.PRODUCT));
    }, [dispatch,location]); 

        const productresult =useSelector(state=>state.productData.productList); 
        const data = productresult.message;
        const loaderCondition = useSelector(state=>state.productData.productLoader);
     
    return (
        <>
            {
                data?.filteredData? 
                <>
                    <Product data={data.filteredData} {...props}/>
                    <Tabsection data={data.filteredData} {...props}/>
                    <RecomendedProduct data={data.recommendFilter} {...props}/>
                </>: Loader 
            }
        </>
    )
}

export default ProductDatas;

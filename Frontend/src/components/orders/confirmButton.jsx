
import React,{useState,useEffect} from "react";
import Button from '../commons/button';
import { useSelector, useDispatch } from "react-redux";
import { ConfirmOrder} from '../../redux/actions/orderAction';

const ConfirmButton =(props)=> {
   const item=props.orderData;
   const dispatch = useDispatch();
   const orderItems = useSelector((state) => state.order);
  console.log(orderItems,'items');

const [empty, isEmpty] = useState(false);
useEffect(() => {
    if (item) {
        if(orderItems.confirmOrder.length>0){
      if (orderItems.confirmOrder.filter((e) => e.id === item.id).length) {
        isEmpty(true);
      } else {
        isEmpty(false);
      }
    }
   }
  }, []);
    return(<>
     {empty===false &&( 
       <Button
        className={"confirmButton"}
        buttonLabel={"Confirm"}
        handleClick={(e) => {
            dispatch(ConfirmOrder(orderItems, item));
            isEmpty(true);
           
          }}
      />
      )} 
      {empty===true &&(<h5>confirmed</h5>)} 
   </>);
}
export default ConfirmButton;
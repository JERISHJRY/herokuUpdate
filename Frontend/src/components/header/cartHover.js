import React, { useState } from "react";
import { useSelector } from "react-redux";
import emptyCart from "assets/pics/images/cart/emptycart.png";
import { offer } from "components/commons/offerCalculation";
import history from 'components/history';

const Cart_Hover = ( props ) => {
  const cartResult = useSelector((state) => state.cart.addtocart);
  const [cartItem, isEmpty] = useState(cartResult);
  let totalAmount = 0;
  
  if(cartResult.length){
    cartResult.forEach(element => {
        if(element.discount){
            let offerAmount = offer(element.price,element.discount);
            totalAmount = totalAmount + offerAmount;
        }
        else{
            totalAmount = totalAmount + element.price;
        }
    })
  }

  return (
    <div className="cartHoverContainer">
        <div className="hoverCartContainer">
            <div className="hoverCart left">cart</div>
            <div onClick={()=>props.show_item(false)} className="hoverCloseCart right"><i className="fa fa-times"></i></div>
        </div>
        <div className="hoverMainProduct">
        {cartItem.length === 0 ? (
            <div className="emptycart">
              <img className="fill" src={emptyCart} />{" "}
            </div>
            )
        :cartItem.map( element =>(
             <>
            <div className="cartHoverImg"> 
                <img className="fittingImage" src={element.image}/>
            </div>
            <div className="cartHoverProductDetails">
                <a>{element.image_name}</a>{
                    element.discount ? <p>Price :{element.currency_type} {" "} {offer(element.price,element.discount)}</p>
                    : <p>Price :{element.currency_type} {" "} {element.price}</p>
                }  
            </div>
            </>
            ))
        } </div>
        <div className="hoverFooter">
            <div className="left">
                { totalAmount != 0 && totalAmount < 500 ?
                    <>
                    <p >Delivery charge :$ 50</p>
                    <p >Total :${totalAmount + 50}</p>
                    </>
                    : <p >Total :${totalAmount}</p>
                }                
            </div>            
            <button className="right hoverCheckoutButton" onClick={()=>{history.push('/cart')}}>Go to cart</button>
        </div>
    </div>
  );
};
export default Cart_Hover;

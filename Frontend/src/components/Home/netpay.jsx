import React,{ useState} from "react";
import { useSelector} from "react-redux";
import history from 'components/history';

const Netpayable = (props) => {
    const [visible, notvisible] = useState(true)
    const [downVisible,downnotVisible]=useState(false);
    const cartResult = useSelector((state) => state.cart);
    const pricearray=[];
    const discountarray=[];
    let sum=0;
    let discountsum=0;
    
    let totalAmount=0;
   
     cartResult.addtocart.forEach((e)=>{
         pricearray.push(e.price);
         if(e.discount){
         let amount=e.price*(e.discount/100)
         discountarray.push(amount);
         }
         
     })
     
     //sum
     if (pricearray.length > 1) {
        for (let num of pricearray){

            sum = sum + num
        }
      } else {
        sum = pricearray[0];
      }
      //discount
      if (discountarray.length > 1) {
        discountsum = discountarray.reduce(function (a, b) {
          return a + b;
        }, 0);
      } 
      else if(discountarray[0]===undefined){
          discountsum=0;
      }
      else {
        discountsum = discountarray[0];
      }
       //delivery charge
       
    let delivCharg=sum-discountsum;
    let deliv=0;
    if(delivCharg==0){
        deliv=0;
    }
   
    else if(delivCharg<500){
      deliv=50;
    }
    
   //total
    if(sum!==undefined){
    totalAmount=((sum+deliv)-discountsum);
   
    }
  return (
    <>
   <div className="sticky">
       <div className="payable">
           <div className="col-md-12 text-center payableIcon">
            {visible && <button type="button" data-toggle="collapse" data-target="#collapseExample"
             aria-controls="collapseExample" className="arrowButton" 
             onClick={()=>{notvisible(!visible);downnotVisible(true);}}><i className="fa fa-angle-up"></i></button>}
            {downVisible &&  <button type="button" data-toggle="collapse" data-target="#collapseExample"
             aria-controls="collapseExample" className="arrowButton" 
             onClick={()=>{notvisible(!visible);downnotVisible(!downnotVisible);}}><i className="fa fa-angle-down"></i></button>}
            </div>
            <div class="collapse" id="collapseExample">
             <div className="row">
                 <div class="col-sm-8">
                     <h5>Net Payable</h5>
                     <h5>Discounts</h5>
                     <h5>Delivery Charges</h5>
                     <h5>Coupons</h5>
                     <h5 className="mt-5">No: of items</h5>
                 </div>
                 <div class="col-sm-3">
                    {sum===undefined?<h5>:$0</h5> : <h5>:${sum}</h5>}
                    
                     {discountsum===undefined?<h5>:$0</h5> : <h5>:${discountsum}</h5>}
                     {deliv===0?<h5>:$0</h5> : <h5>:${deliv}</h5>}
                     <input type="text" className="couponText"/>
                     <h5  className="mt-4">:{cartResult.addtocart.length}</h5>
                 </div>

             </div>
           </div>
           <div className="row">
               <div className="col-md-6">
              
                    <h5>Total Amount</h5>
               </div>
               <div className="col-md-5">
                   {totalAmount===0?<h5>:$0</h5> : <h5>:${totalAmount}</h5>}
                   
            </div>
           
           </div>
           <div className="row">
               <div className="col-sm-12">
                   <button className="paybutton" onClick={()=>{history.push('/checkout')}}>Checkout</button>
                </div>
            </div>
           <div>
            
           </div>
       </div>
    </div>
    </>
  );
};
export default Netpayable;
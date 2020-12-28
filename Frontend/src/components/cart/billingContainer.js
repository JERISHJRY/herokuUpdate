import React  from 'react';
import {useSelector} from 'react-redux';
import EstimateCostContainer from './estimateCostContainer';
import Button from 'components/commons/button';
import history from 'components/history';
const BillingContainer = (props) => {
    const grantTotalResult =useSelector(state=>state.CartSubTotalReducer.cartGrantTotal);
    const  handleCheckout= () =>{
        if(grantTotalResult)
        {history.push('/checkout')};
    }
    return (
        <>{grantTotalResult!==[] &&
            <section id='do_action'>
                <div className='container'>
                    <div className='heading'>
                    <h3>What would you like to do next?</h3>
                    <p>
                    Choose if you have a discount code or reward points
                    you want to use or would like to estimate your
                    delivery cost.
                    </p>
                    </div>
                    <div className='row'>
                        <EstimateCostContainer/>
                        <form className='col-sm-6'>
                            <div className='total_area'>
                                <ul><li>Cart Sub Total<span>${grantTotalResult} </span></li>
                                <li> Eco Tax <span>$0</span></li>   
                                <li> Shipping Cost <span>Free</span></li>   
                                <li> Total <span> ${grantTotalResult} </span> </li>
                                </ul>  
                                <Button  className='btn btn-default update' buttonLabel='Update'/>
                                <Button  className='btn btn-default check_out'handleClick={handleCheckout}buttonLabel='Check Out'/>
                            </div>
                        </form>
                    </div>
                </div>
            </section> }  </>);
};
export default BillingContainer;
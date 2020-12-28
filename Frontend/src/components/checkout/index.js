import React from 'react';
import { useSelector } from 'react-redux';
import emptyCart from 'assets/pics/images/cart/emptycart.png';
import Table from 'components/cart/tableProductContainer';
import ShopperInfo from 'components/checkout/shopperInfo';
import BillingAddressForm from 'components/checkout/billingAddressForm';

const CheckoutPage = (props) => {
    const cartResult = useSelector((state) => state.cart.addtocart);
    const grantTotalResult = useSelector(
        (state) => state.CartSubTotalReducer.cartGrantTotal
    );
    return (
        <>
            <section id='cart_items'>
                <div className='container'>
                    <div className='breadcrumbs'>
                        <ol className='breadcrumb'>
                            <li>
                            <a href='#'>Home</a>
                            </li>
                            <li className='active'>Check out</li>
                        </ol>
                    </div>
                    <div className='step-one'>
                    <h2 className='heading'>Step1</h2>
                    </div>
                    <div className='checkout-options'>
                        <h3>New User</h3>
                        <p>Checkout options</p>
                        <ul className='nav'>
                            <li> <label><input type='checkbox' /> Register Account  </label></li>
                            <li> <label> <input type='checkbox' /> Guest Checkout</label></li>
                            <li> <a href=''> <i className='fa fa-times'></i>Cancel </a> </li>
                        </ul>
                    </div>
                    <div className='register-req'>
                        <p>
                            Please use Register And Checkout to easily get
                            access to your order history, or use Checkout as
                            Guest
                        </p>
                    </div>
                    <div className='shopper-informations'>
                        <div className='row'>
                            <div className='col-sm-3'>
                                <div className='shopper-info'>
                                    <p>Shopper Information</p>
                                    <ShopperInfo />
                                </div>
                            </div>
                            <BillingAddressForm />
                        </div>
                    </div>
                </div>
            </section>
            {cartResult.length !==0 && (
                <><section id='cart_items'>
                        <div className='container'>
                            <div className='table-responsive cart_info'>
                                <Table />
                            </div>
                        </div>
                    </section>
                    <table className='table table-condensed total-result'>
                        <tbody>
                            <tr><td>Exo Tax</td><td>$0</td> </tr>
                            <tr className='shipping-cost'>
                            <td>Shipping Cost</td><td>Free</td></tr>
                            <tr><td>Total</td>
                            <td><span>${grantTotalResult}</span></td> </tr>  
                        </tbody>
                    </table>
                    <div className='payment-options'>
                        <span><label> <input type='checkbox'/> Direct Bank Transfer </label></span>
                        <span><label><input type='checkbox' /> Check Payment  </label></span>
                        <span> <label><input type='checkbox' /> Paypal  </label> </span>
                    </div>
                </>)}
            {cartResult.length===0 && (<div className='emptycart'> <img src={emptyCart} /></div>)}
        </>
    );
};
export default CheckoutPage;

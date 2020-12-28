import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import emptyCart from 'assets/pics/images/cart/emptycart.png';
import BillingContainer from './billingContainer';
import Table from './tableProductContainer';

const Cart = () => {
    const cartResult = useSelector((state) => state.cart.addtocart);
    const [cartItem, isEmpty] = useState(cartResult);
    return (
        <>
            <section id='cart_items'>
                <div className='container'>
                    <div className='breadcrumbs'>
                        <ol className='breadcrumb'>
                        <li>
                        <a href='#'>Home</a>
                        </li>
                        <li className='active'>Shopping Cart</li>
                        </ol>
                    </div>
                    {cartItem.length===0 && (<div className='emptycart'><img src={emptyCart} /> </div>)}
                    {cartItem.length!==0&& (<div className='table-responsive cart_info'>
                    <Table /></div>)}
                </div>
            </section>
            {cartResult.length!==0 && <BillingContainer />}
        </>);
};
export default Cart;

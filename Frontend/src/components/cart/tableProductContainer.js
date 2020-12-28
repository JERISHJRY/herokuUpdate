import React, { useEffect, useState } from 'react';
import emptyCart from 'assets/pics/images/cart/emptycart.png';
import { useSelector, useDispatch } from 'react-redux';
import { RemovefromCart } from 'redux/actions/CartAction';
import {toast} from 'react-toastify';

const TableProductContainer = (props) => {
    const dispatch = useDispatch();
    const cartResult = useSelector((state) => state.cart);
    let [cartProductItems, setcartProductItems] = useState(cartResult.addtocart);
    let [cartSubTotal, setcartSubTotal] = useState(0);
    const [cartEmpty, setcartEmpty] = useState(true);

    const addCount = (event, Id) => {
        const tempCart = [...cartProductItems];
        const dataSet = cartProductItems.filter((item) => item.web_id === Id);
        const index = tempCart.indexOf(dataSet[0]);
        const product = tempCart[index];
        product.count = product.count + 1;
        setcartProductItems([...tempCart]);
        subTotal();
    };
    const deleteCount = (event, Id) => {
        const tempCart = [...cartProductItems];
        const dataSet = cartProductItems.filter((item) => item.web_id === Id);
        const index = tempCart.indexOf(dataSet[0]);
        const product = tempCart[index];
        subTotal();
        if (product.count - 1 !== 0) {
            product.count = product.count - 1;
            setcartProductItems([...tempCart]);
        }
    };

    const subTotal = () => {
        let subtotal = 0;
        subtotal = cartProductItems.map((item) => item.count * item.price);
        setcartSubTotal(subtotal);
        dispatch({ type: 'SUB_TOTAL', payload: subtotal });
        grantTotal(subtotal);
    };
    useEffect(() => {subTotal();}, [cartProductItems]);

    const grantTotal = (total) => {
        let sum=0;
        if (total.length > 1) {
        sum =total.reduce(function (a, b) {return a + b;}, 0);
        } else {
        sum = total;
        }
        if (sum.length === 0) {
        setcartEmpty(true);
        } else {
        setcartEmpty(false);
        }
        dispatch({ type: 'GRANT_TOTAL', payload: sum });
    };

    const deleteHandler = (item, id) => {
        cartProductItems.filter((item) => {
            return item.web_id === id
                ? (item.incart = false)
                : (item.incart = true);
        });
        const cartdeletedProduct = cartProductItems.filter(
            (item) => item.web_id !== id
        );
        setcartProductItems([...cartdeletedProduct]);
        dispatch(RemovefromCart(cartResult, item));
        toast( "Removed  from cart",{ position: "top-right",autoClose: 1000,hideProgressBar: true})
    };

    return (
        <>
            {cartEmpty === false && (
                <table className='table table-condensed'>
                    <thead>
                        <tr className='cart_menu'>
                            <td className='image'>Item</td>
                            <td className='description'></td>
                            <td className='price'>Price</td>
                            <td className='quantity'>Quantity</td>
                            <td className='total'>Total</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProductItems.map((cartitem, index) => (
                            <>
                            <tr key={index}>
                            <td className='cart_product'>
                            <img src={cartitem.image}  alt='image not found' /></td>
                            <td className='cart_description'>
                            <h4>{cartitem.image_name}</h4>
                            <p>{cartitem.web_id}</p>
                            </td>          
                            <td className='cart_price'>
                            <p>{cartitem.price}</p>
                            </td>          
                            <td className='cart_quantity'>
                            <div className='cart_quantity_button'>
                            <button className='cart_quantity_up' onClick={(event) =>
                            addCount(event,cartitem.web_id ) }>+</button>
                            <input  
                            className='cart_quantity_input' 
                            type='text'             
                            name='quantity'
                            value={cartitem.count}
                            autoComplete='off'
                            size='2'/>
                             <button className='cart_quantity_down'onClick={(event) =>
                             deleteCount(event,cartitem.web_id) }> -</button>   
                            </div>
                            </td>
                            <td className='cart_total'>
                            <p className='cart_total_price'>
                            ${cartSubTotal[index] ||cartitem.price}
                            </p>
                            </td>
                            <td className='cart_delete'>
                            <button className='cart_quantity_delete'  href='' onClick={() =>
                            deleteHandler( cartitem,cartitem.web_id  )}>      
                            <i className='fa fa-times'></i>
                            </button>
                                </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            )}
            {cartEmpty === true && (<div className='emptycart'><img src={emptyCart} /></div>)}
        </>);
};
export default TableProductContainer;

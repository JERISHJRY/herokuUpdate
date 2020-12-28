import React, { useState, useEffect } from 'react';
import {
    addToWishlist,
    RemoveFromWishlist,
} from 'redux/actions/wishlistAction';
import { useSelector, useDispatch } from 'react-redux';
const AddWishlistButton = (props) => {
    const product = props.product;
    const dispatch = useDispatch();
    const wishListItems = useSelector((state) => state.WishlistReducer);
    const wishList = useSelector(
        (state) => state.WishlistReducer.addtowishlist
    );
    const web_id = product.web_id;
    const [fav, setfav] = useState(true);

    useEffect(() => {
        if (wishList.filter((e) => e.web_id === web_id).length) {
            setfav(true);
        } else {
            setfav(false);
        }
    }, []);
    return (
        <>
            {fav === false && (
                <button
                    className='add_wishlist'
                    onClick={(e) => {
                        dispatch(
                            addToWishlist(wishListItems, product),
                            setfav(true)
                        );
                    }}>
                    <i className='fa fa-heart '></i>
                </button>
            )}
            {fav === true && (
                <button
                    className='add_wishlist'
                    onClick={(e) => {
                        dispatch(
                            RemoveFromWishlist(wishListItems, product),
                            setfav(false)
                        );
                    }}>
                    <i className='fa fa-heart redheart '></i>
                </button>
            )}
        </>
    );
};
export default AddWishlistButton;

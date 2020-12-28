import * as ActionType from 'constants/action-types';

export const addToWishlist = (items, product) => (dispatch) => {
    let wishlistItems = [];
    if (items.addtowishlist !== undefined || []) {
    wishlistItems = items.addtowishlist; }
    let isproductinwishlist = false;
    if (wishlistItems) {
        wishlistItems.forEach((wp) => {
        if (wp.web_id === product.web_id) {
            isproductinwishlist = true;
        }
        });
        if (!isproductinwishlist) {
            wishlistItems.push({ ...product });
        }
    }
    dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: { wishlistItems } });
};

export const RemoveFromWishlist = (items, product) => (dispatch) => {
    if (items.addtowishlist.length) {
        const wishlistItems = items.addtowishlist.filter(
        (itm) => itm.web_id !== product.web_id);
        dispatch({type: ActionType.ADD_TO_WISHLIST, payload: { wishlistItems }});
    }
};

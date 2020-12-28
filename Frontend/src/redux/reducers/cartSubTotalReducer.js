const initialState={
    cartSubTotal:0,
    cartGrantTotal:0,
}

 const CartSubTotalReducer=(state =initialState,action)=>{
    switch(action.type){
        case 'SUB_TOTAL':
        return {cartSubTotal:action.payload}
        
        case 'GRANT_TOTAL':
            return {cartGrantTotal:action.payload}
        
        default:
            return state
    }
}
export default CartSubTotalReducer;
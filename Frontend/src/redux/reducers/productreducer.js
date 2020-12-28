import *as actionType from "constants/action-types"
const initialState={
  productList:[],
  productLoader:false,
  productFetchError:{},
}

export const Productreducer=(state=initialState,action)=>{
    
    switch(action.type){
        case "PRODUCT_GET_STARTED":
          return {
            ...state,
            productLoader:true           
      }
        case actionType.PRODUCT:
            return {
              ...state,
              productList:action.data,
              productLoader:false            
        }
        
        default:
          return {...state};
        
     }
    
    
}

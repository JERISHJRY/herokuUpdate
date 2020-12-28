import *as actionType from "constants/action-types"

const initialstate={
  data:[]
}

export const BlogReducer=(state=initialstate,action)=>{
    switch(action.type){
        
        case actionType.BLOG:
          return {
            ...state,
            data:action.data   
          }
        default:
          return {...state};
        
     }
    
}

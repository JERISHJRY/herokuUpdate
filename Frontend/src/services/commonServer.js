import axios from 'axios';
import * as action_Type from "constants/action-types"

export const Server = (methodType,endpoint, payload,actionType ) => {
    return async dispatch =>{
        dispatch({
            type : "PRODUCT_GET_STARTED",
        }) 
        await axios({
            method: methodType,
            url: endpoint,
            data: {
              ...payload
            }
          })
        .then(res=> {         
            let data =res.data;                                        
            dispatch({
                type : actionType,
                data:data
            })
        }).catch(err=> {
            dispatch({
            type : action_Type.PRODUCT_FETCH_FAILED,
            data:err,            
            })            
        })
             
    }
}
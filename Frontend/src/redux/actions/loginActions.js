
import *as actionType from "constants/action-types"

export const makeResponseEmpty =()=>{
    return{
        type : actionType.REMOVE_LOGIN_RESPONSE,
        data : {}
    };
}

export const loginSucess =(data)=>{
    return{
        type : actionType.LOGIN_RESPONSE,
        data : data
    }
}

export const loginError =(data)=>{
    return{
        type : actionType.LOGIN_RESPONSE_ERROR,
        data : data
    }
}

export const loginServerError =() =>{
    return{
        type: actionType.SERVER_ERROR_IN_LOGIN
    }
}

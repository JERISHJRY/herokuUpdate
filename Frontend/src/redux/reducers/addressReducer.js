import * as actionType from "constants/action-types";
let initialState ={};

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionType.UPDATE_LEAFLET_ADDRESS:

        return state = action.payload;
  
      default:
        return { ...state };
    }
  };
  
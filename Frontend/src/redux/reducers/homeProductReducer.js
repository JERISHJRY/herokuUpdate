import * as actionType from "constants/action-types";
import { initial } from "lodash";
const initialstate = {
  data: [],
  error: false,
};

export const HomeProductReducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionType.PRODUCT_GET:
      return {
        ...state,
        data: action.data,
        error: false,
      };

    case actionType.PRODUCT_FETCH_FAILED:
      return {
        ...state,
        error: !initialstate.error,
      };

    default:
      return { ...state };
  }
};

import * as actionType from "constants/action-types";
let initialState = {
  loader: "",
  data: {},
  takeToLogin: true,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_RESPONSE_ERROR:
      return {
        ...state,
        data: action.data,
        loader: false,
        takeToLogin: false,
      };
    case actionType.REMOVE_LOGIN_RESPONSE:
      return { ...state, data: action.data, loader: true, takeToLogin: false };

    case actionType.LOGIN_RESPONSE:
      return {
        ...state,
        data: action.data,
        loader: false,
        takeToLogin: false,
      };

    case actionType.SERVER_ERROR_IN_LOGIN:
      return {
        ...state,
        data: {
          status: false,
          message: "internal server error",
        },
        loader: false,
        takeToLogin: false,
      };

    default:
      return { ...state };
  }
};

import * as actionType from "constants/action-types"

export const updateAddress = (data) => {
    return {
      type: actionType.UPDATE_LEAFLET_ADDRESS,
      payload: data,
    };
};
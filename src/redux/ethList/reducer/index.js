import * as types from '../action/types';

export const initialState = {
  ethList: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ETH_LIST_SUCCESS:
      return {
        ...state,
        ethList: action.payload,
        isLoading: false,
      };

    case types.GET_ETH_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_ETH_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        ethList: [],
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

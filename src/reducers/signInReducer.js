import * as types from '../actions/types';

const initialState = {
  error: '',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_USER:
      return {
        ...state,
        isLoading: true
      };
    case types.SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.SIGN_IN_USER_ERROR:
      return {
        ...initialState,
        error: action.payload
      };
    default:
      return state;
  }
};

import * as types from '../actions/types';

const initialState = {
  currentUser: null,
  isSignedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isSignedIn: true
      };
    case types.SIGN_OUT_USER_SUCCESS:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

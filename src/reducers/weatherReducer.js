import * as types from '../actions/types';

const initialState = {
  data: undefined,
  isLoading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_DATA:
      return {
        ...state,
        isLoading: true
      };
    case types.FETCH_WEATHER_DATA_SUCCESS:
      return {
        isLoading: false,
        data: action.payload
      };
    case types.FETCH_WEATHER_DATA_ERROR:
      return {
        isLoading: false,
        data: undefined,
        error: action.payload
      };
    case types.CLEAR_WEATHER_DATA:
      return initialState;
    default:
      return state;
  }
};

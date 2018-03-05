import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signUpReducer from './signUpReducer';
import signInReducer from './signInReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  weather: weatherReducer
});

import { auth } from '../../firebase';
import * as types from '../types';

// Sign Up
export const signUp = (email, password) => async dispatch => {
  try {
    dispatch({ type: types.SIGN_UP_USER });

    await auth.createUserWithEmailAndPassword(email, password);
    const currentUser = auth.currentUser;

    if (currentUser) {
      await dispatch({
        type: types.SIGN_IN_USER_SUCCESS,
        payload: currentUser
      });
      dispatch({ type: types.SIGN_UP_USER_SUCCESS });
    }
  } catch (err) {
    dispatch({ type: types.SIGN_UP_USER_ERROR, payload: err.message });
  }
};

// Sign In
export const signIn = (email, password) => async dispatch => {
  try {
    dispatch({ type: types.SIGN_IN_USER });

    await auth.signInWithEmailAndPassword(email, password);
    const currentUser = auth.currentUser;

    if (currentUser) {
      await dispatch({
        type: types.SIGN_IN_USER_SUCCESS,
        payload: currentUser
      });
    }
  } catch (err) {
    dispatch({ type: types.SIGN_IN_USER_ERROR, payload: err.message });
  }
};

// Sign out
export const signOut = () => async dispatch => {
  await auth.signOut();
  dispatch({
    type: types.SIGN_OUT_USER_SUCCESS
  });
};

import { SUCCESS, FAILURE, REQUESTING } from "../../lib/constant.js";
import axios from "axios";
export const LOGIN_REQUESTING = "LOGIN_REQUESTING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SIGNUP_REQUESTING = "SIGNUP_REQUESTING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export function loginRequesting() {
  return {
    type: LOGIN_REQUESTING,
    status: REQUESTING
  };
}

export function loginSuccess(userDetails) {
  document.cookie = "userId=" + userDetails.data.id;
  return {
    type: LOGIN_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    status: FAILURE,
    error
  };
}

export function userLogin(userDetails) {
  return async dispatch => {
    try {
      dispatch(loginRequesting());
      const result = await axios.post(
        " http://54.69.30.76:3000/login",
        userDetails
      );
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      dispatch(loginSuccess(resultJson));
    } catch (e) {
      dispatch(loginFailure(e.message));
    }
  };
}

export function signUpRequesting() {
  return {
    type: SIGNUP_REQUESTING,
    status: REQUESTING
  };
}

export function signUpSuccess(userDetails) {
  document.cookie = "userId=" + userDetails.data.id;
  return {
    type: SIGNUP_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}

export function signUpFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    status: FAILURE,
    error
  };
}
export function userSignUp(userDetails) {
  return async dispatch => {
    try {
      dispatch(signUpRequesting());
      const result = await axios.post(
        "http://54.69.30.76:3000/customersignup",
        userDetails
      );
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      dispatch(signUpSuccess(resultJson));
    } catch (e) {
      dispatch(signUpFailure(e.message));
    }
  };
}

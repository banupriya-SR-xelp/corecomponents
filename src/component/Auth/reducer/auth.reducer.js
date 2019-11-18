import * as authAction from "../action/auth.action.js";
const AuthReducer = (
  state = {
    loading: false,
    userDetails: null,
    status: null,
    error: null
  },
  action
) => {
  switch (action.type) {
    case authAction.LOGIN_REQUESTING:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });
    case authAction.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userDetails: action.userDetails
      });
    case authAction.LOGIN_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case authAction.SIGNUP_REQUESTING:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });
    case authAction.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userDetails: action.userDetails
      });
    case authAction.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    default:
      return state;
  }
};
export default AuthReducer;

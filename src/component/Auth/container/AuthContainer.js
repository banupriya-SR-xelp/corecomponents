import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userLogin, userSignUp } from "../action/auth.action.js";
import Auth from "../Auth.js";

const mapDispatchToProps = dispatch => {
  return {
    userLogin: userDetails => {
      dispatch(userLogin(userDetails));
    },
    userSignUp: userDetails => {
      dispatch(userSignUp(userDetails));
    }
  };
};

const mapStateToProps = state => {
  return {
    userDetails: state
  };
};

const AuthContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Auth)
);
export default AuthContainer;

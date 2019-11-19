import { connect } from "react-redux";
import ToastRoot from "../components/ToastRoot.js";
import { withRouter } from "react-router-dom";
import * as toastActions from "../action/toast.actions.js";
const mapStateToProps = state => {
  return {
    toastDisplayed: state.toast.toastDisplayed,
    message: state.toast.toastMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    hideToast: () => {
      dispatch(toastActions.hideToast());
    }
  };
};
const ToastContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ToastRoot)
);
export default ToastContainer;

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BorderdButton from "../component/BorderdButton.js";
import {
  showModal,
  CENTER_MODULE_DEMO
} from "../../general/action/modal.actions.js";
import { displayToast } from "../../general/action/toast.actions.js";
console.log("in container");
const mapDispatchToProps = dispatch => {
  return {
    showCenterModule: () => {
      dispatch(showModal(CENTER_MODULE_DEMO));
    },
    displayToast: message => {
      dispatch(displayToast(message));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const ButtonContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BorderdButton)
);
export default ButtonContainer;

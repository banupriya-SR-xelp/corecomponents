import { connect } from "react-redux";
import ModalRoot from "../components/ModalRoot.js";
import { withRouter } from "react-router-dom";
import * as modalActions from "../action/modal.actions.js";
import { displayToast } from "../action/toast.actions.js";
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.modal,
    modalStatus: state.modal.modalDisplayed,
    modalType: state.modal.modalType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    displayToast: toastMessage => {
      dispatch(displayToast(toastMessage));
    },
    showModal: (type, ownProps = null) => {
      dispatch(modalActions.showModal(type, ownProps));
    },
    hideModal: () => {
      dispatch(modalActions.hideModal());
    }
  };
};
const ModalContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModalRoot)
);

export default ModalContainer;

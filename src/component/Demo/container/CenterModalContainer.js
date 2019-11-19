import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CenterModal from "../component/CenterModal";
import {
  showModal,
  CENTER_MODULE_DEMO
} from "../../general/action/modal.actions.js";
const mapDispatchToProps = dispatch => {
  return {
    showCliqCenterModule: data => {
      dispatch(showModal(CENTER_MODULE_DEMO, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const CenterModalContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CenterModal)
);

export default CenterModalContainer;

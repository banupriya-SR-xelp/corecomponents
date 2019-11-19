import React from "react";
import ReactDOM from "react-dom";
import ModalPanel from "./ModalPanel";
import Loadable from "react-loadable";
import CenterModalContainer from "../../Demo/container/CenterModalContainer";
const modalRoot = document.getElementById("modal-root");

const Loader = () => {
  return <div>loading</div>;
};

export default class ModalRoot extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
    this.state = {
      loggedIn: false,
      customerDetails: null
    };
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillMount() {
    if (this.props.history) {
      this.unlisten = this.props.history.listen((location, action) => {
        this.handleClose();
      });
    }
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    this.unlisten();
  }

  handleClose() {
    if (this.props.hideModal) {
      this.props.hideModal();
    }
  }

  render() {
    const MODAL_COMPONENTS = {
      centerModalDemo: (
        <CenterModalContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      )
    };

    let SelectedModal = MODAL_COMPONENTS[this.props.modalType];
    // let SelectedModal = MODAL_COMPONENTS["centerModalDemo"];
    const Modal = this.props.modalStatus ? (
      <ModalPanel
        closeModal={() => {
          this.handleClose();
        }}
      >
        {SelectedModal}
      </ModalPanel>
    ) : null;

    return ReactDOM.createPortal(Modal, this.el);
  }
}

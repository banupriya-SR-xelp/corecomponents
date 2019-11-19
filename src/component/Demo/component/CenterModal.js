import React, { Component } from "react";
import BottomSlideModal from "../../general/components/BottomSlideModal.js";
import styles from "./BorderdButton.module.css";
export default class CenterModal extends Component {
  render() {
    return (
      <BottomSlideModal width="400px">
        <div className={styles.centermodal}>center modal</div>
      </BottomSlideModal>
    );
  }
}

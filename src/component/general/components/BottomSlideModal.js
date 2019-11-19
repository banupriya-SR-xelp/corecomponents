import React from "react";
import styles from "./BottomSlideModal.module.css";
export default class BottomSlideModal extends React.Component {
  render() {
    return (
      <div
        style={{ width: this.props.width }}
        className={
          this.props.crossIconHide == true ? styles.crossIconHide : styles.base
        }
      >
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}

import React from "react";
import styles from "./Toast.module.css";
import PropTypes from "prop-types";
export default class Toast extends React.Component {
  render() {
    console.log("in toaster");
    return (
      <div className={styles.base}>
        <div className={styles.textHolder}>{this.props.data}</div>
      </div>
    );
  }
}
Toast.propTypes = {
  data: PropTypes.string
};

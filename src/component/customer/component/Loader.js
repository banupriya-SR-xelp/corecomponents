import React, { Component } from "react";
import styles from "./Loader.css";
export default class Loader extends Component {
  render() {
    return (
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
    );
  }
}

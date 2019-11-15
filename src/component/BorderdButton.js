import React, { Component } from "react";
import styles from "./BorderdButton.module.css";
import PropTypes from "prop-types";
export default class BorderdButton extends Component {
  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
  render() {
    return (
      <div className={styles.buttonBase}>
        <div
          className={styles.buttonHolder}
          style={{
            padding: this.props.padding,
            height: ` ${this.props.height}px`,
            width: `${this.props.width}px`,
            borderRadius: this.props.borderRadius,
            backgroundColor: this.props.backgroundColor,
            border: `1px solid ${
              this.props.borderColor
                ? this.props.borderColor
                : this.props.fontcolor
            }`
          }}
          onClick={() => this.handleClick()}
        >
          <div
            className={styles.buttonText}
            style={{
              color: this.props.fontcolor,
              fontSize: this.props.fontSize,
              fontFamily: this.props.fontFamily
            }}
          >
            {this.props.name}
          </div>
        </div>
      </div>
    );
  }
}
BorderdButton.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  name: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  fontcolor: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string
};

BorderdButton.defaultProps = {
  height: 40,
  backgroundColor: "#1cc7d0",
  disabled: false,
  loading: false,
  iconHeight: 40,
  iconWidth: 40,
  fontcolor: "#212121",
  fontSize: 14,
  fontFamily: "ubuntu"
};

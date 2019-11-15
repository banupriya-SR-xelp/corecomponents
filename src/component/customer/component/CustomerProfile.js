import React, { Component } from "react";
import Select from "react-select";
import styles from "./CustomerProfile.css";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
export default class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productAttribute: null,
      productCategory: null,
      productCategoryId: null,
      product: null,
      tenure: null
    };
  }
  render() {
    console.log(this.state, this.props);
    return (
      <div className={styles.base}>
        <div className={styles.heading}>CustomerProfile</div>
        <div className={styles.container}>
          <div className={styles.dropdown}>
            <Select
              options={options}
              placeholder={"category"}
              onChange={val =>
                this.setState({
                  productCategory: val
                })
              }
              value={this.state.productCategory}
            />
          </div>
          <div className={styles.dropdown}>
            <Select
              options={options}
              placeholder={"product"}
              onChange={val =>
                this.setState({
                  product: val
                })
              }
              value={this.state.product}
            />
          </div>
          <div className={styles.dropdown}>
            <Select
              options={options}
              placeholder={"attribute"}
              onChange={val =>
                this.setState({
                  productAttribute: val
                })
              }
              value={this.state.productAttribute}
            />
          </div>
          <div className={styles.dropdown}>
            <Select
              options={options}
              placeholder={"tenure"}
              onChange={val =>
                this.setState({
                  tenure: val
                })
              }
              value={this.state.tenure}
            />
          </div>
        </div>
      </div>
    );
  }
}

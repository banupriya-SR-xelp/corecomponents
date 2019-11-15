import React, { Component } from "react";

import Table from "./TableForm";
import styles from "./CustomerDetails.css";
import Loader from "./Loader";
export default class CustomerDetails extends Component {
  componentDidMount() {
    this.props.getAllOrder();
  }
  render() {
    return (
      <div className={styles.base}>
          <div className={styles.heading}>Order Details</div>
        {this.props && this.props.orderDetails? (
          <div className={styles.tableSection}>
            <Table
              headers={[
                { value: "name" },
                { value: "email" },
                { value: "contactNumber" },
                { value: "discountAmount" },
                { value: "dmiApprovalDate" },
                { value: "dmiStatus" },
                { value: "ecsStatus" },
                { value: "amount" },
                { value: "product name" },
                { value: "product attribute" },
                { value: "tenureDetails" }
              ]}
              formElements={this.props.orderDetails}
            />
          </div>
        ):<Loader/>}
      </div>
    );
  }
}

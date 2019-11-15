import React, { Component } from "react";
import  styles from "./TableForm.css";

class Table extends Component {
  state = {};
  render() {
    this.props.formElements.map((item, index) => {
      console.log(item);
    });

    return (
      <table className={styles.table}>
        <tr>
          {this.props.headers.map((item, index) => (
            <th key={index} className={styles.th}>{item.value}</th>
          ))}
        </tr>
        <tbody>
          {this.props.formElements.map((item, index) => (
            <tr key={index}>
              <td className={styles.td}>{item.user&&item.user.name&&item.user.name}</td>
              <td className={styles.td}>{item.user&&item.user.email&&item.user.email}</td>
              <td className={styles.td}>{item.user&&item.user.contactNumber&&item.user.contactNumber}</td>
              <td className={styles.td}>{item.discountAmount}</td>
              <td className={styles.td}>{item.dmiApprovalDate}</td>
              <td className={styles.td}>{item.dmiStatus}</td>
              <td className={styles.td}>{item.ecsStatus}</td>
              <td className={styles.td}>{item.orderdetails[0].amount}</td>
              <td className={styles.td}>{item.orderdetails[0].product.name}</td>
              <td className={styles.td}>{item.orderdetails[0].productattribute.variants.Color}</td>
          <td className={styles.td}>{item.orderdetails[0].tenureDetails.duration}{" "}{item.orderdetails[0].tenureDetails.durationType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;

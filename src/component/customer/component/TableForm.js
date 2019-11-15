import React, { Component } from "react";
import  styles from "./TableForm.css";

class Table extends Component {
  state = {};
  render() {
    // this.props.formElements.map((item, index) => {
    //   console.log(item);
    // });
    return (
      <table className={styles.table}>
        <tr>
          {this.props.headers.map((item, index) => (
            <th key={index} className={styles.th}>{item.value}</th>
          ))}
        </tr>
        {/* <tbody>
          {this.props.formElements.map((item, index) => (
            <tr key={index}>
              <td className={styles.td}>hello</td>
              <td className={styles.td}>{item.productCategory.label}</td>
              <td className={styles.td}>{item.product.label}</td>
              <td className={styles.td}>{item.tenure.label}</td>
              <td className={styles.td}>{item.rent.label}</td>
              <td className={styles.td}>{item.refundableDeposit.label}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    );
  }
}

export default Table;

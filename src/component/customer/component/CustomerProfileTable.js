import React, { Component } from "react";
import styles from "./CustomerProfileTable.css";
class CustomerProfileTable extends Component {
  state = {};
  render() {
    return (
      <table className={styles.table}>
        <tr>
          {this.props.headers.map((item, index) => (
            <th className={styles.th} key={index}>
              {item.value}
            </th>
          ))}
        </tr>
        <tbody>
          {this.props.formElements.map((item, index) => (
            <tr key={index}>
              <td className={styles.td}>{item.Category.label}</td>
              <td className={styles.td}>{item.product.label}</td>
              <td className={styles.td}>{item.Varient.label}</td>
              <td className={styles.td}>{item.tenure.label}</td>
              <td className={styles.td}>{"1"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CustomerProfileTable;

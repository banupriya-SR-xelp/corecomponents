import React, { Component } from "react";
import styles from "./Auth.css";
import Input from "../general/Input";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      password: "",
      confirmPassword: ""
    };
  }
  onChangeEmail = emailValue => {
    this.setState({
      emailValue
    });
  };
  onChangePassword = password => {
    this.setState({
      password
    });
  };
  onChangeConfirmPassword = confirmPassword => {
    this.setState({
      confirmPassword
    });
  };
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.signUpBase}>
          <div className={styles.container}>
            <div className={styles.formConatiner}>
              <div className={styles.signUp}>SignUp</div>
              <div className={styles.inputContainer}>
                <Input
                  placeholder={"Email"}
                  value={this.state.emailValue}
                  onChange={val => this.onChangeEmail(val)}
                  fontSize={14}
                  maxLength={240}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  type={"password"}
                  placeholder={"Password"}
                  value={this.state.password}
                  onChange={val => this.onChangePassword(val)}
                  fontSize={14}
                  maxLength={240}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  type={"password"}
                  placeholder={"Confirm Password"}
                  value={this.state.confirmPassword}
                  onChange={val => this.onChangeConfirmPassword(val)}
                  fontSize={14}
                  maxLength={240}
                />
              </div>
              <div className={styles.button}>signUp</div>
            </div>
          </div>
        </div>
        <div className={styles.loginBase}>
          <div className={styles.container}>
            {" "}
            <div className={styles.formConatiner}>
              <div className={styles.signUp}>Login</div>
              <div className={styles.inputContainer}>
                <Input
                  placeholder={"Email"}
                  value={this.state.emailValue}
                  onChange={val => this.onChangeEmail(val)}
                  fontSize={14}
                  maxLength={240}
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  type={"password"}
                  placeholder={"Confirm Password"}
                  value={this.state.confirmPassword}
                  onChange={val => this.onChangeConfirmPassword(val)}
                  fontSize={14}
                  maxLength={240}
                />
              </div>
              <div className={styles.button}>Login</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

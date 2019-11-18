import React, { Component } from "react";
import styles from "./Auth.css";
import Input from "../general/Input";

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      contactNumber: ""
    };
  }
  onChangeEmail = email => {
    this.setState({
      email
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
  onChangeName = name => {
    this.setState({
      name
    });
  };
  onChangeContactNumber = contactNumber => {
    this.setState({
      contactNumber
    });
  };
  handleSignUp = () => {
    if (this.props.userSignUp) {
      let userDetails = {
        name: this.state.name,
        email: this.state.email,
        contactNumber: this.state.contactNumber,
        password: this.state.password
      };
      this.props.userSignUp(userDetails);

      this.props.history.push("/customerProfile");
    }
  };
  handleLogin = () => {
    if (this.props.userLogin) {
      let userDetails = {
        email: this.state.email,
        password: this.state.confirmPassword
      };
      this.props.userLogin(userDetails);
      this.props.history.push("/customerProfile");
    }
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
                  placeholder={"name"}
                  value={this.state.name}
                  onChange={val => this.onChangeName(val)}
                  fontSize={14}
                  maxLength={240}
                />
              </div>
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
                  placeholder={"contactNumber"}
                  value={this.state.contactNumber}
                  onChange={val => this.onChangeContactNumber(val)}
                  fontSize={14}
                  type={"number"}
                  maxLength={10}
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
              {/* <div className={styles.inputContainer}>
                <Input
                  type={"password"}
                  placeholder={"Confirm Password"}
                  value={this.state.confirmPassword}
                  onChange={val => this.onChangeConfirmPassword(val)}
                  fontSize={14}
                  maxLength={240}
                />
              </div> */}
              <div
                className={styles.button}
                onClick={() => this.handleSignUp()}
              >
                signUp
              </div>
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
              <div className={styles.button} onClick={() => this.handleLogin()}>
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

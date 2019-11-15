import React, { Component } from "react";
import Select from "react-select";
import styles from "./CustomerProfile.css";
import CustomerProfileTable from "./CustomerProfileTable";
import Loader from "./Loader";
import { getCookie } from "../../lib/constant.js";
export default class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productAttribute: null,
      productCategory: null,
      productCategoryId: null,
      product: null,
      tenure: null,
      tenureDetails: null,
      showIcon: false,
      selectedProducts: [],
      address1: false,
      address2: false,
      productId: null,
      productAttributeId: null
    };
  }
  componentDidMount() {
    if (this.props.getAllProductCatg) {
      this.props.getAllProductCatg();
    }
  }
  handleCatgSelect = catg => {
    this.setState({ productCategory: catg });
    let product = this.props.categoryDetails.filter(val => {
      return val.name == catg.label;
    });
    if (this.props.getProductById) {
      this.props.getProductById(product[0]);
    }
  };
  handleproductSelect = product => {
    this.setState({
      product
    });
    let products = this.props.products.filter(val => {
      return val.name == product.label;
    });
    if (this.props.getProductById) {
      this.setState({ productId: products[0].id });
      this.props.getProductDetails(products[0].id);
    }
  };
  hadleVarientSelect = val => {
    this.setState({
      productAttribute: val
    });
    const tenureDetails =
      this.props.productDetails &&
      this.props.productDetails &&
      this.props.productDetails.productattributes.filter(data => {
        if (data.variants && data.variants.color == val.label) {
          this.setState({ productAttributeId: data.id });
          return data;
        }
      });
    const tenure =
      tenureDetails &&
      tenureDetails[0].tenureDetails &&
      tenureDetails[0].tenureDetails.map(val => {
        return {
          label: val.duration + " " + val.durationType + " " + val.tenureAmount
        };
      });
    this.setState({ tenureDetails: tenure });
  };

  handleTenureSelect = val => {
    this.setState({ tenure: val, showIcon: true });
  };
  saveorder = () => {
    let orderDetails = [];
    this.state.selectedProducts &&
      this.state.selectedProducts.map(val => {
        let tenure = val.tenure.label.split(" ");
        let product = {
          productId: val.productId,
          productAttributeId: val.productAttributeId,
          slotType: 1,
          amount: tenure[2],
          tenureDetails: {
            duration: tenure[0],
            durationType: tenure[1],
            tenureAmount: tenure[2]
          },
          ekycStatus: "VERIFIED",
          status: "ORDER_PLACED"
        };
        return orderDetails.push(product);
      });
    let orders = {
      customerId: getCookie("userId"),
      paymentStatus: "PAID",
      discountAmount: 80,
      ecsStatus: "ECS_APPROVED",
      dmiStatus: "DOCUMENT_VERIFIED",
      dmiApprovalDate: "2019-10-05 10:38:56",
      orderDetails
    };
    if (this.props.placeOrder) {
      this.props.placeOrder(orders);
      this.props.history.push("/customerDetails");
    }
  };
  addRow = () => {
    let products = this.state.selectedProducts;
    let product = {
      Varient: this.state.tenure,
      Category: this.state.productCategory,
      product: this.state.product,
      tenure: this.state.tenure,
      productId: this.state.productId,
      productAttributeId: this.state.productAttributeId,
      tenure: this.state.tenure
    };
    products.push(product);
    this.setState({
      selectedProducts: products,
      productAttribute: null,
      productCategory: null,
      productCategoryId: null,
      product: null,
      tenure: null,
      tenureDetails: null,
      showIcon: false,
      productId: null,
      productAttributeId: null,
      tenure: null
    });
  };
  render() {
    const catg_Details =
      this.props.categoryDetails &&
      this.props.categoryDetails.map(val => {
        return { label: val.name };
      });
    const products =
      this.props.products &&
      this.props.products.map(val => {
        return { label: val.name };
      });
    const color_attributes =
      this.props.productDetails &&
      this.props.productDetails &&
      this.props.productDetails.productattributes.map(val => {
        return val.variants;
      });
    const color =
      color_attributes &&
      color_attributes.filter(val => {
        return val.color;
      });
    const varient =
      color &&
      color.map(val => {
        return { label: val.color };
      });
    return (
      <div className={styles.base}>
        <div className={styles.heading}>CustomerProfile</div>
        <div className={styles.container}>
          {catg_Details && (
            <div className={styles.dropdown}>
              <Select
                options={catg_Details ? catg_Details : []}
                placeholder={"category"}
                onChange={val => this.handleCatgSelect(val)}
                value={this.state.productCategory}
              />
            </div>
          )}
          {this.state.productCategory && !products && <Loader />}
          {products && (
            <div className={styles.dropdown}>
              <Select
                options={products ? products : []}
                placeholder={"product"}
                onChange={val => this.handleproductSelect(val)}
                value={this.state.product}
              />
            </div>
          )}
          {this.state.product && !varient && <Loader />}
          {varient && (
            <div className={styles.dropdown}>
              <Select
                options={varient}
                placeholder={"Varients"}
                onChange={val => this.hadleVarientSelect(val)}
                value={this.state.productAttribute}
              />
            </div>
          )}
          {this.state.productAttribute && !this.state.tenureDetails && (
            <Loader />
          )}
          {this.state.tenureDetails && (
            <div className={styles.dropdown}>
              <Select
                options={this.state.tenureDetails}
                placeholder={"tenure"}
                onChange={val => this.handleTenureSelect(val)}
                value={this.state.tenure}
              />
            </div>
          )}

          {this.state.showIcon && (
            <div className={styles.button}>
              <div className={styles.addButton} onClick={() => this.addRow()}>
                +
              </div>
            </div>
          )}
        </div>

        {this.state.selectedProducts && this.state.selectedProducts.length > 0 && (
          <div className={styles.tableSection}>
            <CustomerProfileTable
              headers={[
                { value: "Category" },
                { value: "product" },
                { value: "Varient" },
                { value: "tenure" },
                { value: "quantity" }
              ]}
              formElements={this.state.selectedProducts}
            />
          </div>
        )}
        {this.state.selectedProducts && this.state.selectedProducts.length > 0 && (
          <div className={styles.addressContainer}>
            <div
              className={
                this.state.address1 ? styles.addressActive : styles.address
              }
              onClick={() => {
                this.setState({ address1: true, address2: false });
              }}
            >
              address1
            </div>
            <div
              className={
                this.state.address2 ? styles.addressActive : styles.address
              }
              onClick={() => {
                this.setState({ address1: false, address2: true });
              }}
            >
              address2
            </div>
          </div>
        )}
        {this.state.selectedProducts && this.state.selectedProducts.length > 0 && (
          <div className={styles.submitButtonConatiner}>
            <div
              className={styles.submitButton}
              onClick={() => {
                this.saveorder();
              }}
            >
              submit
            </div>
          </div>
        )}
      </div>
    );
  }
}

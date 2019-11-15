import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAllOrder,
  placeOrder,
  getAllProductCatg,
  getProductById,
  getProductDetails
} from "../action/customerProfile.action.js";
import CustomerProfile from "../component/CustomerProfile.js";

const mapDispatchToProps = dispatch => {
  return {
    placeOrder: orderDetails => {
      dispatch(placeOrder(orderDetails));
    },
    getProductDetails: id => {
      dispatch(getProductDetails(id));
    },
    getProductById: product_id => {
      dispatch(getProductById(product_id));
    },
    getAllOrder: () => {
      dispatch(getAllOrder());
    },
    getAllProductCatg: () => {
      dispatch(getAllProductCatg());
    }
  };
};

const mapStateToProps = state => {
  return {
    customerProfile: state.customerProfile,
    categoryDetails:
      state.customerProfile &&
      state.customerProfile.categoryDetails &&
      state.customerProfile.categoryDetails.data,
    products:
      state.customerProfile &&
      state.customerProfile.products &&
      state.customerProfile.products.data,
    productDetails:
      state.customerProfile &&
      state.customerProfile.productDetails &&
      state.customerProfile.productDetails.data,
    orderDetails:
      state.customerProfile &&
      state.customerProfile.orderDetails &&
      state.customerProfile.orderDetails.data
  };
};

const CustomerProfileContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerProfile)
);
export default CustomerProfileContainer;

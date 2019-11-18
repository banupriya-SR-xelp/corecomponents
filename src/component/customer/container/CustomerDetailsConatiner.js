import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllOrder } from "../action/customerProfile.action.js";

import CustomerDetails from "../component/CustomerDetails.js";

const mapDispatchToProps = dispatch => {
  return {
    getAllOrder: () => {
      dispatch(getAllOrder());
    }
  };
};

const mapStateToProps = state => {
  return {
    orderDetails:
      state.customerProfile &&
      state.customerProfile.orderDetails &&
      state.customerProfile.orderDetails.data
  };
};

const CustomerDetailsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CustomerDetails)
);
export default CustomerDetailsContainer;

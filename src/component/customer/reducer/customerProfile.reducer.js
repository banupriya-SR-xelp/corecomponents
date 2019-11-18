import * as customerAction from "../action/customerProfile.action.js";
const customerProfileReducer = (
  state = {
    loading: false,
    categoryDetails: null,
    products: null,
    productDetails: null,
    status: null,
    orderPlaced: null,
    orderDetails: null,
    placeOrderLoader: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case customerAction.GET_ALL_PRODUCT_CATG_REQUESTING:
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });

    case customerAction.GET_ALL_PRODUCT_CATG_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        categoryDetails: action.categoryDetails,
        status: action.status
      });

    case customerAction.GET_ALL_PRODUCT_CATG_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        status: action.status
      });

    case customerAction.GET_PRODUCT_BYID_REQUESTING:
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });

    case customerAction.GET_PRODUCT_BYID_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        products: action.products,
        status: action.status
      });

    case customerAction.GET_PRODUCT_BYID_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        status: action.status
      });

    case customerAction.GET_PRODUCT_DETAILS_REQUESTING:
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });

    case customerAction.GET_PRODUCT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        productDetails: action.productDetails,
        status: action.status
      });

    case customerAction.GET_PRODUCT_DETAILS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        status: action.status
      });

    case customerAction.PLACE_ORDER_REQUESTING:
      return Object.assign({}, state, {
        placeOrderLoader: true,
        status: action.status
      });

    case customerAction.PLACE_ORDER_SUCCESS:
      return Object.assign({}, state, {
        placeOrderLoader: false,
        orderPlaced: action.orderPlaced,
        status: action.status
      });

    case customerAction.PLACE_ORDER_FAILURE:
      return Object.assign({}, state, {
        placeOrderLoader: false,
        error: action.error,
        status: action.status
      });

    case customerAction.GET_ALL_ORDER_REQUESTING:
      return Object.assign({}, state, {
        loading: true,
        status: action.status
      });

    case customerAction.GET_ALL_ORDER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        orderDetails: action.orderDetails,
        status: action.status
      });

    case customerAction.GET_ALL_ORDER_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
        status: action.status
      });

    default:
      return state;
  }
};

export default customerProfileReducer;

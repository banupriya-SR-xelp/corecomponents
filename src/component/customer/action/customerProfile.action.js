import { SUCCESS, FAILURE, REQUESTING } from "../../lib/constant.js";
import axios from "axios";
export const GET_ALL_PRODUCT_CATG_REQUESTING =
  "GET_ALL_PRODUCT_CATG_REQUESTING";
export const GET_ALL_PRODUCT_CATG_SUCCESS = "GET_ALL_PRODUCT_CATG_SUCCESS";
export const GET_ALL_PRODUCT_CATG_FAILURE = "GET_ALL_PRODUCT_CATG_FAILURE";

export const GET_PRODUCT_BYID_REQUESTING = "GET_PRODUCT_BYID_REQUESTING";
export const GET_PRODUCT_BYID_SUCCESS = "GET_PRODUCT_BYID_SUCCESS";
export const GET_PRODUCT_BYID_FAILURE = "GET_PRODUCT_BYID_FAILURE";

export const GET_PRODUCT_DETAILS_REQUESTING = "GET_PRODUCT_DETAILS_REQUESTING";
export const GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCT_DETAILS_SUCCESS";
export const GET_PRODUCT_DETAILS_FAILURE = "GET_PRODUCT_DETAILS_FAILURE";

export const PLACE_ORDER_REQUESTING = "PLACE_ORDER_REQUESTING";
export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS";
export const PLACE_ORDER_FAILURE = "PLACE_ORDER_FAILURE";

export const GET_ALL_ORDER_REQUESTING = "GET_ALL_ORDER_REQUESTING";
export const GET_ALL_ORDER_SUCCESS = "GET_ALL_ORDER_SUCCESS";
export const GET_ALL_ORDER_FAILURE = "GET_ALL_ORDER_FAILURE";

export function getAllProductCatgRequesting() {
  return {
    type: GET_ALL_PRODUCT_CATG_REQUESTING,
    status: REQUESTING
  };
}

export function getAllProductCatgSuccess(categoryDetails) {
  return {
    type: GET_ALL_PRODUCT_CATG_SUCCESS,
    status: SUCCESS,
    categoryDetails
  };
}

export function getAllProductCatgFailure(error) {
  return {
    type: GET_ALL_PRODUCT_CATG_FAILURE,
    status: FAILURE,
    error
  };
}

export function getAllProductCatg() {
  return async dispatch => {
    try {
      dispatch(getAllProductCatgRequesting());
      const result = await axios.get(" http://54.69.30.76:3000/categories", {
        headers: {
          Authorization:
            "Bearer 3abcd926-12d6-43ac-824f-41b0c04dc998,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYmNkOTI2LTEyZDYtNDNhYy04MjRmLTQxYjBjMDRkYzk5OCIsImlhdCI6MTU3MzQ5MzE5MCwiZXhwIjoxNTc0MDk3OTkwfQ.Pb4-nlL4hyhDCAtNNCxil4j9JI1HnS8dfttmoTNqigE"
        }
      });
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      dispatch(getAllProductCatgSuccess(resultJson));
    } catch (e) {
      dispatch(getAllProductCatgFailure(e.message));
    }
  };
}

export function getProductByIdRequesting() {
  return {
    type: GET_PRODUCT_BYID_REQUESTING,
    status: REQUESTING
  };
}

export function getProductByIdSuccess(products) {
  return {
    type: GET_PRODUCT_BYID_SUCCESS,
    status: SUCCESS,
    products
  };
}

export function getProductByIdFailure(error) {
  return {
    type: GET_PRODUCT_BYID_FAILURE,
    status: FAILURE,
    error
  };
}

export function getProductById(product) {
  return async dispatch => {
    try {
      dispatch(getProductByIdRequesting());
      const result = await axios.get(
        `http://54.69.30.76:3000/products/category/${product.id}`,
        {
          headers: {
            Authorization:
              "Bearer 3abcd926-12d6-43ac-824f-41b0c04dc998,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYmNkOTI2LTEyZDYtNDNhYy04MjRmLTQxYjBjMDRkYzk5OCIsImlhdCI6MTU3MzQ5MzE5MCwiZXhwIjoxNTc0MDk3OTkwfQ.Pb4-nlL4hyhDCAtNNCxil4j9JI1HnS8dfttmoTNqigE"
          }
        }
      );
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      dispatch(getProductByIdSuccess(resultJson));
    } catch (e) {
      dispatch(getProductByIdFailure(e.message));
    }
  };
}

export function getProductDetailsRequesting() {
  return {
    type: GET_PRODUCT_DETAILS_REQUESTING,
    status: REQUESTING
  };
}

export function getProductDetailsSuccess(productDetails) {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    status: SUCCESS,
    productDetails
  };
}

export function getProductDetailsFailure(error) {
  return {
    type: GET_PRODUCT_DETAILS_FAILURE,
    status: FAILURE,
    error
  };
}

export function getProductDetails(id) {
  return async dispatch => {
    try {
      dispatch(getProductDetailsRequesting());
      const result = await axios.get(`http://54.69.30.76:3000/product/${id}`, {
        headers: {
          Authorization:
            "Bearer 3abcd926-12d6-43ac-824f-41b0c04dc998,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYmNkOTI2LTEyZDYtNDNhYy04MjRmLTQxYjBjMDRkYzk5OCIsImlhdCI6MTU3MzQ5MzE5MCwiZXhwIjoxNTc0MDk3OTkwfQ.Pb4-nlL4hyhDCAtNNCxil4j9JI1HnS8dfttmoTNqigE"
        }
      });
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      dispatch(getProductDetailsSuccess(resultJson));
    } catch (e) {
      dispatch(getProductDetailsFailure(e.message));
    }
  };
}

export function placeOrderRequesting() {
  return {
    type: PLACE_ORDER_REQUESTING,
    status: REQUESTING
  };
}

export function placeOrderSuccess(orderPlaced) {
  return {
    type: PLACE_ORDER_SUCCESS,
    status: SUCCESS,
    orderPlaced
  };
}

export function placeOrderFailure(error) {
  return {
    type: PLACE_ORDER_FAILURE,
    status: FAILURE,
    error
  };
}

export function placeOrder(orderDetails) {
  return async dispatch => {
    try {
      dispatch(placeOrderRequesting());
      const result = await axios.post(
        `http://54.69.30.76:3000/order`,
        orderDetails,
        {
          headers: {
            Authorization:
              "Bearer 3abcd926-12d6-43ac-824f-41b0c04dc998,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYmNkOTI2LTEyZDYtNDNhYy04MjRmLTQxYjBjMDRkYzk5OCIsImlhdCI6MTU3MzQ5MzE5MCwiZXhwIjoxNTc0MDk3OTkwfQ.Pb4-nlL4hyhDCAtNNCxil4j9JI1HnS8dfttmoTNqigE"
          }
        }
      );
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      dispatch(placeOrderSuccess(resultJson));
    } catch (e) {
      dispatch(placeOrderFailure(e.message));
    }
  };
}

export function getAllOrderRequesting() {
  return {
    type: GET_ALL_ORDER_REQUESTING,
    status: REQUESTING
  };
}

export function getAllOrderSuccess(orders) {
  console.log(orders);
  return {
    type: GET_ALL_ORDER_SUCCESS,
    status: SUCCESS,
    orderDetails: orders
  };
}

export function getAllOrderFailure(error) {
  return {
    type: GET_ALL_ORDER_FAILURE,
    status: FAILURE,
    error
  };
}

export function getAllOrder() {
  return async dispatch => {
    try {
      dispatch(getAllOrderRequesting());
      const result = await axios.get(`http://54.69.30.76:3000/orders`, {
        headers: {
          Authorization:
            "Bearer 3abcd926-12d6-43ac-824f-41b0c04dc998,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhYmNkOTI2LTEyZDYtNDNhYy04MjRmLTQxYjBjMDRkYzk5OCIsImlhdCI6MTU3MzQ5MzE5MCwiZXhwIjoxNTc0MDk3OTkwfQ.Pb4-nlL4hyhDCAtNNCxil4j9JI1HnS8dfttmoTNqigE"
        }
      });
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      dispatch(getAllOrderSuccess(resultJson));
    } catch (e) {
      dispatch(getAllOrderFailure(e.message));
    }
  };
}

import { toast } from "react-toastify";

const {
  API_LOADING,
  API_SUCCESS,
  API_ERROR,
} = require("../constants/constants");
const { default: Api } = require("../services/Api");

export const fetchLambda = () => (dispatch) => {
  dispatch({ type: API_LOADING });
  Api.fetchLambda()
    .then((response) => dispatch({ type: API_SUCCESS, data: response.data }))
    .catch((error) => {
      const errorMessage = error.message || "Unexpected Error.";
      toast.error(errorMessage, { position: "top-center", autoClose: false });
      dispatch({
        type: API_ERROR,
        error: errorMessage,
      });
    });
};

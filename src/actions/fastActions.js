import { FAST_ERROR, FAST_LOADING, FAST_SUCCESS } from "../constants/constants";
import Api from "../services/Api";
import { toast } from "react-toastify";

export const fetchFast = () => (dispatch) => {
  dispatch({ type: FAST_LOADING });
  Api.fetchFast()
    .then((response) => dispatch({ type: FAST_SUCCESS, data: response.data }))
    .catch((error) => {
      const errorMessage = error.message || "Unexpected error";
      toast.error(errorMessage, { position: "top-center", autoClose: false });
      dispatch({ type: FAST_ERROR, error: errorMessage });
    });
};

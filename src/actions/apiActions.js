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
    .catch((error) =>
      dispatch({ type: API_ERROR, error: error.message || "Unexpected Error." })
    );
};

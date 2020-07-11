import { API_LOADING, API_SUCCESS, API_ERROR } from "../constants/constants";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

const fetchLambda = (state = initialState, action) => {
  switch (action.type) {
    case API_LOADING:
      return Object.assign({}, state, {
        loading: true,
        error: "",
      });
    case API_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
        error: "",
      });
    case API_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default fetchLambda;

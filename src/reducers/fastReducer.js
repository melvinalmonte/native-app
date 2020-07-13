import { FAST_ERROR, FAST_LOADING, FAST_SUCCESS } from "../constants/constants";

const initialState = {
  data: [],
  error: "",
  loading: false,
};
const fetchFast = (state = initialState, action) => {
  switch (action.type) {
    case FAST_LOADING:
      return Object.assign({}, state, {
        loading: true,
        error: "",
      });
    case FAST_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
        error: "",
      });
    case FAST_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      });
    default:
      return state;
  }
};

export default fetchFast;

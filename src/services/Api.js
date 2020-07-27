import axios from "axios";

export default class Api {
  static fetchLambda() {
    return axios.get(`${process.env.REACT_APP_API_URL}/api`);
  }
  static fetchFast() {
    console.log("Api: ", process.env.REACT_APP_API_URL);
    return axios.get(`${process.env.REACT_APP_API_URL}/api`);
  }
}

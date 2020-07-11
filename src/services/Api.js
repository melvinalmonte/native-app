import { API } from "../constants/constants";

import axios from "axios";

export default class Api {
  static fetchLambda() {
    return axios.get(API);
  }
}

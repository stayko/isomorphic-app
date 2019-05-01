import axios from "axios";

export default class HomeService {
  constructor() {
    throw new TypeError('"DetailsService" cannot be instantiated directly.');
  }

  static getUsers(site, order, sort, page, pageSize) {
    return axios.get("http://api.stackexchange.com/2.2/users", {
      params: { site, order, sort, page, pageSize }
    });
  }
}

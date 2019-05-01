import axios from "axios";

export default class DetailsService {
  constructor() {
    throw new TypeError('"DetailsService" cannot be instantiated directly.');
  }

  static getUser(id, site) {
    return axios.get(`http://api.stackexchange.com/2.2/users/${id}`, {
      params: { site }
    });
  }

  static getUserQuestions(id, site, order, sort, page, pageSize) {
    return axios.get(`http://api.stackexchange.com/2.2/users/${id}/questions`, {
      params: { site, order, sort, page, pageSize }
    });
  }
}

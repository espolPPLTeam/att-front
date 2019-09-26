import { routes, BASE_URL } from "./routes";

import ApiService from "./api.service";

const SessionService = {

  /**
   * Request HTTP hacia API de login
   *
   * @param {Object} payload
   * @param {String} payload.email Email del usuario
   * @param {String} payload.clave Clave del usuario
   */
  async getSession(payload) {
    const url = BASE_URL + routes.GET_SESSIONS;
    const queryData = {
      paralelo: payload.paralelo,
    };
    try {
      const response = await ApiService.getApi(url, queryData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },

};


export default SessionService;

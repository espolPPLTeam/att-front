import { routes, BASE_URL } from "./routes";

import ApiServcie from "./api.service";
import { TokenService } from "./localStorage.service";

const UserService = {

  /**
   * Request HTTP hacia API de login
   *
   * @param {Object} payload
   * @param {String} payload.email Email del usuario
   * @param {String} payload.clave Clave del usuario
   */
  async login(payload) {
    const url = BASE_URL + routes.LOGIN;
    const payloadData = {
      email: payload.email,
      clave: payload.clave,
    };
    try {
      const response = await ApiServcie.postApi(url, payloadData);
      ApiServcie.setHeader("x-access-token",response.body.data.token);
      TokenService.saveToken(response.body.data.token);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error);
    }
  }
};


export default UserService;

import { routes, BASE_URL } from "./routes";

import ApiService from "./api.service";
import StorageService from "./localStorage.service";

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
      const response = await ApiService.postApi(url, payloadData);
      ApiService.setHeader("x-access-token",response.body.data.token);
      StorageService.saveToken(response.body.data.token);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error);
    }
  },

  /**
   * Request HTTP hacia API de login
   */
  async getDatosUsuario() {
    const url = BASE_URL + routes.GET_DATOS_USUARIO;
    try {
      const response = await ApiService.postApi(url);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error);
    }
  }
};


export default UserService;

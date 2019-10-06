import { routes, BASE_URL } from "./routes";

import ApiService from "./api.service";
import StorageService from "./localStorage.service";

const UserService = {

  /**
   * Makes the login post request to the server and sets the authentication token
   *
   * @param {Object} payload
   * @param {String} payload.email
   * @param {String} payload.clave
   */
  async login(payload) {
    const url = BASE_URL + routes.API_ATT + routes.LOGIN;
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
      return Promise.reject(error.body);
    }
  },

  /**
   * Returns the necessary data from the user for the app to work
   */
  async getDatosUsuario() {
    const url = BASE_URL + routes.API_ATT + routes.GET_USER_DATA;
    try {
      const response = await ApiService.postApi(url);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error);
    }
  }
};


export default UserService;

import { routes, BASE_URL } from "./routes";

import ApiService from "./api.service";

const SessionService = {
  /**
   * Request HTTP hacia API de obtenerSesiones
   *
   * @param {Object} payload
   * @param {String} payload.paralelo
   */
  async getSessions(payload) {
    const url = BASE_URL + routes.GET_SESSIONS;
    const queryData = {
      params: {
        paralelo: payload.paralelo
      }
    };
    try {
      const response = await ApiService.getApi(url, queryData);
      return Promise.resolve(response.body.data);
    } catch (error) {
      return Promise.reject(error.body);
    }
  },
  /**
   * Request HTTP hacia API de obtenerSesiones
   *
   * @param {Object} payload
   * @param {string} payload.name
   * @param {number} payload.course
   */
  async createSession(payload) {
    const url = BASE_URL + routes.CREATE_SESSION;
    const payloadData = {
      idParalelo: payload.course,
      nombre: payload.name,
    };
    try {
      const response = await ApiService.postApi(url, payloadData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },
  /**
   * @param {Object} payload
   * @param {number} payload.id
   */
  async getSessionById(payload) {
    const url = BASE_URL + routes.GET_SESSION_BY_ID;
    const queryData = {
      params: {
        idSesion: payload.id,
      }
    };
    try {
      const response = await ApiService.getApi(url, queryData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },
  /**
   * @param {Object} payload
   * @param {string} payload.id
   */
  async startSession(payload) {
    const url = BASE_URL + routes.START_SESSION;
    const payloadData = {
      idSesion: payload.id,
    };
    try {
      const response = await ApiService.putApi(url, payloadData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },
  /**
   * @param {Object} payload
   * @param {string} payload.id
   */
  async endSession(payload) {
    const url = BASE_URL + routes.END_SESSION;
    const payloadData = {
      idSesion: payload.id,
    };
    try {
      const response = await ApiService.putApi(url, payloadData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },
};

export default SessionService;

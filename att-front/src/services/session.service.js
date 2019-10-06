import { routes, BASE_URL } from "./routes";

import ApiService from "./api.service";

const SessionService = {
  /**
   * Returns the sessions from the selected course
   *
   * @param {object} payload
   * @param {number} payload.paralelo
   */
  async getSessions(payload) {
    const url = BASE_URL + routes.API_ATT + routes.GET_SESSIONS;
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
   * Creates the register of a new session in a course
   *
   * @param {Object} payload
   * @param {string} payload.name
   * @param {number} payload.course
   */
  async createSession(payload) {
    const url = BASE_URL + routes.API_ATT + routes.CREATE_SESSION;
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
   * Returns all the questions from a particular session
   * @param {Object} payload
   * @param {number} payload.id
   */
  async getSessionById(payload) {
    const url = BASE_URL + routes.API_ATT + routes.GET_SESSION_BY_ID;
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
   * Starts a PENDING session
   * @param {Object} payload
   * @param {string} payload.id
   */
  async startSession(payload) {
    const url = BASE_URL + routes.API_ATT + routes.START_SESSION;
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
   * Terminates an ACTIVE session
   * @param {Object} payload
   * @param {string} payload.id
   */
  async endSession(payload) {
    const url = BASE_URL + routes.API_ATT + routes.END_SESSION;
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

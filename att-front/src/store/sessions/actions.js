import SessionService from "../../services/session.service";

/**
 * @param {Object} payload
 * @param {number} payload.paralelo
 */
export async function getSessions({ commit }, payload) {
  return SessionService.getSessions(payload)
    .then((data) => {
      commit("setSessions", data);
      return Promise.resolve(true);
    })
    .catch((error) => {
      const errorPayload = {
        isActive: true,
        message: error.error
      };
      commit("app/setError", errorPayload, { root: true });
      return Promise.reject(error);
    });
}

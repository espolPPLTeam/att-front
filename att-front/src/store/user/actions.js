import UserService from "../../services/user.service";

/**
 * Loggea al usuario
 *
 * @param {Object} payload
 * @param {String} payload.email Email del usuario
 * @param {String} payload.clave Clave del usuario
 */
export async function login({ commit }, payload) {
  return UserService.login(payload)
    .then(() => {
      commit("setLoggedIn", true);
      return Promise.resolve(true);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}


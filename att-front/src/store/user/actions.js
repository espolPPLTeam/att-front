import UserService from "../../services/user.service";

/**
 * Loggea al usuario
 *
 * @description
 *   Si el logueo es exitoso, setea la variable loggedIn como true y llena los datos del usuario en el estado
 *
 * @param {Object} payload
 * @param {String} payload.email Email del usuario
 * @param {String} payload.clave Clave del usuario
 */
export async function login({ commit }, payload) {
  return UserService.login(payload)
    .then((data) => {
      commit("setLoggedIn", true);
      commit("setUsuario", data);
      return Promise.resolve(true);
    })
    .catch((error) => {
    	commit("setLoggedIn", false);
      return Promise.reject(error);
    });
}


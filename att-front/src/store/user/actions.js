import UserService from "../../services/user.service";
import StorageService from "../../services/localStorage.service";

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
      const token = StorageService.getToken();
      commit("sockets/createConnection", token, { root: true });
      commit("setLoggedIn", true);
      commit("setUsuario", data);
      return Promise.resolve(true);
    })
    .catch((error) => {
      console.log(error)
    	commit("setLoggedIn", false);
      const errorPayload = {
        isActive: true,
        message: error.error
      };
      commit("app/setError", errorPayload, { root: true });
      return Promise.reject(error);
    });
}

export async function getDatosUsuario({ commit }) {
  try {
    const data = await UserService.getDatosUsuario();
    const token = StorageService.getToken();
    commit("sockets/createConnection", token, { root: true });
    commit("setLoggedIn", true);
    commit("setUsuario", data);
    return Promise.resolve(true);
  } catch (error) {
    commit("setLoggedIn", false);
    return Promise.reject(error);
  }
}
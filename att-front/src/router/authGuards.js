import StorageService from "../services/localStorage.service";
import ApiService from "../services/api.service";
import store from "../store";

const generalGuard = async(to, from, next) => {
  try {
    const accessToken = StorageService.getToken();
    const isLoggedIn = store().getters["user/isLoggedIn"];
    if (to.matched.some(record => record.meta.requiresLogin)) {
      if (!accessToken) {
        next({ name: "login" });
      } else if (!isLoggedIn) {
        ApiService.setHeader("x-access-token", accessToken);
        await store().dispatch("user/getDatosUsuario");
        next();
      } else {
        next();
      }
    } else {
      if (!accessToken) {
        next();
      } else {
        if (!isLoggedIn) {
          ApiService.setHeader("x-access-token", accessToken);
          await store().dispatch("user/getDatosUsuario");
          next({ name: "home" });
        }
      }
    }
  } catch(error) {
    console.error(error)
  }
};



export default {
  generalGuard
};

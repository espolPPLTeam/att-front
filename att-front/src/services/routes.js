export const BASE_URL = `${process.env.VUE_APP_API_URL}`;

export const routes = {
  //===== AUTHENTICATION =====//
  LOGIN: "/api/att/login",
  GET_DATOS_USUARIO: "/api/att/obtenerDatosUsuario",
  GET_SESSIONS: "/api/att/sesiones"
};

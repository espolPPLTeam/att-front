export const BASE_URL = `${process.env.VUE_APP_API_URL}`;

export const routes = {
  //===== AUTHENTICATION =====//
  LOGIN: "/api/att/login",
  GET_DATOS_USUARIO: "/api/att/obtenerDatosUsuario",
  GET_SESSIONS: "/api/att/sesiones",
  CREATE_SESSION: "/api/att/crearSesion",
  GET_SESSION_BY_ID: "/api/att/datosSesion",
  CREATE_STUDENT_QUESTION: "/api/att/crearPreguntaEstudiante",
  CREATE_PROFESSOR_QUESTION: "/api/att/crearPreguntaProfesor",
  START_SESSION: "/api/att/iniciarSesion",
  END_SESSION: "/api/att/terminarSesion",
  ANSWER_QUESTION: "/api/att/responderPregunta",
};

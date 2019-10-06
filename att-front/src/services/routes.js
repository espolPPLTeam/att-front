export const BASE_URL = `${process.env.VUE_APP_API_URL}`;

export const routes = {
  API_ATT: "/api/att",
  LOGIN: "/login",
  GET_USER_DATA: "/user/getUserData",

  GET_SESSIONS: "/sessions",
  GET_SESSION_BY_ID: "/sessions/getSessionData",
  CREATE_SESSION: "/sessions/createSession",
  START_SESSION: "/sessions/start",
  END_SESSION: "/sessions/end",

  CREATE_PROFESSOR_QUESTION: "/questions/createProfessorQuestion",
  ANSWER_QUESTION: "/questions/answer",
  UPDATE_PROFESSOR_QUESTION_STATUS: "/questions/updateStatus",

  CREATE_STUDENT_QUESTION: "/questions/createStudentQuestion",
};

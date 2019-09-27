import QuestionService from "../../services/question.service";

/**
 * @param {Object} payload
 * @param {number} payload.message
 * @param {number} payload.session ID of the session this question is for
 */
export async function createStudentQuestion({ commit, rootState }, payload) {
  return QuestionService.createStudentQuestion(payload)
    .then(data => {
      const questionPayload = {
        creador: rootState.user,
        id: data.id,
        texto: payload.message,
        createdAt: data.createdAt,
      };
      commit("addStudentQuestion", questionPayload);
      return Promise.resolve(true);
    })
    .catch(error => {
      const errorPayload = {
        isActive: true,
        message: error.error
      };
      commit("app/setError", errorPayload, { root: true });
      return Promise.reject(error);
    });
}

/**
 * @param {Object} payload
 * @param {number} payload.title
 * @param {number} payload.message
 * @param {number} payload.session ID of the session this question is for
 */
export async function createProfessorQuestion({ commit, rootState }, payload) {
  return QuestionService.createProfessorQuestion(payload)
    .then(data => {
      const questionPayload = {
        creador: rootState.user,
        id: data.id,
        texto: payload.message,
        createdAt: data.createdAt,
        titulo: payload.title,
      };
      commit("addProfessorQuestion", questionPayload);
      return Promise.resolve(true);
    })
    .catch(error => {
      const errorPayload = {
        isActive: true,
        message: error.error
      };
      commit("app/setError", errorPayload, { root: true });
      return Promise.reject(error);
    });
}


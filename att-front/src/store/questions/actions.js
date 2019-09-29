import QuestionService from "../../services/question.service";

/**
 * @param {Object} payload
 * @param {number} payload.message
 * @param {number} payload.session ID of the session this question is for
 */
export async function createStudentQuestion({ commit, rootState }, payload) {
  try {
    const data = await QuestionService.createStudentQuestion(payload);
    const questionPayload = {
      creador: rootState.user,
      id: data.id,
      texto: payload.message,
      createdAt: data.createdAt,
    };
    commit("addStudentQuestion", questionPayload);
    return Promise.resolve(true);
  } catch(error) {
    const errorPayload = {
      isActive: true,
      message: error.error
    };
    commit("app/setError", errorPayload, { root: true });
    return Promise.reject(error);
  }
}

/**
 * @param {Object} payload
 * @param {number} payload.title
 * @param {number} payload.message
 * @param {number} payload.session ID of the session this question is for
 */
export async function createProfessorQuestion({ commit, rootState }, payload) {
  try {
    const data = await QuestionService.createProfessorQuestion(payload);
    const questionPayload = {
      creador: rootState.user,
      id: data.id,
      texto: payload.message,
      createdAt: data.createdAt,
      titulo: payload.title,
      estado: "PENDIENTE",
    };
    commit("addProfessorQuestion", questionPayload);
    return Promise.resolve(true);
  } catch(error) {
    const errorPayload = {
      isActive: true,
      message: error.error
    };
    commit("app/setError", errorPayload, { root: true });
    return Promise.reject(error);
  }
}

/**
 * @param {Object} payload
 * @param {number} payload.question
 * @param {number} payload.message
 */
export async function answerQuestion({ commit, rootState }, payload) {
  try {
    const data = await QuestionService.answerQuestion(payload);
    const answerPayload = {
      creador: rootState.user,
      id: data.id,
      texto: payload.message,
      createdAt: data.createdAt,
      question: payload.question,
    };
    commit("addAnswerToQuestion", answerPayload);
    return Promise.resolve(true);
  } catch(error) {
    const errorPayload = {
      isActive: true,
      message: error.error
    };
    commit("app/setError", errorPayload, { root: true });
    return Promise.reject(error);
  }
}

/**
 * @param {Object} payload
 * @param {number} payload.question
 * @param {number} payload.status
 */
export async function updateProfessorQuestionStatus({ commit }, payload) {
  try {
    const data = await QuestionService.updateProfessorQuestionStatus(payload);
    return Promise.resolve(true);
  } catch(error) {
    const errorPayload = {
      isActive: true,
      message: error.error
    };
    commit("app/setError", errorPayload, { root: true });
    return Promise.reject(error);
  }
}

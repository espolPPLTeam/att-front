/**
 * @param {Object} payload Student question
 * @param {number} payload.message
 * @param {number} payload.session ID of the session this question is for
 */
export async function socket_newStudentQuestion({ commit }, payload) {
  try {
    const questionPayload = {
      creador: payload.user,
      id: payload.id,
      texto: payload.texto,
      createdAt: payload.createdAt,
    };
    commit("questions/addStudentQuestion", questionPayload, { root: true });
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
 * @param {Object} payload Professor question
 * @param {number} payload.message
 * @param {number} payload.session ID of the session this question is for
 */
export async function socket_newProfessorQuestion({ commit }, payload) {
  try {
    const questionPayload = {
      creador: payload.user,
      id: payload.id,
      texto: payload.texto,
      createdAt: payload.createdAt,
      titulo: payload.titulo,
    };
    commit("questions/addProfessorQuestion", questionPayload, { root: true });
  } catch(error) {
    const errorPayload = {
      isActive: true,
      message: error.error
    };
    commit("app/setError", errorPayload, { root: true });
    return Promise.reject(error);
  }
}

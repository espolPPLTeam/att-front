
/**
 * When a professor creates a session, all the users in the course receive this socket
 * The session must be added to the state
 */
export async function socket_sessionCreated({ commit }, payload) {
  try {
    const sesionPayload = {
      id: payload.id,
      name: payload.nombre,
      actualState: {
        id: 1,
        name: "PENDIENTE"
      },
      course: {
        id: payload.course,
        name: payload.courseName
      },
      subject: {
        id: payload.subject,
        name: payload.subjectName
      }
    };
    commit("sessions/addSession", sesionPayload, { root: true });
  } catch(error) {
    console.error(error);
  }
}

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

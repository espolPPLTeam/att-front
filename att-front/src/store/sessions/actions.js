import SessionService from "../../services/session.service";

/**
 * @param {Object} payload
 * @param {number} payload.paralelo
 */
export async function getSessions({ commit }, payload) {
  return SessionService.getSessions(payload)
    .then(data => {
      commit("setSessions", data);
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
 * @param {string} payload.name Name of the session
 * @param {number} payload.course
 * @param {string} payload.courseName
 * @param {number} payload.subject
 * @param {string} payload.subjectName
 */
export async function createSession({ commit }, payload) {
  return SessionService.createSession(payload)
    .then(data => {
      const sesionPayload = {
        id: data.id,
        name: payload.name,
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
      commit("addSession", sesionPayload);
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
 * @param {number} payload.id Session ID
 */
export async function getSessionById({ commit }, payload) {
  return SessionService.getSessionById(payload)
    .then(data => {
      commit("questions/setProfessorQuestions", data.preguntasProfesor, { root: true });
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

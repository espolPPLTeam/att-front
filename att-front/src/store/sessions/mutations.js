export function setSessions(state, sessions) {
  state.sessions = sessions;
}

/**
 * @param {object} session
 * @param {number} session.id
 * @param {string} session.nombre
 * @param {Date} session.fecha_inicio
 * @param {Date} session.fecha_fin
 * @param {object} session.estadoActual
 * @param {number} session.estadoActual.id
 * @param {string} session.estadoActual.nombre
 * @param {object} session.paralelo
 * @param {number} session.paralelo.id
 * @param {string} session.paralelo.nombre
 * @param {object} session.materia
 * @param {number} session.materia.id
 * @param {string} session.materia.nombre
 */
export function addSession(state, session) {
  state.sessions.push(session);
}

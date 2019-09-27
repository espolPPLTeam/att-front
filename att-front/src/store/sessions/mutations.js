export function setSessions(state, sessions) {
  state.sessions = sessions.map(session => {
    return {
      id: session.id,
      name: session.nombre,
      actualState: {
        id: session.estadoActual.id,
        name: session.estadoActual.nombre
      },
      course: {
        id: session.paralelo.id,
        name: session.paralelo.nombre
      },
      subject: {
        id: session.paralelo.materia.id,
        name: session.paralelo.materia.nombre
      }
    };
  });
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

/**
 * @param {object} payload
 * @param {number} payload.status ID of the new status
 * @param {number} payload.id Session ID
 */
export function updateSessionStatus(state, payload) {
  let statusName = "";
  if (payload.status === 1) {
    statusName = "PENDIENTE";
  } else if (payload.status === 2) {
    statusName = "ACTIVA";
  } else if (payload.status === 3) {
    statusName = "TERMINADA";
  }
  const session = state.sessions.find(session => session.id === payload.id);
  if (session) {
    session.actualState = {
      id: payload.status,
      name: statusName
    };
  }
}

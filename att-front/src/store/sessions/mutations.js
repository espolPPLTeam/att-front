export function setSessions(state, sessions) {
  state.sessions = sessions.map(session => {
    console.log(session);
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

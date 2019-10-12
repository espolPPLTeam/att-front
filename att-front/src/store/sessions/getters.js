export const allSessions = state => state.sessions;

export const getSessionById = state => id => state.sessions.find(session => session.id === id);
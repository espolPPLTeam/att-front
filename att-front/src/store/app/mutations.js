/**
 * @param {object} payload
 * @param {boolean} payload.isActive
 * @param {string} payload.message
 */
export function setError(state, payload) {
  state.error.isActive = payload.isActive;
  state.error.message = payload.message;
}

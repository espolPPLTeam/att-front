export function setLoggedIn(state, loggedIn) {
  state.loggedIn = loggedIn;
}

/**
 * Llena los datos del usuario en el estado para visualizarlos en la app
 *
 * @param {Object} usuario
 * @param {Number} usuario.id ID del usuario en la base de datos
 * @param {String} usuario.email
 * @param {Number} usuario.rolId ID del rol del usuario
 * @param {Object} usuario.rol
 * @param {String} usuario.rol.nombre
 * @param {Array} usuario.paralelos Paralelos en los que esta registrado el usuario
 */
export function setUsuario(state, usuario) {
  state.id = usuario.id;
  state.email = usuario.email;
  state.rolId = usuario.rolId;
  state.rol = usuario.rol.nombre;
  state.nombres = usuario.nombres;
  state.apellidos = usuario.apellidos;
  state.courses = usuario.paralelos.map((paralelo) => {
    return {
      code: paralelo.codigo,
      id: paralelo.id,
      name: paralelo.nombre,
      subjectId: paralelo.materia.id,
      subjectName: paralelo.materia.nombre,
    }
  });
}

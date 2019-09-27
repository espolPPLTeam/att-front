export function setProfessorQuestions(state, questions) {
  state.professorQuestions = questions.map(question => {
    return {
      id: question.id,
      image: question.imagen,
      message: question.texto,
      title: question.titulo,
      user: {
        name: question.creador.nombres,
        lastName: question.creador.apellidos,
        email: question.creador.email,
        id: question.creador.id,
      },
      createdAt: question.createdAt,
      responses: question.respuestas.map(response => {
        return {
          id: response.id,
          image: response.imagen,
          grade: response.calificacion,
          user: {
            name: response.creador.nombres,
            lastName: response.creador.apellidos,
            email: response.creador.email,
            id: response.creador.id,
          },
          createdAt: response.createdAt,
          message: response.texto,
        };
      }),
    }
  });
}

export function setStudentQuestions(state, questions) {
  state.studentQuestions = questions.map(question => {
    return {
      id: question.id,
      image: question.imagen,
      message: question.texto,
      user: {
        name: question.creador.nombres,
        lastName: question.creador.apellidos,
        email: question.creador.email,
        id: question.creador.id,
      },
      createdAt: question.createdAt,
    }
  });
}
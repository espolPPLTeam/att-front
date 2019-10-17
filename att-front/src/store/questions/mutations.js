export function setProfessorQuestions(state, questions) {
  state.professorQuestions = questions.map(question => {
    return {
      id: question.id,
      image: question.imagen,
      message: question.texto,
      title: question.titulo,
      status: question.estado,
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
      title: question.titulo,
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

export function addStudentQuestion(state, question) {
  const questionExists = state.studentQuestions.find(x => x.id === question.id);
  if (questionExists) {
    return true;
  }
  state.studentQuestions.push({
    id: question.id,
    image: null,
    message: question.texto,
    user: {
      name: question.creador.nombres,
      lastName: question.creador.apellidos,
      email: question.creador.email,
      id: question.creador.id,
    },
    createdAt: question.createdAt,
  });
}

export function addProfessorQuestion(state, question) {
  const questionExists = state.professorQuestions.find(x => x.id === question.id);
  if (questionExists) {
    return true;
  }
  state.professorQuestions.push({
    id: question.id,
    image: null,
    message: question.texto,
    status: question.estado,
    user: {
      name: question.creador.nombres,
      lastName: question.creador.apellidos,
      email: question.creador.email,
      id: question.creador.id,
    },
    createdAt: question.createdAt,
    responses: [],
    title: question.titulo
  });
}

export function addAnswerToQuestion(state, payload) {
  const question = state.professorQuestions.find(question => question.id === Number(payload.question));
  if (question) {
    question.responses.push({
      id: payload.id,
      image: null,
      grade: null,
      user: {
        name: payload.creador.nombres,
        lastName: payload.creador.apellidos,
        email: payload.creador.email,
        id: payload.creador.id,
      },
      createdAt: payload.createdAt,
      message: payload.texto,
    });
  }
}

/**
 * @param {object} payload Question data
 * @param {number} payload.question ID of the question to update
 * @param {string} payload.status New status of the question
 */
export function updateProfessorQuestionStatus(state, payload) {
  const question = state.professorQuestions.find(question => question.id === payload.question);
  if (question) {
    question.status = payload.status;
  }
}
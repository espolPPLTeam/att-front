export const studentQuestions = state => state.studentQuestions;

export const professorQuestions = state => state.professorQuestions;

export const findProfessorQuestionById = state => id => state.professorQuestions.find(question => question.id === id);

export const findStudentQuestionById = state => id => state.studentQuestions.find(question => question.id === id);
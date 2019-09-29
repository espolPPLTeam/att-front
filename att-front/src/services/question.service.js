import { routes, BASE_URL } from "./routes";

import ApiService from "./api.service";

const QuestionService = {
  /**
   * @param {Object} payload
   * @param {string} payload.message Text of the question
   * @param {number} payload.session ID of the session this question is for
   */
  async createStudentQuestion(payload) {
    const url = BASE_URL + routes.CREATE_STUDENT_QUESTION;
    const payloadData = {
      texto: payload.message,
      idSesion: payload.session,
    };
    try {
      const response = await ApiService.postApi(url, payloadData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },
  /**
   * @param {Object} payload
   * @param {string} payload.title Title of the question
   * @param {string} payload.message Text of the question
   * @param {number} payload.session ID of the session this question is for
   */
  async createProfessorQuestion(payload) {
    const url = BASE_URL + routes.CREATE_PROFESSOR_QUESTION;
    const payloadData = {
      titulo: payload.title,
      texto: payload.message,
      idSesion: payload.session,
    };
    try {
      const response = await ApiService.postApi(url, payloadData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },
  /**
   * @param {Object} payload
   * @param {number} payload.question Question ID
   * @param {string} payload.message Text of the answer
   */
  async answerQuestion(payload) {
    const url = BASE_URL + routes.ANSWER_QUESTION;
    const payloadData = {
      idPregunta: payload.question,
      texto: payload.message,
    };
    try {
      const response = await ApiService.postApi(url, payloadData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },
  /**
   * Updates the status of a question
   * Starts or ends the question
   *
   * @param {Object} payload
   * @param {number} payload.question Question ID
   * @param {string} payload.status New status to update
   */
  async updateProfessorQuestionStatus(payload) {
    const url = BASE_URL + routes.UPDATE_PROFESSOR_QUESTION_STATUS;
    const payloadData = {
      questionID: payload.question,
      status: payload.status,
    };
    try {
      const response = await ApiService.putApi(url, payloadData);
      return Promise.resolve(response.body.data);
    } catch(error) {
      return Promise.reject(error.body);
    }
  },
};

export default QuestionService;

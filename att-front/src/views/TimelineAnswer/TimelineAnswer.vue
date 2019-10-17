<template>
  <Layout>
    <div class="relative w-full h-full">
      <AnswerCard></AnswerCard>
      <AnswerList :responses="responses"></AnswerList>
      <ChatInput v-if="!chatInputDisabled"></ChatInput>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/Common/Layout.vue";
import ChatInput from "../../components/Common/ChatInput.vue";
import AnswerList from "./Components/AnswerList.vue";
import isEmpty from "lodash/isEmpty";
import AnswerCard from "./Components/AnswerCard";

export default {
  data() {
    return {
      isEmpty: false
    };
  },
  computed: {
    professorQuestions() {
      return this.$store.getters["questions/professorQuestions"];
    },
    studentQuestions() {
      return this.$store.getters["questions/studentQuestions"];
    },
    responses() {
      if (!isEmpty(this.professorQuestions)) {
        const questionId = this.$route.params.questionId;
        let selectedQuestion = this.professorQuestions.find(question => {
          return parseInt(question.id, 10) === parseInt(questionId, 10);
        });
        if (isEmpty(selectedQuestion)) {
          selectedQuestion = this.studentQuestions.find(question => {
            return parseInt(question.id, 10) === parseInt(questionId, 10);
          });
        }
        return selectedQuestion.responses;
      }
    },
    user() {
      return this.$store.getters["user/user"];
    },
    activeQuestion() {
      const questionId = Number(this.$route.params.questionId);
      return this.$store.getters["questions/findProfessorQuestionById"](
        questionId
      );
    },
    alreadyResponded() {
      try {
        const myResponse = this.activeQuestion.responses.find(
          response => response.user.id === this.user.id
        );
        return myResponse != null;
      } catch (error) {
        return null;
      }
    },
    chatInputDisabled() {
      const routeName = this.$route.name;
      return (
        this.user.rol != "estudiante" ||
        ((this.activeQuestion && this.activeQuestion.status != "ACTIVA") ||
          this.alreadyResponded)
      );
    }
  },
  components: {
    Layout,
    AnswerList,
    ChatInput,
    AnswerCard
  },
  mounted() {
    const sessionId = this.$route.params.sessionId;

    // If user refresh web page, then take id from url.
    if (isEmpty(this.professorQuestions)) {
      this.$store.dispatch("sessions/getSessionById", { id: sessionId });
    }
  }
};
</script>
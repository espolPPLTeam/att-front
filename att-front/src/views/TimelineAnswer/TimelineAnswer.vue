<template>
  <Layout>
    <div class="relative w-full h-full">
      <AnswerCard></AnswerCard>
      <AnswerList :responses="responses"></AnswerList>
      <ChatInput></ChatInput>
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
    responses() {
      if (!isEmpty(this.professorQuestions)) {
        const questionId = this.$route.params.questionId;
        const selectedQuestion = this.professorQuestions.find(question => {
          return parseInt(question.id, 10) === parseInt(questionId, 10);
        });
        return selectedQuestion.responses;
      }
    },
    user() {
      return this.$store.getters["user/user"];
    },
  },
  components: {
    Layout,
    AnswerList,
    ChatInput,
    AnswerCard,
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
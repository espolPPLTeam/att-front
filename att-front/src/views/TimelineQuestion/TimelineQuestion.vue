<template>
  <Layout>
    <main class="w-full h-full">
      <QuestionsTabs v-on:tabSelected="onTabSelected"></QuestionsTabs>
      <QuestionList id="questions-list" :questionType="questionType"></QuestionList>
      <ChatInput v-if="user.rol == 'estudiante'"></ChatInput>
      <ProfessorQuestion v-if="user.rol == 'profesor'"></ProfessorQuestion>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Common/Layout.vue";
import ChatInput from "../../components/Common/ChatInput.vue";
import ProfessorQuestion from "../../components/Common/ProfessorQuestion.vue";
import QuestionList from "./Components/QuestionList.vue";
import QuestionsTabs from "./Components/QuestionsTabs.vue";

import isEmpty from "lodash/isEmpty";

export default {
  components: {
    Layout,
    QuestionList,
    ChatInput,
    ProfessorQuestion,
    QuestionsTabs,
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  },
  methods: {
    onTabSelected(tab) {
      this.questionType = tab;
    }
  },
  data() {
    return {
      questionType: "student",
    };
  },
  mounted() {
    // If user refresh web page, then take id from url.
    if (isEmpty(this.professorQuestions)) {
      const sessionId = this.$route.params.sessionId;
      this.$store.dispatch("sessions/getSessionById", { id: sessionId });
    }
  }
};
</script>
<style>
  #questions-list {
    margin-top: 82px;
    margin-bottom: 68px;
  }
</style>
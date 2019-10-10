<template>
  <Layout>
    <main class="w-full">
      <QuestionList style="margin-bottom: 68px;"></QuestionList>
      <ChatInput/>
    </main>
  </Layout>
</template>

<script>
import Layout from "../../components/Common/Layout.vue";
import ChatInput from "../../components/Common/ChatInput.vue";
import QuestionList from "./Components/QuestionList.vue";

import isEmpty from "lodash/isEmpty";

export default {
  computed: {
    professorQuestions() {
      return this.$store.getters["questions/professorQuestions"];
    },
    studentQuestions() {
      return this.$store.getters["questions/studentQuestions"];
    }
  },
  components: {
    Layout,
    QuestionList,
    ChatInput
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

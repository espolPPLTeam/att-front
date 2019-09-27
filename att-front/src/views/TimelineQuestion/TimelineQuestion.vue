<template>
  <Layout>
    <div class="relative w-full h-full">
      <!-- <div class="w-1/2 mx-auto mt-12 text-xl font-bold text-grey-dark" v-if="isEmpty">
        Aquí se deberían mostrar todas las secciones.
        Si ve este mensaje es porque no tiene sessiones o se están cargando x.x
      </div>-->
      <!-- <div v-if="!noQuestions"> -->
      <QuestionList></QuestionList>
      <!-- </div> -->
      <ChatInput :hasTitle="true" />
    </div>
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

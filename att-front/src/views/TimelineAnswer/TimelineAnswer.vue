<template>
  <Layout>
    <div class="relative w-full h-full">
      <!-- <div class="w-1/2 mx-auto mt-12 text-xl font-bold text-grey-dark" v-if="isEmpty">
        Aquí se deberían mostrar todas las respuestas.
        Si ve este mensaje es porque no tiene respuestas o se están cargando x.x
      </div>-->
      <!-- <div v-if="!isEmpty"> -->
      <AnswerList :responses="responses"></AnswerList>
      <!-- </div> -->
      <ChatInput :hasTitle="false" textType="respuesta" />
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/Common/Layout.vue";
import ChatInput from "../../components/Common/ChatInput.vue";
import AnswerList from "./Components/AnswerList.vue";

import isEmpty from "lodash/isEmpty";

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
    }
  },
  components: {
    Layout,
    AnswerList,
    ChatInput
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
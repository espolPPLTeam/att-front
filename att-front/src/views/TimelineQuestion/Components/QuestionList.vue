<template>
  <main>
    <section
      v-show="questionType === 'professor'"
      v-for="(question) in this.professorQuestions"
      :key="'professor - ' + question.id"
    >
      <QuestionItem :question="question" :hasReply="true" :type="'professor'" />
    </section>
    <section
      v-show="questionType === 'student'"
      v-for="(question) in this.studentQuestions"
      :key="'student-' + question.id"
    >
      <QuestionItem :question="question" :type="'student'" />
    </section>
  </main>
</template>

<script>
import QuestionItem from "./QuestionItem.vue";
export default {
  props: {
    questionType: {
      type: String
    }
  },
  computed: {
    professorQuestions() {
      const questions = this.$store.getters["questions/professorQuestions"];
      if (this.user.rol === "profesor") {
        return questions;
      } else {
        return questions.filter(
          question =>
            question.status === "ACTIVA" || question.status === "TERMINADA"
        );
      }
    },
    studentQuestions() {
      return this.$store.getters["questions/studentQuestions"];
    },
    user() {
      return this.$store.getters["user/user"];
    }
  },
  components: {
    QuestionItem
  }
};
</script>

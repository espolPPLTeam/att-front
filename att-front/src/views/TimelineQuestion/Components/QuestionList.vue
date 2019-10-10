<template>
  <main>
    <section v-for="(question) in this.professorQuestions" :key="'professor - ' + question.id">
      <QuestionItem v-bind="question" :hasReply="true" />
    </section>
    <section v-for="(question) in this.studentQuestions" :key="'student-' + question.id">
      <QuestionItem v-bind="question" />
    </section>
  </main>
</template>

<script>
import QuestionItem from "./QuestionItem.vue";
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
    QuestionItem
  }
};
</script>

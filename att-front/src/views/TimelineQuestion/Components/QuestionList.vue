<template>
  <div>
    <div v-for="(question) in this.professorQuestions" :key="'professor - ' + question.id">
      <QuestionItem v-bind="question" :hasReply="true" />
    </div>
    <div v-for="(question) in this.studentQuestions" :key="'student-' + question.id">
      <QuestionItem v-bind="question" />
    </div>
  </div>
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

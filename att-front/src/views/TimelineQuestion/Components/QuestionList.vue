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
      type: String,
    }
  },
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

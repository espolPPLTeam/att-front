<template>
	<header>
    <v-card v-if="question">
      <v-card-title class="text-center">
        <h3 class="mx-auto">{{ question.title || "N/A" }}</h3>
      </v-card-title>
      <v-card-text>
        <header class="text-center">
          <QuestionStatus :status="question.status" class="mx-auto"></QuestionStatus>
        </header>
        <p class="text-truncate my-1">{{ question.message }}</p>
      </v-card-text>
    </v-card>
  </header>
</template>
<script>
import QuestionStatus from "../../TimelineQuestion/Components/QuestionStatus";
export default {
  components: {
    QuestionStatus,
  },
  computed: {
    question() {
      const questionId = Number(this.$route.params.questionId);
      return this.$store.getters["questions/findProfessorQuestionById"](questionId);
    },
  },
};
</script>
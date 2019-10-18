<template>
  <header>
    <v-card v-if="question">
      <v-card-title>
        <v-container grid-list-xl>
          <v-layout row justify-space-between v-if="question.title">
            <v-flex md10 xs12>
              <p class="my-auto">{{ question.title || "N/A" }}</p>
            </v-flex>
            <v-flex md2 xs6 offset-md0 offset-xs4>
              <QuestionStatus :status="question.status" class="mr-auto"></QuestionStatus>
            </v-flex>
            <v-flex xs2 offset-xs5 v-if="user.rol === 'profesor'">
              <v-btn text icon v-if="question.status === 'INACTIVA'" @click.native="updateQuestionStatus('ACTIVA')">
                <v-icon large>mdi-play</v-icon>
              </v-btn>
              <v-btn text icon v-if="question.status === 'ACTIVA'" @click.native="updateQuestionStatus('TERMINADA')">
                <v-icon large>mdi-stop</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-title>
      <hr />
      <v-card-text>
        <header class="text-center"></header>
        <p class="text-truncate my-1">{{ question.message }}</p>
      </v-card-text>
    </v-card>
  </header>
</template>
<script>
import QuestionStatus from "../../TimelineQuestion/Components/QuestionStatus";
import isEmpty from "lodash/isEmpty";

export default {
  components: {
    QuestionStatus
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    question() {
      const questionId = Number(this.$route.params.questionId);
      let question = this.$store.getters["questions/findProfessorQuestionById"](
        questionId
      );
      if (isEmpty(question)) {
        question = this.$store.getters["questions/findStudentQuestionById"](
          questionId
        );
      }
      return question;
    }
  },
  methods: {
    updateQuestionStatus(status) {
      const payload = {
        status,
        question: this.question.id,
      };
      this.$store.dispatch("questions/updateProfessorQuestionStatus", payload);
    }
  }
};
</script>
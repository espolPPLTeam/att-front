<template>
  <Layout>
    <div class="relative w-full h-full">
      <div
        class="bg-transparent underline capitalize w-1/6 ml-4 cursor-pointer text-grey hover:text-white my-2"
        rounded
        @click="goToSession"
      >Regresar</div>
      <AnswerCard></AnswerCard>
      <AnswerList :responses="responses"></AnswerList>
      <ChatInput v-if="!chatInputDisabled"></ChatInput>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/Common/Layout.vue";
import ChatInput from "../../components/Common/ChatInput.vue";
import AnswerList from "./Components/AnswerList.vue";
import isEmpty from "lodash/isEmpty";
import AnswerCard from "./Components/AnswerCard";
import toLower from "lodash/toLower";

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
    studentQuestions() {
      return this.$store.getters["questions/studentQuestions"];
    },
    responses() {
      const type = this.$route.params.type;
      let selectedQuestion;
      if (toLower(type) === "professor") {
        if (!isEmpty(this.professorQuestions)) {
          const questionId = this.$route.params.questionId;
          selectedQuestion = this.professorQuestions.find(question => {
            return parseInt(question.id, 10) === parseInt(questionId, 10);
          });
        } else {
          if (!isEmpty(this.studentQuestions)) {
            if (isEmpty(selectedQuestion)) {
              selectedQuestion = this.studentQuestions.find(question => {
                return parseInt(question.id, 10) === parseInt(questionId, 10);
              });
            }
          }
        }
        return selectedQuestion.responses;
      }
    },
    user() {
      return this.$store.getters["user/user"];
    },
    activeQuestion() {
      const questionId = Number(this.$route.params.questionId);
      return this.$store.getters["questions/findProfessorQuestionById"](
        questionId
      );
    },
    alreadyResponded() {
      try {
        const myResponse = this.activeQuestion.responses.find(
          response => response.user.id === this.user.id
        );
        return myResponse != null;
      } catch (error) {
        return null;
      }
    },
    chatInputDisabled() {
      const routeName = this.$route.name;
      return (
        this.user.rol != "estudiante" ||
        ((this.activeQuestion && this.activeQuestion.status != "ACTIVA") ||
          this.alreadyResponded)
      );
    }
  },
  components: {
    Layout,
    AnswerList,
    ChatInput,
    AnswerCard
  },
  mounted() {
    const sessionId = this.$route.params.sessionId;

    // If user refresh web page, then take id from url.
    if (isEmpty(this.professorQuestions)) {
      this.$store.dispatch("sessions/getSessionById", { id: sessionId });
    }
  },
  methods: {
    goToSession() {
      const sessionId = this.$route.params.sessionId;
      this.$router.push({
        path: `/session/${sessionId}`
      });
    }
  }
};
</script>
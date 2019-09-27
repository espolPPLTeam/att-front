<template>
  <div class="fixed pin-b w-full bg-vuetify-dark ml-1">
    <form>
      <v-container no-gutters class="w-4/5">
        <v-row no-gutters>
          <v-col sm="8" xs="8" md="8" v-if="user.rol === 'profesor' && this.hasTitle">
            <v-text-field v-model="title" outlined label="Título"></v-text-field>
          </v-col>
          <v-col sm="10" xs="10" md="9">
            <v-text-field v-model="question" outlined label="Pregunta"></v-text-field>
          </v-col>
          <v-col sm="2" xs="2" md="2" class="justify-end mt-4 ml-4">
            <v-btn text @click="createQuestions">Enviar</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </form>
  </div>
</template>
<script>
import EnterIcon from "../../Icons/EnterIcon.vue";
export default {
  data() {
    return {
      title: "",
      question: ""
    };
  },
  components: {
    EnterIcon
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  },
  props: {
    hasTitle: Boolean
  },
  methods: {
    createQuestions() {
      if (this.$route.name === "preguntas") {
        if (this.user.rol === "profesor") {
          const payload = {
            title: this.title,
            message: this.question,
            session: this.$route.params.sessionId
          };
          this.$store.dispatch("questions/createProfessorQuestion", payload);
        } else {
          const payload = {
            message: this.question,
            session: this.$route.params.sessionId
          };
          this.$store.dispatch("questions/createStudentQuestion", payload);
        }
      } else {
        const payload = {
          question: this.$route.params.questionId,
          message: this.question
        };
        this.$store.dispatch("questions/answerQuestion", payload);
        this.$store.getters["questions/professorQuestions"];
      }
    }
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
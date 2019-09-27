
<template>
  <div class="fixed w-full pin-b mb-2">
    <form>
      <v-container no-gutters>
        <v-row no-gutters>
          <v-col sm="12" xs="12" md="8" v-if="user.rol === 'profesor' && this.hasTitle">
            <v-text-field v-model="title" class="mx-1" outlined label="Título"></v-text-field>
          </v-col>
          <v-col sm="12" xs="12" md="9" class="mx-1">
            <v-text-field v-model="question" outlined label="Pregunta"></v-text-field>
          </v-col>
          <v-col sm="12" xs="12" md="2" class="justify-end mt-2 ml-2">
            <v-btn dark @click="createQuestions" color="primary">Enviar</v-btn>
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
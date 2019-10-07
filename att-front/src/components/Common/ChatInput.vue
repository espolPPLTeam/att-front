
<template>
  <div class="text-right">
    <v-dialog
      v-model="dialog"
      width="500"
      persistent
      v-if="user.rol === 'profesor'"
      @keydown.esc="dialog = false"
    >
      <template v-slot:activator="{ on }">
        <v-btn color="primary my-2 capitalize" rounded @click="dialog = true">Crear {{textType}}</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey darken-4 capitalize" primary-title>Nueva {{textType}}</v-card-title>
        <v-divider></v-divider>
        <form>
          <v-container>
            <v-text-field
              v-model="title"
              placeholder="Título de la pregunta"
              v-if="user.rol === 'profesor' && this.hasTitle"
            ></v-text-field>
            <v-textarea v-model="question" :placeholder="textType"></v-textarea>
          </v-container>
        </form>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="grey" class="underline w-1/5" text @click="dialog = false">Cancelar</v-btn>
          <v-btn
            color="primary"
            class="w-1/5"
            rounded
            @click="createQuestions"
            :disabled="!(question)"
          >Crear</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import EnterIcon from "../../Icons/EnterIcon.vue";
export default {
  data() {
    return {
      title: "",
      question: "",
      dialog: false
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
    hasTitle: Boolean,
    textType: String
  },
  methods: {
    async createQuestions() {
      if (this.$route.name === "preguntas") {
        if (this.user.rol === "profesor") {
          const payload = {
            title: this.title,
            message: this.question,
            session: this.$route.params.sessionId
          };
          await this.$store.dispatch(
            "questions/createProfessorQuestion",
            payload
          );
          this.title = "";
          this.question = "";
          this.dialog = false;
          return;
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

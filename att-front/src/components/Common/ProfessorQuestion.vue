<template>
  <footer id="chat-footer">
    <div class="text-right">
      <v-dialog
        v-model="dialog"
        width="500"
        persistent
        @keydown.esc="dialog = false"
      >
        <template v-slot:activator="{ on }">
          <v-btn color="primary my-2 capitalize" rounded @click="dialog = true">Crear pregunta</v-btn>
        </template>
        <v-card>
          <v-card-title class="headline grey darken-4 capitalize" primary-title>Nueva pregunta</v-card-title>
          <v-divider></v-divider>
          <form>
            <v-container>
              <v-text-field
                v-model="title"
                placeholder="Título de la pregunta"
              ></v-text-field>
              <v-textarea v-model="question" placeholder="Nueva pregunta"></v-textarea>
            </v-container>
          </form>
          <v-divider></v-divider>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="grey" class="underline" text @click="dialog = false">Cancelar</v-btn>
            <v-btn
              color="primary"
              rounded
              @click="createQuestions"
              :disabled="!(question)"
            >Crear</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      question: "",
      dialog: false
    };
  },
  methods: {
    async createQuestions() {
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
        
    }
  }
};
</script>

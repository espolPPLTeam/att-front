<template>
  <footer id="chat-footer">
    <section id="chat-section">
      <v-text-field
        placeholder="Escribe tu pregunta"
        v-model="question"
        append-outer-icon="mdi-send"
        @click:append-outer="createQuestions"
        dense outlined single-line solo rounded
      ></v-text-field>
    </section>
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
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  },
  methods: {
    async createQuestions() {
      if (this.question.length < 2) {
        return;
      }
      if (this.$route.name === "preguntas") {
        const payload = {
          message: this.question,
          session: this.$route.params.sessionId
        };
        await this.$store.dispatch("questions/createStudentQuestion", payload);
        this.question = "";
        this.title = "";
        window.scrollTo(0,document.body.scrollHeight);
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
<style lang="scss">
  #chat-section {
    .v-text-field__details {
      display: none;
    }
    .v-input__slot {
      margin-bottom: 0;
    }
    text-align: center;
    margin: auto;
  }
  #chat-footer {
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    padding: 12px;
  }
  @media (min-width: 576px) {
    #chat-section {
      max-width: 576px;
    }
  }
  @media (min-width: 768px) {
    #chat-section {
      max-width: 768px;
    }
  }
  @media (min-width: 992px) {
    #chat-section {
      max-width: 992px;
    }
  }
  @media (min-width: 1200px) {
    #chat-section {
      max-width: 1200px;
    }
  }
</style>

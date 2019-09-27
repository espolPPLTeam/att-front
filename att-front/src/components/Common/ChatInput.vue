<template>
  <div class="fixed pin-b w-4/5 bg-vuetify-dark ml-1">
    <v-container fluid>
      <v-row fluid no-gutters>
        <v-col sm="8" xs="8" md="8" v-if="user.rol === 'profesor' ">
          <v-text-field v-model="title" outlined label="Título"></v-text-field>
        </v-col>
        <v-col sm="10" xs="10" md="9">
          <v-text-field v-model="question" outlined label="Pregunta"></v-text-field>
        </v-col>
        <v-col sm="2" xs="2" md="2" class="justify-end mt-2 ml-4">
          <v-btn text @click="createQuestions">Enviar</v-btn>
        </v-col>
      </v-row>
    </v-container>
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
  methods: {
    createQuestions() {
      if (this.$route.name === "preguntas") {
        if (this.user.rol === "profesor") {
          console.log("Pregunta del profeshooorrrr");
        } else {
          console.log("estudiante");
        }
      } else {
        console.log("Respuestas?");
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
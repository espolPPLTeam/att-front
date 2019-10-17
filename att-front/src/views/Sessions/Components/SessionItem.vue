<template>
  <v-card class="mx-auto my-1" v-on:click="getSessionData">
    <header class="flex flex-row justify-between">
      <v-card-title>{{ this.name }}</v-card-title>
      <article class="pt-4 pr-4">
        <SessionStatus :actualState="actualState" :hasReply="true"></SessionStatus>
      </article>
    </header>
    <main class="flex flex-row justify-end">
      <v-card-text>{{this.subject.name}} - {{this.course.name}}</v-card-text>
      <v-btn
        class="mx-2 mt-2 blue darken-2 pr-4 w-1/8"
        v-if="actualState.name === 'PENDIENTE' && isProfessor"
        @click.stop="startSession"
      >Iniciar</v-btn>
      <v-btn
        class="mx-2 mt-2 red darken-4 pr-4 w-1/8"
        v-if="actualState.name === 'ACTIVA' && isProfessor"
        @click.stop="endSession"
      >Terminar</v-btn>
    </main>
  </v-card>
</template>

<script>
import Router from "vue-router";
import SessionStatus from "./SessionStatus";

import toLower from "lodash/toLower";

export default {
  data() {
    return {
      onSessionStyle: "text-blue"
    };
  },
  components: {
    SessionStatus
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    isProfessor() {
      return toLower(this.user.rol) === "profesor";
    }
  },
  props: {
    type: String,
    name: String,
    date: String,
    id: [String, Number],
    course: Object,
    subject: Object,
    actualState: Object
  },
  methods: {
    getSessionData() {
      if (toLower(this.user.rol) === "profesor") {
        this.$store.dispatch("sessions/getSessionById", { id: this.id });
        this.$router.push({ path: `session/${this.id}` });
      }
      if (toLower(this.actualState.name) !== "pendiente") {
        this.$store.dispatch("sessions/getSessionById", { id: this.id });
        this.$router.push({ path: `session/${this.id}` });
      }
    },
    startSession() {
      this.$store.dispatch("sessions/startSession", { id: this.id });
    },
    endSession() {
      this.$store.dispatch("sessions/endSession", { id: this.id });
    }
  }
};
</script>

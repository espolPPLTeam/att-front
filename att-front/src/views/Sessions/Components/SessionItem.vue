<template>
  <v-card class="mx-auto my-1" v-on:click="getSessionData">
    <div class="flex flex-row justify-between">
      <v-card-title>{{this.name}}</v-card-title>
      <SessionStatus :actualState="actualState" :hasReply="true"></SessionStatus>
    </div>
    <div class="flex flex-row justify-end">
      <v-card-text>{{this.subject.name}} - {{this.course.name}}</v-card-text>
      <v-btn
        class="mx-2 mt-2"
        v-if="actualState.name === 'PENDIENTE'"
        @click.stop="startSession"
      >Iniciar sesión</v-btn>
      <v-btn
        class="mx-2 mt-2"
        v-if="actualState.name === 'ACTIVA'"
        @click.stop="endSession"
      >Acabar sesión</v-btn>
    </div>
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
      // startSession
    },
    endSession() {
      this.$store.dispatch("sessions/endSession", { id: this.id });
    }
  }
};
</script>

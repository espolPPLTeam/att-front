<template>
  <!-- <div
    class="min-h-4 bg-white border-b border-grey-lighter relative"
    :class="{'cursor-pointer hover:shadow-inner': this.state !== 'terminated'}"
    v-on:click="goToQuestion"
  >
    <div class="min-h-4 flex justify-start">
      <div
        class="my-auto ml-4 text-lg capitalize"
        :class="{'text-grey-dark': this.state === 'terminated', 'text-blue': this.state === 'onSession'}"
      >{{this.nombre}}</div>
    </div>
    <div class="flex justify-end text-xs mr-2 text-grey-dark">{{this.date}}</div>
  </div>-->
  <v-card class="mx-auto my-1" v-on:click="goToQuestion">
    <div class="flex flex-row justify-between">
      <v-card-title>{{this.name}}</v-card-title>
      <SessionStatus :actualState="actualState"></SessionStatus>
    </div>
    <div class="flex flex-row justify-end">
      <v-card-text>{{this.subject.name}}</v-card-text>
      <v-card-text class="text-left">{{this.course.name}}</v-card-text>
    </div>
  </v-card>
</template>

<script>
import Router from "vue-router";
import SessionStatus from "./SessionStatus";

export default {
  data() {
    return {
      onSessionStyle: "text-blue"
    };
  },
  components: {
    SessionStatus
  },
  props: {
    type: String,
    name: String,
    state: String,
    date: String,
    id: [String, Number],
    course: Object,
    subject: Object,
    actualState: Object
  },
  methods: {
    goToQuestion() {
      if (this.state === "onSession") {
        this.$router.push({ path: `session/${this.id}` });
      }
    }
  }
};
</script>

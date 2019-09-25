<template>
  <!-- <div class="min-h-4 bg-white border-b border-grey-lighter relative flex flex-col justify-between">
    <div class="flex justify-start flex-col items-start max-w-17/20">
      <div class="my-2 ml-4 text-lg capitalize">{{this.title}}</div>
      <div
        class="ml-4 text-xs capitalize text-justify max-h-16 flex-wrap overflow-y-auto py-1 px-4"
        id="pruebas"
      >{{this.message}}</div>
    </div>
    <div class="flex justify-end text-xs mr-2 text-grey-dark flex-col">
      <div
        class="flex justify-end mr-2 text-blue-light hover:text-blue-dark cursor-pointer mb-1"
        v-on:click="goToAnswers"
      >Ver las ({{this.answers}}) respuesta(s)</div>
      <div class="flex justify-end mr-2 mb-1">{{this.date}}</div>
    </div>
  </div>-->
  <v-card class="mx-auto my-1" v-on:click="goToQuestion" max-height="500">
    <v-card-title>{{this.title}}</v-card-title>
    <v-card-text>{{this.message}}</v-card-text>
    <v-card-actions width="100%">
      <v-flex class="justify-end" v-on:click="goToAnswers">
        <v-btn text>Ver las ({{this.answers}}) respuesta(s)</v-btn>
      </v-flex>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      onSessionStyle: "text-blue"
    };
  },
  props: {
    type: String,
    title: String,
    message: String,
    state: String,
    date: String,
    answers: String,
    id: String
  },
  methods: {
    goToAnswers() {
      const sessionId = 123;
      this.$router.push({ path: `/question/${this.id}` });
    }
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

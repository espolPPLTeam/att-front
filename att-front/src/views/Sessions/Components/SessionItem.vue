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
      >{{this.message}}</div>
    </div>
    <div class="flex justify-end text-xs mr-2 text-grey-dark">{{this.date}}</div>
  </div>-->
  <v-card class="mx-auto my-1" v-on:click="goToQuestion">
    <v-card-title>{{this.message}}</v-card-title>
    <v-card-text>{{this.date}}</v-card-text>
  </v-card>
</template>

<script>
import Router from "vue-router";

export default {
  data() {
    return {
      onSessionStyle: "text-blue"
    };
  },
  props: {
    type: String,
    message: String,
    state: String,
    date: String,
    id: String
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

// :class="{ 'w-1/2 ': mobile, 'w-1/3': !mobile }
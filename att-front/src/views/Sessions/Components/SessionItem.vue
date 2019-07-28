<template>
  <div
    class="min-h-4 bg-white border-b border-grey-lighter relative"
    :class="{'cursor-pointer hover:shadow-inner': this.state !== 'terminated'}"
    v-on:click="prueba"
  >
    <div class="min-h-4 flex justify-start">
      <div
        class="my-auto ml-4 text-lg capitalize"
        :class="{'text-grey-dark': this.state === 'terminated', 'text-blue': this.state === 'onSession'}"
      >{{this.message}}</div>
    </div>
    <div class="flex justify-end text-xs mr-2 text-grey-dark">{{this.date}}</div>
  </div>
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
    date: String
  },
  methods: {
    prueba() {
      if (this.state === "onSession") {
        const sessionId = 123;
        this.$router.push({ path: `session/${sessionId}` });
      }
    }
  }
};
</script>

// :class="{ 'w-1/2 ': mobile, 'w-1/3': !mobile }
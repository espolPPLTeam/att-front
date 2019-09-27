<template>
  <!-- <div class="min-h-4 bg-white border-b border-grey-lighter relative flex flex-col justify-between">
    <div class="flex justify-start flex-col items-start my-auto">
      <div
        class="ml-4 text-xs capitalize text-justify max-h-16 flex-wrap overflow-y-auto py-1 px-4"
        id="pruebas"
      >{{this.message}}</div>
  </div>-->
  <!-- <div class="flex justify-end text-xs mr-2 text-grey-dark flex-col">
      <div class="flex justify-end mr-2 mb-1">{{this.date}}</div>
  </div>
  </div>-->
  <v-card class="mx-auto my-1" max-height="500">
    <v-card-text>{{this.message}}</v-card-text>
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
    message: String,
    date: String
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

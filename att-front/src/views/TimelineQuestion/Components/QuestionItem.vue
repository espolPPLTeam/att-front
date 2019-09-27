<template>
  <v-card class="mx-auto my-1" max-height="500">
    <v-card-title v-if="this.title">{{this.title}}</v-card-title>
    <v-card-text>{{this.message}}</v-card-text>
    <v-card-actions width="100%">
      <v-flex class="justify-end" v-on:click="goToAnswers">
        <v-btn text v-if="hasReply">Ver las ({{this.responses.length}}) respuesta(s)</v-btn>
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
  computed: {
    user() {
      return this.$store.getters["user/user"];
    }
  },
  props: {
    type: String,
    title: String,
    message: String,
    state: String,
    date: String,
    responses: Array,
    id: [String, Number],
    hasReply: Boolean
  },
  methods: {
    goToAnswers() {
      const sessionId = this.$route.params.sessionId;
      this.$router.push({ path: `/question/${sessionId}/${this.id}` });
    }
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

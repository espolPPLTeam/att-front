<template>
  <div>
    <div v-for="(session, index) in sessions" :key="index">
      <SessionItem v-bind="session" />
    </div>
  </div>
</template>

<script>
import SessionItem from "./SessionItem.vue";
export default {
  components: {
    SessionItem
  },
  computed: {
    sessions() {
      return this.$store.getters["sessions/allSessions"];
    },
    user() {
      return this.$store.getters["user/user"];
    }
  }
};
</script>

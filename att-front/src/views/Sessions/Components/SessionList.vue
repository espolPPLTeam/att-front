<template>
  <div>
    <div v-for="(session, index) in this.sessions" :key="index">
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
  data() {
    return {
      sessions: [
        {
          type: "text",
          message: "Tercera sessión",
          state: "active",
          date: "02/02/19",
          id: "123"
        },
        {
          type: "text",
          message: "Segunda sessión, en proceso.",
          state: "onSession",
          date: "12/01/19",
          id: "235"
        },
        {
          type: "text",
          message: "Primera sessión, Sessión terminada",
          state: "terminated",
          date: "01/01/19",
          id: "445"
        }
      ]
    };
  }
};
</script>

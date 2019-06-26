<template>
  <div>
    <div v-for="session in this.sessions">
      <SessionItem v-bind="session"/>
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
          date: "02/02/19"
        },
        {
          type: "text",
          message: "Segunda sessión, en proceso.",
          state: "onSession",
          date: "12/01/19"
        },
        {
          type: "text",
          message: "Primera sessión, Sessión terminada",
          state: "terminated",
          date: "01/01/19"
        }
      ]
    };
  }
};
</script>

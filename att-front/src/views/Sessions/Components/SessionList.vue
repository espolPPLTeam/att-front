<template>
  <div>
    <div v-for="(session, index) in sessions" :key="index">
      <SessionItem v-bind="session" @click.native="switchChatRooms(session)" />
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
      previousSession: null,
    };
  },
  computed: {
    sessions() {
      return this.$store.getters["sessions/allSessions"];
    },
    user() {
      return this.$store.getters["user/user"];
    }
  },
  methods: {
    switchChatRooms(session) {
      const socketPayload = {
        type: "SESSION",
        id: "",
        rolId: this.user.rolId,
      };
      if (this.previousSession) {
        socketPayload["id"] = this.previousSession;
        this.$store.commit("sockets/leaveChatRoom", socketPayload);
      }
      socketPayload["id"] = session.id;
      this.$store.commit("sockets/joinChatRoom", socketPayload);
      this.previousSession = session.id;
    },
  }
};
</script>

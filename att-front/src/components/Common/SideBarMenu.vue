<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item @click="logout">
          <v-list-item-content>
            <v-list-item-title class="text-x3">Cerrar sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-on:click="goToSession(course)" v-for="course in courses" :key="course.id">
          <v-list-item-content>
            <v-list-item-title class="text-x3">{{course.subjectName}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ask The Teacher</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import isEmpty from "lodash/isEmpty";
import first from "lodash/first";

export default {
  components: {
    SidebarMenu
  },
  computed: {
    courses() {
      return this.$store.getters["user/courses"];
    },
    sessions() {
      return this.$store.getters["sessions/allSessions"];
    }
  },
  data: () => ({
    drawer: null,
    previousCourse: null
  }),
  methods: {
    goToSession(course) {
      this.switchChatRooms(course);
      this.$store.dispatch("sessions/getSessions", { paralelo: course.id });
      this.$router.push({ path: `/` });
    },
    switchChatRooms(course) {
      if (this.previousCourse) {
        this.$store.commit("sockets/leaveChatRoom", this.previousCourse);
      }
      this.$store.commit("sockets/joinChatRoom", course.id);
      this.previousCourse = course.id;
    },
    logout() {
      this.$store.dispatch("user/logout");
      this.$router.push({ path: `/login` });
    }
  },
  mounted() {
    if (!isEmpty(this.courses) && isEmpty(this.sessions)) {
      const course = first(this.courses);
      this.switchChatRooms(course);
      this.$store.dispatch("sessions/getSessions", { paralelo: course.id });
    }
  }
};
</script>

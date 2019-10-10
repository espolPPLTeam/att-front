<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped temporary>
      <v-list dense>
        <v-list-item two-line>
          <v-list-item-avatar color="grey">
            <!-- <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"> -->
            <span class="white--text headline">{{ user.nombres[0] }}{{ user.apellidos[0] }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-x3">{{ user.nombres }} {{ user.apellidos }}</v-list-item-title>
            <v-list-item-subtitle class="text-x3">{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-on:click="goToSession(course)" v-for="course in courses" :key="course.id">
          <v-list-item-content>
            <v-list-item-title class="text-x3">{{course.subjectName}} - {{ course.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-content>
            <v-list-item-title class="text-x3">Cerrar sesión</v-list-item-title>
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
    },
    user() {
      return this.$store.getters["user/user"];
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
      const socketPayload = {
        type: "COURSE",
        id: ""
      };
      if (this.previousCourse) {
        socketPayload["id"] = this.previousCourse;
        this.$store.commit("sockets/leaveChatRoom", socketPayload);
      }
      socketPayload["id"] = course.id;
      this.$store.commit("sockets/joinChatRoom", socketPayload);
      this.previousCourse = course.id;
    },
    logout() {
      const socketPayload = {
        type: "COURSE",
        id: this.previousCourse
      };
      this.$store.commit("sockets/leaveChatRoom", socketPayload);
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

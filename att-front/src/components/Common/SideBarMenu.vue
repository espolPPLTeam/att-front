<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
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
    drawer: null
  }),
  methods: {
    goToSession(course) {
      this.$store.dispatch("sessions/getSessions", { paralelo: course.id });
      this.$router.push({ path: `/` });
    }
  },
  mounted() {
    if (!isEmpty(this.courses) && isEmpty(this.sessions)) {
      const course = first(this.courses);
      this.$store.dispatch("sessions/getSessions", { paralelo: course.id });
    }
  }
};
</script>

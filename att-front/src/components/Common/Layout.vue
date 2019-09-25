<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-on:click="goToSession">
          <v-list-item-content>
            <v-list-item-title>Física 2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item @click>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ask The Teacher</v-toolbar-title>
    </v-app-bar>

    <v-container class="fill-height" fluid>
      <slot></slot>
    </v-container>

    <!-- <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import SideBarMenu from "./SideBarMenu.vue";
import Header from "./Header.vue";

export default {
  components: {
    SideBarMenu,
    Header
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    goToSession() {
      this.$router.push({ path: `/` });
    }
  }
};
</script>
 <!--
<template>
  <div class="relative h-screen">
    <Header />
    <div class="flex pt-12 h-full">
      <SideBarMenu />
      <div class="w-full h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
-->
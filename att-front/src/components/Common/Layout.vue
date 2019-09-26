<template>
  <v-app id="inspire">
    <SideBarMenu></SideBarMenu>

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
  // created() {
  //   this.$vuetify.theme.dark = true;
  // },
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
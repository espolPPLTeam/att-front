<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Error></Error>
  </v-app>
</template>

<script>
import Error from "./components/Common/Error.vue";
export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Error,
  },
};
</script>

<template>
  <v-chip
    :color="chipColor"
    outlined
    pill
  >{{actualState.name}}</v-chip>
</template>

<script>
import Router from "vue-router";
import toLower from "lodash/toLower";

export default {
  props: {
    actualState: Object
  },
  computed: {
    chipColor() {
      if (toLower(this.actualState.name) === toLower("PENDIENTE")) {
        return "orange darken-2";
      } else if (toLower(this.actualState.name) === toLower("AcTiVa")) {
        return "primary";
      } else {
        return "blue-grey lighten-4";
      }
    }
  }
};
</script>

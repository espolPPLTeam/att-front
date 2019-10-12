<template>
  <v-chip
    :color="chipColor"
    outlined
    pill
  >{{ status }}</v-chip>
</template>

<script>

export default {
  props: {
    status: String,
  },
  computed: {
    chipColor() {
      if (this.status ==="PENDIENTE") {
        return "orange darken-2";
      } else if (this.status === "ACTIVA") {
        return "primary";
      } else {
        return "blue-grey lighten-4";
      }
    }
  }
};
</script>

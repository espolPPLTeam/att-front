<template>
  <v-dialog v-model="error.isActive" persistent max-width="500">
    <v-card>
      <v-card-title class="headline">Error</v-card-title>
      <v-card-text>{{ error.message }}</v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="green darken-1" text @click="closeDialog">Ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters["app/error"];
    }
  },
  methods: {
    closeDialog() {
      this.$store.commit("app/setError", { isActive: false, message: "" });
    }
  }
};
</script>
<template>
  <header id="questions-header">
    <main id="tabs-section" class="w-full">
      <header
        v-if="activeSession"
        class="text-center py-1 text-uppercase flex flex-col"
        style="background-color: #424242;"
      >
        <div
          class="bg-transparent w-1/6 ml-4 cursor-pointer text-grey hover:text-white"
          rounded
          @click="goToSession"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </div>
        <div class="my-auto">{{ activeSession.name }}</div>
      </header>
      <v-tabs fixed-tabs @change="onChange">
        <v-tab>
          <span class="caption">{{ firstTabText }}</span>
        </v-tab>
        <v-tab>
          <span class="caption">{{ secondTabText }}</span>
        </v-tab>
      </v-tabs>
    </main>
  </header>
</template>
<script>
export default {
  methods: {
    onChange(val) {
      const tab = val === 0 ? "student" : "professor";
      this.$emit("tabSelected", tab);
    },
    goToSession() {
      this.$router.push({
        path: `/`
      });
    }
  },
  computed: {
    activeSession() {
      const sessionId = Number(this.$route.params.sessionId);
      return this.$store.getters["sessions/getSessionById"](sessionId);
    },
    user() {
      return this.$store.getters["user/user"];
    },
    firstTabText() {
      if (this.user.rol === "estudiante") {
        return "Mis Preguntas";
      } else if (this.user.rol === "profesor") {
        return "Preguntas de Estudiantes";
      } else {
        return "";
      }
    },
    secondTabText() {
      if (this.user.rol === "estudiante") {
        return "Preguntas del Profesor";
      } else if (this.user.rol === "profesor") {
        return "Mis Preguntas";
      } else {
        return "";
      }
    }
  }
};
</script>
<style lang="scss">
#questions-header {
  top: 48px;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
}
#tabs-section {
  margin: auto;
}
@media (min-width: 576px) {
  #tabs-section {
    max-width: 576px;
  }
}
@media (min-width: 768px) {
  #tabs-section {
    max-width: 768px;
  }
}
@media (min-width: 992px) {
  #tabs-section {
    max-width: 992px;
  }
}
@media (min-width: 1200px) {
  #tabs-section {
    max-width: 1200px;
  }
}
</style>
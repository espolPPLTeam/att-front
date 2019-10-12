<template>
  <header id="questions-header">
    <v-tabs 
      height="42" 
      fixed-tabs 
      id="tabs-section"
      @change="onChange">
      <v-tab>
        <span class="caption">Mis Preguntas</span>
      </v-tab>
      <v-tab>
        <span class="caption">Preguntas del Profesor</span>
      </v-tab>
    </v-tabs>
  </header>
</template>
<script>
export default {
  methods: {
    onChange(val) {
      const tab = (val === 0) ? "student" : "professor";
      this.$emit("tabSelected", tab);
    }
  },
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
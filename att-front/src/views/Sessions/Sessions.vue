<template>
  <Layout>
    <div class="w-full h-full">
      <CreateSession></CreateSession>
      <div class="w-1/2 mx-auto mt-12 text-xl font-bold text-grey-dark" v-if="isEmpty">
        Aquí se deberían mostrar todas las secciones.
        Si ve este mensaje es porque no tiene sessiones o se están cargando x.x
      </div>
      <div v-if="!isEmpty">
        <SessionList sessions />
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/Common/Layout.vue";
import SessionList from "./Components/SessionList.vue";
import isEmpty from "lodash/isEmpty";
import CreateSession from "./Container/CreateSession.vue";

export default {
  data() {
    return {
      IsOpen: false
    };
  },
  computed: {
    isEmpty() {
      return isEmpty(this.$store.getters["sessions/allSessions"]);
    }
  },
  components: {
    Layout,
    SessionList,
    CreateSession
  },
  methods: {}
};
</script>

<template>
  <Layout>
    <div class="w-full h-full">
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

export default {
  data() {
    return {
      isEmpty: false
    };
  },
  components: {
    Layout,
    SessionList
  },
  methods: {
    /**
     * @param {object} session
     * @param {number} session.id
     * @param {string} session.nombre
     * @param {Date} session.fecha_inicio
     * @param {Date} session.fecha_fin
     * @param {object} session.estadoActual
     * @param {number} session.estadoActual.id
     * @param {string} session.estadoActual.nombre
     * @param {object} session.paralelo
     * @param {number} session.paralelo.id
     * @param {string} session.paralelo.nombre
     * @param {object} session.materia
     * @param {number} session.materia.id
     * @param {string} session.materia.nombre
     */
  }
};
</script>

<template>
  <Layout>
    <div class="relative w-full h-full">
      <div class="w-1/2 mx-auto mt-12 text-xl font-bold text-grey-dark" v-if="isEmpty">
        Aquí se deberían mostrar todas las respuestas.
        Si ve este mensaje es porque no tiene respuestas o se están cargando x.x
      </div>
      <div v-if="!isEmpty">
        <AnswerList></AnswerList>
      </div>
      <ChatInput />
    </div>
  </Layout>
</template>

<script>
import Layout from "../../components/Common/Layout.vue";
import ChatInput from "../../components/Common/ChatInput.vue";
import AnswerList from "./Components/AnswerList.vue";
export default {
  data() {
    return {
      isEmpty: false
    };
  },
  components: {
    Layout,
    AnswerList,
    ChatInput
  }
};
</script>
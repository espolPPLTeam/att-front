<template>
  <!-- <div class="fixed pin-b py-auto px-2 h-18 bg-grey w-full flex item-center">
    <div class="flex flex-col w-full">
      <input
        class="item-center w-2/3 rounded-lg bg-white mt-2 px-4 overflow-auto resize-none"
        placeholder="Título"
      />
      <div class="flex w-full">
        <textarea
          class="item-center w-full py-2 rounded-lg bg-white mt-2 mb-2 px-4 overflow-auto resize-none"
          placeholder="Descripción"
        />
        <div class="mx-2 my-auto hover:text-green-darkest cursor-pointer">
          <EnterIcon width="20" hegigth="20" class="fill-current" />
        </div>
      </div>
    </div>
  </div>-->
  <div class="fixed pin-b w-4/5 bg-vuetify-dark ml-1">
    <v-container fluid>
      <v-row fluid no-gutters>
        <v-col sm="8" xs="8" md="8">
          <v-text-field v-model="firstname" outlined label="Título"></v-text-field>
        </v-col>
        <v-col sm="10" xs="10" md="9">
          <v-text-field v-model="lastname" outlined label="Pregunta"></v-text-field>
        </v-col>
        <v-col sm="2" xs="2" md="2" class="justify-end mt-2 ml-4">
          <v-btn text>Enviar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import EnterIcon from "../../Icons/EnterIcon.vue";
export default {
  components: {
    EnterIcon
  }
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
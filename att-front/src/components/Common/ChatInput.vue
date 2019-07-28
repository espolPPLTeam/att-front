<template>
  <div class="absolute pin-b py-auto px-2 h-18 bg-grey w-full flex item-center">
    <div class="flex flex-col w-full">
      <input
        class="item-center w-2/3 rounded-lg bg-white mt-2 px-4 overflow-auto resize-none"
        placeholder="Título"
      >
      <div class="flex w-full">
        <textarea
          class="item-center w-full py-2 rounded-lg bg-white mt-2 mb-2 px-4 overflow-auto resize-none"
          placeholder="Descripción"
        />
        <div class="mx-2 my-auto hover:text-green-darkest cursor-pointer">
          <EnterIcon width="20" hegigth="20" class="fill-current"/>
        </div>
      </div>
    </div>
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
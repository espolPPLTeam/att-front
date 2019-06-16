<template>
  <input
    class="w-2/3 border-b border-blue-dark py-2 px-2 appearance-none focus:outline-none text-lg bg-transparent"
    :value="this.value"
    :placeholder="this.placeholder"
    @change="this.change"
  >
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    value: String,
    change: Function
  }
};
</script>

<style scoped>
</style>

<template>
  <input
    class="w-2/3 border-b border-blue-dark py-2 px-2 appearance-none focus:outline-none text-lg bg-transparent"
    :class="{width}"
    :value="this.value"
    :placeholder="this.placeholder"
    @input="onInputChange($event.target.value)"
    :type="type"
    :disabled="disabled"
  >
</template>

<script>
export default {
  props: {
    title: String,
    placeholder: String,
    value: String,
    change: Function,
    width: String,
    type: {
      type: String,
      default: "text",
      description: "Type of the input element"
    },
    disabled: {
      type: Boolean,
      default: false,
      description: "Controls if the input element is disabled"
    }
  },
  computed: {
    hasClass() {
      this.width ? this.width : "w-2/3";
    },
  },
  methods: {
    /** Para hacer el 2-way data binding usando v-model */
    onInputChange(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped>
</style>

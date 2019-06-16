<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="this.height"
    :width="this.width"
    :viewBox="this.viewBox"
    :className="this.className"
  >
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: {
    width: String,
    height: String,
    viewBox: String,
    className: String
  }
};
</script>

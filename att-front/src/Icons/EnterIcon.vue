<template>
  <Icon viewBox="0 0 20 20" :class="this.className" :width="this.width" :height="this.height">
    <path d="M0 0l20 10-20 10v-20zM0 8v4l10-2-10-2z"></path>
  </Icon>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "EnterIcon",
  components: {
    Icon
  },
  props: {
    width: String,
    height: String,
    className: String
  }
};
</script>

<template>
  <div>
    <Header/>
    <div class="flex pt-12">
      <SideBarMenu/>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SideBarMenu from "./SideBarMenu.vue";
import Header from "./Header.vue";

export default {
  components: {
    SideBarMenu,
    Header
  }
};
</script>

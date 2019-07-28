<template>
  <div class="relative h-screen">
    <Header/>
    <div class="flex pt-12 h-full">
      <SideBarMenu/>
      <div class="w-full h-full">
        <slot></slot>
      </div>
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

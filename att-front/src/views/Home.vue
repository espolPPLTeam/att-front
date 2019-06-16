<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SideBarMenu></SideBarMenu>
    <div class="w-full flex justify-center">
      <div class="w-1/4 bg-grey-lightest m-4 p-12 h-9 rounded-lg">
        <Label text="Usuario: "/>
        <Input title="Aquí va la movidita" value="1" placeholder="Hola mundo" :change="prueba"/>
      </div>
      <TrashIcon width="20" hegigth="20" class="fill-current text-red"></TrashIcon>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Input from "./../components/Common/Input.vue";
import Label from "./../components/Common/Label.vue";
import TrashIcon from "./../Icons/TrashIcon.vue";
import SideBarMenu from "@/components/Common/SideBarMenu.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    Input,
    Label,
    TrashIcon,
    SideBarMenu
  },
  methods: {
    prueba: () => {
      console.log("hola mundo :D");
    }
  }
};
</script>

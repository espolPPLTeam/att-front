<template>
  <div class="w-full flex h-screen" :class="{ 'flex-col': mobile }">
    <div class="bg-black relative" :class="{ 'w-full h-24': mobile, 'w-2/3': !mobile }"></div>
    <div
      :class="{ 'w-full': mobile, 'w-1/3': !mobile }"
      class="bg-white relative my-auto flex flex-col justify-center"
    >
      <div class="text-lg text-gray-dark font-bold mb-8">Iniciar Sesión</div>
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center my-4">
          <Label text="Usuario: " v-if="!mobile"/>
          <Input title="Usuario" placeholder="Usuario" v-model="email"/>
        </div>
        <div class="flex justify-center my-4">
          <Label text="Password: " v-if="!mobile"/>
          <Input title="password" placeholder="****" type="password" v-model="clave"/>
        </div>
      </div>
      <button
        class="btn btn-blue mx-auto mt-4"
        :class="{ 'w-1/2 ': mobile, 'w-1/3': !mobile }"
        @click="login"
        :disabled="disabled"
      >Iniciar sessión</button>
      <div
        class="text-grey-dark text-sm mt-4 hover:text-grey-darker text-center mr-4 cursor-pointer hover:text-underline font-bold"
      >¿Olvidaste tu contraseña?</div>
    </div>
  </div>
</template>

<script>
import Label from "@/components/Common/Label.vue";
import Input from "@/components/Common/Input.vue";
export default {
  name: "Login",
  components: {
    Label,
    Input
  },
  data() {
    return {
      mobile: true,
      email: "",
      clave: "",
      loading: false
    };
  },
  computed: {
    pruebas() {
      return this.mobile ? " w-full " : " w-1/3 ";
    },
    invalidData() {
      return (
        !this.email || this.email == "" ||
        !this.clave || this.clave == ""
      );
    },
    disabled() {
      return this.loading || this.invalidData;
    }
  },
  methods: {
    prueba: () => {
      console.log("hola mundo :D");
    },
    login() {
      this.loading = true;
      const payload = {
        email: this.email,
        clave: this.clave
      };
      this.$store.dispatch("user/login", payload)
        .then(() => {
          this.loading = false;
          this.$router.push({ name: "home" });
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

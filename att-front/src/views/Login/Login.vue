<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" label="Login" name="login" type="text"></v-text-field>
              <v-text-field
                id="password"
                v-model="clave"
                label="Password"
                name="password"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn
              color="primary"
              :disabled="invalidData || loading"
              :loading="loading"
              @click="login"
            >Iniciar Sesión</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      mobile: true,
      email: "",
      clave: "",
      loading: false
    };
  },
  computed: {
    invalidData() {
      return !this.email || this.email == "" || !this.clave || this.clave == "";
    },
    disabled() {
      return this.loading || this.invalidData;
    }
  },
  methods: {
    login() {
      this.loading = true;
      const payload = {
        email: this.email,
        clave: this.clave
      };
      this.$store
        .dispatch("user/login", payload)
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

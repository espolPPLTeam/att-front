
<template>
  <div class="text-right">
    <v-dialog v-model="dialog" width="500" persistent v-if="user.rol === 'profesor' ">
      <template v-slot:activator="{ on }">
        <v-btn color="primary my-2" rounded @click="dialog = true">Nueva sesión</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey darken-4" primary-title>Nueva sesión</v-card-title>
        <v-divider></v-divider>
        <form>
          <v-container>
            <v-text-field v-model="sessionName" placeholder="Nombre de la sesión"></v-text-field>
            <v-select v-model="selectedCourse" :items="courses" label="Paralelos"></v-select>
          </v-container>
        </form>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="grey" class="underline w-1/5" text @click="dialog = false">Cancelar</v-btn>
          <v-btn
            color="primary"
            class="w-1/5"
            rounded
            @click="createSession"
            :disabled="!(sessionName && selectedCourse)"
          >Crear</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    sessionName: "",
    selectedCourse: ""
    // course: ["Foo", "Bar", "Fizz", "Buzz"]
  }),
  computed: {
    courses() {
      const cursos = this.$store.getters["user/courses"].map(course => {
        return { text: course.subjectName, value: course.id };
      });
      return cursos;
    },
    //rol
    user() {
      return this.$store.getters["user/user"];
    }
  },
  methods: {
    async createSession() {
      const course = this.$store.getters["user/courses"].find(iterator => {
        return iterator.id === this.selectedCourse;
      });
      const payload = {
        name: this.sessionName,
        course: this.selectedCourse,
        courseName: course.name,
        subject: course.subjectId,
        subjectName: course.subjectName
      };
      await this.$store.dispatch("sessions/createSession", payload);
      this.dialog = false;
    }
  }
};
</script>

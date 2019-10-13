<template>
  <v-card class="mx-auto my-1 pointer" max-height="500">
    <v-card-text class="py-1">
      <!-- USER-NAME -->
      <section v-if="user.rol === 'profesor'">
        <label v-show="!showName" class="mr-3">Anónimo</label>
        <v-btn text icon v-show="!showName" @click="showName=!showName">
          <v-icon small>mdi-eye-outline</v-icon>
        </v-btn>
        <label v-show="showName" class="mr-3">{{ answer.user.name }} {{ answer.user.lastName }}</label>
        <v-btn text icon v-show="showName" @click="showName=!showName">
          <v-icon small>mdi-eye-off-outline</v-icon>
        </v-btn>
      </section>
      <!-- /USER-NAME -->
      <!-- MESSAGE -->
      <section class="white--text">
        <p class="text-truncate my-1">{{ answer.message }}</p>
      </section>
      <!-- /MESSAGE -->
    </v-card-text>
    <footer class="py-1">
      <v-card-text class="caption py-1 text-end">{{ answerDate }}</v-card-text>
    </footer>
  </v-card>
</template>

<script>
import DateTimeUtil from "@/utils/dateTime";
export default {
  data() {
    return {
      onSessionStyle: "text-blue",
      showName: false,
    };
  },
  props: {
    answer: Object,
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    answerDate() {
      return DateTimeUtil.timeFromDate(this.answer.createdAt);
    },
  },
};
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

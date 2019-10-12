<template>
  <v-card class="mx-auto my-1" max-height="500">
    <v-card-text
      class="py-1"
      v-if="type === 'student' && user.rol === 'profesor'"
    >
      <label v-show="!showName" class="mr-3">Anónimo</label>
      <v-btn text icon v-show="!showName" @click="showName=!showName">
        <v-icon small>mdi-eye-outline</v-icon>
      </v-btn>
      <label v-show="showName" class="mr-3">{{ this.question.user.name }} {{ this.question.user.lastName }}</label>
      <v-btn text icon v-show="showName" @click="showName=!showName">
        <v-icon small>mdi-eye-off-outline</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-title v-if="question.title">{{ this.question.title }}</v-card-title>
    <v-card-text class="white--text">{{ this.question.message }}</v-card-text>
    <v-card-actions width="100%" v-if="type === 'professor'">
      <v-flex class="justify-end" v-on:click="goToAnswers">
        <v-btn text v-if="hasReply">Ver las ({{ this.question.responses.length }}) respuesta(s)</v-btn>
      </v-flex>
    </v-card-actions>
    <v-card-text class="caption py-1 text-end">{{ this.questionDate }}</v-card-text>
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
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    questionDate() {
      return DateTimeUtil.timeFromDate(this.question.createdAt);
    }
  },
  props: {
    question: {
      title: {
        type: String
      },
      message: {
        type: String,
        required: true,
      },
      createdAt: {
        type: [String, Date],
        required: true,
      },
      id: {
        type: Number,
      },
      user: {
        name: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        }
      },
      responses: Array,
    },
    hasReply: Boolean,
    type: {
      type: String,
      required: true,
    }
  },
  methods: {
    goToAnswers() {
      const sessionId = this.$route.params.sessionId;
      this.$router.push({ path: `/question/${sessionId}/${this.question.id}` });
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

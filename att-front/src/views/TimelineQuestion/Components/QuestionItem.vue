<template>
  <v-card class="mx-auto my-1 pointer" max-height="500" @click.native="goToAnswers">
    <v-card-text class="py-1">
      <!-- USER-NAME -->
      <section v-if="type === 'student' && user.rol === 'profesor'">
        <label v-show="!showName" class="mr-3">Anónimo</label>
        <v-btn text icon v-show="!showName" @click="showName=!showName">
          <v-icon small>mdi-eye-outline</v-icon>
        </v-btn>
        <label v-show="showName" class="mr-3">{{ question.user.name }} {{ question.user.lastName }}</label>
        <v-btn text icon v-show="showName" @click="showName=!showName">
          <v-icon small>mdi-eye-off-outline</v-icon>
        </v-btn>
      </section>
      <!-- /USER-NAME -->
      <!-- TITLE-STATUS -->
      <section class="flex flex-row justify-between" v-if="type === 'professor'">
        <article class="py-2">
          <h3>{{ question.title }}</h3>
        </article>
        <article class="py-2">
          <QuestionStatus :status="question.status"></QuestionStatus>
        </article>
      </section>
      <!-- /TITLE-STATUS -->
      <!-- MESSAGE -->
      <section class="white--text">
        <p class="text-truncate my-1">{{ question.message }}</p>
      </section>
      <!-- /MESSAGE -->
    </v-card-text>
    <footer class="py-1">
      <v-card-text
        class="caption py-1"
        v-if="type === 'professor' && hasReply"
      >{{ question.responses.length }} respuestas - {{ questionDate }}</v-card-text>
      <v-card-text v-if="type === 'student'" class="caption py-1 text-end">{{ questionDate }}</v-card-text>
    </footer>
  </v-card>
</template>

<script>
import DateTimeUtil from "@/utils/dateTime";
import QuestionStatus from "./QuestionStatus";
export default {
  data() {
    return {
      onSessionStyle: "text-blue",
      showName: false
    };
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    questionDate() {
      return DateTimeUtil.timeFromDate(this.question.createdAt);
    },
    activeSession() {
      const sessionId = Number(this.$route.params.sessionId);
      return this.$store.getters["sessions/getSessionById"](sessionId);
    }
  },
  props: {
    question: {
      title: {
        type: String
      },
      message: {
        type: String,
        required: true
      },
      createdAt: {
        type: [String, Date],
        required: true
      },
      id: {
        type: Number
      },
      user: {
        name: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        },
        id: {
          type: Number,
          required: true
        }
      },
      responses: Array
    },
    hasReply: Boolean,
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    goToAnswers() {
      if (this.type === "professor") {
        const sessionId = this.$route.params.sessionId;
        this.$router.push({
          path: `/question/${sessionId}/${this.type}/${this.question.id}`
        });
      // } else if (this.type === "student") {
      //   if (
      //     this.activeSession &&
      //     this.activeSession.actualState.name === "ACTIVA"
      //   ) {
      //     const sessionId = this.$route.params.sessionId;
      //     this.$router.push({
      //       path: `/question/${sessionId}/${this.type}/${this.question.id}`
      //     });
      //   }
      // }
      }
    }
  },
  components: {
    QuestionStatus
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>

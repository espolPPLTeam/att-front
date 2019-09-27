import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import app from "./app";
import sessions from "./sessions";
import questions from "./questions";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      app,
      sessions,
      questions,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  return Store;
};
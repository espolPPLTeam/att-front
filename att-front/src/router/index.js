import Vue from "vue";
import Router from "vue-router";

// import Home from "./views/Home.vue";
import Login from "../views/Login/Login.vue";
import Sessions from "../views/Sessions/Sessions.vue";
import TimeLineQuestion from "../views/TimelineQuestion/TimelineQuestion.vue";

import AuthGuard from "./authGuards";

Vue.use(Router);

const Rout = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "home",
      component: Sessions,
      meta: {
        requiresLogin: true
      },
    },
    {
      path: "/session/:sessionId",
      name: "preguntas",
      component: TimeLineQuestion,
      meta: {
        requiresLogin: true
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      meta: {
        requiresLogin: true
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});

Rout.beforeEach(AuthGuard.generalGuard);

export default Rout;
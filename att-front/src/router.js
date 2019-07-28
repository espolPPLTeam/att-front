import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Login from "./views/Login/Login.vue";
import Sessions from "./views/Sessions/Sessions.vue";
import TimeLineQuestion from "./views/TimelineQuestion/TimelineQuestion.vue";

Vue.use(Router);

const authGuard = (to, from, next) => {
  const loggedIn = localStorage.getItem("jwt");
  if (loggedIn) {
    //which means that it have the jwt at local storage
    // Here it suppose to call for all the info of the local storage and put it on the Store service.
    next();
  } else {
    //Should go to the login view.
    next("/login");
  }
}

const Rout = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "home",
      component: Sessions
    },
    {
      path: "/session/:sessionId",
      name: "Preguntas",
      component: TimeLineQuestion
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      beforeEnter: authGuard,
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

export default Rout;
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
import About from "./views/about";
import User from "./views/user";
import Style from "./views/style";
import Styles from "./views/styles";
import Way from "./views/way";
import Ways from "./views/ways";
import Days from "./views/days";
import Day from "./views/day";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/user",
      name: "user",
      component: User
    },
    {
      path: "/style",
      name: "style",
      component: Style
    },
    {
      path: "/styles",
      name: "styles",
      component: Styles
    },
    {
      path: "/way",
      name: "way",
      component: Way
    },
    {
      path: "/ways",
      name: "ways",
      component: Ways
    },
    {
      path: "/days",
      name: "days",
      component: Days
    },
    {
      path: "/day",
      name: "day",
      component: Day
    }
  ]
});

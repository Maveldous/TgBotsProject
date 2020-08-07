import Vue from "vue";
import Router from "vue-router";

import mainPage from "../pages/mainPage";
import formComponent from "../components/formComponent";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: mainPage
    },
    {
      path: "/form",
      name: "form",
      component: formComponent
    }
  ]
});

export default router;

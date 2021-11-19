require("./bootstrap");
import "bootstrap/dist/css/bootstrap.min.css";

import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify"; // path to vuetify export
import router from "./routers";

console.log("log.debug");

Vue.use(VueRouter);
new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");

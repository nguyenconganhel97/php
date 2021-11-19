import VueRouter from "vue-router";
import Home from "../components/Home";
import ExampleComponent from "../components/ExampleComponent";

const routes = [
    {
        name: "home",
        path: "/",
        component: Home,
    },
    {
        name: "exam",
        path: "/exam",
        component: ExampleComponent,
    },
];
const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;

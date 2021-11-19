// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
            light: {
                primary: "#394B60",
                secondary: "#394B60",
                content: "#F8FBFE",
                tertiary: "#595959", // gris foncé
            },
            dark: {
                primary: "#3C8DBC",
                secondary: "#265a78",
            },
        },
    },
});

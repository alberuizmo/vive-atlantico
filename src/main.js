import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.scss";

import "./assets/main.css";

//iconos mdi
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });

app.mount("#app");

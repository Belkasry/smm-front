import { createApp } from "vue";
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import "@/core/plugins/prismjs";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as directives from "vuetify/directives";
import * as components from "vuetify/components";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  theme: false,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
const app = createApp(App);
app.use(store);
app.use(router);

ApiService.init(app);
initApexCharts(app);
initInlineSvg(app);
initVeeValidate();

app.use(i18n);

app.use(vuetify).mount("#app");

<template>
  <div class="w-100">
    <div id="kt_responsable container" class="collapse show">
      <div class="text-white fw-bold fs-7">
        <div class="d-flex flex-wrap"></div>
      </div>
    </div>
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.headers.common["X-CSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");

export default defineComponent({
  name: "step-4",
  components: {},
  data() {
    return {
      listValRef: {
        niveau_priorites: [],
        plan_actions: [],
      },
      plan_actions: [],
      niveau_priorite: null,
    };
  },
  mounted() {
    this.fetch();
  },
  watch: {},
  methods: {
    async fetch() {
      const responseValRef = await axios.get("http://smm.test/api/valeur-ref");
      this.listValRef = responseValRef.data;
    },
  },
});
</script>
<style>
.text-blue-accent-2 {
  color: rgba(10, 86, 131, 0.65) !important;
}
.v-auto-complete ::v-deep input {
  font-size: 0.3em;
  font-weight: 100;
  text-transform: capitalize;
}

.v-auto-complete ::v-deep label {
  font-size: 0.3em;
}

.v-auto-complete ::v-deep button {
  font-size: 0.3em;
}
</style>

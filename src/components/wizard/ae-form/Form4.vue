<template>
  <div class="w-100">
    <div id="kt_plan_action container" class="collapse show">
      <div class="text-white fw-bold fs-7">
        <div class="d-flex flex-wrap">
          <v-col cols="12" sm="6" md="6">
            <v-slider
              class="mt-5"
              label="Niveau de priorité"
              color="white"
              v-model="niveau_priorite"
              :ticks="listValRef.niveau_priorites"
              thumb-label="always"
              :max="listValRef.niveau_priorites.length - 1"
              step="1"
              :tick-size="listValRef.niveau_priorites.length"
            >
            </v-slider>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <div
              class="d-flex bg-light bg-opacity-5 active rounded border border-dashed mb-9 p-6"
            >
              <span class="svg-icon svg-icon-2tx svg-icon-light me-4">
                <inline-svg src="media/icons/duotune/art/art006.svg" />
              </span>
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack flex-grow-1">
                <!--begin::Content-->
                <div class="fw-bold">
                  <div class="fs-5 text-white">
                    <p>
                      <a href="#" class="me-1 fs-4">{{
                        listValRef.niveau_priorites[niveau_priorite]?.name
                      }}</a>
                      :
                      {{ listValRef.niveau_priorites[niveau_priorite]?.action }}
                    </p>
                  </div>
                </div>
                <!--end::Content-->
              </div>
              <!--end::Wrapper-->
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="12">
            <v-autocomplete
              chips
              label="Plan d'action"
              density="compact"
              v-model="plan_actions"
              :items="listValRef.plan_actions"
              item-title="name"
              clearable
              return-object
              multiple
            ></v-autocomplete>
          </v-col>
        </div>
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

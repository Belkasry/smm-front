<template>
  <div class="w-100">
    <div id="kt_description_details container" class="collapse show">
      <div class="text-white fw-bold fs-7">
        <div class="d-flex flex-wrap">
          <v-col cols="12" sm="6" md="6">
            <v-slider
              class="mt-4"
              label="Niveau de maîtrise"
              color="white"
              v-model="niveau_maitrise"
              :ticks="listValRef.niveau_maitrises"
              thumb-label="always"
              :max="listValRef.niveau_maitrises.length - 1"
              step="1"
              :tick-size="listValRef.niveau_maitrises.length"
            >
            </v-slider>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <div
              class="d-flex bg-light bg-opacity-5 active rounded border border-dashed mb-9 p-6"
            >
              <span class="svg-icon svg-icon-2tx svg-icon-light me-4">
                <inline-svg src="/media/icons/duotune/abstract/abs021.svg" />
              </span>
              <!--begin::Wrapper-->
              <div class="d-flex flex-stack flex-grow-1">
                <!--begin::Content-->
                <div class="fw-bold">
                  <div class="fs-5 text-white">
                    <p>
                      <a href="#" class="me-1 fs-4">{{
                        listValRef.niveau_maitrises[niveau_maitrise]?.niveau
                      }}</a>
                      :
                      {{ listValRef.niveau_maitrises[niveau_maitrise]?.name }}
                    </p>
                  </div>
                </div>
                <!--end::Content-->
              </div>
              <!--end::Wrapper-->
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              chips
              label="Moyens de Maîtrise Humain"
              density="compact"
              v-model="moyen_maitrise_humains"
              :items="listValRef.moyen_maitrise_humains"
              item-title="name"
              clearable
              return-object
              multiple
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              chips
              label="Moyens de Maîtrise Technique"
              density="compact"
              v-model="moyen_maitrise_techniques"
              :items="listValRef.moyen_maitrise_techniques"
              item-title="name"
              clearable
              return-object
              multiple
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              chips
              label="Moyens de Maîtrise Organisation"
              density="compact"
              v-model="moyen_maitrise_organisations"
              :items="listValRef.moyen_maitrise_organisations"
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
  name: "step-3",
  components: {},
  data() {
    return {
      listValRef: {
        moyen_maitrise_humains: [],
        moyen_maitrise_techniques: [],
        moyen_maitrise_organisations: [],
        niveau_priorites: [],
        niveau_maitrises: [],
        plan_actions: [],
      },
      moyen_maitrise_humains: [],
      moyen_maitrise_techniques: [],
      moyen_maitrise_organisations: [],
      plan_actions: [],
      niveau_priorite: null,
      niveau_maitrise: null,
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

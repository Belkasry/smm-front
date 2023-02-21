<template>
  <div class="w-100">
    <div id="kt_description_details container" class="collapse show">
      <div class="text-white fw-bold fs-7">
        <div class="d-flex flex-wrap">
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              class="fs-9"
              label="Aspect"
              v-model="aspect"
              :items="listValRef.aspects"
              item-title="name"
              clearable
              density="compact"
              return-object
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              class="fs-9"
              label="Impacts"
              v-model="impact"
              :items="listValRef.impacts"
              item-title="name"
              clearable
              density="compact"
              return-object
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              class="fs-9"
              label="Thème"
              v-model="theme"
              :items="listValRef.themes"
              item-title="name"
              clearable
              density="compact"
              return-object
            ></v-autocomplete>
          </v-col>
        </div>
        <div class="d-flex flex-wrap">
          <v-col cols="12" sm="6" md="4">
            <v-radio-group v-model="situation" inline>
              <template v-slot:label>
                <div><strong>Situation</strong></div>
              </template>
              <v-radio
                :class="
                  sit.name == 'U'
                    ? 'btn bg-opacity-5 btn-light-danger text-danger text-hover-white'
                    : sit.name == 'D'
                    ? 'btn bg-opacity-5 btn-light-warning text-warning'
                    : 'btn btn-light-secondary text-white'
                "
                :key="sit.id"
                v-for="sit in listValRef.situations"
                :label="sit.name"
                :value="sit.id"
                class="btn btn-outline btn-outline-dashed p-4 mx-1 fw-boldest"
              ></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-radio-group v-model="frequence" inline>
              <template v-slot:label>
                <div><strong>Fréquence</strong></div>
              </template>
              <template v-for="sit in listValRef.frequences" :key="sit.id">
                <v-radio
                  :label="sit.value"
                  :value="sit.id"
                  class="btn btn-outline btn-outline-dashed p-2 mx-1 pr-3 fw-boldest text-white"
                ></v-radio>
              </template>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-radio-group v-model="gravite_etendu" inline>
              <template v-slot:label>
                <div><strong>Gravité étendu</strong></div>
              </template>
              <template v-for="sit in listValRef.gravite_etendus" :key="sit.id">
                <v-radio
                  :label="sit.value"
                  :value="sit.id"
                  class="btn btn-outline btn-outline-dashed p-2 mx-1 fw-boldest pr-3 text-white"
                ></v-radio>
              </template>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-radio-group v-model="gravite_persistance" inline>
              <template v-slot:label>
                <div><strong>Gravité persistance</strong></div>
              </template>
              <template
                v-for="sit in listValRef.gravite_persistances"
                :key="sit.id"
              >
                <v-radio
                  :label="sit.value"
                  :value="sit.id"
                  class="btn btn-outline btn-outline-dashed p-2 mx-1 fw-boldest pr-3 text-white"
                ></v-radio>
              </template>
            </v-radio-group>
          </v-col>
          <v-col cols="12" sm="6" md="4" v-if="theme">
            <v-radio-group v-model="gravite_dangerosite" inline>
              <template v-slot:label>
                <div><strong>Gravité dangérosité</strong></div>
              </template>
              <template v-for="sit in gravite_dangerosites" :key="sit.id">
                <v-radio
                  :label="sit.value"
                  :value="sit.id"
                  class="btn btn-outline btn-outline-dashed p-2 mx-1 fw-boldest pr-3 text-white"
                ></v-radio>
              </template>
            </v-radio-group>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
            :set="
              (f_g =
                frequence *
                (gravite_dangerosite + gravite_persistance + gravite_etendu))
            "
          >
            <div
              class="bg-light bg-opacity-5 active rounded border border-dashed d-flex align-items-center rounded p-5 mt-4 mb-7 px-3"
            >
              <!--begin::Icon-->
              <span :class="`svg-icon-warning`" class="svg-icon me-5">
                <span class="svg-icon svg-icon-1">
                  <inline-svg src="media/icons/duotune/abstract/abs027.svg" />
                </span>
              </span>
              <div class="flex-grow-1 me-2">
                <a href="#" class="fw-bolder text-white text-hover-primary fs-2"
                  >F * G =
                  <span class="text-muted fw-bold text-warning`">{{
                    f_g
                  }}</span></a
                >
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-switch
              class="p-5 mt-1 mb-2 px-3 fw-bold"
              v-model="s_ns"
              inset
              hide-details
              color="secondary"
              :label="`S/NS`"
            ></v-switch>
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
import { Activite, Theme, GraviteDangerosite } from "@/core/data/ival";

axios.defaults.headers.common["X-CSRF-TOKEN"] = Cookies.get("XSRF-TOKEN");

export default defineComponent({
  name: "step-2",
  components: {},
  data() {
    return {
      listValRef: {
        themes: [],
        aspects: [],
        impacts: [],
        situations: [],
        frequences: [],
        gravite_etendus: [],
        gravite_dangerosites: [],
        gravite_persistances: [],
      },
      s_ns: false,
      gravite_dangerosites: [],
      theme: null as unknown as Theme,
      aspect: null,
      impact: null,
      situation: null,
      frequence: null,
      gravite_etendu: null,
      gravite_dangerosite: null,
      gravite_persistance: null,
      moyen_maitrise_humains: [],
      date: new Date().toISOString().substr(0, 10),
    };
  },
  props: {
    data2: {},
  },
  watch: {
    theme() {
      this.gravite_dangerosites = this.listValRef.gravite_dangerosites.filter(
        (gd: GraviteDangerosite) => {
          return gd.theme_id === this.theme.id;
        }
      );
    },
  },
  mounted() {
    this.fetch();
  },
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
</style>

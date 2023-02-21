<template>
  <div class="card mb-5 mb-xl-10 bg-theme-smm">
    <div class="card-body">
      <v-card class="my-4">
        <div
          class="card-header mb-2 px-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_form1"
          aria-expanded="true"
          aria-controls="kt_form1"
        >
          <div class="card-title">
            <div class="d-flex align-items-center">
              <!--begin::Bullet-->
              <span
                class="bullet bullet-vertical h-50px"
                :class="`bg-yellow-smm`"
              ></span>
              <div class="ml-2 flex-grow-1">
                <h2 class="text-white text-hover-primary fw-bolder">
                  Informations Générales
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="kt_form1" class="collapse show">
          <div class="w-100">
            <div
              id="kt_account_profile_details container"
              class="collapse show"
            >
              <div class="text-white fw-bold fs-2">
                <div class="d-flex flex-wrap">
                  <v-col cols="12" sm="6" md="4">
                    <v-autocomplete
                      class="fs-9"
                      label="Service"
                      v-model="data.service"
                      :items="listValRef.services"
                      item-title="name"
                      density="compact"
                      return-object
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-autocomplete
                      label="Activité"
                      density="compact"
                      v-model="data.activite"
                      :items="activites"
                      item-title="name"
                      clearable
                      return-object
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-autocomplete
                      label="Zone"
                      density="compact"
                      v-model="data.zone"
                      :items="zones"
                      item-title="name"
                      clearable
                      return-object
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-autocomplete
                      label="Poste de travail"
                      density="compact"
                      v-model="data.poste_travail"
                      :items="poste_travails"
                      item-title="name"
                      clearable
                      return-object
                    ></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      density="compact"
                      v-model="data.delai"
                      label="Date"
                    ></v-text-field>
                  </v-col>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
      <v-card class="my-4">
        <div
          class="card-header mb-2 px-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_form2"
          aria-expanded="true"
          aria-controls="kt_form2"
        >
          <div class="card-title">
            <div class="d-flex align-items-center">
              <!--begin::Bullet-->
              <span
                class="bullet bullet-vertical h-50px"
                :class="`bg-yellow-smm`"
              ></span>
              <div class="ml-2 flex-grow-1">
                <h2 class="text-white text-hover-primary fw-bolder">
                  Description Général
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="kt_form2" class="collapse show">
          <div class="w-100">
            <div id="kt_description_details container" class="collapse show">
              <div class="text-white fw-bold fs-7">
                <div class="d-flex flex-wrap">
                  <v-col cols="12" sm="6" md="4">
                    <v-autocomplete
                      class="fs-9"
                      label="Aspect"
                      v-model="data.aspect"
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
                      v-model="data.impact"
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
                      v-model="data.theme"
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
                    <v-radio-group v-model="data.situation" inline>
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
                        :value="sit"
                        class="btn btn-outline btn-outline-dashed p-4 mx-1 fw-boldest"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="data.frequence" inline>
                      <template v-slot:label>
                        <div><strong>Fréquence</strong></div>
                      </template>
                      <template
                        v-for="sit in listValRef.frequences"
                        :key="sit.id"
                      >
                        <v-radio
                          :label="sit.value"
                          :value="sit"
                          class="btn btn-outline btn-outline-dashed p-2 mx-1 pr-3 fw-boldest text-white"
                        ></v-radio>
                      </template>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="data.gravite_etendu" inline>
                      <template v-slot:label>
                        <div><strong>Gravité étendu</strong></div>
                      </template>
                      <template
                        v-for="sit in listValRef.gravite_etendus"
                        :key="sit.id"
                      >
                        <v-radio
                          :label="sit.value"
                          :value="sit"
                          class="btn btn-outline btn-outline-dashed p-2 mx-1 fw-boldest pr-3 text-white"
                        ></v-radio>
                      </template>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-radio-group v-model="data.gravite_persistance" inline>
                      <template v-slot:label>
                        <div><strong>Gravité persistance</strong></div>
                      </template>
                      <template
                        v-for="sit in listValRef.gravite_persistances"
                        :key="sit.id"
                      >
                        <v-radio
                          :label="sit.value"
                          :value="sit"
                          class="btn btn-outline btn-outline-dashed p-2 mx-1 fw-boldest pr-3 text-white"
                        ></v-radio>
                      </template>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" v-if="data.theme">
                    <v-radio-group v-model="data.gravite_dangerosite" inline>
                      <template v-slot:label>
                        <div><strong>Gravité dangérosité</strong></div>
                      </template>
                      <template
                        v-for="sit in gravite_dangerosites"
                        :key="sit.id"
                      >
                        <v-radio
                          :label="sit.value"
                          :value="sit"
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
                        data.frequence?.id *
                        (data.gravite_dangerosite?.id +
                          data.gravite_persistance?.id +
                          data.gravite_etendu?.id))
                    "
                  >
                    <div
                      class="bg-light bg-opacity-5 active rounded border border-dashed d-flex align-items-center rounded p-5 mt-4 mb-7 px-3"
                    >
                      <!--begin::Icon-->
                      <span :class="`svg-icon-warning`" class="svg-icon me-5">
                        <span class="svg-icon svg-icon-1">
                          <inline-svg
                            src="media/icons/duotune/abstract/abs027.svg"
                          />
                        </span>
                      </span>
                      <div class="flex-grow-1 me-2">
                        <a
                          href="#"
                          class="fw-bolder text-white text-hover-primary fs-2"
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
                      v-model="data.s_ns"
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
        </div>
      </v-card>
      <v-card class="my-4">
        <div
          class="card-header mb-2 px-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_form3"
          aria-expanded="true"
          aria-controls="kt_form3"
        >
          <div class="card-title">
            <div class="d-flex align-items-center">
              <!--begin::Bullet-->
              <span
                class="bullet bullet-vertical h-50px"
                :class="`bg-yellow-smm`"
              ></span>
              <div class="ml-2 flex-grow-1">
                <h2 class="text-white text-hover-primary fw-bolder">
                  Maîtrise
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="kt_form3" class="collapse show">
          <div class="w-100">
            <div id="kt_description_details container" class="collapse show">
              <div class="text-white fw-bold fs-7">
                <div class="d-flex flex-wrap">
                  <v-col cols="12" sm="6" md="6">
                    <v-slider
                      class="mt-4"
                      label="Niveau de maîtrise"
                      color="white"
                      v-model="data.niveau_maitrise"
                      :ticks="listValRef.niveau_maitrises"
                      thumb-label="always"
                      step="1"
                      :max="listValRef.niveau_maitrises.length - 1"
                      :tick-size="listValRef.niveau_maitrises.length"
                    >
                    </v-slider>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <div
                      class="d-flex bg-light bg-opacity-5 active rounded border border-dashed mb-9 p-6"
                    >
                      <span class="svg-icon svg-icon-2tx svg-icon-light me-4">
                        <inline-svg
                          src="/media/icons/duotune/abstract/abs021.svg"
                        />
                      </span>
                      <!--begin::Wrapper-->
                      <div class="d-flex flex-stack flex-grow-1">
                        <!--begin::Content-->
                        <div class="fw-bold">
                          <div class="fs-5 text-white">
                            <p>
                              <a href="#" class="me-1 fs-4">{{
                                listValRef.niveau_maitrises[
                                  data.niveau_maitrise
                                ]?.niveau
                              }}</a>
                              :
                              {{
                                listValRef.niveau_maitrises[
                                  data.niveau_maitrise
                                ]?.name
                              }}
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
                      v-model="data.moyen_maitrise_humains"
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
                      v-model="data.moyen_maitrise_techniques"
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
                      v-model="data.moyen_maitrise_organisations"
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
        </div>
      </v-card>
      <v-card class="my-4">
        <div
          class="card-header mb-2 px-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_form4"
          aria-expanded="true"
          aria-controls="kt_form4"
        >
          <div class="card-title">
            <div class="d-flex align-items-center">
              <!--begin::Bullet-->
              <span
                class="bullet bullet-vertical h-50px"
                :class="`bg-yellow-smm`"
              ></span>
              <div class="ml-2 flex-grow-1">
                <h2 class="text-white text-hover-primary fw-bolder">
                  Plan d'action
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="kt_form4" class="collapse show">
          <div class="w-100">
            <div id="kt_plan_action container" class="collapse show">
              <div class="text-white fw-bold fs-7">
                <div class="d-flex flex-wrap">
                  <v-col cols="12" sm="6" md="6">
                    <v-slider
                      class="mt-5"
                      label="Niveau de priorité"
                      color="white"
                      v-model="data.niveau_priorite"
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
                                listValRef.niveau_priorites[
                                  data.niveau_priorite
                                ]?.name
                              }}</a>
                              :
                              {{
                                listValRef.niveau_priorites[
                                  data.niveau_priorite
                                ]?.action
                              }}
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
                      v-model="data.plan_actions"
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
        </div>
      </v-card>
      <v-card class="my-4">
        <div
          class="card-header mb-2 px-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_form5"
          aria-expanded="true"
          aria-controls="kt_form5"
        >
          <div class="card-title">
            <div class="d-flex align-items-center">
              <!--begin::Bullet-->
              <span
                class="bullet bullet-vertical h-50px"
                :class="`bg-shades-white`"
              ></span>
              <div class="ml-2 flex-grow-1">
                <h2 class="text-white text-hover-primary fw-bolder">
                  Responsabilité
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="kt_form5" class="collapse show">
          <div class="card-body py-3">
            <!--begin::Table container-->
            <div class="table-responsive">
              <!--begin::Table-->
              <table
                class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
              >
                <!--begin::Table head-->
                <thead>
                  <tr class="fw-bolder text-primary">
                    <th class="w-25px">
                      <div
                        class="form-check form-check-sm form-check-custom form-check-solid"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          @change="
                            checkedRows =
                              checkedRows.length === 6 ? [] : [0, 1, 2, 3, 4, 5]
                          "
                        />
                      </div>
                    </th>
                    <th class="min-w-150px">Responsable</th>
                    <th class="min-w-140px">Service</th>
                  </tr>
                </thead>
                <!--end::Table head-->

                <!--begin::Table body-->
                <tbody>
                  <template v-for="(item, index) in list" :key="index">
                    <tr>
                      <td>
                        <div
                          class="form-check form-check-sm form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input widget-9-check"
                            type="checkbox"
                            :value="index"
                            v-model="checkedRows"
                          />
                        </div>
                      </td>

                      <td>
                        <div class="d-flex align-items-center">
                          <div class="symbol symbol-45px me-5">
                            <img :src="item.image" alt="" />
                          </div>
                          <div class="d-flex justify-content-start flex-column">
                            <a
                              href="#"
                              class="text-white fw-bolder text-hover-primary fs-6"
                              >{{ item.name }}</a
                            >

                            <span
                              class="text-green-accent-1 fw-bold text-muted d-block fs-7"
                              >{{ item.skills }}</span
                            >
                          </div>
                        </div>
                      </td>

                      <td>
                        <a
                          href="#"
                          class="text-white fw-bolder text-hover-primary d-block fs-6"
                          >{{ item.companyName }}</a
                        >
                      </td>
                    </tr>
                  </template>
                </tbody>
                <!--end::Table body-->
              </table>
              <!--end::Table-->
            </div>
            <!--end::Table container-->
          </div>
        </div>
      </v-card>
    </div>

    <div class="card-footer d-flex justify-content-end py-6 px-9">
      <button type="reset" class="btn btn-white btn-active-light-primary me-2">
        Annuler
      </button>

      <button
        @click="saveData"
        id="kt_form1_submit"
        ref="submitButton1"
        class="btn btn-primary"
      >
        <span class="indicator-label"> Sauvegarder </span>
        <span class="indicator-progress">
          Please wait...
          <span
            class="spinner-border spinner-border-sm align-middle ms-2"
          ></span>
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import {
  Activite,
  GraviteDangerosite,
  PosteTravail,
  Service,
  Theme,
  Zone,
  Aspect,
  Impact,
  Situation,
  Gravite,
  Frequence,
  Generic,
} from "@/core/data/ival";
import axios from "axios";
export default defineComponent({
  name: "customer-details",
  data() {
    return {
      data2: {},
      listValRef: {
        activites: [],
        services: [],
        zones: [],
        poste_travails: [],
        themes: [],
        aspects: [],
        impacts: [],
        situations: [],
        frequences: [],
        gravite_etendus: [],
        gravite_dangerosites: [],
        gravite_persistances: [],
        moyen_maitrise_humains: [],
        moyen_maitrise_techniques: [],
        moyen_maitrise_organisations: [],
        niveau_priorites: [],
        niveau_maitrises: [],
        plan_actions: [],
      },
      activites: [],
      zones: [],
      poste_travails: [],
      gravite_dangerosites: [],
      data: {
        moyen_maitrise_humains: [],
        moyen_maitrise_techniques: [],
        moyen_maitrise_organisations: [],
        plan_actions: [],
        niveau_priorite: 0,
        niveau_maitrise: 0,
        service: null as unknown as Service,
        activite: null as unknown as Activite,
        zone: null as unknown as Zone,
        poste_travail: null as unknown as PosteTravail,
        aspect: null as unknown as Aspect,
        impact: null as unknown as Impact,
        situation: null as unknown as Situation,
        delai: new Date().toISOString().substr(0, 10),
        menu2: false,
        s_ns: false,
        theme: null as unknown as Theme,
        frequence: null as unknown as Frequence,
        gravite_etendu: null as unknown as Gravite,
        gravite_dangerosite: null as unknown as Gravite,
        gravite_persistance: null as unknown as Gravite,
      },
      form: {
        zone_id: 0,
        service_id: 0,
        activite_id: 0,
        aspect_id: 0,
        impact_id: 0,
        theme_id: 0,
        situation_id: 0,
        frequence_id: 0,
        gravite_etendu_id: 0,
        gravite_dangerosite_id: 0,
        gravite_persistance_id: 0,
        s_ns: false,
        niveau_maitrise_id: 0,
        niveau_priorite_id: 0,
        delai: new Date().toISOString().substr(0, 10),
      },
      list: [
        {
          image: "media/avatars/300-14.jpg",
          name: "Camara Abdoulaye",
          companyName: "Informatique ",
          value: "50",
          color: "primary",
        },
        {
          image: "media/avatars/300-2.jpg",
          name: "By Dore",
          skills: "C#, ASP.NET, MS SQL",
          companyName: "Service generaux",
          value: "70",
          color: "danger",
        },
        {
          image: "media/avatars/300-5.jpg",
          name: "Gamy ce",
          skills: "PHP, Laravel, VueJS",
          companyName: "Approvisonnement",
          value: "60",
          color: "success",
        },
        {
          image: "media/avatars/300-20.jpg",
          name: "Ousmane camara",
          skills: "Python, PostgreSQL, ReactJS",
          companyName: "Usine",
          value: "50",
          color: "warning",
        },
        {
          image: "media/avatars/300-23.jpg",
          name: "Mamady Kebe",
          skills: "HTML, JS, ReactJS",
          companyName: "Usine",
          value: "90",
          color: "info",
        },
      ],
    };
  },
  watch: {
    "data.theme"() {
      this.form.theme_id = this.data.theme.id;
      this.gravite_dangerosites = this.listValRef.gravite_dangerosites.filter(
        (gd: GraviteDangerosite) => {
          return gd.theme_id === this.data.theme.id;
        }
      );
    },
    "data.service"() {
      this.form.service_id = this.data.service.id;
      this.activites = this.listValRef.activites.filter(
        (activity: Activite) => {
          return activity.service_id === this.data.service.id;
        }
      );
    },
    "data.activite"() {
      this.form.activite_id = this.data.activite.id;
      this.zones = this.listValRef.zones.filter((zone: Zone) => {
        return zone.activite_id === this.data.activite.id;
      });
    },
    "data.zone"() {
      this.form.zone_id = this.data.zone.id;
      this.poste_travails = this.listValRef.poste_travails.filter(
        (poste_travail: PosteTravail) => {
          return poste_travail.zone_id === this.data.zone.id;
        }
      );
    },
    "data.aspect"() {
      this.form.aspect_id = this.data.aspect.id;
    },
    "data.impact"() {
      this.form.impact_id = this.data.impact.id;
    },
    "data.situation"() {
      this.form.situation_id = this.data.situation.id;
    },
    "data.frequence"() {
      this.form.frequence_id = this.data.frequence.id;
    },
    "data.gravite_etendu"() {
      this.form.gravite_etendu_id = this.data.gravite_etendu.id;
    },
    "data.gravite_dangerosite"() {
      this.form.gravite_dangerosite_id = this.data.gravite_dangerosite.id;
    },
    "data.gravite_persistance"() {
      this.form.gravite_persistance_id = this.data.gravite_persistance.id;
    },
    "data.niveau_maitrise"() {
      let instance: Generic;
      instance = this.listValRef.niveau_maitrises[this.data.niveau_maitrise];
      this.form.niveau_maitrise_id = instance.id;
    },
    "data.niveau_priorite"() {
      let instance: Generic;
      instance = this.listValRef.niveau_priorites[this.data.niveau_priorite];
      this.form.niveau_priorite_id = instance.id;
    },
  },
  mounted() {
    this.fetch();
  },
  methods: {
    async saveData() {
      const router = useRouter();
      var data = this.form;

      var config = {
        method: "post",
        url: "http://smm.test/api/analyse",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          Swal.fire({
            text: "Analyse environnementale bien Ajoutée",
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            customClass: {
              confirmButton: "btn fw-bold btn-light-primary",
            },
          }).then(function () {
            // Go to page after successfully login
            router.push({ name: "dashboard" });
          });
        })
        .catch(function (error) {
          Swal.fire({
            text: error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Try again!",
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
        });
    },
    async fetch() {
      const responseValRef = await axios.get("http://smm.test/api/valeur-ref");
      this.listValRef = responseValRef.data;
    },
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Ajouter une AE", [
        "Acceuil",
        "Analyse environnementale",
      ]);
    });

    return {};
  },
});
</script>
<style>
.bg-theme-smm {
  background: transparent;
}
.bg-theme-smm .v-card {
  background: #261b235e;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(113, 85, 34, 0.06);
}
.bg-yellow-smm {
  background-color: #e9dd19 !important;
}
.text-blue-accent-2 {
  color: rgba(10, 86, 131, 0.65) !important;
}
.text-green-smm {
  color: rgba(24, 110, 108, 0.96);
}
.v-autocomplete__selection {
  font-size: small;
}
</style>

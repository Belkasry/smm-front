<template>
  <v-card class="ml-1 bg-smm-filter">
    <div class="px-7 py-5">
      <div class="fs-5 text-white fw-bolder">Filter Options</div>
    </div>
    <div class="separator border-gray-200"></div>

    <div class="px-2 py-5">
      <!--begin::Input group-->
      <div class="mb-2">
        <!--begin::Label-->
        <!--end::Label-->
        <!--begin::Input-->
        <div class="text-blue-accent-2 fw-bold fs-6">
          <v-autocomplete
            label="Service"
            v-model="service"
            :items="listValRef.services"
            item-title="name"
            item-value="id"
            clearable
            density="compact"
            :style="{ 'font-size': '10px !important' }"
          ></v-autocomplete>
        </div>
        <!--end::Input-->
      </div>

      <div class="mb-2">
        <!--begin::Label-->
        <!--end::Label-->
        <!--begin::Input-->
        <div class="text-blue-accent-2 fw-bold fs-6">
          <v-autocomplete
            label="Activité"
            v-model="activite"
            :items="listValRef.activites"
            item-title="name"
            item-value="id"
            density="compact"
            filled
          ></v-autocomplete>
        </div>
        <!--end::Input-->
      </div>
      <div class="mb-2">
        <!--begin::Label-->
        <!--end::Label-->
        <!--begin::Input-->
        <div class="text-blue-accent-2 fw-bold fs-6">
          <v-autocomplete
            label="Aspect"
            v-model="aspect"
            :items="listValRef.aspects"
            item-title="name"
            item-value="id"
            density="compact"
            filled
          ></v-autocomplete>
        </div>
        <!--end::Input-->
      </div>

      <div class="mb-2">
        <div class="text-blue-accent-2 fw-bold fs-6">
          <v-autocomplete
            label="Impact"
            v-model="impact"
            :items="listValRef.impacts"
            item-title="name"
            item-value="id"
            density="compact"
            filled
          ></v-autocomplete>
        </div>
      </div>

      <div class="mb-2">
        <div class="text-blue-accent-2 fw-bold fs-6">
          <v-autocomplete
            label="Theme"
            v-model="theme"
            :items="listValRef.themes"
            item-title="name"
            item-value="id"
            density="compact"
            filled
          ></v-autocomplete>
        </div>
      </div>
      <div class="mb-2">
        <div class="text-blue-accent-2 fw-bold fs-6">
          <v-autocomplete
            label="Situation"
            v-model="situation"
            :items="listValRef.situations"
            item-title="name"
            item-value="id"
            density="compact"
            filled
          ></v-autocomplete>
        </div>
      </div>

      <div class="mb-2">
        <!--begin::Label-->
        <label class="form-label fw-bold">Member Type:</label>
        <!--end::Label-->

        <!--begin::Options-->
        <div class="d-flex">
          <!--begin::Options-->
          <label
            class="form-check form-check-sm form-check-custom form-check-solid me-5"
          >
            <input
              class="form-check-input"
              type="checkbox"
              value="1"
              v-model="data.author"
            />
            <span class="form-check-label user-select-none"> Author </span>
          </label>
          <!--end::Options-->

          <!--begin::Options-->
          <label
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <input
              class="form-check-input"
              type="checkbox"
              value="2"
              v-model="data.customer"
            />
            <span class="form-check-label user-select-none"> Customer </span>
          </label>
          <!--end::Options-->
        </div>
        <!--end::Options-->
      </div>

      <div class="mb-2">
        <label class="form-label fw-bold">Notifications:</label>

        <div
          class="form-check form-switch form-switch-sm form-check-custom form-check-solid"
        >
          <label class="form-check-label">
            <input
              class="form-check-input"
              type="checkbox"
              name="notifications"
              v-model="data.notifications"
            />
            <span class="form-check-label user-select-none">Enabled</span>
          </label>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="d-flex justify-content-end">
        <button
          type="reset"
          class="btn btn-sm btn-white btn-active-light-primary me-2"
          data-kt-menu-dismiss="true"
        >
          Reset
        </button>

        <button
          type="submit"
          class="btn btn-sm btn-primary"
          data-kt-menu-dismiss="true"
        >
          Apply
        </button>
      </div>
      <!--end::Actions-->
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import listValRef from "@/core/data/valeur-ref";
import listAE from "@/core/data/ae";
interface Filter {
  status: string;
  author: boolean;
  customer: boolean;
  notifications: boolean;
}

export default defineComponent({
  name: "filterAE2",
  data: () => ({
    listValRef: listValRef,
    activite: null,
    service: null,
    aspect: null,
    impact: null,
    theme: null,
    situation: null,
    moyen_maitrise_humains: [],
  }),
  components: {},
  setup() {
    const data = ref<Filter>({
      status: "1",
      author: true,
      customer: true,
      notifications: true,
    });

    return {
      data,
    };
  },
});
</script>
<style>
.v-autocomplete {
  font-size: small;
}
.text-blue-accent-2 {
  color: white !important;
}
.bg-smm-filter {
  background: #0bb7af54;
}
</style>

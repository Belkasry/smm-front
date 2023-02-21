<template>
  <div class="bg-theme-smm">
    <v-card>
      <v-card-title class="d-flex justify-content-between">
        <div>
          <!--begin::Search-->
          <div class="d-flex align-items-center position-relative mt-2">
            <span class="svg-icon svg-icon-1 position-absolute ms-6">
              <inline-svg src="media/icons/duotune/general/gen021.svg" />
            </span>
            <input
              type="text"
              v-model="search"
              class="form-control form-control-solid w-250px ps-15"
              placeholder="Search"
            />
          </div>
          <!--end::Search-->
        </div>
        <div
          class="d-flex justify-content-end"
          data-kt-subscription-table-toolbar="base"
        >
          <FilterAE></FilterAE>

          <div class="d-flex my-4">
            <a
              href="#"
              class="btn btn-sm btn-light me-2"
              id="kt_user_follow_button"
            >
              <span class="svg-icon svg-icon-2">
                <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
              </span>
              Export
            </a>

            <a
              href="#"
              class="btn btn-sm btn-primary btn-hover-secondary text-hover-dark me-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_offer_a_deal"
            >
              <span class="svg-icon svg-icon-2">
                <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
              </span>
              Ajouter une AE</a
            >

            <!--begin::Menu-->
            <div class="me-0">
              <button
                class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
                data-kt-menu-flip="top-end"
              >
                <i class="bi bi-three-dots fs-3"></i>
              </button>
              <Dropdown3></Dropdown3>
            </div>
            <!--end::Menu-->
          </div>
        </div>
      </v-card-title>
      <div class="card-body pt-0 row">
        <v-card class="p-2 col-xl-9">
          <v-data-table
            show-select
            @mousedown="mouseDownHandler"
            v-model:page="page"
            id="element"
            :items="dataAE"
            :search="search"
            :items-per-page="itemsPerPage"
            :headers="headerAE"
            class="primary table"
            hide-default-footer
            dense
            item-key="id"
            height="60vh"
            row-height="4vh"
          >
            <template v-slot:[`item.id`]="{ item }">
              <p class="text-white text-hover-primary fw-bolder fs-8">
                AE- {{ item.columns.id }}
              </p>
            </template>
            <template v-slot:[`item.service`]="{ item }">
              <p class="text-white ttext-hover-primary fw-bolder fs-8">
                {{ item.columns.service }}
              </p>
            </template>
            <template v-slot:[`item.activite`]="{ item }">
              <p class="text-white text-hover-primary fw-bolder fs-8">
                {{ item.columns.activite }}
              </p>
            </template>
            <template v-slot:[`item.aspect`]="{ item }">
              <p class="text-white text-hover-primary fw-bolder fs-8">
                {{ item.columns.aspect }}
              </p>
            </template>
            <template v-slot:[`item.impact`]="{ item }">
              <p class="text-white text-hover-primary fw-bolder fs-8">
                {{ item.columns.impact }}
              </p>
            </template>
            <template v-slot:[`item.theme`]="{ item }">
              <h2 class="badge fw-bold py-2 px-4 badge-light medium-text">
                {{ item.columns.theme }}
              </h2>
            </template>
            <template v-slot:[`item.situation`]="{ item }">
              <h2
                :class="`badge-${
                  item.columns.situation == 'U'
                    ? 'danger'
                    : item.columns.situation == 'D'
                    ? 'warning'
                    : 'light'
                }`"
                class="medium-text badge fw-bold py-2 px-4"
              >
                {{ item.columns.situation }}
              </h2>
            </template>
            <template v-slot:[`item.frequence`]="{ item }">
              <v-tooltip :text="`${item.columns.frequence}`">
                <template v-slot:activator="{ props }">
                  <h2
                    class="badge fw-bold py-2 px-4 badge-light medium-text"
                    v-bind="props"
                  >
                    {{ item.raw.frequence.value }}
                  </h2>
                </template>
              </v-tooltip>
            </template>
            <template v-slot:[`item.niveau_maitrise`]="{ item }">
              <v-tooltip :text="`${item.columns.niveau_maitrise}`">
                <template v-slot:activator="{ props }">
                  <h2
                    class="badge fw-bold py-2 px-4 badge-light medium-text"
                    v-bind="props"
                  >
                    {{ item.raw.niveau_maitrise.niveau }}
                  </h2>
                </template>
              </v-tooltip>
            </template>
            <template v-slot:[`item.gravite_etendu`]="{ item }">
              <v-tooltip :text="`${item.columns.gravite_etendu}`">
                <template v-slot:activator="{ props }">
                  <h2
                    class="badge fw-bold py-2 px-4 badge-light medium-text"
                    v-bind="props"
                  >
                    {{ item.raw.gravite_etendu.value }}
                  </h2>
                </template>
              </v-tooltip>
            </template>
            <template v-slot:[`item.gravite_dangerosite`]="{ item }">
              <v-tooltip :text="`${item.columns.gravite_dangerosite}`">
                <template v-slot:activator="{ props }">
                  <h2
                    class="badge fw-bold py-2 px-4 badge-light medium-text"
                    v-bind="props"
                  >
                    {{ item.raw.gravite_dangerosite.value }}
                  </h2>
                </template>
              </v-tooltip>
            </template>
            <template v-slot:[`item.gravite_persistance`]="{ item }">
              <v-tooltip :text="`${item.columns.gravite_persistance}`">
                <template v-slot:activator="{ props }">
                  <h2
                    class="badge fw-bold py-2 px-4 badge-light medium-text"
                    v-bind="props"
                  >
                    {{ item.raw.gravite_persistance.value }}
                  </h2>
                </template>
              </v-tooltip>
            </template>

            <template v-slot:[`item.moyen_maitrise_humains`]="{ item }">
              <div
                @click="changeWidth($event)"
                class="my-2 small-cell"
                v-if="
                  item.columns.moyen_maitrise_humains &&
                  item.columns.moyen_maitrise_humains.length > 0
                "
              >
                <template
                  v-for="(e, index) in item.columns.moyen_maitrise_humains"
                  :key="index"
                >
                  <div
                    :class="{
                      'mb-2':
                        item.columns.moyen_maitrise_humains.length - 1 !==
                        index,
                    }"
                    class="d-flex align-items-center"
                  >
                    <!--begin::Bullet-->
                    <span
                      class="bullet bullet-vertical h-15px"
                      :class="`bg-light`"
                    ></span>
                    <!--end::Bullet-->

                    <!--begin::Description-->
                    <div class="flex-grow-1 ml-2">
                      <span class="fw-bold d-block">{{ e.name }}</span>
                    </div>
                  </div>
                </template>
              </div>
            </template>
            <template v-slot:[`item.moyen_maitrise_techniques`]="{ item }">
              <div
                @click="changeWidth($event)"
                class="my-2 small-cell"
                v-if="
                  item.columns.moyen_maitrise_techniques &&
                  item.columns.moyen_maitrise_techniques.length > 0
                "
              >
                <template
                  v-for="(e, index) in item.columns.moyen_maitrise_techniques"
                  :key="index"
                >
                  <div
                    :class="{
                      'mb-2':
                        item.columns.moyen_maitrise_techniques.length - 1 !==
                        index,
                    }"
                    class="d-flex align-items-center"
                  >
                    <!--begin::Bullet-->
                    <span
                      class="bullet bullet-vertical h-15px"
                      :class="`bg-light`"
                    ></span>
                    <!--end::Bullet-->

                    <!--begin::Description-->
                    <div class="flex-grow-1 ml-2">
                      <span class="fw-bold d-block">{{ e.name }}</span>
                    </div>
                  </div>
                </template>
              </div>
            </template>
            <template v-slot:[`item.moyen_maitrise_organisations`]="{ item }">
              <div
                @click="changeWidth($event)"
                class="my-2 small-cell"
                v-if="
                  item.columns.moyen_maitrise_organisations &&
                  item.columns.moyen_maitrise_organisations.length > 0
                "
              >
                <template
                  v-for="(e, index) in item.columns
                    .moyen_maitrise_organisations"
                  :key="index"
                >
                  <div
                    :class="{
                      'mb-2':
                        item.columns.moyen_maitrise_organisations.length - 1 !==
                        index,
                    }"
                    class="d-flex align-items-center"
                  >
                    <!--begin::Bullet-->
                    <span
                      class="bullet bullet-vertical h-15px"
                      :class="`bg-light`"
                    ></span>
                    <!--end::Bullet-->

                    <!--begin::Description-->
                    <div class="flex-grow-1 ml-2">
                      <span class="fw-bold d-block">{{ e.name }}</span>
                    </div>
                  </div>
                </template>
              </div>
            </template>
            <template v-slot:[`item.plan_actions`]="{ item }">
              <div
                @click="changeWidth($event)"
                class="my-2 small-cell"
                v-if="
                  item.columns.plan_actions &&
                  item.columns.plan_actions.length > 0
                "
              >
                <template
                  v-for="(e, index) in item.columns.plan_actions"
                  :key="index"
                >
                  <div
                    :class="{
                      'mb-2': item.columns.plan_actions.length - 1 !== index,
                    }"
                    class="d-flex align-items-center"
                  >
                    <!--begin::Bullet-->
                    <span
                      class="bullet bullet-vertical h-15px"
                      :class="`bg-light`"
                    ></span>
                    <!--end::Bullet-->

                    <!--begin::Description-->
                    <div class="flex-grow-1 ml-2">
                      <span class="text-muted fw-bold d-block">{{
                        e.name
                      }}</span>
                    </div>
                  </div>
                </template>
              </div>
            </template>
            <template v-slot:[`item.F_G`]="{ item }">
              <h2
                class="badge fw-bolder py-2 px-4 badge-light h3"
                v-bind="props"
              >
                {{
                  item.columns.frequence *
                  (item.columns.gravite_dangerosite +
                    item.columns.gravite_persistance +
                    item.columns.gravite_etendu)
                }}
              </h2>
            </template>
            <template v-slot:[`item.s_ns`]="{ item }">
              <h2
                :class="`badge-light-${
                  item.columns.s_ns ? 'success' : 'danger'
                }`"
                class="medium-text badge fw-bold py-2 px-4"
              >
                {{ item.columns.s_ns ? "S" : "NS" }}
              </h2>
            </template>
            <template v-slot:[`item.actions`]>
              <div class="dropdown dropdown-inline dropdown-sm">
                <a
                  href="#"
                  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                >
                  <span class="svg-icon svg-icon-3">
                    <inline-svg src="media/icons/duotune/general/gen019.svg" />
                  </span>
                </a>

                <a
                  href="#"
                  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                >
                  <span class="svg-icon svg-icon-3">
                    <inline-svg src="media/icons/duotune/art/art005.svg" />
                  </span>
                </a>

                <a
                  href="#"
                  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                >
                  <span class="svg-icon svg-icon-3">
                    <inline-svg src="media/icons/duotune/general/gen027.svg" />
                  </span>
                </a>
              </div>
            </template>
            <template v-slot:[`item.progress`]>
              <div class="d-flex flex-column w-100 me-2">
                <div class="d-flex flex-stack mb-2">
                  <span class="text-muted me-2 fs-7 fw-bold"> {{ 60 }}% </span>
                </div>

                <div class="progress h-6px w-100">
                  <div
                    class="progress-bar"
                    :class="`bg-warning`"
                    role="progressbar"
                    :style="{ width: 60 + '%' }"
                    :aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </template>
          </v-data-table>
          <ul class="pagination">
            <li class="page-item previous" @click="previousPage">
              <a href="#" class="page-link bg-green-accent-1"
                ><i class="previous"></i
              ></a>
            </li>
            <li
              class="page-item"
              v-for="pageNumber in pageCount"
              :key="pageNumber"
              :class="{ active: page === pageNumber }"
            >
              <a
                href="#"
                class="page-link"
                @click.prevent="setpage(pageNumber)"
                >{{ pageNumber }}</a
              >
            </li>
            <li class="page-item next" @click="nextPage">
              <a href="#" class="page-link bg-green-accent-1"
                ><i class="next"></i
              ></a>
            </li>
          </ul>
        </v-card>
        <div class="col-xl-3 pl-2">
          <FilterAE2 />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { VDataTable } from "vuetify/labs/VDataTable";
import listAE from "@/core/data/ae";
import { IAE } from "@/core/data/ae";
import { ICustomer } from "@/core/data/customers";
import FilterAE from "@/components/dropdown/FilterAE.vue";
import FilterAE2 from "@/components/dropdown/FilterAE2.vue";

export default defineComponent({
  name: "analyse-env-list",
  components: { VDataTable, FilterAE, FilterAE2 },
  data: () => ({
    singleSelect: false,
    selected: [],
    search: "",
    options: {
      pageCount: 1,
    },
    page: 1,
    itemsPerPage: 5,
    headerAE: [
      {
        title: "ID",
        key: "id",
        sortable: true,
        class: "px-0",
      },
      {
        title: "Service",
        key: "service",
        align: "start",
        value: "service.name",
        sortable: true,
        sort: (a: any, b: any) => a.name.localeCompare(b.name),
        width: 150,
      },
      {
        title: "Activité",
        key: "activite",
        value: "activite.name",
        sort: (a: any, b: any) => a.name.localeCompare(b.name),
        width: 150,
        sortable: true,
      },
      {
        title: "Aspect",
        key: "aspect",
        value: "aspect.name",
        sort: (a: any, b: any) => a.name.localeCompare(b.name),
        width: 150,
        sortable: true,
      },
      {
        title: "Impact",
        key: "impact",
        value: "impact.name",
        width: 150,
        sortable: true,
        sort: (a: any, b: any) => a.name.localeCompare(b.name),
      },
      {
        title: "Thème",
        key: "theme",
        value: "theme.name",
        width: 100,
        sortable: true,
        sort: (a: any, b: any) => a.name.localeCompare(b.name),
        align: "center",
      },
      {
        title: "Situation",
        key: "situation",
        value: "situation.name",
        sortable: true,
        sort: (a: any, b: any) => a.name.localeCompare(b.name),
      },
      {
        title: "Fréquence",
        key: "frequence",
        value: "frequence.description",
        width: 70,
        sortable: true,
        sort: (a: any, b: any) => a.value - b.value,
      },
      {
        title: "Gravité Etendu",
        key: "gravite_etendu",
        value: "gravite_etendu.description",
        sortable: true,
        sort: (a: any, b: any) => a.value - b.value,
      },
      {
        title: "Gravité Dangérosité",
        key: "gravite_dangerosite",
        value: "gravite_dangerosite.description",
        sortable: true,
        sort: (a: any, b: any) => a.value - b.value,
      },
      {
        title: "Gravité Persistance",
        key: "gravite_persistance",
        value: "gravite_persistance.description",
        sortable: true,
        sort: (a: any, b: any) => a.value - b.value,
      },
      {
        title: "F*G",
        key: "F_G",
        sortable: true,
      },
      {
        title: "S / NS",
        key: "s_ns",
        value: "s_ns",
        sortable: true,
        align: "center",
        width: 100,
      },
      {
        title: "Moyen de Maitrîse Organisation",
        key: "moyen_maitrise_organisations",
        sortable: true,
        width: 150,
      },
      {
        title: "Moyen de Maitrîse Technique",
        key: "moyen_maitrise_techniques",
        sortable: true,
        width: 150,
      },
      {
        title: "Moyen de Maitrîse Humains",
        key: "moyen_maitrise_humains",
        sortable: true,
        width: 150,
      },
      {
        title: "Niveau de Maitrîse",
        key: "niveau_maitrise",
        value: "niveau_maitrise.name",
        sortable: true,
        sort: (a: any, b: any) => a.niveau - b.niveau,
        width: 150,
      },
      // {
      //   title: "Niveau de Priorité",
      //   key: "niveau_priorite",
      //   value: "niveau_priorite.name",
      //   sortable: true,
      //   width: 150,
      // },
      {
        title: "Plans d'actions",
        key: "plan_actions",
        value: "plan_actions",
        sortable: true,
        width: 150,
      },
      {
        title: "Progrès",
        key: "progress",
        width: 150,
      },
      {
        title: "Actions",
        key: "actions",
        width: 150,
      },
    ],
    dataAE: listAE,
  }),
  computed: {
    // compute the total number of pages based on the number of items and items per page
    pageCount() {
      return Math.ceil(this.dataAE.length / this.itemsPerPage);
    },
    // compute the current page's items based on the current page and items per page
    pageItems() {
      const startIndex = (this.page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.dataAE.slice(startIndex, endIndex);
    },
  },
  setup() {
    const width_m_m_t = ref(300);
    onMounted(() => {
      setCurrentPageBreadcrumbs("AEs Listing", [
        "Acceuil",
        "Analyse environnementale",
        "Consulter les AE",
      ]);
    });
  },
  methods: {
    setpage(pageNumber) {
      this.page = pageNumber;
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
      }
    },
    editItem(item) {
      console.log("Edit Item: ", item);
    },
    deleteItem(item) {
      console.log("Delete Item: ", item);
    },
    setRowStyle(item) {
      /* Here you can also do some validation
      in case you want to apply different css
      classes depending on item attributes
      values */
      return "style-1";
    },
    changeWidth(value) {
      const tr = value.target.parentNode;
      if (tr.classList.contains("max-width-cell")) {
        tr.classList.remove("max-width-cell");
      } else {
        tr.classList.add("max-width-cell");
      }
    },
    mouseDownHandler(e) {
      console.log(e);
    },
  },
});
</script>
<style lang="scss">
.v-data-table-footer {
  display: none;
}
table.dataTable {
  clear: both;
  margin-top: 6px !important;
  margin-bottom: 6px !important;
  max-width: none !important;
  border-collapse: separate !important;
  border-spacing: 0;
}
table {
  caption-side: bottom;
  border-collapse: separate !important;
}

table.dataTable > thead {
  th.sorting {
    position: relative;
  }

  .sorting:after {
    position: absolute;
  }
}

table {
  background: #012b39;
  border-radius: 0.25em;
  border-collapse: collapse;
}
th {
  border-bottom: 1px solid #364043;
  color: #e2b842;
  font-size: 0.85em;
  font-weight: 600;
  text-align: left;
}
td {
  color: #fff;
  font-weight: 400;
}
.disabled td {
  color: #4f5f64;
}
tbody tr {
  transition: background 0.25s ease;
}
tbody tr:hover {
  background: #014055;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background: none;
  border-radius: 0.475rem;
  font-weight: 500;
  font-size: 1.075rem;
  font-family: Poppins, Helvetica, sans-serif;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #009ef7;
}

table.dataTable td.dataTables_empty,
table.dataTable th.dataTables_empty {
  text-align: center;
}

div.dataTables_wrapper div.dataTables_processing {
  position: absolute;
  top: 50%;
  left: 50%;
}

.v-data-table thead {
  font-size: 1rem;
  background-color: #e9dd1785;
  color: white;
}
.v-data-table {
  background: #012b39e3;
  min-height: 60vh;
  color: white;
  font-size: 0.75rem;
}
.medium-text {
  font-size: 1rem;
}
.max-width-cell {
  width: 50vh;
  font-size: 1rem !important;
}
.small-cell {
  font-size: 0.75rem;
}

.style-1 td {
  height: 100px !important;
}
.table-wrapper {
  cursor: grab;
  overflow: auto;
}
</style>

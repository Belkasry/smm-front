const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: "media/icons/duotune/art/art002.svg",
        fontIcon: "bi-app-indicator",
      },
    ],
  },
  {
    heading: "apps",
    route: "/apps",
    pages: [
      {
        sectionTitle: "Analyse environnementale",
        route: "/analyse/analyse-env-list",
        svgIcon: "/media/icons/duotune/medicine/med005.svg",
        fontIcon: "bi-cart",
        sub: [
          {
            heading: "Consulter les AE",
            route: "/apps/analyse/analyse-env-list",
          },
          {
            heading: "Créer une AE",
            route: "/apps/analyse/add-analyse",
          },
          {
            heading: "Plan d'action AE",
            route: "/apps/analyse/plans-list",
          },
          {
            heading: "Indicateur AE",
            route: "/apps/analyse/kpis-list",
          },
        ],
      },
      {
        sectionTitle: "Réglementation Environnementale\t",
        svgIcon: "/media/icons/duotune/medicine/med006.svg",
        fontIcon: "bi-cart",
      },
      {
        sectionTitle: "Energie\t",
        svgIcon: "/media/icons/duotune/medicine/med007.svg",
        fontIcon: "bi-cart",
      },
      {
        sectionTitle: "Biodiversité",
        svgIcon: "/media/icons/duotune/medicine/med008.svg",
        fontIcon: "bi-cart",
      },
      {
        heading: "calendarApp",
        route: "/apps/calendar",
        svgIcon: "media/icons/duotune/general/gen014.svg",
        fontIcon: "bi-calendar3-event",
      },
      {
        sectionTitle: "chat",
        route: "/chat",
        svgIcon: "media/icons/duotune/communication/com012.svg",
        fontIcon: "bi-chat-left",
        sub: [
          {
            heading: "privateChat",
            route: "/apps/chat/private-chat",
          },
          {
            heading: "groupChat",
            route: "/apps/chat/group-chat",
          },
          {
            heading: "drawerChat",
            route: "/apps/chat/drawer-chat",
          },
        ],
      },
    ],
  },
];

export default DocMenuConfig;

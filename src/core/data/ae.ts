interface IAE {
  id: number;
  service: {
    id: number;
    name: null | string;
  };
  activite: {
    id: number;
    name: null | string;
  };
  aspect: {
    id: number;
    name: null | string;
  };
  impact: {
    id: number;
    name: null | string;
  };
  theme: {
    id: number;
    name: null | string;
  };
  situation: {
    id: number;
    name: null | string;
  };
  frequence: {
    id: number;
    value: null | number;
    description: null | string;
  };
  gravite_etendu: {
    id: number;
    value: null | number;
    description: null | string;
  };
  gravite_dangerosite: {
    id: number;
    value: null | number;
    description: null | string;
    theme_id: number;
  };
  gravite_persistance:
    | object
    | {
        id: number;
        value: null | number;
        description: null | string;
      };
  s_ns: boolean;
  delai: string;
  moyen_maitrise_techniques: Array<{
    id: number;
    name: string;
  }>;
  moyen_maitrise_humains: Array<{
    id: number;
    name: string;
  }>;
  niveau_maitrise: {
    id: number;
    name: null | string;
    niveau: null | number;
  };
  niveau_priorite:
    | object
    | {
        id: number;
        name: null | string;
        ies: null | string;
        action: null | string;
      };
  plan_actions: Array<{
    id: number;
    name: string;
  }>;
  F_G: null | number;
}

const listAE: Array<IAE> = [
  {
    id: 2,
    s_ns: true,
    delai: "2023-02-17",
    moyen_maitrise_techniques: [
      {
        id: 1,
        name: "Audit ES chez les transporteurs (Transco, SEB,,,,,)",
      },
      {
        id: 2,
        name: "Fiche de Non-conformité",
      },
    ],
    niveau_priorite: {
      id: 1,
      name: "P1",
      ies: "IES>20",
      action:
        "Des actions doivent être prises immédiatement ou planifier dans les mois suivant",
    },
    gravite_persistance: {
      id: 1,
      value: 1,
      description: "A l’intérieur de l’entreprise",
    },
    moyen_maitrise_humains: [
      {
        id: 2,
        name: "Formation sur le risque des produits chimiques des opérateurs de production",
      },
    ],
    gravite_dangerosite: {
      id: 1,
      value: 1,
      description:
        "Substances non dangereuses (vapeurs d’eau, poussières non dangereuse)",
      theme_id: 1,
    },
    theme: {
      id: 1,
      name: "Sol",
    },
    frequence: {
      id: 1,
      value: 1,
      description: "Chaque semestre",
    },
    niveau_maitrise: {
      id: 1,
      niveau: 1,
      name: "3 OTH présents",
    },
    service: {
      id: 1,
      name: "Achat & Logistique",
    },
    aspect: {
      id: 1,
      name: "Emanation des poussière & fumé des camion",
    },
    plan_actions: [
      {
        id: 2,
        name: "Approuver la procédure de gestion de sous traitante",
      },
    ],
    activite: {
      id: 1,
      name: "Transport par camion (Conakry - Loila)",
    },
    situation: {
      id: 1,
      name: "N",
    },
    gravite_etendu: {
      id: 1,
      value: 1,
      description: "A l’intérieur de l’entreprise",
    },
    impact: {
      id: 1,
      name: "Pollution de l'air",
    },
    F_G: 0,
  },
  {
    id: 3,
    s_ns: false,
    delai: "2023-02-10",
    moyen_maitrise_techniques: [],
    niveau_priorite: {
      id: 2,
      name: "P2",
    },
    gravite_persistance: {
      id: 2,
      value: 2,
      description: "Voisinage de l’entreprise (niveau prefectoral)",
    },
    moyen_maitrise_humains: [
      {
        id: 1,
        name: "Sensibilisation des conducteurs sur le port des EPI",
      },
      {
        id: 2,
        name: "Formation sur le risque des produits chimiques des opérateurs de production",
      },
    ],
    gravite_dangerosite: {
      id: 4,
      value: 1,
      description: "Sanitaires",
      theme_id: 2,
    },
    theme: {
      id: 2,
      name: "Air",
    },
    frequence: {
      id: 2,
      value: 2,
      description: "Chaque mois",
    },
    niveau_maitrise: {
      id: 2,
      niveau: 2,
      name: "2 OTH présents",
    },
    service: {
      id: 2,
      name: "Approvisionnement",
    },
    aspect: {
      id: 3,
      name: "Emission de la fumé",
    },
    plan_actions: [],
    activite: {
      id: 1,
      name: "Transport par camion (Conakry - Loila)",
    },
    situation: {
      id: 2,
      name: "D",
    },
    gravite_etendu: {
      id: 2,
      value: 2,
      description: "Voisinage de l’entreprise (niveau prefectoral)",
    },
    impact: {
      id: 2,
      name: "Pollution sonore",
    },
    F_G: 0,
  },
  {
    id: 5,
    s_ns: false,
    delai: "d2023-02-17",
    moyen_maitrise_techniques: [],
    niveau_priorite: {
      id: 3,
      name: "P1",
      ies: "1 à 10",
      action:
        "Si pertinent et économiquement acceptable, des mesures peuvent être proposées à la direction pour améliorer la situation environnementale liée à cet Aspect/impact avec une surveillance",
    },
    gravite_persistance: {
      id: 3,
      value: 3,
      description: "Régional et national",
    },
    moyen_maitrise_humains: [],
    gravite_dangerosite: {
      id: 8,
      value: 4,
      description:
        "Substances moyennement dangereuses (qui modifient la température et le Ph)",
      theme_id: 2,
    },
    theme: {
      id: 3,
      name: "Eau",
    },
    frequence: {
      id: 3,
      value: 3,
      description: "Chaque semaine",
    },
    niveau_maitrise: {
      id: 3,
      niveau: 3,
      name: "1 OTH présents",
    },
    service: {
      id: 3,
      name: "Environnement & Sociétal",
    },
    aspect: {
      id: 3,
      name: "Emission de la fumé",
    },
    plan_actions: [],
    activite: {
      id: 3,
      name: "Zone d'enfouissement et de tri",
    },
    situation: {
      id: 3,
      name: "U",
    },
    gravite_etendu: {
      id: 3,
      value: 3,
      description: "Régional et national",
    },
    impact: {
      id: 2,
      name: "Pollution sonore",
    },
    F_G: 0,
  },
];

export { IAE };

export default listAE;

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

const listAE: Array<IAE> = [];

export { IAE };

export default listAE;

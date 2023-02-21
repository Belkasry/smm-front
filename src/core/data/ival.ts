interface Service {
  id: number;
  name: string;
}

interface Activite {
  id: number;
  name: string;
  service_id: number;
}

interface Zone {
  id: number;
  name: string;
  activite_id: number;
}

interface PosteTravail {
  id: number;
  name: string;
  zone_id: number;
}

interface Theme {
  id: number;
  name: string;
}
interface GraviteDangerosite {
  id: number;
  theme_id: number;
}
export { Service, Activite, Zone, PosteTravail, Theme, GraviteDangerosite };

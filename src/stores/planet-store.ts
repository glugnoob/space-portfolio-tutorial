import { Vector3 } from "three";
import { create } from "zustand";

export enum ActivePlanet {
  NONE,
  EARTH,
  RED,
}

interface PlanetStore {
  activePlanet: ActivePlanet;
  activeLocation: Vector3 | null;
  setActivePlanet: (
    activePlanet: ActivePlanet,
    activeLocation: Vector3
  ) => void;
  resetActivePlanet: () => void;
}

export const usePlanetStore = create<PlanetStore>((set) => ({
  activePlanet: ActivePlanet.NONE,
  activeLocation: null,
  setActivePlanet: (activePlanet: ActivePlanet, activeLocation: Vector3) =>
    set({ activePlanet, activeLocation }),
  resetActivePlanet: () =>
    set({ activePlanet: ActivePlanet.NONE, activeLocation: null }),
}));

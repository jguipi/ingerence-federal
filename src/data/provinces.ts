import type { ProvinceCode } from './types';

export interface Province {
  code: ProvinceCode;
  name: string;
  available: boolean; // documenté sur le site (v1: QC seulement)
}

// Ajouter une province au site = passer `available` à true et créer ses cas.
export const provinces: Province[] = [
  { code: 'QC', name: 'Québec', available: true },
  { code: 'ON', name: 'Ontario', available: false },
  { code: 'BC', name: 'Colombie-Britannique', available: false },
  { code: 'AB', name: 'Alberta', available: true },
  { code: 'SK', name: 'Saskatchewan', available: false },
  { code: 'MB', name: 'Manitoba', available: false },
  { code: 'NB', name: 'Nouveau-Brunswick', available: false },
  { code: 'NS', name: 'Nouvelle-Écosse', available: false },
  { code: 'PE', name: 'Île-du-Prince-Édouard', available: false },
  { code: 'NL', name: 'Terre-Neuve-et-Labrador', available: false },
  { code: 'NT', name: 'Territoires du Nord-Ouest', available: false },
  { code: 'YT', name: 'Yukon', available: false },
  { code: 'NU', name: 'Nunavut', available: false },
];

export const provinceName = (code: ProvinceCode): string =>
  provinces.find((p) => p.code === code)?.name ?? code;

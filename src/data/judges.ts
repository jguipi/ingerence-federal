import type { ProvinceCode } from './types';

// Composition de la Cour suprême du Canada par PROVINCE DE NOMINATION (le siège pour lequel le
// juge est nommé), et roulement 2016-2026. Données vérifiées sur les biographies officielles de
// la Cour (scc-csc.ca) et la Loi sur la Cour suprême (art. 6). La répartition n'est PAS présentée
// comme un déséquilibre : l'art. 6 EXIGE au moins 3 juges du Québec sur 9; les 3 Ontario / 2
// Ouest / 1 Atlantique relèvent d'une convention non codifiée. Aucun score, aucun verdict.
//
// Champ « premier ministre ayant nommé » volontairement ABSENT : non affiché sur les bios
// primaires, donc non vérifié (ne pas inventer). `retired` absent = juge en poste.
export interface Judge {
  name: string;
  province: ProvinceCode; // province de nomination (siège), pas l'origine personnelle
  appointed: string; // date de nomination (ISO)
  retired?: string; // date de départ (ISO); absent = en poste
  chief?: boolean; // juge en chef
  sourceIds: string[];
}

// Sources partagées pour toutes les lignes : biographies officielles SCC + Loi S-26.
const scc = ['scc-juges-liste', 'loi-cour-supreme-art6'];

export const judges: Judge[] = [
  // Les 9 juges en poste (2026).
  { name: 'Richard Wagner', province: 'QC', appointed: '2012-10-05', chief: true, sourceIds: scc },
  { name: 'Andromache Karakatsanis', province: 'ON', appointed: '2011-10-21', sourceIds: scc },
  { name: 'Suzanne Côté', province: 'QC', appointed: '2014-12-01', sourceIds: scc },
  { name: 'Malcolm Rowe', province: 'NL', appointed: '2016-10-28', sourceIds: scc },
  { name: 'Nicholas Kasirer', province: 'QC', appointed: '2019-09-16', sourceIds: scc },
  { name: 'Mahmud Jamal', province: 'ON', appointed: '2021-07-01', sourceIds: scc },
  { name: "Michelle O'Bonsawin", province: 'ON', appointed: '2022-09-01', sourceIds: scc },
  { name: 'Mary T. Moreau', province: 'AB', appointed: '2023-11-06', sourceIds: scc },
  { name: 'Glenn D. Joyal', province: 'MB', appointed: '2026-07-15', sourceIds: scc },

  // Départs 2016-2026 (roulement). Provinces des anciens juges issues de la page-liste officielle.
  { name: 'Beverley McLachlin', province: 'BC', appointed: '1989-03-30', retired: '2017-12-14', chief: true, sourceIds: scc },
  { name: 'Clément Gascon', province: 'QC', appointed: '2014-06-09', retired: '2019-09-15', sourceIds: scc },
  { name: 'Rosalie Abella', province: 'ON', appointed: '2004-10-04', retired: '2021-06-30', sourceIds: scc },
  { name: 'Michael J. Moldaver', province: 'ON', appointed: '2011-10-21', retired: '2022-08-31', sourceIds: scc },
  { name: 'Russell Brown', province: 'AB', appointed: '2015-08-31', retired: '2023-06-12', sourceIds: scc },
  { name: 'Sheilah L. Martin', province: 'AB', appointed: '2017-12-18', retired: '2026-05-30', sourceIds: scc },
];

export const sittingJudges = (): Judge[] => judges.filter((j) => !j.retired);

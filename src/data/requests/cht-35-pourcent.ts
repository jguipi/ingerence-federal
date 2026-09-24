import type { ProvincialRequest } from '../types';

// Demande des provinces (via le Conseil de la fédération, portée par le Québec) : hausser la
// part fédérale EN ARGENT COMPTANT du Transfert canadien en santé à 35 % des coûts de santé
// (≈ 28 G$/an de plus + indexation 5 %/an). Demande primaire vérifiée (COF, 4 mars 2021).
// Réponse fédérale (7 fév. 2023) : 46,2 G$ d'argent neuf sur 10 ans, conditionné au partage de
// données — bien en deçà des 35 % réclamés. PARTIELLE. Position fédérale documentée (PM, Duclos).
// Angle « demande et réponse », distinct du cas sante-tcs (le transfert lui-même).
export const chtTrenteCinq: ProvincialRequest = {
  id: 'cht-35-pourcent',
  slug: 'cht-35-pourcent',
  province: 'QC',
  title: 'Porter la part fédérale du Transfert canadien en santé à 35 % des coûts',
  date: '2021-03-04',
  domains: ['sante', 'fiscalite'],
  status: 'partielle',
  ask: "Les provinces, par le Conseil de la fédération, demandaient de hausser la part fédérale en argent comptant du Transfert canadien en santé à 35 % des coûts de santé (environ 28 G$ de plus par année), avec une indexation annuelle d'au moins 5 %, versée sans condition.",
  whyProvince:
    "La part fédérale en argent comptant avait chuté autour de 22 % des coûts de santé, jugée insuffisante et imprévisible face à la croissance des dépenses; les provinces réclamaient un financement stable et sans condition dans un champ de leur compétence.",
  federalReason:
    "Ottawa a offert 46,2 G$ d'argent neuf sur 10 ans plutôt qu'une hausse permanente de la part, en la conditionnant au partage et à l'usage de données de santé, et a contesté la base de 22 % (se disant à « en moyenne 32 % » depuis 2004-05 en incluant les points d'impôt).",
  provincePositionSourceIds: ['cof-cht-2021'],
  federalPositionSourceIds: ['pm-cht-2023', 'tcs-plan-2023'],
  relatedCaseSlug: 'sante-tcs',
  sourceIds: ['cof-cht-2021', 'pm-cht-2023', 'tcs-plan-2023'],
  lastVerified: '2026-09-24',
};

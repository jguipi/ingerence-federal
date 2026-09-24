import type { Case } from '../types';

// Transfert canadien en santé (TCS) — plan fédéral du 7 février 2023 et débat sur la part
// fédérale des coûts. Montants du TCS versés au Québec vérifiés via les « Principaux
// transferts fédéraux » (Finances Canada, consulté 2026-09-24) : 10 911 M$ (2023-24),
// 11 354 M$ (2024-25), 11 893 M$ (2025-26), 12 457 M$ (2026-27). Ces montants EXCLUENT les
// majorations ponctuelles antérieures et incluent la garantie de croissance de 5 % à partir
// de 2025-26 (155 M$ en 2025-26, 305 M$ en 2026-27). Le plan national 2023 : 46,2 G$ d'argent
// neuf sur 10 ans (dont 2 G$ ponctuels immédiats et 17,3 G$ via la garantie de 5 %).
//
// Débat de fond : les provinces (Conseil de la fédération) demandaient de porter la part
// fédérale EN ARGENT COMPTANT à 35 % des coûts de santé; le fédéral se dit à ~24 % comptant
// (« 32 % » en incluant les points d'impôt). Ce chiffre de 35 % / hausse annuelle est attribué
// aux provinces mais n'a pas été confirmé sur une page gouvernementale accessible → non inscrit
// comme montant, seulement attribué à qui l'affirme (jamais estimé).
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const santeTcs: Case = {
  id: 'sante-tcs',
  slug: 'sante-tcs',
  title: 'Transfert canadien en santé — hausse de 2023 et part fédérale des coûts',
  province: 'QC',
  domains: ['sante'],
  dateStart: '2023',
  status: 'donnees-financieres-partielles',
  interventionType: 'transfert',
  autonomyImpact: {
    level: 'preservee',
    rationale:
      "Le TCS est un transfert en bloc versé sans affectation par service; le débat porte sur son montant (part fédérale des coûts), non sur des conditions qui dirigeraient l'organisation des soins.",
    assertedBy: "Lecture du mécanisme du TCS (transfert en bloc)",
    sourceIds: ['transferts-majeurs-fin', 'tcs-plan-2023'],
  },
  serviceImpact: {
    level: 'pression-alleguee',
    rationale:
      "Les provinces soutiennent que la part fédérale en argent comptant, sous les 35 % réclamés, ne suit pas la croissance des coûts de santé et exerce une pression sur les services offerts à la population.",
    assertedBy: 'Conseil de la fédération (provinces et territoires)',
    sourceIds: ['premiers-couts-sante'],
  },
  summary:
    "Le 7 février 2023, Ottawa a annoncé 46,2 G$ d'argent neuf sur 10 ans en santé. Les provinces réclamaient une part fédérale en argent comptant portée à 35 % des coûts; le fédéral se situe autour de 24 % comptant. Le débat porte sur le montant du transfert, pas sur son affectation.",
  description:
    "Le Transfert canadien en santé (TCS) est le principal transfert fédéral en santé, versé en bloc et calculé par habitant. Le 7 février 2023, le fédéral a annoncé un plan de 198,6 G$ sur 10 ans, dont 46,2 G$ d'argent neuf : une majoration ponctuelle immédiate de 2 G$ (urgences, chirurgies, pédiatrie), une garantie de croissance du TCS de 5 % par an sur cinq ans (17,3 G$, intégrée à la base après 2027-28) et 25 G$ pour des ententes bilatérales sur mesure. Les provinces, par le Conseil de la fédération, demandaient de longue date de porter la part fédérale EN ARGENT COMPTANT à 35 % des coûts de santé. Le fédéral affirme financer « en moyenne 32 % » des dépenses provinciales — mais ce pourcentage inclut les points d'impôt; la part strictement en argent comptant est nettement plus basse (de l'ordre de 24 %). L'enjeu n'est pas une somme promise puis non versée, mais l'écart entre la demande provinciale et l'offre fédérale.",
  federalAction:
    "Fixation unilatérale du montant et de la formule de croissance du TCS, principal levier de financement fédéral d'un service de compétence provinciale.",
  provincialCompetence:
    "Organisation, planification et gestion des services de santé — compétence provinciale.",
  federalCompetence:
    'Pouvoir fédéral de dépenser; le TCS est versé en bloc sans affectation par service.',
  argumentsFor: [
    "Le Conseil de la fédération soutient que la part fédérale en argent comptant (~24 %) est très inférieure à sa contribution historique et aux 35 % nécessaires pour couvrir la croissance des coûts, laissant aux provinces le poids financier d'une compétence qui est la leur.",
    "Le Comité consultatif sur les enjeux constitutionnels du Québec relève l'usage du pouvoir fédéral de dépenser comme levier dans un champ provincial.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Le plan de 2023 injecte 46,2 G$ d'argent neuf et garantit une croissance de 5 % par an du TCS; le fédéral estime soutenir en moyenne 32 % des coûts de santé (points d'impôt inclus).",
      sourceIds: ['tcs-plan-2023'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Conseil de la fédération (premiers ministres des provinces)',
      stance:
        "La part fédérale en argent comptant doit être portée à 35 % des coûts de santé; l'offre fédérale de 2023 reste très en deçà de cette demande.",
      sourceIds: ['premiers-couts-sante'],
    },
    {
      actor: 'Gouvernement du Québec',
      stance:
        "Le Québec réclame une hausse des transferts en santé sans conditions, dans le respect de sa compétence exclusive sur l'organisation des soins.",
      sourceIds: ['comite-consultatif-qc'],
    },
  ],
  legalStatus:
    "Aucun litige judiciaire. Débat politique et intergouvernemental sur le montant du TCS.",
  events: [
    { date: '2020-10-30', title: 'Le Conseil de la fédération chiffre les coûts de santé', description: 'Rapport à l’appui de la demande d’une part fédérale portée à 35 %.', sourceIds: ['premiers-couts-sante'] },
    { date: '2023-02-07', title: 'Plan fédéral en santé annoncé', description: '198,6 G$ sur 10 ans dont 46,2 G$ d’argent neuf.', sourceIds: ['tcs-plan-2023'] },
  ],
  funding: [
    {
      id: 'tcs-qc',
      program: 'Transfert canadien en santé — part du Québec',
      province: 'QC',
      federalDepartment: 'Ministère des Finances Canada',
      announcementDate: '2023-02-07',
      period: '2023-2024 à 2026-2027',
      announced: cad(46_200_000_000, ['tcs-plan-2023'], 'Argent neuf annoncé à l’échelle nationale sur 10 ans (2 G$ ponctuels + 17,3 G$ garantie 5 % + 25 G$ ententes bilatérales); pas une somme réservée au Québec'),
      committed: cad(null, ['transferts-majeurs-fin'], 'Le TCS est calculé par habitant chaque année, pas engagé en bloc pluriannuel pour le Québec'),
      guaranteed: cad(12_457_000_000, ['transferts-majeurs-fin'], 'TCS versé au Québec en 2026-27 (inclut 305 M$ de la garantie de croissance de 5 %); exclut les majorations ponctuelles'),
      conditional: cad(null, ['transferts-majeurs-fin'], 'Le TCS est un transfert en bloc sans affectation par service'),
      paid: cad(10_911_000_000, ['transferts-majeurs-fin'], 'TCS versé au Québec en 2023-24; 11 354 M$ en 2024-25, 11 893 M$ en 2025-26'),
      remaining: cad(null, ['transferts-majeurs-fin']),
      conditional_flag: false,
      conditionIds: [],
      sourceIds: ['tcs-plan-2023', 'transferts-majeurs-fin'],
    },
  ],
  conditions: [],
  sourceIds: ['tcs-plan-2023', 'transferts-majeurs-fin', 'premiers-couts-sante', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

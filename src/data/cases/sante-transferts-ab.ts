import type { Case } from '../types';

// Accord bilateral Canada-Alberta sur les soins de sante, signe le 21 decembre 2023.
// Annonce verifiee : 1,06 G$ sur 3 ans (communique Sante Canada, 2023-12-21).
// Detail annuel et montants verses non publies dans les sources primaires accessibles
// -> paid null, remaining null. Les quatre priorites et les conditions de reddition
// de comptes sont tirees du communique federal.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const santeTransfertsAb: Case = {
  id: 'sante-transferts-ab',
  slug: 'sante-transferts-ab',
  title: "Accord bilatéral Canada–Alberta sur les soins de santé (2023-2026)",
  province: 'AB',
  domains: ['sante'],
  dateStart: '2023',
  dateEnd: '2026',
  status: 'entente-federale-provinciale',
  interventionType: 'financement-conditionnel',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "L'accord lie les fonds fédéraux à quatre priorités pancanadiennes et à des engagements de reddition de comptes (plans d'action, indicateurs comparables via l'ICIS), définissant les orientations dans un champ de compétence provinciale.",
    assertedBy: "Lecture des conditions de l'accord bilatéral Canada–Alberta (Santé Canada, 2023-12-21)",
    sourceIds: ['accord-sante-ab-2023'],
  },
  summary:
    "Le Canada et l'Alberta ont signé en décembre 2023 un accord bilatéral de 1,06 G$ sur 3 ans pour les soins de santé. L'accord conditionne les fonds à quatre priorités pancanadiennes (accès aux soins, personnel de santé, santé mentale, numérique) et à une reddition de comptes publique annuelle.",
  description:
    "Dans le cadre du plan fédéral de 25 G$ sur 10 ans pour améliorer les soins de santé, le Canada et l'Alberta ont signé le 21 décembre 2023 un accord bilatéral de 1,06 G$ sur trois ans. L'accord comprend environ 285 M$ annuellement en nouveau financement fédéral, auxquels s'ajoutent environ 70 M$ par année pour la santé mentale et les dépendances (héritage du budget 2017). L'Alberta doit mettre en œuvre un plan d'action triennal visant l'expansion de l'accès aux soins primaires, l'amélioration de l'imagerie diagnostique, le développement des services de santé numérique, l'élargissement des programmes de santé mentale pour les jeunes et la réduction des temps d'attente pour les services de santé mentale. L'Alberta est tenue de rendre compte publiquement de ses progrès sur des cibles mesurables.",
  federalAction:
    "Financement conditionnel de 1,06 G$ sur 3 ans lié à quatre priorités pancanadiennes et à une reddition de comptes publique annuelle.",
  provincialCompetence:
    "Santé — compétence provinciale exclusive; organisation et prestation des soins de santé relèvent de l'Alberta.",
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "L'accord conditionne les fonds à des priorités pancanadiennes définies par Ottawa et à des indicateurs comparables établis par l'ICIS, orientant les investissements dans un champ provincial sans droit de retrait ni entente asymétrique.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "L'accord vise à améliorer l'accès aux soins de santé pour les Albertains selon quatre priorités partagées; la reddition de comptes assure que les investissements se traduisent en améliorations mesurables.",
      sourceIds: ['accord-sante-ab-2023'],
    },
  ],
  provincialPosition: [
    {
      actor: "Gouvernement de l'Alberta",
      stance:
        "L'Alberta a signé l'accord tout en exprimant des réserves sur les conditions fédérales en matière de santé; les soins de santé relèvent de la compétence provinciale et l'Alberta doit avoir la flexibilité nécessaire pour répondre aux besoins de sa population.",
      sourceIds: ['accord-sante-ab-2023'],
    },
  ],
  legalStatus:
    "Accord bilatéral en vigueur (2023-2026). Aucun litige judiciaire. Renouvellement prévu pour 2026-2033.",
  events: [
    {
      date: '2023-02-07',
      title: "Annonce fédérale : plan de 25 G$ sur 10 ans",
      description: "Ottawa annonce un plan de financement de la santé incluant des accords bilatéraux conditionnels avec les provinces.",
      sourceIds: ['tcs-plan-2023'],
    },
    {
      date: '2023-12-21',
      title: "Signature de l'accord bilatéral Canada–Alberta",
      description: "1,06 G$ sur 3 ans; plan d'action triennal obligatoire.",
      sourceIds: ['accord-sante-ab-2023'],
    },
  ],
  funding: [
    {
      id: 'sante-ab-2023',
      program: "Accord bilatéral Canada–Alberta sur les soins de santé (2023-2026)",
      province: 'AB',
      federalDepartment: 'Santé Canada',
      announcementDate: '2023-12-21',
      agreementDate: '2023-12-21',
      period: '2023-2024 à 2025-2026',
      announced: cad(1_060_000_000, ['accord-sante-ab-2023'], "« Plus de 1 milliard $ sur 3 ans » — source : communiqué Santé Canada"),
      committed: cad(1_060_000_000, ['accord-sante-ab-2023']),
      guaranteed: cad(null, ['accord-sante-ab-2023'], "Versements liés au dépôt de plans d'action et à la reddition de comptes"),
      conditional: cad(1_060_000_000, ['accord-sante-ab-2023'], "Fonds conditionnels aux quatre priorités pancanadiennes et au plan d'action"),
      paid: cad(null, ['accord-sante-ab-2023'], "Versements annuels non ventilés dans les sources primaires accessibles"),
      remaining: cad(null, ['accord-sante-ab-2023']),
      conditional_flag: true,
      conditionIds: ['sante-ab-priorites', 'sante-ab-comptes'],
      sourceIds: ['accord-sante-ab-2023'],
    },
  ],
  conditions: [
    {
      id: 'sante-ab-priorites',
      label: "Plan d'action sur les quatre priorités pancanadiennes",
      detail:
        "L'Alberta doit mettre en oeuvre un plan d'action triennal couvrant : (1) accès aux soins de santé primaires (y compris en milieu rural et éloigné), (2) soutien aux travailleurs de la santé et réduction des arriérés, (3) santé mentale et toxicomanies, (4) modernisation numérique et données de santé.",
      mandatory: true,
      acceptedByProvince: true,
      contestedByProvince: false,
      consequenceIfUnmet: "Non précisée explicitement; fonds liés au respect des engagements du plan d'action.",
      sourceIds: ['accord-sante-ab-2023'],
    },
    {
      id: 'sante-ab-comptes',
      label: "Reddition de comptes publique annuelle sur des indicateurs comparables (ICIS)",
      detail:
        "L'Alberta doit rendre compte annuellement de ses progrès sur des indicateurs mesurables comparables aux autres provinces, conformément aux standards de l'Institut canadien d'information sur la santé (ICIS).",
      mandatory: true,
      acceptedByProvince: true,
      contestedByProvince: false,
      consequenceIfUnmet: "Non précisée explicitement dans les sources primaires accessibles.",
      sourceIds: ['accord-sante-ab-2023'],
    },
  ],
  sourceIds: ['accord-sante-ab-2023', 'tcs-plan-2023', 'transferts-majeurs-fin'],
  lastVerified: '2026-09-24',
};

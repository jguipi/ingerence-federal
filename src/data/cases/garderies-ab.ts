import type { Case } from '../types';

// Entente pancanadienne sur les services de garde -- Alberta (2021-2026). L'Alberta a signe
// l'entente standard le 14 novembre 2021, contrairement au Quebec qui a obtenu une entente
// asymetrique. Montants verifies depuis l'entente publiee sur canada.ca (2026-09-24) :
// 3,8 G$ sur 5 ans (detail annuel dans l'entente). Conditions incluent un objectif de
// 10 $/jour, 42 500 nouvelles places, priorite aux fournisseurs sans but lucratif,
// et retention possible de fonds si objectifs non atteints.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const garderiesAb: Case = {
  id: 'garderies-ab',
  slug: 'garderies-ab',
  title: "Accord pancanadien sur les services de garde — Alberta (accord conditionnel standard)",
  province: 'AB',
  domains: ['garde-enfants', 'services-sociaux'],
  dateStart: '2021',
  dateEnd: '2026',
  status: 'entente-federale-provinciale',
  interventionType: 'financement-conditionnel',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "Contrairement au Québec qui a obtenu une entente asymétrique reconnaissant son réseau préexistant, l'Alberta a accepté l'accord standard pancanadien qui impose des conditions de livraison (priorité aux fournisseurs sans but lucratif, seuil d'éducatrices certifiées), orientant un modèle de gouvernance dans un champ provincial.",
    assertedBy: "Lecture des conditions de l'entente Canada–Alberta CWELCC 2021; contraste avec l'entente asymétrique accordée au Québec",
    sourceIds: ['garderies-entente-ab-2021'],
  },
  summary:
    "L'Alberta a signé en 2021 l'accord standard pancanadien sur les services de garde (3,8 G$ sur 5 ans), contrairement au Québec qui a obtenu une entente asymétrique. L'accord conditionne les fonds à un objectif de 10 $/jour, à la création de 42 500 places et à la priorité aux fournisseurs sans but lucratif.",
  description:
    "Dans le cadre du système pancanadien d'apprentissage et de garde des jeunes enfants (CWELCC), l'Alberta a signé le 14 novembre 2021 l'accord standard, qui prévoit 3,8 G$ sur cinq ans (2021-2026). Contrairement au Québec, l'Alberta n'a pas obtenu d'entente asymétrique : les fonds sont conditionnels à des cibles spécifiques de livraison. L'accord exige notamment la réduction des frais parentaux de 50 % d'ici la fin de 2022, l'atteinte d'une moyenne de 10 $/jour d'ici 2025-2026, la création d'au moins 42 500 nouvelles places réglementées avec priorité aux fournisseurs sans but lucratif, et l'augmentation des éducatrices certifiées à 60 %. Le gouvernement du Canada peut retenir des fonds si l'Alberta ne respecte pas les objectifs ou ne soumet pas les rapports requis.",
  federalAction:
    "Financement conditionnel des services de garde dans le cadre du CWELCC, avec des conditions de livraison et de modèle (priorité sans but lucratif) imposées à l'Alberta.",
  provincialCompetence:
    "Services de garde à l'enfance et services sociaux — compétence provinciale; l'Alberta avait un système à prédominance privée avant l'accord.",
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "L'accord standard impose à l'Alberta des conditions de modèle de livraison (priorité aux fournisseurs sans but lucratif) incompatibles avec son infrastructure existante à prédominance privée — conditions que le Québec a évitées grâce à son entente asymétrique.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "L'accord vise un système pancanadien abordable et de qualité; les conditions assurent la reddition de comptes et l'équité d'accès.",
      sourceIds: ['garderies-entente-ab-2021'],
    },
  ],
  provincialPosition: [
    {
      actor: "Gouvernement de l'Alberta (UCP)",
      stance:
        "L'Alberta a signé l'accord, mais la priorité imposée aux fournisseurs sans but lucratif est contestée par le gouvernement provincial qui défend le modèle mixte (public-privé) existant.",
      sourceIds: ['garderies-entente-ab-2021'],
    },
  ],
  legalStatus:
    "Entente en vigueur (2021-2026). Aucun litige judiciaire. L'Alberta a signé l'accord standard (non asymétrique).",
  events: [
    {
      date: '2021-11-14',
      title: "Signature de l'accord Canada–Alberta CWELCC",
      description: "3,8 G$ sur 5 ans; accord standard avec conditions de livraison.",
      sourceIds: ['garderies-entente-ab-2021'],
    },
    {
      date: '2021-08-05',
      title: "Entente asymétrique Canada–Québec (point de comparaison)",
      description: "Le Québec signe une entente asymétrique sans les conditions imposées à l'Alberta.",
      sourceIds: ['garderies-entente-2021'],
    },
  ],
  funding: [
    {
      id: 'garderies-ab-2021',
      program: "Accord Canada–Alberta sur les services de garde (CWELCC 2021–2026)",
      province: 'AB',
      federalDepartment: 'Emploi et Développement social Canada',
      announcementDate: '2021-11-14',
      agreementDate: '2021-11-14',
      period: '2021-2022 à 2025-2026',
      announced: cad(3_797_165_586, ['garderies-entente-ab-2021'], "3,8 G$ sur 5 ans — détail annuel inscrit dans l'entente"),
      committed: cad(3_797_165_586, ['garderies-entente-ab-2021']),
      guaranteed: cad(null, ['garderies-entente-ab-2021'], "Des fonds peuvent être retenus si l'Alberta ne respecte pas les objectifs"),
      conditional: cad(3_797_165_586, ['garderies-entente-ab-2021'], "Fonds conditionnels aux cibles de 10 $/jour, 42 500 places, seuil sans but lucratif"),
      paid: cad(null, ['garderies-entente-ab-2021'], "Versements annuels non ventilés dans les sources primaires accessibles"),
      remaining: cad(null, ['garderies-entente-ab-2021']),
      conditional_flag: true,
      conditionIds: ['garderies-ab-frais', 'garderies-ab-places', 'garderies-ab-sbl'],
      sourceIds: ['garderies-entente-ab-2021'],
    },
  ],
  conditions: [
    {
      id: 'garderies-ab-frais',
      label: "Réduction des frais à 10 $/jour d'ici 2025-2026",
      detail:
        "L'Alberta doit réduire les frais parentaux de 50 % des niveaux de 2019 d'ici la fin de 2022 et atteindre une moyenne de 10 $/jour d'ici l'exercice 2025-2026.",
      mandatory: true,
      acceptedByProvince: true,
      contestedByProvince: false,
      consequenceIfUnmet: "Le Canada peut retenir des fonds si les objectifs de frais ne sont pas atteints.",
      sourceIds: ['garderies-entente-ab-2021'],
    },
    {
      id: 'garderies-ab-places',
      label: "Création de 42 500 nouvelles places réglementées",
      detail:
        "L'Alberta doit créer au minimum 42 500 nouvelles places réglementées pour les enfants de 0 à la maternelle, en priorité chez les fournisseurs sans but lucratif et publics.",
      mandatory: true,
      acceptedByProvince: true,
      contestedByProvince: false,
      consequenceIfUnmet: "Fonds potentiellement retenus si la cible de création de places n'est pas atteinte.",
      sourceIds: ['garderies-entente-ab-2021'],
    },
    {
      id: 'garderies-ab-sbl',
      label: "Priorité aux fournisseurs sans but lucratif",
      detail:
        "L'entente exige que l'expansion des places se fasse principalement chez des fournisseurs sans but lucratif et publics; tout plan d'expansion du secteur à but lucratif doit être approuvé conjointement par les deux gouvernements d'ici le 31 décembre 2022, sous peine de retenue de fonds (44,9 M$ sur 2023-2026).",
      mandatory: true,
      acceptedByProvince: true,
      contestedByProvince: true,
      consequenceIfUnmet: "Retenue de fonds (44,9 M$) si le plan d'expansion à but lucratif n'est pas approuvé en temps voulu.",
      sourceIds: ['garderies-entente-ab-2021'],
    },
  ],
  sourceIds: ['garderies-entente-ab-2021', 'garderies-entente-2021'],
  lastVerified: '2026-09-24',
};

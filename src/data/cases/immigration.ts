import type { Case } from '../types';

// Immigration temporaire et demandeurs d'asile. Compétence PARTAGÉE sur le plan
// constitutionnel : l'Accord Canada–Québec attribue à Ottawa l'admissibilité et les
// permis/visas, et au Québec la sélection des immigrants économiques. Le fédéral finance
// une partie des coûts d'hébergement des demandeurs d'asile; montants non détaillés dans
// les sources consultées (2026-09-24) → funding: [] (jamais estimé).

export const immigration: Case = {
  id: 'immigration',
  slug: 'immigration',
  title: "Immigration temporaire et demandeurs d'asile",
  province: 'QC',
  domains: ['immigration'],
  dateStart: '2021',
  dateEnd: '2026',
  status: 'en-cours',
  interventionType: 'intervention-administrative',
  summary:
    "Immigration relève de responsabilités partagées entre Ottawa et Québec; des tensions portent sur les volumes de résidents temporaires et les coûts des demandeurs d'asile.",
  description:
    "L'immigration est un domaine de compétence partagée sur le plan constitutionnel. L'Accord Canada–Québec attribue des rôles précis : Ottawa gère l'admissibilité et la délivrance des permis et visas, tandis que le Québec sélectionne les immigrants économiques. Le fédéral finance une partie des coûts d'hébergement des demandeurs d'asile. Des tensions portent sur les volumes de résidents temporaires et sur la compensation des coûts assumés par le Québec.",
  federalAction:
    "Gestion fédérale de l'admissibilité et des permis/visas, et financement partiel des coûts d'hébergement des demandeurs d'asile.",
  provincialCompetence:
    "Compétence PARTAGÉE : le Québec sélectionne les immigrants économiques en vertu de l'Accord Canada–Québec.",
  federalCompetence:
    "Compétence PARTAGÉE : Ottawa est responsable de l'admissibilité, des permis et des visas, et de l'accueil des demandeurs d'asile.",
  argumentsFor: [
    "Le Québec demande une compensation des coûts liés à l'accueil des résidents temporaires et des demandeurs d'asile.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Ottawa est responsable de l'admissibilité et des permis/visas et finance une partie des coûts d'hébergement des demandeurs d'asile.",
      sourceIds: ['ircc-qc-faits'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "Le Québec sélectionne les immigrants économiques (Accord Canada–Québec) et demande une compensation des coûts qu'il assume.",
      sourceIds: ['ircc-qc-faits', 'comite-consultatif-qc'],
    },
  ],
  legalStatus:
    "Compétence partagée encadrée par l'Accord Canada–Québec. Tensions en cours; aucun litige judiciaire identifié dans les sources consultées.",
  events: [
    { date: '2021', title: "Tensions sur les volumes de résidents temporaires et les demandeurs d'asile", sourceIds: ['ircc-qc-faits'] },
    { date: '2025', title: 'Faits saillants — Québec et immigration', sourceIds: ['ircc-qc-faits'] },
  ],
  funding: [],
  conditions: [],
  sourceIds: ['ircc-qc-faits', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

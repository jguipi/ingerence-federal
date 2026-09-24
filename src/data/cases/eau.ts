import type { Case } from '../types';

// Projet d'Agence canadienne de l'eau. Le projet de loi C-59 (2024) créait la Loi sur
// l'Agence canadienne de l'eau. Enjeu de partage de compétences et risque de
// chevauchement; aucun financement structuré identifié dans les sources → funding: [].

export const eau: Case = {
  id: 'eau',
  slug: 'eau',
  title: "Projet d'Agence canadienne de l'eau",
  province: 'QC',
  domains: ['eau', 'environnement'],
  dateStart: '2022',
  dateEnd: '2024',
  status: 'conteste',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'reduite',
    rationale:
      "La création d'une agence fédérale de l'eau douce introduit une instance fédérale dans un champ où le Québec exerce des responsabilités, ce qui crée un risque de chevauchement structurel contesté par le Québec.",
    assertedBy: 'Comité consultatif du Québec',
    sourceIds: ['comite-consultatif-qc'],
  },
  summary:
    "La création d'une Agence canadienne de l'eau soulève un enjeu de partage de compétences et de chevauchement avec les responsabilités du Québec.",
  description:
    "Le projet de loi C-59 (2024) prévoyait la Loi sur l'Agence canadienne de l'eau, créant une agence de la fonction publique appuyant le ministre fédéral en matière d'eau douce. Le Québec a exprimé des réserves quant au risque de chevauchement avec ses propres responsabilités en matière de gestion de l'eau.",
  federalAction:
    "Création d'une agence fédérale de l'eau douce par voie législative (projet de loi C-59, 2024).",
  provincialCompetence:
    "Gestion de l'eau et de l'environnement sur le territoire québécois — compétence provinciale.",
  federalCompetence:
    "Compétences fédérales touchant certains aspects de l'eau (pêches, eaux navigables, questions transfrontalières).",
  argumentsFor: [
    "Le Québec a contesté l'intervention fédérale et le risque de chevauchement, selon le Comité consultatif sur les enjeux constitutionnels du Québec.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "L'Agence canadienne de l'eau est une agence de la fonction publique appuyant le ministre fédéral responsable de l'eau douce.",
      sourceIds: ['c59-agence-eau'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "Réserves sur les chevauchements avec les responsabilités provinciales en matière de gestion de l'eau.",
      sourceIds: ['comite-consultatif-qc'],
    },
  ],
  legalStatus:
    "Loi sur l'Agence canadienne de l'eau adoptée dans le cadre du projet de loi C-59 (2024). Contestée sur le plan des compétences; aucun litige judiciaire identifié dans les sources consultées.",
  events: [
    { date: '2022', title: "Projet d'Agence canadienne de l'eau", sourceIds: ['c59-agence-eau'] },
    { date: '2024', title: "Loi sur l'Agence canadienne de l'eau (projet de loi C-59)", sourceIds: ['c59-agence-eau'] },
  ],
  funding: [],
  conditions: [],
  sourceIds: ['c59-agence-eau', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

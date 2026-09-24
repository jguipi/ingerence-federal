import type { Case } from '../types';

// Loi sur la tarification de la pollution causée par les gaz à effet de serre (GGPPA, 2018).
// Renvois relatifs à la GGPPA, 2021 CSC 11 (25 mars 2021) : loi jugée CONSTITUTIONNELLE,
// majorité 6-3, fondée sur la clause POGG (« intérêt national ») — normes nationales minimales
// de rigueur du prix des GES. Le Québec est intervenu contre le régime fédéral. Fait notoire
// et jugement de source primaire (URL CSC); aucun montant à chiffrer ici.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const taxeCarbone: Case = {
  id: 'taxe-carbone',
  slug: 'taxe-carbone',
  title: 'Tarification fédérale du carbone imposée aux provinces (GGPPA)',
  province: 'QC',
  domains: ['environnement', 'ressources-naturelles'],
  dateStart: '2018',
  status: 'decision-judiciaire',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'reduite',
    rationale:
      "La Cour suprême a confirmé qu'Ottawa peut imposer un prix minimal du carbone aux provinces via la clause POGG, ce qui restreint la marge de manœuvre provinciale sur la tarification des émissions dans un champ touchant les ressources et la propriété.",
    assertedBy: 'Renvois relatifs à la GGPPA, 2021 CSC 11 (majorité)',
    sourceIds: ['ccsc-ggppa-2021'],
  },
  summary:
    "La Loi fédérale de 2018 impose un prix minimal du carbone aux provinces sans régime équivalent. En 2021, la Cour suprême l'a jugée constitutionnelle (6-3) au titre de l'intérêt national, malgré l'opposition du Québec et d'autres provinces.",
  description:
    "La Loi sur la tarification de la pollution causée par les gaz à effet de serre établit un filet de sécurité fédéral : un prix minimal du carbone s'applique dans toute province ou territoire jugé ne pas avoir de régime de tarification suffisamment rigoureux. Plusieurs provinces ont contesté la loi. Dans les Renvois relatifs à la GGPPA (2021 CSC 11), la Cour suprême a conclu, à 6 juges contre 3, que la loi est constitutionnelle : établir des « normes nationales minimales de rigueur du prix des GES » relève de la théorie de l'intérêt national du pouvoir de faire des lois pour la paix, l'ordre et le bon gouvernement (POGG). Le Québec est intervenu pour s'opposer au régime fédéral. Le Québec dispose de son propre système de plafonnement et d'échange (marché du carbone), qu'il estime suffisant.",
  federalAction:
    "Fixation d'un prix minimal national du carbone applicable d'office aux provinces jugées sans régime équivalent, confirmée par la Cour suprême.",
  provincialCompetence:
    "Gestion des ressources naturelles, propriété et droits civils, réglementation environnementale locale — compétences provinciales (art. 92, 92A).",
  federalCompetence:
    "Pouvoir de faire des lois pour la paix, l'ordre et le bon gouvernement (POGG), théorie de l'intérêt national, reconnu par la Cour suprême en 2021.",
  argumentsFor: [
    "Plusieurs provinces, dont le Québec à titre d'intervenant, ont soutenu que la loi empiète sur leurs compétences en imposant une norme fédérale dans un champ touchant les ressources et la propriété; les juges dissidents (3 sur 9) partageaient cette lecture.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "L'établissement de normes nationales minimales de rigueur du prix des GES est une matière d'intérêt national qui relève de la compétence fédérale POGG; la loi laisse aux provinces le choix de leur propre régime équivalent.",
      sourceIds: ['ccsc-ggppa-2021', 'ggppa-loi'],
    },
  ],
  provincialPosition: [
    {
      actor: "Gouvernement du Québec (intervenant)",
      stance:
        "Le Québec s'est opposé au régime fédéral et fait valoir que son marché du carbone (plafonnement et échange) répond déjà à l'objectif, sans qu'Ottawa impose une norme nationale.",
      sourceIds: ['ccsc-ggppa-2021'],
    },
  ],
  legalStatus:
    "Loi jugée constitutionnelle par la Cour suprême (2021 CSC 11, majorité 6-3). Le filet de sécurité fédéral demeure en vigueur.",
  events: [
    { date: '2018', title: 'Adoption de la GGPPA', description: 'Filet de sécurité fédéral sur le prix du carbone.', sourceIds: ['ggppa-loi'] },
    { date: '2021-03-25', title: 'Arrêt de la Cour suprême', description: 'Loi jugée constitutionnelle (6-3) au titre de l’intérêt national (POGG).', sourceIds: ['ccsc-ggppa-2021'] },
  ],
  funding: [],
  conditions: [
    {
      id: 'ggppa-filet',
      label: 'Régime provincial équivalent ou prix fédéral d’office',
      detail:
        "Une province doit maintenir un régime de tarification du carbone jugé suffisamment rigoureux; à défaut, le prix minimal fédéral s'applique automatiquement.",
      mandatory: true,
      acceptedByProvince: false,
      contestedByProvince: true,
      consequenceIfUnmet: "Application du filet de sécurité fédéral (prix du carbone imposé).",
      sourceIds: ['ccsc-ggppa-2021', 'ggppa-loi'],
    },
  ],
  sourceIds: ['ccsc-ggppa-2021', 'ggppa-loi', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

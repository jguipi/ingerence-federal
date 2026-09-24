import type { Case } from '../types';

// Loi sur la tarification de la pollution causee par les gaz a effet de serre (GGPPA, 2018).
// L'Alberta a ete le CHALLENGER PRINCIPAL, non un simple intervenant comme le Quebec.
// La Cour d'appel de l'Alberta a declare la loi INCONSTITUTIONNELLE le 24 fevrier 2020
// (la seule cour d'appel a l'avoir fait). La Cour supreme a infirme en 2021 (6-3).
// La taxe carbone sur les consommateurs a ete abolie par le gouvernement Carney en 2025.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const taxeCarboneAb: Case = {
  id: 'taxe-carbone-ab',
  slug: 'taxe-carbone-ab',
  title: "Tarification fédérale du carbone — renvoi de l’Alberta (GGPPA)",
  province: 'AB',
  domains: ['environnement', 'ressources-naturelles'],
  dateStart: '2018',
  dateEnd: '2025',
  status: 'decision-judiciaire',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'reduite',
    rationale:
      "La Cour suprême a confirmé qu’Ottawa peut imposer un prix minimal du carbone même à une province comme l’Alberta dont le régime industriel existant (TIER) était jugé insuffisant; la Cour d’appel de l’Alberta avait pourtant conclu à l’inconstitutionnalité.",
    assertedBy: "Renvois relatifs à la GGPPA, 2021 CSC 11 (majorité 6-3); Cour d’appel de l’Alberta (2020, minorité ultérieure)",
    sourceIds: ['ccsc-ggppa-2021'],
  },
  summary:
    "L’Alberta a contesté la loi fédérale de tarification du carbone (GGPPA) jusqu’en Cour suprême. Seule cour d’appel à juger la loi inconstitutionnelle (2020), l’Alberta a perdu devant la CSC en 2021 (6-3). Contrairement au Québec (intervenant avec son propre marché du carbone), l’Alberta était le requérant principal et n’avait pas de régime équivalent pour les consommateurs.",
  description:
    "Après l’adoption de la GGPPA en 2018, l’Alberta a renvoyé la question constitutionnelle à sa Cour d’appel en juin 2019. Le 24 février 2020, la Cour d’appel de l’Alberta a rendu une décision majoritaire jugeant la loi inconstitutionnelle — seule cour d’appel canadienne à parvenir à cette conclusion. La Cour suprême du Canada a infirmé cette décision dans les Renvois relatifs à la GGPPA (2021 CSC 11, 6 juges contre 3), au motif que l’établissement de normes nationales minimales de rigueur du prix des GES relève de la théorie de l’intérêt national du pouvoir POGG.\n\nContrairement au Québec, qui est intervenu en tant que soutien à l’Alberta mais disposait déjà de son propre marché du carbone (plafonnement et échange) satisfaisant le seuil fédéral, l’Alberta n’avait pas de régime équivalent pour les consommateurs : le filet de sécurité fédéral s’appliquait donc directement. L’Alberta disposait d’un régime pour les grands émetteurs industriels (TIER, depuis 2020), reconnu comme équivalent pour ce secteur.\n\nEn 2025, le gouvernement Carney a aboli la taxe carbone sur les consommateurs à l’échelle nationale; le filet de sécurité pour les consommateurs a pris fin. Les systèmes industriels (dont TIER en Alberta) demeurent en vigueur.",
  federalAction:
    "Fixation d’un prix minimal national du carbone applicable d’office aux provinces sans régime équivalent, incluant le filet de sécurité pour les consommateurs en Alberta.",
  provincialCompetence:
    "Gestion des ressources naturelles, propriété et droits civils, réglementation environnementale des ressources — compétences provinciales (art. 92, 92A). L’Alberta fait valoir ses ressources en hydrocarbures et ses intérêts économiques particuliers.",
  federalCompetence:
    "Pouvoir POGG (intérêt national), confirmé par la Cour suprême en 2021.",
  argumentsFor: [
    "L’Alberta (requérante) et les provinces intervenantes soutenaient que la loi empiète sur les compétences provinciales (ressources naturelles, propriété et droits civils) en imposant une norme nationale dans un champ provincial; la Cour d’appel de l’Alberta leur a donné raison avant d’être infirmée par la CSC.",
    "L’Alberta disposait déjà du régime TIER pour les grands émetteurs industriels; le filet de sécurité fédéral s’appliquait néanmoins au secteur consommateur, sans reconnaissance de la spécificité économique de la province.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "L’établissement de normes nationales minimales de rigueur du prix des GES est une matière d’intérêt national (POGG); la loi laisse aux provinces le choix de leur propre régime équivalent.",
      sourceIds: ['ccsc-ggppa-2021', 'ggppa-loi'],
    },
  ],
  provincialPosition: [
    {
      actor: "Gouvernement de l’Alberta (requérant)",
      stance:
        "La GGPPA outrepasse la compétence fédérale en imposant une tarification dans un champ relevant de la propriété et des droits civils provinciaux (art. 92) et des ressources naturelles (art. 92A); la Cour d’appel de l’Alberta a initialement donné raison à cette position.",
      sourceIds: ['ccsc-ggppa-2021'],
    },
  ],
  legalStatus:
    "Loi jugée constitutionnelle par la Cour suprême (2021 CSC 11, majorité 6-3). La Cour d’appel de l’Alberta avait conclu à l’inconstitutionnalité (2020, infirmé). La taxe carbone sur les consommateurs a été abolie par le gouvernement fédéral en 2025; le régime industriel TIER de l’Alberta demeure en vigueur.",
  events: [
    { date: '2018', title: 'Adoption de la GGPPA', description: 'Filet de sécurité fédéral sur le prix du carbone.', sourceIds: ['ggppa-loi'] },
    { date: '2019-06', title: "Renvoi de l’Alberta à sa Cour d’appel", description: "L’Alberta renvoie la GGPPA à sa cour d’appel pour avis sur la constitutionnalité.", sourceIds: ['ccsc-ggppa-2021'] },
    { date: '2020-02-24', title: "Cour d’appel de l’Alberta : loi inconstitutionnelle", description: "Seule cour d’appel canadienne à conclure à l’inconstitutionnalité de la GGPPA (majorité).", sourceIds: ['ccsc-ggppa-2021'] },
    { date: '2021-03-25', title: 'Cour suprême : loi constitutionnelle (6-3)', description: "La CSC infirme la Cour d’appel de l’Alberta et confirme la constitutionnalité de la GGPPA.", sourceIds: ['ccsc-ggppa-2021'] },
    { date: '2025', title: "Abolition de la taxe carbone sur les consommateurs", description: "Le gouvernement Carney abolit le filet de sécurité fédéral pour les consommateurs à l’échelle nationale.", sourceIds: ['ggppa-loi'] },
  ],
  funding: [],
  conditions: [
    {
      id: 'ggppa-filet-ab',
      label: "Régime provincial équivalent (consommateurs) ou prix fédéral d’office",
      detail:
        "L’Alberta ne disposait pas de régime de tarification du carbone pour les consommateurs jugé suffisamment rigoureux; le filet de sécurité fédéral s’appliquait donc directement — contrairement au Québec dont le marché du carbone était reconnu comme équivalent.",
      mandatory: true,
      acceptedByProvince: false,
      contestedByProvince: true,
      consequenceIfUnmet: "Application directe du filet de sécurité fédéral (prix du carbone aux consommateurs).",
      sourceIds: ['ccsc-ggppa-2021', 'ggppa-loi'],
    },
  ],
  sourceIds: ['ccsc-ggppa-2021', 'ggppa-loi'],
  lastVerified: '2026-09-24',
};

import type { ProvincialRequest } from '../types';

// Demande d'étendre aux 65-74 ans la bonification de 10 % de la Sécurité de la vieillesse,
// réservée aux 75 ans et plus depuis juillet 2022 (adoptée via le projet de loi C-30, Loi
// d'exécution du budget 2021, sanction royale 29 juin 2021). REJETÉE : la bonification est
// restée limitée aux 75+. La disparité des montants (65-74 vs 75+) est PRIMAIRE (ESDC) et C-30
// est PRIMAIRE (LEGISinfo). En revanche la demande québécoise/du Bloc et la justification
// fédérale (dépenses de santé plus élevées après 75 ans) ne sont documentées que par la presse
// dans cette recherche → federalReason attribué mais source SECONDAIRE, à recouper avec le
// Journal des débats et un communiqué fédéral. La SV est un programme fédéral versé aux
// individus; son ampleur pèse sur les revenus des aînés, donc sur les services provinciaux.
export const psvSoixanteCinqSoixanteQuatorze: ProvincialRequest = {
  id: 'psv-65-74',
  slug: 'psv-65-74',
  province: 'QC',
  title: 'Étendre aux 65-74 ans la hausse de 10 % de la Sécurité de la vieillesse',
  date: '2021-06-29',
  domains: ['services-sociaux', 'fiscalite'],
  status: 'rejetee',
  ask: "Des voix québécoises, dont le Bloc québécois, demandaient d'étendre aux personnes de 65 à 74 ans la bonification de 10 % de la pension de la Sécurité de la vieillesse, adoptée dans le budget fédéral de 2021 (projet de loi C-30) mais réservée aux 75 ans et plus.",
  whyProvince:
    "La bonification réservée aux 75 ans et plus est jugée discriminatoire envers les aînés de 65 à 74 ans, qui font face aux mêmes besoins de revenu en début de retraite; le montant maximal reste inférieur pour cette tranche (751,97 $/mois pour les 65-74 ans contre 827,17 $/mois pour les 75 ans et plus).",
  federalReason:
    "Le gouvernement fédéral a défendu la limite aux 75 ans et plus au motif que cette tranche d'âge fait face à des dépenses, notamment de santé, plus élevées et à une moindre capacité de travailler; la bonification a été maintenue telle quelle malgré l'opposition du Bloc québécois.",
  provincePositionSourceIds: ['psv-6574-presse'],
  federalPositionSourceIds: ['psv-6574-presse'],
  sourceIds: ['c30-legisinfo', 'psv-montants-canada', 'psv-6574-presse'],
  lastVerified: '2026-09-24',
};

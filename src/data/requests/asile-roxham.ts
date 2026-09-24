import type { ProvincialRequest } from '../types';

// Demandes du Québec liées aux demandeurs d'asile (2023-2024). Plusieurs sous-demandes aux
// issues distinctes : fermer le chemin Roxham (APPROUVÉ, 25 mars 2023, protocole additionnel de
// l'Entente sur les tiers pays sûrs), rembourser les coûts provinciaux ~1 G$ 2021-2023
// (PARTIEL : Ottawa a versé ~100 M$ puis 750 M$ en 2024, sans accepter la facture totale),
// relocaliser des demandeurs hors Québec (REJETÉ). Statut global = partielle. Montants réclamés
// (QC) et versés (Ottawa) tenus DISTINCTS, jamais fusionnés (§3). Positions fédérales via presse
// (corps bloqués) → sources SECONDAIRES; STCA = primaire.
export const asileRoxham: ProvincialRequest = {
  id: 'asile-roxham-remboursement',
  slug: 'asile-roxham-remboursement',
  province: 'QC',
  title: "Fermeture du chemin Roxham et remboursement des coûts des demandeurs d'asile",
  date: '2024-02-20',
  domains: ['immigration', 'services-sociaux'],
  status: 'partielle',
  ask: "Le Québec a demandé à Ottawa de fermer le chemin Roxham, de rembourser les coûts provinciaux liés aux demandeurs d'asile (facture portée à environ 1 G$ pour 2021-2023 : 470 M$ pour 2021-2022 et 576,9 M$ pour 2023, selon le Québec) et de relocaliser une partie des demandeurs vers d'autres provinces.",
  whyProvince:
    "L'immigration et les frontières relèvent du fédéral, mais le Québec estimait assumer une part disproportionnée des demandeurs d'asile (autour de 45 % des demandes) et des services (aide sociale, éducation, logement) qui en découlent.",
  federalReason:
    "Ottawa a fermé le chemin Roxham (protocole additionnel de l'Entente sur les tiers pays sûrs, en vigueur le 25 mars 2023) et versé des sommes pour les coûts d'asile (~100 M$ pour l'hébergement puis 750 M$ en juin 2024, présentés par le ministre Miller comme couvrant « deux exercices financiers » de coûts), sans entériner la facture totale du Québec; le ministre a refusé la relocalisation forcée des demandeurs, la jugeant « insensée et déraisonnable », offrant plutôt des incitatifs financiers aux provinces d'accueil.",
  provincePositionSourceIds: ['asile-cbc-fev2024'],
  federalPositionSourceIds: ['stca-protocole-2023', 'asile-cbc-750m-2024', 'asile-cbc-relocalisation-2024'],
  relatedCaseSlug: 'immigration',
  sourceIds: ['stca-protocole-2023', 'asile-cbc-fev2024', 'asile-cbc-750m-2024', 'asile-cbc-relocalisation-2024'],
  lastVerified: '2026-09-24',
};

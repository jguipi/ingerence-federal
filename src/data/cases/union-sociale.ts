import type { Case } from '../types';

// Entente-cadre sur l'union sociale (EUS/SUFA), 4 février 1999. Signée par Ottawa et toutes
// les provinces/territoires SAUF le Québec. Encadre l'usage du pouvoir fédéral de dépenser
// dans les champs sociaux de compétence provinciale (préavis, non-retrait unilatéral, droit de
// retrait AVEC compensation seulement pour nouveaux programmes pancanadiens à frais partagés).
// Le Québec a refusé de signer, jugeant l'encadrement insuffisant (pas de droit de retrait
// inconditionnel avec pleine compensation). Aperçu recoupé; à confirmer sur archives gouvernementales.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const unionSociale: Case = {
  id: 'union-sociale',
  slug: 'union-sociale',
  title: "Entente-cadre sur l'union sociale (1999) — le Québec refuse de signer",
  province: 'QC',
  domains: ['sante', 'education', 'services-sociaux'],
  dateStart: '1999',
  status: 'entente-federale-provinciale',
  interventionType: 'pouvoir-de-depenser',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "L'entente encadre l'usage du pouvoir fédéral de dépenser dans les champs sociaux provinciaux, mais sans droit de retrait inconditionnel avec pleine compensation; le Québec a refusé de signer pour ce motif.",
    assertedBy: 'Lecture de l’entente et de la position du Québec (refus de signer)',
    sourceIds: ['sufa-1999-wiki'],
  },
  summary:
    "En 1999, Ottawa et toutes les provinces sauf le Québec ont signé une entente encadrant le pouvoir fédéral de dépenser dans les champs sociaux. Le Québec a refusé, jugeant l'encadrement insuffisant : pas de droit de retrait avec pleine compensation.",
  description:
    "L'Entente-cadre sur l'union sociale (4 février 1999) fixe des règles pour l'usage du pouvoir fédéral de dépenser dans des champs de compétence provinciale (santé, éducation, services sociaux) : préavis, collaboration, et un droit de retrait avec compensation limité aux nouveaux programmes pancanadiens à frais partagés, à condition que la province mette en œuvre un programme aux objectifs comparables. Toutes les provinces et territoires l'ont signée sauf le Québec, qui a jugé cet encadrement insuffisant : il réclamait un droit de retrait inconditionnel avec pleine compensation, sans obligation d'objectifs comparables. L'entente reconnaît par ailleurs que le pouvoir fédéral de dépenser peut s'exercer directement dans ces champs.",
  federalAction:
    "Adoption, avec neuf provinces, d'un cadre autorisant et encadrant l'usage du pouvoir fédéral de dépenser dans les champs sociaux provinciaux.",
  provincialCompetence:
    'Santé, éducation, services sociaux — compétences provinciales.',
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "L'entente consacre la légitimité du pouvoir fédéral de dépenser dans des champs provinciaux et ne prévoit qu'un droit de retrait conditionnel et partiel; le Québec l'a refusée comme une atteinte à son autonomie.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "L'entente vise à collaborer et à encadrer l'usage du pouvoir de dépenser au bénéfice des Canadiens tout en respectant les rôles des deux ordres de gouvernement.",
      sourceIds: ['sufa-1999-wiki'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "Le Québec a refusé de signer : l'entente ne garantit pas un droit de retrait inconditionnel avec pleine compensation et légitime l'intervention fédérale dans ses champs de compétence.",
      sourceIds: ['sufa-1999-wiki'],
    },
  ],
  legalStatus:
    "Entente politique (non un traité justiciable), signée par le fédéral et neuf provinces/territoires. Le Québec n'y a jamais adhéré.",
  events: [
    { date: '1999-02-04', title: 'Signature de l’entente', description: 'Toutes les provinces et territoires signent sauf le Québec.', sourceIds: ['sufa-1999-wiki'] },
  ],
  funding: [],
  conditions: [],
  sourceIds: ['sufa-1999-wiki', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

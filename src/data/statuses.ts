import type { CaseStatus, InterventionType } from './types';

export interface StatusDef {
  id: CaseStatus;
  label: string;
  description: string; // affiché sur /methodologie
}

export const statuses: StatusDef[] = [
  {
    id: 'documente',
    label: 'Documenté',
    description:
      "Les faits sont établis par des sources primaires. N'implique pas que l'intervention soit jugée inconstitutionnelle.",
  },
  {
    id: 'conteste',
    label: 'Contesté',
    description:
      'Un ordre de gouvernement conteste la portée ou la légitimité de l’intervention. Les positions opposées sont présentées.',
  },
  {
    id: 'en-cours',
    label: 'En cours',
    description: 'Dossier actif dont l’issue n’est pas encore déterminée.',
  },
  {
    id: 'decision-judiciaire',
    label: 'Décision judiciaire',
    description: 'Une cour a rendu une décision sur la question de compétence.',
  },
  {
    id: 'entente-federale-provinciale',
    label: 'Entente fédérale-provinciale',
    description:
      'Les deux gouvernements ont conclu une entente. Les conditions et montants sont présentés tels que documentés.',
  },
  {
    id: 'position-politique',
    label: 'Position politique',
    description:
      'Repose principalement sur des déclarations politiques plutôt que sur un acte juridique ou financier confirmé.',
  },
  {
    id: 'donnees-financieres-partielles',
    label: 'Données financières partielles',
    description:
      'Certains montants (annoncés, versés, écart) ne sont pas entièrement vérifiables dans les sources disponibles.',
  },
];

export const statusLabel = (id: CaseStatus): string =>
  statuses.find((s) => s.id === id)?.label ?? id;

export interface InterventionTypeDef {
  id: InterventionType;
  label: string;
}

export const interventionTypes: InterventionTypeDef[] = [
  { id: 'financement-conditionnel', label: 'Financement conditionnel' },
  { id: 'loi', label: 'Loi' },
  { id: 'reglementation', label: 'Réglementation' },
  { id: 'programme', label: 'Programme' },
  { id: 'entente', label: 'Entente' },
  { id: 'pouvoir-de-depenser', label: 'Pouvoir de dépenser' },
  { id: 'transfert', label: 'Transfert' },
  { id: 'intervention-administrative', label: 'Intervention administrative' },
  { id: 'autre', label: 'Autre' },
];

export const interventionTypeLabel = (id: InterventionType): string =>
  interventionTypes.find((t) => t.id === id)?.label ?? id;

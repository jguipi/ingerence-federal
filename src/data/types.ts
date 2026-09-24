// Modèle de données — voir plan. Ajouter un cas/une province = éditer les fichiers de
// données, jamais les composants.

export type ProvinceCode =
  | 'QC' | 'ON' | 'BC' | 'AB' | 'SK' | 'MB'
  | 'NB' | 'NS' | 'PE' | 'NL' | 'NT' | 'YT' | 'NU';

export type CaseStatus =
  | 'documente'
  | 'conteste'
  | 'en-cours'
  | 'decision-judiciaire'
  | 'entente-federale-provinciale'
  | 'position-politique'
  | 'donnees-financieres-partielles';

export type InterventionType =
  | 'financement-conditionnel'
  | 'loi'
  | 'reglementation'
  | 'programme'
  | 'entente'
  | 'pouvoir-de-depenser'
  | 'transfert'
  | 'intervention-administrative'
  | 'autre';

export interface Source {
  id: string;
  title: string;
  url: string;
  publisher: string;
  date?: string;
  type: 'primaire' | 'secondaire';
  docType?: string; // budget, entente, jugement, rapport...
}

/**
 * Montant. `amount: null` signifie « Données insuffisantes » — jamais estimé (§3 du cahier).
 * Chaque montant garde ses propres sources : annoncé, engagé, versé ne se déduisent pas
 * l'un de l'autre.
 */
export interface Money {
  amount: number | null;
  currency: 'CAD';
  note?: string;
  sourceIds: string[];
}

export interface Condition {
  id: string;
  label: string;
  detail: string;
  mandatory: boolean;                  // obligatoire vs. liée à un financement supplémentaire
  acceptedByProvince: boolean | null;  // null = inconnu
  contestedByProvince: boolean | null;
  consequenceIfUnmet?: string;         // ce que le fédéral peut faire si non respectée
  sourceIds: string[];
}

export interface Funding {
  id: string;
  program: string;
  province: ProvinceCode;
  federalDepartment?: string;
  announcementDate?: string;
  agreementDate?: string;
  period?: string;
  announced: Money;    // annonce politique
  committed: Money;    // inscrit dans l'entente
  guaranteed: Money;   // garanti, inconditionnel
  conditional: Money;  // sous conditions
  paid: Money;         // effectivement versé
  remaining: Money;    // reste à recevoir
  spentByProvince?: Money;
  conditional_flag: boolean;
  conditionIds: string[];
  sourceIds: string[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  sourceIds: string[];
}

export interface Position {
  actor: string;
  stance: string;
  quote?: string;
  sourceIds: string[];
}

export interface Case {
  id: string;
  slug: string;
  title: string;
  province: ProvinceCode;
  municipalities?: string[];
  domains: string[]; // ids de domaines (domains.ts)
  dateStart: string;
  dateEnd?: string;
  status: CaseStatus;
  interventionType: InterventionType;
  summary: string;
  description: string;
  federalAction: string;
  provincialCompetence: string;
  federalCompetence: string;
  argumentsFor: string[];       // pourquoi qualifié d'ingérence + qui l'affirme
  federalPosition: Position[];  // justification fédérale
  provincialPosition: Position[];
  legalStatus: string;
  events: TimelineEvent[];
  funding: Funding[];
  conditions: Condition[];
  sourceIds: string[];
  lastVerified: string;         // AAAA-MM-JJ
  revisions?: { date: string; note: string }[];
}

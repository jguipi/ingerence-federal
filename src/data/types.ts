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

export type AutonomyLevel = 'preservee' | 'encadree' | 'reduite';

/**
 * Atteinte documentée à l'autonomie provinciale. Ce n'est PAS un verdict du site ni un
 * score calculé (§13) : le niveau est établi à la main d'après les faits du dossier
 * (conditions, mécanisme, positions) et rattaché à sa source et à qui l'affirme.
 */
export interface AutonomyImpact {
  level: AutonomyLevel;
  rationale: string;   // pourquoi ce niveau, en une phrase factuelle
  assertedBy: string;  // qui l'affirme (ex. « Comité consultatif du Québec », « lecture des conditions de l'entente »)
  sourceIds: string[];
}

export type ServiceImpactLevel = 'aucun-documente' | 'pression-alleguee' | 'documente';

/**
 * Effet ALLÉGUÉ ou documenté sur les services offerts à la population — axe distinct de
 * l'autonomie (qui décide) : ici, ce que l'intervention (ou son insuffisance) fait aux
 * services. Comme AutonomyImpact, ce n'est PAS un verdict du site ni un score calculé :
 * `assertedBy` est obligatoire — on n'affirme jamais soi-même qu'un service est réduit,
 * on attribue toujours l'affirmation à qui la porte (province, VG, DPB, CSBE...).
 */
export interface ServiceImpact {
  level: ServiceImpactLevel;
  rationale: string;   // le fait allégué/établi, en une phrase
  assertedBy: string;  // QUI l'affirme — obligatoire
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
  autonomyImpact?: AutonomyImpact; // optionnel: absent = non documenté
  serviceImpact?: ServiceImpact;   // optionnel: effet allégué/documenté sur les services (axe distinct)
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

export type RequestStatus =
  | 'approuvee'    // le fédéral a accédé à la demande
  | 'partielle'    // accordée en partie / assortie de conditions
  | 'rejetee'      // refusée explicitement
  | 'sans-reponse' // pas de réponse fédérale publique documentée
  | 'en-cours';    // demande active, issue non déterminée

/**
 * Demande formulée par une province au fédéral, avec son issue. Axe distinct des Case
 * (une intervention/chevauchement) : ici la province DEMANDE, le fédéral répond.
 *
 * Principes (identiques au reste du site) :
 *  - `federalReason` est ce que le FÉDÉRAL a dit pour justifier sa réponse. Jamais inventé :
 *    `null` = aucune raison fédérale publique documentée (à ne pas confondre avec un refus
 *    sans explication).
 *  - `whyProvince` = raison invoquée PAR la province, attribuée à elle.
 *  - Sources primaires d'abord (lettre, communiqué, déclaration officielle).
 */
export interface ProvincialRequest {
  id: string;
  slug: string;
  province: ProvinceCode;
  title: string;
  date: string;                 // AAAA ou AAAA-MM-JJ
  domains: string[];            // ids de domaines (domains.ts)
  status: RequestStatus;
  ask: string;                  // ce que la province demande, précisément
  whyProvince: string;          // pourquoi c'est important pour la province (attribué à elle)
  federalReason: string | null; // raison fédérale documentée; null = non documentée
  provincePositionSourceIds: string[];
  federalPositionSourceIds: string[]; // vide si federalReason === null
  relatedCaseSlug?: string;     // lien vers un Case si applicable
  sourceIds: string[];
  lastVerified: string;         // AAAA-MM-JJ
}

import type { AutonomyLevel, ServiceImpactLevel } from './types';

export interface AutonomyDef {
  level: AutonomyLevel;
  label: string;
  color: string;       // classe CSS: green / amber / red
  short: string;       // texte court du badge
  description: string; // affiché sur /methodologie
}

// Échelle documentée, non calculée (§13). Rattachée par cas à une source.
export const autonomyLevels: AutonomyDef[] = [
  {
    level: 'preservee',
    label: 'Autonomie préservée',
    color: 'green',
    short: 'Autonomie préservée',
    description:
      "L'intervention fédérale n'impose pas de contrainte notable à la compétence provinciale (ex. entente asymétrique reconnaissant la maîtrise d'œuvre de la province, ou programme fédéral distinct).",
  },
  {
    level: 'encadree',
    label: 'Autonomie encadrée',
    color: 'amber',
    short: 'Autonomie encadrée',
    description:
      "L'intervention assortit le financement de conditions, cibles ou obligations de reddition de comptes qui orientent l'action provinciale sans la remplacer.",
  },
  {
    level: 'reduite',
    label: 'Autonomie réduite',
    color: 'red',
    short: 'Autonomie réduite',
    description:
      "L'intervention fédérale restreint la marge de manœuvre de la province dans son champ de compétence, selon la source citée (chevauchement structurel, création d'une instance fédérale, conditions contraignantes contestées).",
  },
];

export const autonomyDef = (level: AutonomyLevel): AutonomyDef =>
  autonomyLevels.find((a) => a.level === level) ?? autonomyLevels[0];

export interface ServiceImpactDef {
  level: ServiceImpactLevel;
  label: string;
  color: string;       // green / amber / red
  short: string;
  description: string; // affiché sur /methodologie
}

// Axe distinct de l'autonomie : effet allégué/documenté sur les services à la population.
// Documenté à la main par cas, toujours attribué (assertedBy). Jamais un verdict du site.
export const serviceImpactLevels: ServiceImpactDef[] = [
  {
    level: 'aucun-documente',
    label: 'Aucun effet documenté sur les services',
    color: 'green',
    short: 'Aucun effet documenté',
    description:
      "Aucune source ne rattache l'intervention (ou son insuffisance) à un effet sur les services offerts à la population.",
  },
  {
    level: 'pression-alleguee',
    label: 'Pression alléguée sur les services',
    color: 'amber',
    short: 'Pression alléguée',
    description:
      "Un acteur (province, organisme) affirme que l'intervention fédérale ou l'insuffisance des transferts exerce une pression sur les services à la population. L'affirmation est présentée telle qu'attribuée, sans être endossée par le site.",
  },
  {
    level: 'documente',
    label: 'Effet documenté sur les services',
    color: 'red',
    short: 'Effet documenté',
    description:
      "Une source d'analyse indépendante (Vérificateur général, DPB, Commissaire) établit un effet sur les services offerts à la population.",
  },
];

export const serviceImpactDef = (level: ServiceImpactLevel): ServiceImpactDef =>
  serviceImpactLevels.find((s) => s.level === level) ?? serviceImpactLevels[0];

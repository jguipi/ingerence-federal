import type { AutonomyLevel } from './types';

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

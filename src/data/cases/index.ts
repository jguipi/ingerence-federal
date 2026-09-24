import type { Case } from '../types';
import { santeTransferts } from './sante-transferts';
import { dentaire } from './dentaire';
import { logement } from './logement';
import { garderies } from './garderies';
import { eau } from './eau';
import { soutienDomicile } from './soutien-domicile';
import { immigration } from './immigration';

export const cases: Case[] = [
  santeTransferts,
  dentaire,
  logement,
  garderies,
  eau,
  soutienDomicile,
  immigration,
];

import type { Case } from '../types';
import { santeTransferts } from './sante-transferts';
import { santeTcs } from './sante-tcs';
import { dentaire } from './dentaire';
import { logement } from './logement';
import { garderies } from './garderies';
import { eau } from './eau';
import { soutienDomicile } from './soutien-domicile';
import { immigration } from './immigration';
import { lcsDeductions } from './lcs-deductions';
import { taxeCarbone } from './taxe-carbone';
import { evaluationImpact } from './evaluation-impact';
import { pharmacare } from './pharmacare';
import { boursesMillenaire } from './bourses-millenaire';
import { registreArmes } from './registre-armes';
import { unionSociale } from './union-sociale';
import { procreationAssistee } from './procreation-assistee';
import { c11Diffusion } from './c11-diffusion';
// Alberta
import { garderiesAb } from './garderies-ab';
import { taxeCarboneAb } from './taxe-carbone-ab';
import { evaluationImpactAb } from './evaluation-impact-ab';
import { santeTransfertsAb } from './sante-transferts-ab';
import { pharmacareAb } from './pharmacare-ab';

export const cases: Case[] = [
  santeTransferts,
  santeTcs,
  dentaire,
  logement,
  garderies,
  eau,
  soutienDomicile,
  immigration,
  lcsDeductions,
  taxeCarbone,
  evaluationImpact,
  pharmacare,
  boursesMillenaire,
  registreArmes,
  unionSociale,
  procreationAssistee,
  c11Diffusion,
  // Alberta
  garderiesAb,
  taxeCarboneAb,
  evaluationImpactAb,
  santeTransfertsAb,
  pharmacareAb,
];

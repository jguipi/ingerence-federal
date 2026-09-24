import type { ProvincialRequest } from '../types';
import { chtTrenteCinq } from './cht-35-pourcent';
import { loi96Amendement } from './loi96-amendement';
import { immigrationPleinePouvoir } from './immigration-pleins-pouvoirs';
import { asileRoxham } from './asile-roxham';
import { psvSoixanteCinqSoixanteQuatorze } from './psv-65-74';
import { impotUnique } from './declaration-revenus-unique';

// Demandes provinciales au fédéral. Un fichier par demande exportant un objet
// ProvincialRequest, agrégé ici. Ajouter une demande = créer le fichier + l'importer.
export const requests: ProvincialRequest[] = [
  chtTrenteCinq,
  loi96Amendement,
  immigrationPleinePouvoir,
  asileRoxham,
  psvSoixanteCinqSoixanteQuatorze,
  impotUnique,
];

const bySlug = new Map(requests.map((r) => [r.slug, r]));
export const getRequest = (slug: string): ProvincialRequest | undefined => bySlug.get(slug);

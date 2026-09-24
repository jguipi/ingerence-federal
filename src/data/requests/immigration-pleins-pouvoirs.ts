import type { ProvincialRequest } from '../types';

// Demande du Québec (Legault, 2024) : transfert de la PLEINE compétence en immigration —
// au-delà de l'Accord Canada-Québec de 1991 (sélection des immigrants économiques) — incluant
// l'immigration temporaire (travailleurs, étudiants), les demandeurs d'asile et la réunification
// familiale. REJETÉE : Trudeau (15 mars 2024, Montréal) a refusé tout transfert supplémentaire.
// Position fédérale documentée mais via presse (corps d'articles bloqués) → sources SECONDAIRES,
// à recouper avec un transcript du Cabinet du PM. Ottawa a offert une coopération plus étroite et
// 750 M$ (juin 2024), sans transfert de compétence.
export const immigrationPleinePouvoir: ProvincialRequest = {
  id: 'immigration-pleins-pouvoirs',
  slug: 'immigration-pleins-pouvoirs',
  province: 'QC',
  title: "Transfert de la pleine compétence en immigration au Québec",
  date: '2024-03-15',
  domains: ['immigration', 'langue'],
  status: 'rejetee',
  ask: "Le Québec a demandé le transfert de l'ensemble de la compétence en immigration — au-delà de la sélection des immigrants économiques déjà prévue par l'Accord Canada-Québec de 1991 —, incluant l'immigration temporaire (travailleurs étrangers, étudiants), les demandeurs d'asile et la réunification familiale.",
  whyProvince:
    "Le Québec invoquait la protection du français et de son identité, ainsi qu'une capacité d'accueil et d'intégration atteinte (nombre élevé d'immigrants temporaires et de demandeurs d'asile pesant sur la santé, l'éducation et le logement).",
  federalReason:
    "Le premier ministre Trudeau a refusé tout transfert supplémentaire (« No, we are not going to give more power on immigration »), soutenant que le Québec dispose déjà de plus de pouvoirs en immigration que toute autre province « parce qu'il est très important de protéger le français »; Ottawa a plutôt offert une coopération accrue (exigences de visas, avis du Québec sur les admissions temporaires, exigences linguistiques) et 750 M$ pour les coûts liés aux demandeurs d'asile.",
  provincePositionSourceIds: ['immig-trudeau-refus-2024'],
  federalPositionSourceIds: ['immig-trudeau-refus-2024'],
  relatedCaseSlug: 'immigration',
  sourceIds: ['immig-trudeau-refus-2024', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

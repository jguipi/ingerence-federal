import type { Case, Funding, ProvinceCode } from './types';
import { cases } from './cases';
import { sittingJudges } from './judges';

export const getCase = (slug: string): Case | undefined =>
  cases.find((c) => c.slug === slug);

export const byProvince = (code: ProvinceCode): Case[] =>
  cases.filter((c) => c.province === code);

export const byDomain = (domainId: string): Case[] =>
  cases.filter((c) => c.domains.includes(domainId));

/**
 * Écart annoncé − versé. null (« Données insuffisantes ») si l'un des deux manque.
 * Ne jamais estimer un écart à partir d'informations incomplètes (§3).
 */
export function ecart(f: Funding): number | null {
  if (f.announced.amount == null || f.paid.amount == null) return null;
  return f.announced.amount - f.paid.amount;
}

export const allFunding = (): Funding[] => cases.flatMap((c) => c.funding);

const hasConditions = (c: Case) =>
  c.conditions.length > 0 || c.funding.some((f) => f.conditional_flag);

export interface SiteStats {
  caseCount: number;
  provinceCount: number;
  domainCount: number;
  announcedTotal: number; // somme des montants annoncés connus (CAD)
  conditionalProgramCount: number;
}

// Stats calculées depuis les données réelles (§9) — jamais codées en dur.
export function stats(): SiteStats {
  const provinceSet = new Set(cases.map((c) => c.province));
  const domainSet = new Set(cases.flatMap((c) => c.domains));
  const announcedTotal = allFunding().reduce(
    (sum, f) => sum + (f.announced.amount ?? 0),
    0,
  );
  const conditionalProgramCount = allFunding().filter(
    (f) => f.conditional_flag,
  ).length;
  return {
    caseCount: cases.length,
    provinceCount: provinceSet.size,
    domainCount: domainSet.size,
    announcedTotal,
    conditionalProgramCount,
  };
}

export interface JudgeProvinceCount {
  province: ProvinceCode;
  count: number;
  pct: number; // proportion des juges EN POSTE (0-1)
}

// Répartition des juges EN POSTE de la Cour suprême par province de nomination.
// Calculée (jamais codée en dur). La proportion est descriptive, pas un verdict.
export function judgesByProvince(): JudgeProvinceCount[] {
  const sitting = sittingJudges();
  const counts = sitting.reduce<Partial<Record<ProvinceCode, number>>>((m, j) => {
    m[j.province] = (m[j.province] ?? 0) + 1;
    return m;
  }, {});
  return (Object.entries(counts) as [ProvinceCode, number][])
    .map(([province, count]) => ({ province, count, pct: count / sitting.length }))
    .sort((a, b) => b.count - a.count);
}

/** Format court CAD: 6,0 G$ / 496 M$ / « Données insuffisantes » si null. */
export function formatMoney(amount: number | null): string {
  if (amount == null) return 'Données insuffisantes';
  if (amount >= 1e9) return `${(amount / 1e9).toLocaleString('fr-CA', { maximumFractionDigits: 1 })} G$`;
  if (amount >= 1e6) return `${(amount / 1e6).toLocaleString('fr-CA', { maximumFractionDigits: 1 })} M$`;
  if (amount >= 1e3) return `${(amount / 1e3).toLocaleString('fr-CA', { maximumFractionDigits: 0 })} k$`;
  return `${amount.toLocaleString('fr-CA')} $`;
}

import { ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';
import type { AutonomyImpact, AutonomyLevel } from '../data/types';
import { autonomyDef } from '../data/autonomy';
import { SourceLink } from './SourceLink';

const icon: Record<AutonomyLevel, typeof ShieldCheck> = {
  preservee: ShieldCheck,
  encadree: ShieldAlert,
  reduite: ShieldX,
};

/** Badge compact (cartes, listes). */
export function AutonomyBadge({ impact }: { impact: AutonomyImpact }) {
  const def = autonomyDef(impact.level);
  const Icon = icon[impact.level];
  return (
    <span className={`autonomy-badge ${def.color}`} title={impact.rationale}>
      <Icon size={14} aria-hidden />
      {def.short}
    </span>
  );
}

/** Version détaillée (page cas) : niveau + pourquoi + qui l'affirme + source. */
export function AutonomyPanel({ impact }: { impact: AutonomyImpact }) {
  const def = autonomyDef(impact.level);
  const Icon = icon[impact.level];
  return (
    <section className={`autonomy-panel ${def.color}`}>
      <div className="ap-head">
        <Icon size={20} aria-hidden />
        <strong>{def.label}</strong>
      </div>
      <p>{impact.rationale}</p>
      <p className="ap-by">Selon : {impact.assertedBy}</p>
      <SourceLink ids={impact.sourceIds} />
    </section>
  );
}

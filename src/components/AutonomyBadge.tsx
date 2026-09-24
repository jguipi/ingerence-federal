import { ShieldCheck, ShieldAlert, ShieldX, Activity, TrendingDown, AlertTriangle } from 'lucide-react';
import type { AutonomyImpact, AutonomyLevel, ServiceImpact, ServiceImpactLevel } from '../data/types';
import { autonomyDef, serviceImpactDef } from '../data/autonomy';
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

const serviceIcon: Record<ServiceImpactLevel, typeof Activity> = {
  'aucun-documente': Activity,
  'pression-alleguee': AlertTriangle,
  documente: TrendingDown,
};

/** Badge compact pour l'effet sur les services (axe distinct de l'autonomie). */
export function ServiceImpactBadge({ impact }: { impact: ServiceImpact }) {
  const def = serviceImpactDef(impact.level);
  const Icon = serviceIcon[impact.level];
  return (
    <span className={`autonomy-badge ${def.color}`} title={impact.rationale}>
      <Icon size={14} aria-hidden />
      {def.short}
    </span>
  );
}

/** Version détaillée (page cas) : effet + le fait allégué + qui l'affirme + source. */
export function ServiceImpactPanel({ impact }: { impact: ServiceImpact }) {
  const def = serviceImpactDef(impact.level);
  const Icon = serviceIcon[impact.level];
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

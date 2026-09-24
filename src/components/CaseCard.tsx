import { Link } from 'react-router-dom';
import type { Case } from '../data/types';
import { domainLabel } from '../data/domains';
import { statusLabel } from '../data/statuses';
import { provinceName } from '../data/provinces';
import { ecart, formatMoney } from '../data/selectors';
import type { FilterState } from './Filters';
import { AutonomyBadge, ServiceImpactBadge } from './AutonomyBadge';

const statusColor: Record<string, string> = {
  documente: 'blue',
  'entente-federale-provinciale': 'green',
  conteste: 'red',
  'en-cours': 'purple',
  'decision-judiciaire': 'blue',
  'position-politique': 'purple',
  'donnees-financieres-partielles': 'gray',
};

const year = (c: Case) => c.dateStart.slice(0, 4);

export function matchCase(c: Case, f: FilterState): boolean {
  const hay = `${c.title} ${c.summary} ${c.description} ${c.funding.map((x) => x.program).join(' ')}`.toLowerCase();
  if (f.query && !hay.includes(f.query.toLowerCase())) return false;
  if (f.province && c.province !== f.province) return false;
  if (f.domain && !c.domains.includes(f.domain)) return false;
  if (f.status && c.status !== f.status) return false;
  if (f.type && c.interventionType !== f.type) return false;
  if (f.autonomy && c.autonomyImpact?.level !== f.autonomy) return false;
  if (f.year && !(c.dateStart <= f.year && (c.dateEnd ?? c.dateStart) >= f.year)) return false;
  if (f.withConditions && c.conditions.length === 0 && !c.funding.some((x) => x.conditional_flag)) return false;
  if (f.withFunding && c.funding.length === 0) return false;
  return true;
}

export function CaseCard({ c }: { c: Case }) {
  const mainFunding = c.funding[0];
  const gap = mainFunding ? ecart(mainFunding) : null;
  return (
    <article className="card">
      <div className="cardtop">
        <span className={`province-badge ${c.province}`}>{provinceName(c.province)}</span>
        <span className="category">{c.domains.map(domainLabel).join(', ')}</span>
        <span className={`status ${statusColor[c.status] ?? 'gray'}`}>{statusLabel(c.status)}</span>
      </div>
      <h2><Link to={`/cas/${c.slug}`}>{c.title}</Link></h2>
      <div className="years">
        {provinceName(c.province)} · {c.dateStart}{c.dateEnd ? `–${c.dateEnd}` : ''}
      </div>
      <p>{c.summary}</p>
      {(c.autonomyImpact || c.serviceImpact) && (
        <div className="card-autonomy">
          {c.autonomyImpact && <AutonomyBadge impact={c.autonomyImpact} />}
          {c.serviceImpact && <ServiceImpactBadge impact={c.serviceImpact} />}
        </div>
      )}
      {mainFunding && (
        <div className="card-funding">
          <span>Annoncé <strong>{formatMoney(mainFunding.announced.amount)}</strong></span>
          <span>Versé <strong>{formatMoney(mainFunding.paid.amount)}</strong></span>
          <span>Écart <strong>{formatMoney(gap)}</strong></span>
        </div>
      )}
      <Link className="card-more" to={`/cas/${c.slug}`}>Voir le dossier →</Link>
    </article>
  );
}

export { year };

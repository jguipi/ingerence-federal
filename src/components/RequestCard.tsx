import type { ProvincialRequest } from '../data/types';
import { domainLabel } from '../data/domains';
import { provinceName } from '../data/provinces';
import { requestStatusDef } from '../data/requestStatuses';
import { SourceLink } from './SourceLink';

/** Une demande provinciale au fédéral : ce qui a été demandé, pourquoi, la réponse fédérale. */
export function RequestCard({ r }: { r: ProvincialRequest }) {
  const status = requestStatusDef(r.status);
  return (
    <article className="card request-card">
      <div className="cardtop">
        <span className="category">{r.domains.map(domainLabel).join(', ')}</span>
        <span className={`status ${status.color}`}>{status.label}</span>
      </div>
      <h2>{r.title}</h2>
      <div className="years">{provinceName(r.province)} · {r.date}</div>

      <p className="req-ask"><strong>Demande :</strong> {r.ask}</p>
      <p className="req-why"><strong>Pourquoi (selon la province) :</strong> {r.whyProvince}</p>
      <p className="req-fed">
        <strong>Réponse fédérale :</strong>{' '}
        {r.federalReason ?? 'Aucune raison fédérale publique documentée.'}
      </p>

      <SourceLink ids={r.sourceIds} />
    </article>
  );
}

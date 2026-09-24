import { useParams, Link } from 'react-router-dom';
import { getCase } from '../data/selectors';
import { domainLabel } from '../data/domains';
import { statusLabel } from '../data/statuses';
import { interventionTypeLabel } from '../data/statuses';
import { provinceName } from '../data/provinces';
import { FundingBlock } from '../components/FundingBlock';
import { ConditionsList } from '../components/ConditionsList';
import { PositionPair } from '../components/PositionPair';
import { SourceLink } from '../components/SourceLink';
import { AutonomyPanel } from '../components/AutonomyBadge';

export function CaseDetail() {
  const { slug } = useParams();
  const c = slug ? getCase(slug) : undefined;
  if (!c) {
    return (
      <div>
        <h1>Dossier introuvable</h1>
        <Link to="/cas">← Retour aux cas documentés</Link>
      </div>
    );
  }
  return (
    <article className="case-detail">
      <Link className="back" to="/cas">← Cas documentés</Link>
      <div className="cardtop">
        <span className="category">{c.domains.map(domainLabel).join(', ')}</span>
        <span className="status">{statusLabel(c.status)}</span>
      </div>
      <h1>{c.title}</h1>
      <div className="years">
        {provinceName(c.province)} · {c.dateStart}{c.dateEnd ? `–${c.dateEnd}` : ''} ·{' '}
        {interventionTypeLabel(c.interventionType)}
      </div>
      <p className="lead">{c.summary}</p>

      {c.autonomyImpact && <AutonomyPanel impact={c.autonomyImpact} />}

      {c.funding.map((f) => <FundingBlock key={f.id} funding={f} />)}

      <p>{c.description}</p>

      <section className="dossier-grid">
        <div>
          <h3>Action fédérale</h3>
          <p>{c.federalAction}</p>
          <h3>Compétence fédérale</h3>
          <p>{c.federalCompetence}</p>
        </div>
        <div>
          <h3>Compétence provinciale concernée</h3>
          <p>{c.provincialCompetence}</p>
          <h3>Situation juridique / actuelle</h3>
          <p>{c.legalStatus}</p>
        </div>
      </section>

      <PositionPair
        argumentsFor={c.argumentsFor}
        federalPosition={c.federalPosition}
        provincialPosition={c.provincialPosition}
      />

      <ConditionsList conditions={c.conditions} />

      {c.events.length > 0 && (
        <section className="timeline">
          <h3>Chronologie</h3>
          <ol>
            {c.events.map((e, i) => (
              <li key={i}>
                <span className="tl-date">{e.date}</span>
                <div>
                  <strong>{e.title}</strong>
                  {e.description && <p>{e.description}</p>}
                  <SourceLink ids={e.sourceIds} />
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      <section>
        <h3>Sources</h3>
        <SourceLink ids={c.sourceIds} />
      </section>

      <p className="verified">Dernière vérification : {c.lastVerified}</p>
    </article>
  );
}

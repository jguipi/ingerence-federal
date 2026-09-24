import { useParams, Link } from 'react-router-dom';
import { domains, domainLabel } from '../data/domains';
import { byDomain } from '../data/selectors';
import { cases } from '../data/cases';
import { CaseCard } from '../components/CaseCard';

export function Domains() {
  const { id } = useParams();

  if (id) {
    const list = byDomain(id);
    return (
      <div>
        <Link className="back" to="/domaines">← Tous les domaines</Link>
        <h1>{domainLabel(id)}</h1>
        <div className="count">{list.length} dossier(s)</div>
        <div className="grid-cards">{list.map((c) => <CaseCard key={c.id} c={c} />)}</div>
        {list.length === 0 && <p className="empty">Aucun dossier dans ce domaine pour l'instant.</p>}
      </div>
    );
  }

  const counts = new Map<string, number>();
  cases.forEach((c) => c.domains.forEach((d) => counts.set(d, (counts.get(d) ?? 0) + 1)));

  return (
    <div>
      <h1>Domaines</h1>
      <p className="lead">Naviguez les dossiers par domaine de compétence.</p>
      <div className="domain-grid">
        {domains.map((d) => {
          const n = counts.get(d.id) ?? 0;
          return (
            <Link key={d.id} to={`/domaines/${d.id}`} className={`domain-tile ${n === 0 ? 'empty' : ''}`}>
              <span className="domain-name">{d.label}</span>
              <span className="domain-count">{n} dossier(s)</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

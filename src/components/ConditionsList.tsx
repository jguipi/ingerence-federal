import type { Condition } from '../data/types';
import { SourceLink } from './SourceLink';

const flag = (v: boolean | null, yes: string, no: string) =>
  v == null ? 'Non précisé' : v ? yes : no;

/** Conditions imposées (§4). Chaque condition: obligatoire?, acceptée/contestée, conséquence. */
export function ConditionsList({ conditions }: { conditions: Condition[] }) {
  if (conditions.length === 0) return null;
  return (
    <section className="conditions">
      <h3>Conditions imposées</h3>
      {conditions.map((c) => (
        <div className="condition" key={c.id}>
          <h4>{c.label}</h4>
          <p>{c.detail}</p>
          <ul className="cond-meta">
            <li>{c.mandatory ? 'Obligatoire' : 'Liée à un financement supplémentaire'}</li>
            <li>Acceptée par la province : {flag(c.acceptedByProvince, 'Oui', 'Non')}</li>
            <li>Contestée par la province : {flag(c.contestedByProvince, 'Oui', 'Non')}</li>
            {c.consequenceIfUnmet && <li>Si non respectée : {c.consequenceIfUnmet}</li>}
          </ul>
          <SourceLink ids={c.sourceIds} />
        </div>
      ))}
    </section>
  );
}

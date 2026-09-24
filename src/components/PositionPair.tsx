import type { Position } from '../data/types';
import { SourceLink } from './SourceLink';

function Column({ title, positions, extra, className }: {
  title: string;
  positions?: Position[];
  extra?: string[];
  className: string;
}) {
  return (
    <div className={`pp-col ${className}`}>
      <h3>{title}</h3>
      {extra?.map((t, i) => <p key={i}>{t}</p>)}
      {positions?.map((p, i) => (
        <div key={i} className="pp-pos">
          <p><strong>{p.actor} :</strong> {p.stance}</p>
          {p.quote && <blockquote>« {p.quote} »</blockquote>}
          <SourceLink ids={p.sourceIds} />
        </div>
      ))}
    </div>
  );
}

/**
 * Arguments « ingérence » (attribués à qui l'affirme) vs justification fédérale, côte à côte.
 * Ne présume jamais l'ingérence (§2).
 */
export function PositionPair({ argumentsFor, federalPosition, provincialPosition }: {
  argumentsFor: string[];
  federalPosition: Position[];
  provincialPosition: Position[];
}) {
  return (
    <div className="position-pair">
      <Column
        className="pp-for"
        title="Arguments en faveur de la qualification d'ingérence"
        extra={argumentsFor}
        positions={provincialPosition}
      />
      <Column
        className="pp-fed"
        title="Position / justification du gouvernement fédéral"
        positions={federalPosition}
      />
    </div>
  );
}

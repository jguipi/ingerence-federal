import type { Funding } from '../data/types';
import { ecart, formatMoney } from '../data/selectors';

function Row({ label, amount, note }: { label: string; amount: number | null; note?: string }) {
  return (
    <div className="fb-row">
      <span className="fb-label">{label}</span>
      <span className="fb-value" title={note}>{formatMoney(amount)}</span>
    </div>
  );
}

/** Bloc « Financement fédéral » encadré (§5). Annoncé/entente/versé jamais fusionnés. */
export function FundingBlock({ funding }: { funding: Funding }) {
  const gap = ecart(funding);
  const conditionCount = funding.conditionIds.length;
  return (
    <div className="funding-block">
      <h3>Financement fédéral</h3>
      <div className="fb-program">{funding.program}</div>
      <Row label="Annoncé" amount={funding.announced.amount} note={funding.announced.note} />
      <Row label="Entente" amount={funding.committed.amount} note={funding.committed.note} />
      {funding.guaranteed.amount != null && (
        <Row label="Garanti" amount={funding.guaranteed.amount} note={funding.guaranteed.note} />
      )}
      {funding.conditional.amount != null && (
        <Row label="Conditionnel" amount={funding.conditional.amount} note={funding.conditional.note} />
      )}
      <Row label="Versé" amount={funding.paid.amount} note={funding.paid.note} />
      <div className="fb-row fb-gap">
        <span className="fb-label">Écart (annoncé − versé)</span>
        <span className="fb-value">{formatMoney(gap)}</span>
      </div>
      {funding.period && <div className="fb-meta">Période : {funding.period}</div>}
      <div className="fb-meta">
        Conditions : {conditionCount}
        {funding.conditional_flag ? ' · financement conditionnel' : ''}
      </div>
    </div>
  );
}

import { provinces, provinceName } from '../data/provinces';
import { cases } from '../data/cases';
import { byProvince, ecart, formatMoney } from '../data/selectors';
import { domainLabel } from '../data/domains';

// Comparaison descriptive inter-provinces. Aucun score ni classement (§9).
export function Compare() {
  const active = provinces.filter((p) => p.available);
  const rows = active.map((p) => {
    const list = byProvince(p.code);
    const conditionalTotal = list
      .flatMap((c) => c.funding)
      .filter((f) => f.conditional_flag)
      .reduce((sum, f) => sum + (f.announced.amount ?? 0), 0);
    const domainSet = new Set(list.flatMap((c) => c.domains));
    const gapKnown = list
      .flatMap((c) => c.funding)
      .some((f) => ecart(f) != null);
    return {
      code: p.code,
      cases: list.length,
      conditional: conditionalTotal,
      domains: Array.from(domainSet).map(domainLabel),
      gapKnown,
    };
  });

  return (
    <div>
      <h1>Comparaison entre provinces</h1>
      <p className="lead">
        Tableau descriptif, sans classement ni score. Une seule province est documentée
        dans cette version; la structure est prête pour les autres.
      </p>
      <table className="compare-table">
        <thead>
          <tr>
            <th>Province</th><th>Cas</th><th>Financement conditionnel annoncé</th>
            <th>Domaines</th><th>Écart calculable</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code}>
              <td>{provinceName(r.code)}</td>
              <td>{r.cases}</td>
              <td>{formatMoney(r.conditional || null)}</td>
              <td>{r.domains.join(', ') || '—'}</td>
              <td>{r.gapKnown ? 'Partiel' : 'Données insuffisantes'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="chart-note">
        « Financement conditionnel annoncé » additionne les montants annoncés des programmes
        marqués conditionnels — il ne s'agit pas de montants versés.
      </p>
      <p className="chart-note">Total des cas documentés : {cases.length}.</p>
    </div>
  );
}

import { useMemo, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import { cases } from '../data/cases';
import { ecart, formatMoney } from '../data/selectors';
import { provinceName } from '../data/provinces';
import { Filters, emptyFilters, type FilterState } from '../components/Filters';
import { SourceLink } from '../components/SourceLink';

interface Row {
  program: string;
  province: string;
  slug: string;
  annonce: number | null;
  verse: number | null;
  conditionnel: number | null;
  ecart: number | null;
  conditions: number;
  sourceIds: string[];
}

const rows: Row[] = cases.flatMap((c) =>
  c.funding.map((f) => ({
    program: f.program,
    province: c.province,
    slug: c.slug,
    annonce: f.announced.amount,
    verse: f.paid.amount,
    conditionnel: f.conditional.amount,
    ecart: ecart(f),
    conditions: f.conditionIds.length,
    sourceIds: f.sourceIds,
  })),
);

const years = Array.from(new Set(cases.map((c) => c.dateStart.slice(0, 4)))).sort();

export function Funding() {
  const [filters, setFilters] = useState<FilterState>(emptyFilters);

  const filtered = useMemo(
    () =>
      rows.filter(
        (r) =>
          (!filters.province || r.province === filters.province) &&
          (!filters.query || r.program.toLowerCase().includes(filters.query.toLowerCase())) &&
          (!filters.withConditions || r.conditions > 0),
      ),
    [filters],
  );

  // Graphique annoncé vs versé (montants connus seulement).
  const chartData = filtered
    .filter((r) => r.annonce != null || r.verse != null)
    .map((r) => ({
      name: r.program.length > 28 ? r.program.slice(0, 27) + '…' : r.program,
      Annoncé: r.annonce ?? 0,
      Versé: r.verse ?? 0,
    }));

  return (
    <div>
      <h1>Financement fédéral</h1>
      <p className="lead">
        Comparez les transferts fédéraux : montant annoncé, montant versé et écart.
        Les montants annoncés ne sont jamais présentés comme des montants versés.
        « Données insuffisantes » apparaît lorsque la source ne permet pas de vérifier.
      </p>
      <Filters
        value={filters}
        onChange={setFilters}
        years={years}
        show={{ domain: false, status: false, type: false, year: false, autonomy: false, withFunding: false }}
      />

      {chartData.length > 0 && (
        <section className="chart" aria-label="Montant annoncé vs versé">
          <h3>Montant annoncé vs montant versé (CAD)</h3>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData} margin={{ bottom: 40 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-20} textAnchor="end" interval={0} height={60} fontSize={11} />
              <YAxis tickFormatter={(v: number) => formatMoney(v)} width={90} fontSize={11} />
              <Tooltip formatter={(v) => formatMoney(Number(v))} />
              <Legend />
              <Bar dataKey="Annoncé" fill="#304f86" />
              <Bar dataKey="Versé" fill="#20704b" />
            </BarChart>
          </ResponsiveContainer>
          <p className="chart-note">
            Barres à 0 = montant non publié dans la source (« Données insuffisantes »),
            et non un versement nul.
          </p>
        </section>
      )}

      <table className="fund-table">
        <thead>
          <tr>
            <th>Programme</th><th>Province</th><th>Annoncé</th><th>Versé</th>
            <th>Conditionnel</th><th>Écart</th><th>Conditions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((r, i) => (
            <tr key={i}>
              <td><a href={`/cas/${r.slug}`}>{r.program}</a></td>
              <td>{provinceName(r.province as never)}</td>
              <td>{formatMoney(r.annonce)}</td>
              <td>{formatMoney(r.verse)}</td>
              <td>{formatMoney(r.conditionnel)}</td>
              <td>{formatMoney(r.ecart)}</td>
              <td>{r.conditions}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {filtered.length === 0 && <p className="empty">Aucun financement ne correspond aux filtres.</p>}
    </div>
  );
}

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { cases } from '../data/cases';
import { CaseCard, matchCase } from '../components/CaseCard';
import { Filters, emptyFilters, type FilterState } from '../components/Filters';

const years = Array.from(
  new Set(cases.flatMap((c) => [c.dateStart.slice(0, 4), (c.dateEnd ?? c.dateStart).slice(0, 4)])),
).sort();

export function Cases() {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState<FilterState>({
    ...emptyFilters,
    province: params.get('province') ?? '',
    domain: params.get('domain') ?? '',
  });

  // sync si on arrive via un lien /cas?province=QC après montage
  useEffect(() => {
    const p = params.get('province');
    if (p) setFilters((f) => ({ ...f, province: p }));
  }, [params]);

  const filtered = useMemo(() => cases.filter((c) => matchCase(c, filters)), [filters]);

  return (
    <div>
      <h1>Cas documentés</h1>
      <Filters value={filters} onChange={setFilters} years={years} />
      <div className="count">{filtered.length} dossier{filtered.length !== 1 ? 's' : ''}</div>
      <div className="grid-cards">
        {filtered.map((c) => <CaseCard key={c.id} c={c} />)}
      </div>
      {filtered.length === 0 && <p className="empty">Aucun dossier ne correspond aux filtres.</p>}
    </div>
  );
}

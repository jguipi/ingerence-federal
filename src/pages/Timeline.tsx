import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { cases } from '../data/cases';
import { getSources } from '../data/sources';
import { provinceName } from '../data/provinces';
import { Filters, emptyFilters, type FilterState } from '../components/Filters';

interface Entry {
  date: string;
  title: string;
  description?: string;
  caseTitle: string;
  slug: string;
  province: string;
  domains: string[];
  sourceIds: string[];
}

const entries: Entry[] = cases
  .flatMap((c) =>
    c.events.map((e) => ({
      date: e.date,
      title: e.title,
      description: e.description,
      caseTitle: c.title,
      slug: c.slug,
      province: c.province,
      domains: c.domains,
      sourceIds: e.sourceIds,
    })),
  )
  .sort((a, b) => a.date.localeCompare(b.date));

const years = Array.from(new Set(entries.map((e) => e.date.slice(0, 4)))).sort();

export function Timeline() {
  const [filters, setFilters] = useState<FilterState>(emptyFilters);
  const filtered = useMemo(
    () =>
      entries.filter(
        (e) =>
          (!filters.province || e.province === filters.province) &&
          (!filters.domain || e.domains.includes(filters.domain)) &&
          (!filters.year || e.date.startsWith(filters.year)) &&
          (!filters.query || `${e.title} ${e.caseTitle}`.toLowerCase().includes(filters.query.toLowerCase())),
      ),
    [filters],
  );

  return (
    <div>
      <h1>Chronologie</h1>
      <Filters
        value={filters}
        onChange={setFilters}
        years={years}
        show={{ status: false, type: false, withConditions: false, withFunding: false }}
      />
      <ol className="timeline big">
        {filtered.map((e, i) => (
          <li key={i}>
            <span className="tl-date">{e.date}</span>
            <div>
              <strong>{e.title}</strong>
              {e.description && <p>{e.description}</p>}
              <p className="tl-case">
                {provinceName(e.province as never)} · <Link to={`/cas/${e.slug}`}>{e.caseTitle}</Link>
                {getSources(e.sourceIds).length > 0 && ` · ${getSources(e.sourceIds).length} source(s)`}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {filtered.length === 0 && <p className="empty">Aucun événement.</p>}
    </div>
  );
}

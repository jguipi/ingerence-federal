import { ExternalLink } from 'lucide-react';
import { getSources } from '../data/sources';

export function SourceLink({ ids }: { ids: string[] }) {
  const sources = getSources(ids);
  if (sources.length === 0) return null;
  // primaires d'abord (§8)
  const ordered = [...sources].sort((a, b) =>
    a.type === b.type ? 0 : a.type === 'primaire' ? -1 : 1,
  );
  return (
    <div className="sources">
      {ordered.map((s) => (
        <a key={s.id} href={s.url} target="_blank" rel="noreferrer">
          <span>{s.title}</span>
          <small>
            {s.publisher}
            {s.date ? ` · ${s.date}` : ''}
            {s.type === 'secondaire' ? ' · source secondaire' : ''}
          </small>
          <ExternalLink size={15} aria-hidden />
        </a>
      ))}
    </div>
  );
}

import { sources } from '../data/sources';

export function Sources() {
  const primaires = sources.filter((s) => s.type === 'primaire');
  const secondaires = sources.filter((s) => s.type === 'secondaire');

  return (
    <div>
      <h1>Sources</h1>
      <p className="lead">
        Les affirmations importantes s'appuient sur des sources vérifiables. La priorité
        va aux sources primaires (documents officiels des gouvernements, ententes, lois,
        décisions judiciaires, documents budgétaires, rapports du Vérificateur général et
        du Directeur parlementaire du budget), puis aux sources secondaires fiables.
      </p>

      <h2>Sources primaires ({primaires.length})</h2>
      <ul className="source-index">
        {primaires.map((s) => (
          <li key={s.id}>
            <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
            <small>{s.publisher}{s.date ? ` · ${s.date}` : ''}{s.docType ? ` · ${s.docType}` : ''}</small>
          </li>
        ))}
      </ul>

      {secondaires.length > 0 && (
        <>
          <h2>Sources secondaires ({secondaires.length})</h2>
          <ul className="source-index">
            {secondaires.map((s) => (
              <li key={s.id}>
                <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
                <small>{s.publisher}{s.date ? ` · ${s.date}` : ''}</small>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

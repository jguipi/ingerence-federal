import { useState } from 'react';
import { requests } from '../data/requests';
import { requestStatuses } from '../data/requestStatuses';
import { RequestCard } from '../components/RequestCard';
import type { RequestStatus } from '../data/types';

export function Requests() {
  const [status, setStatus] = useState<RequestStatus | ''>('');
  const shown = status ? requests.filter((r) => r.status === status) : requests;

  return (
    <div>
      <h1>Demandes des provinces au fédéral</h1>
      <p className="lead">
        Demandes formulées par une province au gouvernement fédéral, avec leur issue. Chaque
        fiche présente ce qui a été demandé, la raison invoquée par la province, et la réponse
        fédérale <strong>telle que documentée</strong> : « aucune raison fédérale publique
        documentée » signifie qu'aucune justification officielle n'a été trouvée, jamais une
        raison présumée par le site.
      </p>

      <div className="req-filter">
        <label htmlFor="req-status">Filtrer par issue :</label>
        <select
          id="req-status"
          value={status}
          onChange={(e) => setStatus(e.target.value as RequestStatus | '')}
        >
          <option value="">Toutes ({requests.length})</option>
          {requestStatuses.map((s) => {
            const n = requests.filter((r) => r.status === s.id).length;
            return (
              <option key={s.id} value={s.id}>{s.label} ({n})</option>
            );
          })}
        </select>
      </div>

      {shown.length === 0 ? (
        <p>Aucune demande pour cette issue.</p>
      ) : (
        <div className="cards">
          {shown.map((r) => <RequestCard key={r.id} r={r} />)}
        </div>
      )}
    </div>
  );
}

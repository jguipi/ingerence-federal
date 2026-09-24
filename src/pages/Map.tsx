import { useNavigate } from 'react-router-dom';
import { provinces } from '../data/provinces';
import { byProvince } from '../data/selectors';

// Carte simplifiée: une tuile par province/territoire. v1 = QC actif, autres grisés.
// ponytail: grille de tuiles, pas un vrai tracé géographique — upgrade vers topojson si besoin.
export function Map() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Carte du Canada</h1>
      <p className="lead">
        Sélectionnez une province pour voir ses dossiers. Le Québec est documenté dans
        cette version; les autres provinces et territoires seront ajoutés progressivement.
      </p>
      <div className="map-grid" role="list">
        {provinces.map((p) => {
          const count = p.available ? byProvince(p.code).length : 0;
          return (
            <button
              key={p.code}
              role="listitem"
              className={`map-tile ${p.available ? 'active' : 'disabled'}`}
              disabled={!p.available}
              aria-disabled={!p.available}
              onClick={() => navigate(`/cas?province=${p.code}`)}
            >
              <span className="map-code">{p.code}</span>
              <span className="map-name">{p.name}</span>
              <span className="map-count">
                {p.available ? `${count} dossier(s)` : 'À venir'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

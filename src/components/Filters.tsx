import { provinces } from '../data/provinces';
import { domains } from '../data/domains';
import { statuses, interventionTypes } from '../data/statuses';
import { autonomyLevels } from '../data/autonomy';

export interface FilterState {
  query: string;
  province: string;
  domain: string;
  status: string;
  type: string;
  year: string;
  autonomy: string;
  withConditions: boolean;
  withFunding: boolean;
}

export const emptyFilters: FilterState = {
  query: '', province: '', domain: '', status: '', type: '', year: '', autonomy: '',
  withConditions: false, withFunding: false,
};

interface Props {
  value: FilterState;
  onChange: (next: FilterState) => void;
  years: string[];
  show?: Partial<Record<keyof FilterState, boolean>>;
}

/** Barre de filtres réutilisée par /cas et /financement. Chaque select a un label associé. */
export function Filters({ value, onChange, years, show = {} }: Props) {
  const set = <K extends keyof FilterState>(k: K, v: FilterState[K]) =>
    onChange({ ...value, [k]: v });
  const vis = (k: keyof FilterState) => show[k] !== false;

  return (
    <div className="filters" role="search">
      {vis('query') && (
        <label className="field grow">
          <span className="field-label">Recherche</span>
          <input
            type="search"
            value={value.query}
            onChange={(e) => set('query', e.target.value)}
            placeholder="Programme, ministère, mot-clé…"
          />
        </label>
      )}
      {vis('province') && (
        <label className="field">
          <span className="field-label">Province</span>
          <select value={value.province} onChange={(e) => set('province', e.target.value)}>
            <option value="">Toutes</option>
            {provinces.filter((p) => p.available).map((p) => (
              <option key={p.code} value={p.code}>{p.name}</option>
            ))}
          </select>
        </label>
      )}
      {vis('domain') && (
        <label className="field">
          <span className="field-label">Domaine</span>
          <select value={value.domain} onChange={(e) => set('domain', e.target.value)}>
            <option value="">Tous</option>
            {domains.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
          </select>
        </label>
      )}
      {vis('type') && (
        <label className="field">
          <span className="field-label">Type d'intervention</span>
          <select value={value.type} onChange={(e) => set('type', e.target.value)}>
            <option value="">Tous</option>
            {interventionTypes.map((t) => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </label>
      )}
      {vis('status') && (
        <label className="field">
          <span className="field-label">Statut</span>
          <select value={value.status} onChange={(e) => set('status', e.target.value)}>
            <option value="">Tous</option>
            {statuses.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
        </label>
      )}
      {vis('autonomy') && (
        <label className="field">
          <span className="field-label">Autonomie provinciale</span>
          <select value={value.autonomy} onChange={(e) => set('autonomy', e.target.value)}>
            <option value="">Tous</option>
            {autonomyLevels.map((a) => <option key={a.level} value={a.level}>{a.label}</option>)}
          </select>
        </label>
      )}
      {vis('year') && (
        <label className="field">
          <span className="field-label">Année</span>
          <select value={value.year} onChange={(e) => set('year', e.target.value)}>
            <option value="">Toutes</option>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </label>
      )}
      {vis('withConditions') && (
        <label className="field check">
          <input
            type="checkbox"
            checked={value.withConditions}
            onChange={(e) => set('withConditions', e.target.checked)}
          />
          <span>Avec conditions</span>
        </label>
      )}
      {vis('withFunding') && (
        <label className="field check">
          <input
            type="checkbox"
            checked={value.withFunding}
            onChange={(e) => set('withFunding', e.target.checked)}
          />
          <span>Avec financement</span>
        </label>
      )}
    </div>
  );
}

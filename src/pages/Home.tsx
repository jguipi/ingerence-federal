import { Link } from 'react-router-dom';
import { cases } from '../data/cases';
import { stats, formatMoney } from '../data/selectors';
import { CaseCard } from '../components/CaseCard';

export function Home() {
  const s = stats();
  const featured = cases.slice(0, 3);
  const tiles = [
    { n: s.caseCount, l: 'cas documentés' },
    { n: s.provinceCount, l: 'province(s) couverte(s)' },
    { n: s.domainCount, l: 'secteurs' },
    { n: formatMoney(s.announcedTotal), l: 'financement fédéral annoncé (documenté)' },
    { n: s.conditionalProgramCount, l: 'programmes avec financement conditionnel' },
  ];
  return (
    <div className="home">
      <div className="eyebrow">CANADA · COMPÉTENCES FÉDÉRALES ET PROVINCIALES</div>
      <h1>Interventions fédérales dans les champs de compétence provinciaux</h1>
      <p className="lead">
        Cette plateforme documente les interventions, chevauchements de compétences et
        ingérences présumées du gouvernement fédéral dans les compétences provinciales.
        Elle présente les faits, les montants, les conditions et les positions de chaque
        gouvernement — puis laisse le lecteur tirer sa propre conclusion.
      </p>
      <div className="notice">
        <strong>Important :</strong> une intervention fédérale n'est pas présumée être une
        ingérence. Chaque dossier distingue les faits vérifiables, les interprétations et
        les positions politiques, avec leurs sources.
      </div>

      <section className="stats" aria-label="Statistiques">
        {tiles.map((t, i) => (
          <div className="stat" key={i}>
            <div className="stat-n">{t.n}</div>
            <div className="stat-l">{t.l}</div>
          </div>
        ))}
      </section>

      <div className="section-head">
        <h2>Cas en vedette</h2>
        <Link to="/cas">Voir tous les cas →</Link>
      </div>
      <div className="grid-cards">
        {featured.map((c) => <CaseCard key={c.id} c={c} />)}
      </div>
    </div>
  );
}

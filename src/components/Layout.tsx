import { NavLink, Outlet } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/cas', label: 'Cas documentés' },
  { to: '/financement', label: 'Financement fédéral' },
  { to: '/chronologie', label: 'Chronologie' },
  { to: '/carte', label: 'Carte' },
  { to: '/domaines', label: 'Domaines' },
  { to: '/comparaison', label: 'Comparaison' },
  { to: '/demandes', label: 'Demandes au fédéral' },
  { to: '/juges', label: 'Juges de la Cour suprême' },
  { to: '/opinion', label: 'Opinion publique' },
  { to: '/sources', label: 'Sources' },
  { to: '/methodologie', label: 'Méthodologie' },
];

export function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">Aller au contenu</a>
      <header className="site-header">
        <div className="site-title">
          <NavLink to="/">Interventions & ingérences fédérales</NavLink>
          <span className="site-sub">Compétences fédérales et provinciales au Canada</span>
        </div>
        <nav aria-label="Navigation principale">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end}>{l.label}</NavLink>
          ))}
        </nav>
      </header>
      <main id="main" className="app">
        <Outlet />
      </main>
      <footer className="site-footer">
        <strong>Méthodologie</strong>
        <p>
          « Ingérence » est une qualification politique ou analytique, pas une catégorie
          juridique automatique. Le site distingue les faits documentés, les compétences
          partagées et les positions de chaque gouvernement. Sources primaires prioritaires.
        </p>
        <NavLink to="/methodologie">Lire la méthodologie complète</NavLink>
        <a
          href="https://www.quebec.ca/gouvernement/ministeres-organismes/justice/comites-consultatifs/comite-consultatif-enjeux-constitutionnels-quebec"
          target="_blank" rel="noreferrer"
        >
          Comité consultatif du Québec <ExternalLink size={14} aria-hidden />
        </a>
      </footer>
    </>
  );
}

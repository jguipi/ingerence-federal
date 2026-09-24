import { statuses } from '../data/statuses';

export function Methodology() {
  return (
    <div className="prose">
      <h1>Méthodologie</h1>
      <p className="lead">
        Cette page explique comment les dossiers sont sélectionnés, vérifiés et présentés.
        L'objectif est la transparence : présenter les faits, les montants, les conditions
        et les positions de chaque gouvernement, puis laisser le lecteur juger.
      </p>

      <h2>Ce que « ingérence » signifie ici</h2>
      <p>
        « Ingérence » est une qualification politique ou analytique, pas une catégorie
        juridique automatique. Une intervention fédérale n'est jamais présumée être une
        ingérence. Chaque dossier établit l'action fédérale, la compétence concernée, le
        mécanisme utilisé, qui affirme qu'il s'agit d'une ingérence, et la justification
        fédérale. Aucun score n'est attribué pour déterminer si une intervention est une
        « vraie » ingérence.
      </p>

      <h2>Sélection d'un cas</h2>
      <p>
        Un cas est retenu lorsqu'une intervention fédérale touche un domaine où la
        compétence provinciale est en jeu, et qu'elle est documentée par des sources
        vérifiables. La pertinence n'implique pas une conclusion.
      </p>

      <h2>Vérification des sources</h2>
      <p>
        Priorité aux sources primaires : gouvernement du Canada, gouvernement du Québec,
        autres gouvernements provinciaux, Parlement, Assemblée nationale, décisions
        judiciaires, lois, documents budgétaires, ententes, rapports du Vérificateur
        général et du Directeur parlementaire du budget. Les sources secondaires fiables
        complètent au besoin.
      </p>

      <h2>Points de vue opposés</h2>
      <p>
        Chaque dossier présente les arguments en faveur de la qualification d'ingérence
        (attribués à qui les affirme) et la position ou la justification du gouvernement
        fédéral, chacune avec sa source.
      </p>

      <h2>Vérification financière</h2>
      <p>
        Les montants annoncés, engagés, garantis, conditionnels et versés sont distincts et
        ne sont jamais fusionnés. Un montant annoncé n'est jamais présenté comme un montant
        versé. Lorsque les sources ne permettent pas de déterminer un montant ou un écart,
        la mention « Données insuffisantes » est affichée — aucun montant n'est estimé.
      </p>

      <h2>Mise à jour des données</h2>
      <p>
        Chaque dossier affiche sa date de dernière vérification. Les montants versés sont
        mis à jour lorsque de nouveaux versements sont documentés.
      </p>

      <h2>Statuts</h2>
      <dl className="status-defs">
        {statuses.map((s) => (
          <div key={s.id}>
            <dt>{s.label}</dt>
            <dd>{s.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

# Interventions & ingérences fédérales

Plateforme documentaire sur les interventions, chevauchements de compétences et ingérences présumées du gouvernement fédéral dans les compétences provinciales au Canada.

La première version couvre le **Québec**; l'architecture permet d'ajouter les autres provinces et territoires sans refonte.

## Objectif

Présenter, pour chaque dossier, les **faits vérifiables**, les **montants** (annoncés, prévus, versés, conditionnels), les **conditions** attachées aux transferts fédéraux, et les **positions de chaque gouvernement** — avec leurs sources — puis laisser le lecteur tirer sa propre conclusion.

Le site distingue systématiquement :

- les faits documentés, les interprétations et les positions politiques;
- les montants annoncés et les montants réellement versés;
- ce qui relève d'une compétence fédérale, provinciale ou partagée.

Une intervention fédérale n'est **jamais présumée** être une ingérence. « Ingérence » est une qualification politique ou analytique, pas une catégorie juridique automatique.

## Fonctionnalités

- **Cas documentés** — fiches structurées avec filtres (province, année, domaine, type d'intervention, statut, atteinte à l'autonomie, conditions, financement).
- **Transparence financière** — montant annoncé vs versé, écart (calculé seulement si les deux sont connus, sinon « Données insuffisantes » — jamais estimé), conditions imposées.
- **Badge d'atteinte à l'autonomie provinciale** — trois niveaux (préservée / encadrée / réduite) documentés par cas, avec source et attribution; pas de score calculé.
- **Page Financement** — recherche, comparaison et graphiques des transferts.
- **Chronologie, Carte, Domaines, Comparaison inter-provinces, Sources, Méthodologie.**

## Prérequis

- Node.js 18+
- npm 9+

## Démarrage

```bash
npm install
npm run dev      # serveur de développement
```

## Scripts

| Commande          | Rôle                                                        |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Serveur de développement Vite                               |
| `npm run build`   | Vérification de types (`tsc -b`) puis build de production   |
| `npm run preview` | Prévisualise le build de production                         |
| `npm test`        | Exécute les tests (`node:assert` via `tsx`, sans framework) |

## Pile technique

React · TypeScript · Vite · React Router · Recharts · lucide-react.

## Structure des données

Le contenu est **séparé de l'interface** : ajouter un cas, une province ou un domaine ne demande aucune modification des composants.

```
src/data/
  types.ts          Modèle de données (Case, Funding, Money, Condition, Position…)
  cases/            Un fichier par cas + index.ts qui les agrège
  sources/          Sources partagées, référencées par id
  provinces.ts      Provinces/territoires (available: true = documenté)
  domains.ts        Domaines de compétence
  statuses.ts       Statuts et types d'intervention
  autonomy.ts       Niveaux d'atteinte à l'autonomie
  selectors.ts      Helpers purs (ecart, stats, byProvince…)
src/components/     Composants réutilisables (cartes, filtres, blocs financement…)
src/pages/          Une page par route
```

### Ajouter un cas

1. Vérifier les montants sur les sources officielles (budgets fédéraux, comptes publics, ententes, rapports du DPB ou du Vérificateur général). Tout montant non confirmé reste `null`.
2. Ajouter les sources manquantes dans `src/data/sources/index.ts`.
3. Créer `src/data/cases/<slug>.ts` en s'inspirant d'un cas existant.
4. L'importer dans `src/data/cases/index.ts`.

Les statistiques, filtres et pages se mettent à jour automatiquement.

### Ajouter une province

Passer `available: true` pour la province dans `src/data/provinces.ts`, puis créer ses cas avec le bon `province`. La carte, les filtres et la comparaison la prennent en compte automatiquement.

## Méthodologie

Priorité aux sources primaires (gouvernement du Canada, gouvernement du Québec et autres provinces, Parlement, Assemblée nationale, décisions judiciaires, lois, documents budgétaires, ententes, Vérificateur général, Directeur parlementaire du budget). La méthodologie complète — sélection des cas, définition de l'échelle d'autonomie, vérification financière — est décrite sur la page `/methodologie` du site.

## Contribution

Voir `CLAUDE.md` pour les principes éditoriaux détaillés et les conventions d'architecture avant toute modification du contenu ou du code.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

Plateforme documentaire (React + TypeScript + Vite) sur les interventions, chevauchements de compétences et ingérences présumées du gouvernement fédéral dans les compétences provinciales au Canada. V1 = Québec; architecture prête pour toutes les provinces/territoires. Interface et contenu en français.

## Commandes

```bash
npm run dev      # serveur de dev Vite
npm run build    # tsc -b && vite build (le build type-check tout src/)
npm run preview  # prévisualise le build
npm test         # exécute src/data/selectors.test.ts via tsx (node:assert, pas de framework)
```

Un seul fichier de test aujourd'hui. Pour lancer un autre test ad hoc : `npx tsx src/data/chemin.test.ts`. Les `*.test.ts` sont exclus du build (`tsconfig.app.json` → `exclude`).

## Principes éditoriaux (contraintes, pas préférences)

Ces règles sont le cœur du projet. Les violer casse la crédibilité du site.

- **Ne jamais présumer une ingérence.** `argumentsFor[]` doit toujours être attribué à qui l'affirme; `federalPosition[]` (justification fédérale) doit toujours être présent. Présenter les faits et les deux positions, laisser le lecteur conclure.
- **Ne jamais estimer un montant.** `Money.amount = null` signifie « Données insuffisantes » et s'affiche tel quel. Un écart n'est calculé que si annoncé ET versé sont connus (`selectors.ts` → `ecart()`). Annoncé / engagé / garanti / conditionnel / versé sont des champs distincts, jamais fusionnés.
- **Pas de score calculé.** Le niveau d'atteinte à l'autonomie (`autonomyImpact`) et l'effet sur les services (`serviceImpact`) sont documentés à la main par cas, avec `assertedBy` + `sourceIds` — jamais un verdict du site ni un calcul. `serviceImpact` est un axe DISTINCT de `autonomyImpact` (qui décide vs effet sur les services); il n'est jamais une « réduction » présumée.
- **Positions attribuées.** Une demande provinciale (`ProvincialRequest`) porte `federalReason: string | null` — `null` = raison fédérale non documentée, JAMAIS inventée. Une position fédérale connue seulement par la presse est une source `secondaire` marquée « à recouper », jamais une source primaire.
- **Sources primaires d'abord** (canada.ca, quebec.ca, ententes, lois, comptes publics, DPB, Vérificateur général). `SourceLink` trie les primaires avant les secondaires.
- **Vérifier les montants** via les sources officielles avant de les inscrire (WebFetch sur les pages gouvernementales). Tout montant non confirmé reste `null` + note.

## Architecture

Séparation stricte **données / UI**. Ajouter un cas, une province ou un domaine = éditer des fichiers de données, jamais les composants.

### Données — `src/data/`

- `types.ts` — toutes les interfaces (`Case`, `Funding`, `Money`, `Condition`, `Position`, `TimelineEvent`, `AutonomyImpact`, `ServiceImpact`, `ProvincialRequest`). Source de vérité du modèle.
- `cases/` — un fichier par cas exportant un objet `Case`; `cases/index.ts` les agrège dans `export const cases`. Chaque fichier redéfinit un helper local `cad(...)` pour les montants.
- `requests/` — un fichier par demande provinciale au fédéral (`ProvincialRequest`), agrégé dans `requests/index.ts`. Modèle SÉPARÉ des `Case` (une demande n'a ni financement ni conditions structurés). Statuts pilotés par `requestStatuses.ts`. Affiché sur `/demandes` via `RequestCard`.
- `judges.ts` — composition de la Cour suprême par province de NOMINATION + roulement (`Judge[]`, `sittingJudges()`). Alimente `/juges`; le champ « PM nominateur » est volontairement absent (non vérifié). La répartition est présentée avec son fondement légal (Loi sur la Cour suprême, art. 6 : ≥3 juges du Québec), jamais comme un déséquilibre.
- `opinion/` — données d'opinion publique (page `/opinion`).
- `sources/index.ts` — `Source[]` partagées, indexées par `id`. Les cas/financements/conditions/demandes référencent par `sourceIds` (jamais de source dupliquée inline). `getSource`/`getSources` résolvent les ids.
- `provinces.ts`, `domains.ts`, `statuses.ts` (statuts + types d'intervention), `autonomy.ts` (niveaux autonomie + `serviceImpact`), `requestStatuses.ts` — listes **pilotées par données** avec libellés/couleurs. Les `type` unions dans `types.ts` restent, mais les options affichées (filtres, carte, comparaison) viennent de ces fichiers. Ajouter une province = passer `available: true` dans `provinces.ts` + créer ses cas.
- `selectors.ts` — helpers purs : `getCase`, `byProvince`, `byDomain`, `ecart`, `allFunding`, `stats`, `judgesByProvince` (toutes les stats sont **calculées** depuis les données, jamais codées en dur), `formatMoney` (retourne « Données insuffisantes » si null).

### UI — `src/`

- `main.tsx` — `createBrowserRouter`; layout partagé + 14 routes. `basename` lu depuis `import.meta.env.BASE_URL` (pour GitHub Pages sous sous-chemin; `/` en dev).
- `components/` — présentateurs réutilisables : `Layout` (nav + skip-link + footer), `Filters` (barre partagée par `/cas`, `/financement`, `/chronologie`; visibilité par champ via prop `show`), `CaseCard` (+ `matchCase` = logique de filtrage centrale utilisée par plusieurs pages), `FundingBlock`, `ConditionsList`, `PositionPair`, `SourceLink`, `AutonomyBadge`/`AutonomyPanel` (+ `ServiceImpactBadge`/`ServiceImpactPanel`), `RequestCard`.
- `pages/` — une par route. `Funding` et `Judges` utilisent Recharts — seul `BarChart` est employé dans le repo (pas de camembert); chaque graphe légende ce que chaque chiffre représente (une barre à 0 = donnée non publiée, pas un versement nul). `Map` = grille SVG/tuiles (QC actif, autres provinces `available:false` grisées) qui navigue vers `/cas?province=CODE`.

### Ajout d'un nouveau cas (flux type)

1. Vérifier les montants sur les sources officielles.
2. Ajouter les sources manquantes dans `sources/index.ts`.
3. Créer `src/data/cases/<slug>.ts` (copier un cas existant comme gabarit — respecter le helper `cad`, `lastVerified`, montants `null` si non vérifiés).
4. L'importer dans `cases/index.ts`. Aucun composant à toucher; stats/filtres/pages se mettent à jour seuls.

## Contraintes techniques

- `strict: true`, `noEmit` (Vite transpile, `tsc` type-check seulement). `@types/react`/`@types/react-dom` requis pour le build.
- Bundle > 500 kB (Recharts) — warning connu, non bloquant. Code-splitter `/financement` si le poids devient un problème.
- Neutralité visuelle : pas de couleur/symbole partisan, pas de titre-conclusion. Les niveaux d'autonomie utilisent vert/ambre/rouge sobres.

## Déploiement

GitHub Pages via `.github/workflows/deploy.yml` (build + déploie à chaque push sur `main`). Le site est servi sous le sous-chemin `/ingerence-federal/` : `base` dans `vite.config.ts` en est la source unique (le router lit `BASE_URL`). Le workflow copie `dist/index.html` en `404.html` (fallback SPA pour le rafraîchissement sur route profonde). Prérequis manuel une fois : GitHub → Settings → Pages → Source = GitHub Actions.

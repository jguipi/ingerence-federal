import type { Source } from '../types';

// Sources partagées, indexées par id. Référencées par sourceIds dans les cas/financements.
// Évite la duplication (ex. le Comité consultatif apparaissait dans 4 cas).
export const sources: Source[] = [
  {
    id: 'comite-consultatif-qc',
    title: 'Comité consultatif sur les enjeux constitutionnels du Québec',
    publisher: 'Gouvernement du Québec',
    date: '2024',
    url: 'https://www.quebec.ca/gouvernement/ministeres-organismes/justice/comites-consultatifs/comite-consultatif-enjeux-constitutionnels-quebec',
    type: 'primaire',
    docType: 'rapport',
  },
  {
    id: 'accord-sante-qc',
    title: 'Accord Canada–Québec sur le financement de la santé',
    publisher: 'Gouvernement du Canada',
    date: '2023–2027',
    url: 'https://www.canada.ca/fr/sante-canada/organisation/transparence/ententes-en-matiere-de-sante/priorites-partagees-matiere-sante/accords-bilateraux-travailler-ensemble/quebec-ameliorer-soins.html',
    type: 'primaire',
    docType: 'entente',
  },
  {
    id: 'rcsd-annonce',
    title: 'Le Régime canadien de soins dentaires',
    publisher: 'Santé Canada',
    date: '2023',
    url: 'https://www.canada.ca/fr/sante-canada/nouvelles/2023/12/le-regime-canadien-de-soins-dentaires.html',
    type: 'primaire',
    docType: 'communiqué',
  },
  {
    id: 'rcsd-qc-coordination',
    title: 'Coordination RCSD–programmes du Québec',
    publisher: 'Gouvernement du Canada',
    date: 'mai 2026',
    url: 'https://www.canada.ca/fr/services/prestations/dentaire/regime-soins-dentaires/fournisseurs/fiche-qc.html',
    type: 'primaire',
    docType: 'fiche',
  },
  {
    id: 'facl-entente-qc',
    title: 'Entente Canada–Québec sur le Fonds pour accélérer la construction de logements',
    publisher: 'Gouvernement du Québec',
    date: '9 nov. 2023',
    url: 'https://www.quebec.ca/premiere-ministre/actualites/detail/le-canada-et-le-quebec-annoncent-la-conclusion-dune-importante-entente-afin-dappuyer-la-construction-acceleree-de-logements-52171',
    type: 'primaire',
    docType: 'communiqué',
  },
  {
    id: 'qc-point-nov2024',
    title: 'Le point — mise à jour économique (logement)',
    publisher: 'Gouvernement du Québec',
    date: '2024',
    url: 'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/Budget/2425/AUTFR_lepointbrefNov2024.pdf',
    type: 'primaire',
    docType: 'document budgétaire',
  },
  {
    id: 'accords-fpt',
    title: 'Accords fédéral-provinciaux-territoriaux',
    publisher: 'Gouvernement du Canada',
    url: 'https://www.canada.ca/fr/affaires-intergouvernementales/services/accord-federal-provincial-territorial.html',
    type: 'primaire',
    docType: 'entente',
  },
  {
    id: 'c59-agence-eau',
    title: 'Projet de loi C-59 — Loi sur l’Agence canadienne de l’eau',
    publisher: 'Gouvernement du Canada',
    date: '2024',
    url: 'https://www.canada.ca/fr/ministere-finances/organisation/transparence/2024/nffn-partie-2.html',
    type: 'primaire',
    docType: 'projet de loi',
  },
  {
    id: 'bvcs-annonce',
    title: 'Bien vieillir chez soi — projet pilote de soutien à domicile',
    publisher: 'Gouvernement du Canada',
    date: '2023',
    url: 'https://www.canada.ca/fr/emploi-developpement-social/nouvelles/2023/12/document-dinformation--linitiative-bien-vieillir-chez-soi--volet-projet-pilote-de-soutien-a-domicile.html',
    type: 'primaire',
    docType: 'document d’information',
  },
  {
    id: 'csbe-soutien-domicile',
    title: 'Bien vieillir chez soi — analyse québécoise du soutien à domicile',
    publisher: 'Commissaire à la santé et au bien-être',
    date: '2023–2024',
    url: 'https://www.quebec.ca/nouvelles/actualites/details/mandat-du-csbe-sur-les-soins-et-services-de-soutien-a-domicile-bien-vieillir-chez-soi-une-transformation-qui-simpose-53292',
    type: 'primaire',
    docType: 'rapport',
  },
  {
    id: 'ircc-qc-faits',
    title: 'Faits saillants — Québec et immigration',
    publisher: 'Gouvernement du Canada',
    date: '2025',
    url: 'https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/transparence/comites/cow-9-jun-2025/quebec-faits-saillants.html',
    type: 'primaire',
    docType: 'document',
  },
];

const byId = new Map(sources.map((s) => [s.id, s]));
export const getSource = (id: string): Source | undefined => byId.get(id);
export const getSources = (ids: string[]): Source[] =>
  ids.map((id) => byId.get(id)).filter((s): s is Source => Boolean(s));

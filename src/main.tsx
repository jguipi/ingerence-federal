import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ExternalLink, Filter, Search } from 'lucide-react';
import './styles.css';

type Category = 'Santé' | 'Logement' | 'Services sociaux' | 'Eau' | 'Immigration' | 'Environnement' | 'Culture';
type Status = 'Programme fédéral' | 'Pouvoir partagé' | 'Conflit de compétence' | 'Entente Québec-Canada';

type Source = { title: string; url: string; publisher: string; date?: string };
type Case = { id: string; title: string; category: Category; years: string; status: Status; summary: string; why: string; federalFacts: string[]; quebecPosition?: string; sources: Source[] };

const cases: Case[] = [
  {
    id:'sante-transferts', title:'Financement fédéral de la santé et conditions liées aux transferts', category:'Santé', years:'2023–2026', status:'Entente Québec-Canada',
    summary:'Ottawa a proposé un financement additionnel en santé lié à des priorités pancanadiennes. Le Québec a conclu une entente qui reconnaît sa compétence et lui permet de déterminer ses priorités.',
    why:'Le dossier est pertinent pour le débat sur le pouvoir fédéral de dépenser, mais l’accord signé prévoit explicitement que le Québec conçoit et évalue son propre plan.',
    federalFacts:['Plan fédéral annoncé en 2023: près de 200 G$ sur 10 ans pour les provinces et territoires.','Pour le Québec, l’accord prévoit notamment 496 M$ par année estimés pour les priorités québécoises et 132,8 M$ par année pour santé mentale/dépendances, sous réserve des ajustements.'],
    quebecPosition:'L’accord reconnaît la compétence du Québec en santé et sa maîtrise d’œuvre de la planification, de l’organisation et de la gestion des services.',
    sources:[
      {title:'Accord Canada–Québec sur le financement de la santé',publisher:'Gouvernement du Canada',date:'2023–2027',url:'https://www.canada.ca/fr/sante-canada/organisation/transparence/ententes-en-matiere-de-sante/priorites-partagees-matiere-sante/accords-bilateraux-travailler-ensemble/quebec-ameliorer-soins.html'},
      {title:'Comité consultatif sur les enjeux constitutionnels du Québec',publisher:'Gouvernement du Québec',date:'2024',url:'https://www.quebec.ca/gouvernement/ministeres-organismes/justice/comites-consultatifs/comite-consultatif-enjeux-constitutionnels-quebec'}]
  },
  {
    id:'dentaire', title:'Régime canadien de soins dentaires', category:'Santé', years:'2023–2026', status:'Programme fédéral',
    summary:'Le fédéral a créé un régime national financé et administré par Ottawa pour les résidents admissibles sans assurance dentaire privée.',
    why:'Le comité québécois cite les programmes fédéraux dans des domaines provinciaux comme un enjeu du pouvoir fédéral de dépenser. Le régime dentaire est cependant un programme fédéral et ne remplace pas les programmes québécois couverts par la RAMQ.',
    federalFacts:['Budget initial: 13 G$ sur cinq ans et 4,4 G$ par la suite.','Le régime a commencé à être déployé en décembre 2023 et les premières prestations ont commencé en mai 2024.','En 2026, le Québec demeure le seul payeur pour les services couverts par ses propres programmes; ces prestations ne sont pas coordonnées avec le RCSD.'],
    sources:[
      {title:'Le Régime canadien de soins dentaires',publisher:'Santé Canada',date:'2023',url:'https://www.canada.ca/fr/sante-canada/nouvelles/2023/12/le-regime-canadien-de-soins-dentaires.html'},
      {title:'Coordination RCSD–programmes du Québec',publisher:'Gouvernement du Canada',date:'mai 2026',url:'https://www.canada.ca/fr/services/prestations/dentaire/regime-soins-dentaires/fournisseurs/fiche-qc.html'}]
  },
  {
    id:'logement', title:'Fonds pour accélérer la construction de logements', category:'Logement', years:'2023–2026', status:'Entente Québec-Canada',
    summary:'Ottawa et Québec ont conclu une entente de 900 M$ pour accélérer la construction de logements au Québec.',
    why:'Le logement implique plusieurs ordres de gouvernement. Le débat porte notamment sur les conditions fédérales liées au financement et sur le rôle du fédéral auprès des municipalités.',
    federalFacts:['Contribution fédérale annoncée pour le Québec: 900 M$ d’ici 2026–2027.','Le Québec indique que près de 2 G$ ont été prévus dans le cadre du fonds, dont environ la moitié provenant du Québec.'],
    sources:[
      {title:'Entente Canada–Québec sur le FACL',publisher:'Gouvernement du Québec',date:'9 nov. 2023',url:'https://www.quebec.ca/premiere-ministre/actualites/detail/le-canada-et-le-quebec-annoncent-la-conclusion-dune-importante-entente-afin-dappuyer-la-construction-acceleree-de-logements-52171'},
      {title:'Mise à jour économique — logement',publisher:'Gouvernement du Québec',date:'2024',url:'https://cdn-contenu.quebec.ca/cdn-contenu/adm/min/finances/publications-adm/Budget/2425/AUTFR_lepointbrefNov2024.pdf'}]
  },
  {
    id:'garderies', title:'Entente fédérale sur les services de garde', category:'Services sociaux', years:'2021–2026', status:'Entente Québec-Canada',
    summary:'Ottawa a conclu une entente asymétrique avec Québec pour financer le système d’apprentissage et de garde des jeunes enfants.',
    why:'Le Québec avait déjà un réseau de services de garde fortement structuré. L’enjeu constitutionnel porte surtout sur l’utilisation du pouvoir fédéral de dépenser dans un champ provincial.',
    federalFacts:['L’entente Canada–Québec prévoit un financement fédéral sur plusieurs années.','Le Québec bénéficie d’une entente asymétrique plutôt que d’une intégration à un modèle pancanadien identique.'],
    sources:[
      {title:'Accords fédéral-provinciaux-territoriaux',publisher:'Gouvernement du Canada',url:'https://www.canada.ca/fr/affaires-intergouvernementales/services/accord-federal-provincial-territorial.html'},
      {title:'Comité consultatif sur les enjeux constitutionnels du Québec',publisher:'Gouvernement du Québec',date:'2024',url:'https://www.quebec.ca/gouvernement/ministeres-organismes/justice/comites-consultatifs/comite-consultatif-enjeux-constitutionnels-quebec'}]
  },
  {
    id:'eau', title:'Projet d’Agence canadienne de l’eau', category:'Eau', years:'2022–2024', status:'Conflit de compétence',
    summary:'Ottawa a proposé de créer une Agence canadienne de l’eau afin d’appuyer le ministre fédéral dans l’exercice de responsabilités liées à l’eau douce.',
    why:'Le Québec a contesté l’intervention fédérale dans la gouvernance de l’eau et le risque de chevauchement avec ses propres structures.',
    federalFacts:['Le projet de loi C-59 contenait une Loi sur l’Agence canadienne de l’eau.','Le gouvernement fédéral présente l’agence comme une entité de la fonction publique centrale chargée d’appuyer le ministre fédéral sur l’eau douce.'],
    quebecPosition:'Le Québec a exprimé des réserves sur les chevauchements possibles avec ses responsabilités et structures en matière d’eau.',
    sources:[
      {title:'Projet de loi C-59 — Agence canadienne de l’eau',publisher:'Gouvernement du Canada',date:'2024',url:'https://www.canada.ca/fr/ministere-finances/organisation/transparence/2024/nffn-partie-2.html'},
      {title:'Comité consultatif sur les enjeux constitutionnels du Québec',publisher:'Gouvernement du Québec',date:'2024',url:'https://www.quebec.ca/gouvernement/ministeres-organismes/justice/comites-consultatifs/comite-consultatif-enjeux-constitutionnels-quebec'}]
  },
  {
    id:'soutien-domicile', title:'Initiative fédérale « Bien vieillir chez soi »', category:'Services sociaux', years:'2022–2026', status:'Programme fédéral',
    summary:'Ottawa finance directement des organismes et projets destinés à aider les aînés à rester à domicile.',
    why:'Le programme illustre l’utilisation de subventions fédérales dans des services qui touchent aussi les réseaux provinciaux de santé et de services sociaux.',
    federalFacts:['Programme fédéral lancé en 2022.','Le volet de projets pilotes de soutien à domicile a approuvé 71 projets pour 39,6 M$; des projets ont été mis en œuvre au Québec.'],
    sources:[
      {title:'Bien vieillir chez soi — projet pilote de soutien à domicile',publisher:'Gouvernement du Canada',date:'2023',url:'https://www.canada.ca/fr/emploi-developpement-social/nouvelles/2023/12/document-dinformation--linitiative-bien-vieillir-chez-soi--volet-projet-pilote-de-soutien-a-domicile.html'},
      {title:'Bien vieillir chez soi — analyse québécoise du soutien à domicile',publisher:'Commissaire à la santé et au bien-être',date:'2023–2024',url:'https://www.quebec.ca/nouvelles/actualites/details/mandat-du-csbe-sur-les-soins-et-services-de-soutien-a-domicile-bien-vieillir-chez-soi-une-transformation-qui-simpose-53292'}]
  },
  {
    id:'immigration', title:'Immigration temporaire et demandeurs d’asile', category:'Immigration', years:'2021–2026', status:'Pouvoir partagé',
    summary:'Le Québec et Ottawa se partagent les responsabilités en immigration. Les tensions récentes concernent notamment les volumes de résidents temporaires et les coûts associés aux demandeurs d’asile.',
    why:'Ce dossier ne peut pas être classé simplement comme une compétence exclusivement québécoise: l’immigration est constitutionnellement partagée et l’Accord Canada–Québec attribue des rôles précis aux deux gouvernements.',
    federalFacts:['Ottawa est responsable de l’admissibilité et de plusieurs catégories de permis et visas.','Québec sélectionne notamment les immigrants économiques selon l’Accord Canada–Québec.','Le gouvernement fédéral finance une partie des coûts liés à l’hébergement des demandeurs d’asile au Québec.'],
    sources:[
      {title:'Faits saillants — Québec et immigration',publisher:'Gouvernement du Canada',date:'2025',url:'https://www.canada.ca/fr/immigration-refugies-citoyennete/organisation/transparence/comites/cow-9-jun-2025/quebec-faits-saillants.html'},
      {title:'Comité consultatif sur les enjeux constitutionnels du Québec',publisher:'Gouvernement du Québec',date:'2024',url:'https://www.quebec.ca/gouvernement/ministeres-organismes/justice/comites-consultatifs/comite-consultatif-enjeux-constitutionnels-quebec'}]
  }
];

const colors: Record<Status,string> = { 'Programme fédéral':'blue','Pouvoir partagé':'purple','Conflit de compétence':'red','Entente Québec-Canada':'green' };

function App(){
  const [query,setQuery]=useState(''); const [category,setCategory]=useState('Toutes'); const [status,setStatus]=useState('Tous');
  const filtered=useMemo(()=>cases.filter(c=>(category==='Toutes'||c.category===category)&&(status==='Tous'||c.status===status)&&`${c.title} ${c.summary} ${c.why}`.toLowerCase().includes(query.toLowerCase())),[query,category,status]);
  return <div className="app">
    <header><div className="eyebrow">QUÉBEC · 2021–2026</div><h1>Interventions fédérales au Québec</h1><p className="lead">Dossiers documentés où Ottawa intervient dans des domaines québécois, ou où les deux gouvernements se disputent la portée de leurs compétences.</p><div className="notice"><strong>Important :</strong> « ingérence » est une qualification politique ou analytique, pas une catégorie juridique automatique. Le site distingue les faits documentés, les compétences partagées et les positions du Québec.</div></header>
    <section className="controls"><div className="search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher un dossier…"/></div><div className="select"><Filter size={16}/><select value={category} onChange={e=>setCategory(e.target.value)}><option>Toutes</option>{['Santé','Logement','Services sociaux','Eau','Immigration','Environnement','Culture'].map(x=><option key={x}>{x}</option>)}</select></div><select value={status} onChange={e=>setStatus(e.target.value)}><option>Tous les statuts</option>{Object.keys(colors).map(x=><option key={x}>{x}</option>)}</select></section>
    <main><div className="count">{filtered.length} dossier{filtered.length!==1?'s':''}</div>{filtered.map(c=><article className="card" key={c.id}><div className="cardtop"><span className="category">{c.category}</span><span className={`status ${colors[c.status]}`}>{c.status}</span></div><h2>{c.title}</h2><div className="years">{c.years}</div><p>{c.summary}</p><div className="grid"><div><h3>Pourquoi ce dossier est pertinent</h3><p>{c.why}</p>{c.quebecPosition&&<><h3>Position documentée du Québec</h3><p>{c.quebecPosition}</p></>}</div><div><h3>Faits vérifiables</h3><ul>{c.federalFacts.map((x,i)=><li key={i}>{x}</li>)}</ul></div></div><div className="sources"><h3>Sources</h3>{c.sources.map((s,i)=><a key={i} href={s.url} target="_blank" rel="noreferrer"><span>{s.title}</span><small>{s.publisher}{s.date?` · ${s.date}`:''}</small><ExternalLink size={15}/></a>)}</div></article>)}</main>
    <footer><strong>Méthodologie</strong><p>Les sources prioritaires sont les documents officiels du gouvernement du Québec et du gouvernement du Canada. Une intervention n’est pas automatiquement une inconstitutionnalité. Les dossiers sont présentés pour permettre de vérifier les faits et de lire les documents originaux.</p><a href="https://www.quebec.ca/gouvernement/ministeres-organismes/justice/comites-consultatifs/comite-consultatif-enjeux-constitutionnels-quebec" target="_blank" rel="noreferrer">Rapport du Comité consultatif du Québec <ExternalLink size={14}/></a></footer>
  </div>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);

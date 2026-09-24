import type { ProvincialRequest } from '../types';

// Demande répétée du Québec : une déclaration de revenus UNIQUE, transmise à Revenu Québec, pour
// les contribuables québécois (le Québec est la seule province à administrer son propre impôt).
// Étapes vérifiées par sources PRIMAIRES : motion UNANIME de l'Assemblée nationale le 15 mai 2018
// (parrain Jean-François Lisée, amendée par le gouvernement pour ajouter « en préservant
// l'autonomie fiscale du Québec »); refus fédéral porté par la ministre Diane Lebouthillier aux
// Communes le 5 févr. 2019, motif central = protection de plus de 5 500 emplois de l'ARC au
// Québec (Mauricie, Saguenay–Lac-Saint-Jean); projet de loi C-224 du Bloc (Ste-Marie) abandonné
// le 14 avril 2021 (155-179). Statut = rejetée. Chiffres d'économies écartés faute de source
// vérifiée (287 M$/425 M$ non confirmés; ordres de grandeur au Hansard non attribués).
export const impotUnique: ProvincialRequest = {
  id: 'declaration-revenus-unique',
  slug: 'declaration-revenus-unique',
  province: 'QC',
  title: "Déclaration de revenus unique administrée par le Québec",
  date: '2018-05-15',
  domains: ['fiscalite'],
  status: 'rejetee',
  ask: "Le Québec demande la mise en place d'un rapport d'impôt unique, transmis à Revenu Québec, pour tous les contribuables québécois — une seule déclaration remplaçant les déclarations fédérale et provinciale distinctes —, tout en préservant l'autonomie fiscale du Québec. Demande portée par une motion unanime de l'Assemblée nationale (15 mai 2018) puis reprise à Ottawa, notamment par le projet de loi C-224 du Bloc québécois.",
  whyProvince:
    "Le Québec est la seule province à administrer son propre impôt sur le revenu (Revenu Québec); ses résidents sont les seuls au Canada à devoir produire deux déclarations. Un guichet unique réduirait le fardeau administratif des contribuables et des entreprises et renforcerait l'autonomie fiscale de la province.",
  federalReason:
    "Aux Communes (5 févr. 2019), la ministre du Revenu national Diane Lebouthillier a opposé la protection de plus de 5 500 emplois de l'Agence du revenu du Canada situés au Québec (Mauricie, Saguenay–Lac-Saint-Jean); le gouvernement fédéral n'a pas donné suite. Le projet de loi C-224, qui aurait autorisé une entente de perception par le Québec, a été abandonné le 14 avril 2021 (rejet en étape du rapport, 155 pour, 179 contre).",
  provincePositionSourceIds: ['impot-unique-anq-2018', 'impot-unique-c224'],
  federalPositionSourceIds: ['impot-unique-hansard-2019', 'impot-unique-c224'],
  sourceIds: ['impot-unique-anq-2018', 'impot-unique-hansard-2019', 'impot-unique-c224'],
  lastVerified: '2026-09-24',
};

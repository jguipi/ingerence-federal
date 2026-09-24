import type { ProvincialRequest } from '../types';

// Demande du Québec (loi 96, 2021-2022) : faire reconnaître, via l'art. 45 de la Loi
// constitutionnelle de 1982, son droit d'inscrire dans sa constitution que les Québécois forment
// une nation et que le français est la seule langue officielle et commune du Québec.
// Volet RECONNAISSANCE : approuvé — la Chambre des communes a adopté la motion à 281 voix contre 2
// (16 juin 2021, vote no 146, PRIMAIRE) et Trudeau a jugé légitime l'amendement unilatéral (mai 2021).
// Volet CLAUSE DÉROGATOIRE (usage préventif de l'art. 33 pour soustraire la loi au contrôle
// judiciaire) : critiqué par le ministre fédéral de la Justice (Lametti, mai 2022). Positions
// fédérales des ministres = sources SECONDAIRES (reportage de points de presse), à recouper.
export const loi96Amendement: ProvincialRequest = {
  id: 'loi96-amendement-nation',
  slug: 'loi96-amendement-nation',
  province: 'QC',
  title: "Reconnaissance de la nation québécoise et du français dans la constitution du Québec",
  date: '2021-05-13',
  domains: ['langue', 'culture'],
  status: 'partielle',
  ask: "Par la loi 96, le Québec a inscrit dans sa constitution que les Québécois forment une nation et que le français est la seule langue officielle et la langue commune du Québec, en invoquant l'art. 45 de la Loi constitutionnelle de 1982 (modification par la province de sa propre constitution) et l'art. 33 (clause dérogatoire) pour soustraire la loi au contrôle judiciaire fondé sur la Charte.",
  whyProvince:
    "Le Québec entendait consacrer le caractère national et le statut du français comme relevant de sa compétence, et se prémunir contre les contestations judiciaires en recourant préventivement à la clause dérogatoire.",
  federalReason:
    "Ottawa a accepté le volet reconnaissance — la Chambre des communes a adopté la motion à 281 voix contre 2 (16 juin 2021) et le premier ministre a jugé légitime qu'une province modifie sa section de la Constitution — mais le ministre fédéral de la Justice a critiqué l'usage préventif de la clause dérogatoire, la disant conçue pour être « le dernier mot » et non pour écarter d'avance le contrôle judiciaire.",
  provincePositionSourceIds: ['comite-consultatif-qc'],
  federalPositionSourceIds: ['commons-vote-146', 'loi96-trudeau-globalnews', 'loi96-lametti-radiocanada'],
  sourceIds: ['commons-vote-146', 'c13-langues-officielles', 'loi96-trudeau-globalnews', 'loi96-lametti-radiocanada', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

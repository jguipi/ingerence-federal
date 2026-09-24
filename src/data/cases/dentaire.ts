import type { Case } from '../types';

// Régime canadien de soins dentaires (RCSD). Vérifié via canada.ca (2026-09-24) :
// budget 13 G$ sur 5 ans, 4,4 G$/an par la suite. Lancé le 11 déc. 2023, premières
// prestations en mai 2024. Programme fédéral national administré par Ottawa — ce n'est
// PAS un transfert au Québec, donc aucun montant « versé » au QC → paid null.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const dentaire: Case = {
  id: 'dentaire',
  slug: 'dentaire',
  title: 'Régime canadien de soins dentaires',
  province: 'QC',
  domains: ['sante'],
  dateStart: '2023',
  dateEnd: '2026',
  status: 'documente',
  interventionType: 'programme',
  summary:
    'Le fédéral a créé un régime national financé et administré par Ottawa pour les résidents admissibles sans assurance dentaire privée.',
  description:
    "Le Régime canadien de soins dentaires (RCSD), lancé le 11 décembre 2023, offre une couverture aux résidents admissibles sans assurance dentaire privée. Les premières prestations ont été versées en mai 2024. Le régime est financé et administré directement par le gouvernement fédéral; il ne transite pas par un transfert au Québec.",
  federalAction:
    "Création et administration directes d'un régime national de soins dentaires financé par Ottawa, dans un domaine relevant de l'organisation des services de santé.",
  provincialCompetence:
    'Organisation et gestion des services de santé, incluant les programmes de couverture (ex. RAMQ) — compétence provinciale.',
  federalCompetence:
    'Pouvoir fédéral de dépenser au bénéfice de particuliers.',
  argumentsFor: [
    "Le Comité consultatif sur les enjeux constitutionnels du Québec cite les programmes fédéraux dans des domaines de compétence provinciale comme un enjeu de l'usage du pouvoir de dépenser.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        'Le régime vise les résidents sans assurance dentaire privée et ne remplace pas les programmes provinciaux existants; une coordination est prévue avec les régimes du Québec.',
      sourceIds: ['rcsd-annonce', 'rcsd-qc-coordination'],
    },
  ],
  provincialPosition: [],
  legalStatus:
    'Programme fédéral en vigueur (premières prestations en mai 2024). Aucun litige judiciaire.',
  events: [
    { date: '2023-12-11', title: 'Lancement du Régime canadien de soins dentaires', sourceIds: ['rcsd-annonce'] },
    { date: '2024-05', title: 'Premières prestations versées', sourceIds: ['rcsd-annonce'] },
  ],
  funding: [
    {
      id: 'rcsd-federal',
      program: 'Régime canadien de soins dentaires',
      province: 'QC',
      federalDepartment: 'Santé Canada',
      announcementDate: '2023-12-11',
      announced: cad(13_000_000_000, ['rcsd-annonce'], 'Budget fédéral de 13 G$ sur 5 ans, puis 4,4 G$ par année par la suite'),
      committed: cad(13_000_000_000, ['rcsd-annonce'], 'Sur 5 ans'),
      guaranteed: cad(null, ['rcsd-annonce']),
      conditional: cad(null, ['rcsd-annonce']),
      paid: cad(null, ['rcsd-annonce'], 'Programme fédéral direct : non versé au Québec sous forme de transfert'),
      remaining: cad(null, ['rcsd-annonce']),
      conditional_flag: false,
      conditionIds: [],
      sourceIds: ['rcsd-annonce', 'rcsd-qc-coordination'],
    },
  ],
  conditions: [],
  sourceIds: ['rcsd-annonce', 'rcsd-qc-coordination', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

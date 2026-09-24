import type { Case } from '../types';

// Entente fédérale sur les services de garde. Le Canada et le Québec ont conclu une
// entente asymétrique respectant le réseau québécois préexistant. Le montant fédéral
// pluriannuel n'est pas détaillé dans les sources consultées (2026-09-24) → announced/
// committed null + note (jamais estimé).
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const garderies: Case = {
  id: 'garderies',
  slug: 'garderies',
  title: 'Entente fédérale sur les services de garde',
  province: 'QC',
  domains: ['garde-enfants', 'services-sociaux'],
  dateStart: '2021',
  dateEnd: '2026',
  status: 'entente-federale-provinciale',
  interventionType: 'entente',
  summary:
    "Le Canada et le Québec ont conclu une entente asymétrique de financement des services de garde, reconnaissant le réseau québécois préexistant.",
  description:
    "Dans le cadre du système pancanadien d'apprentissage et de garde des jeunes enfants, le Canada et le Québec ont signé une entente asymétrique. Elle prévoit un financement fédéral pluriannuel tout en respectant le modèle québécois de services de garde, en place depuis longtemps. Le montant exact n'est pas détaillé dans les sources consultées.",
  federalAction:
    "Financement fédéral des services de garde dans le cadre d'un système pancanadien, versé au Québec par une entente asymétrique.",
  provincialCompetence:
    "Services de garde à l'enfance et services sociaux — compétence provinciale; le Québec dispose de son propre réseau.",
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "Le Comité consultatif sur les enjeux constitutionnels du Québec cite l'usage du pouvoir fédéral de dépenser dans un champ provincial où le Québec avait déjà son propre réseau.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "L'entente est asymétrique et respecte le modèle québécois de services de garde déjà en place.",
      sourceIds: ['accords-fpt'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "L'entente asymétrique reconnaît le réseau québécois et laisse au Québec la maîtrise de ses services de garde.",
      sourceIds: ['accords-fpt', 'comite-consultatif-qc'],
    },
  ],
  legalStatus:
    'Entente asymétrique en vigueur. Aucun litige judiciaire.',
  events: [
    { date: '2021', title: 'Entente asymétrique Canada–Québec sur les services de garde', sourceIds: ['accords-fpt'] },
  ],
  funding: [
    {
      id: 'garderies-qc',
      program: 'Entente asymétrique Canada–Québec sur les services de garde',
      province: 'QC',
      federalDepartment: 'Emploi et Développement social Canada',
      announced: cad(null, ['accords-fpt'], 'Entente asymétrique, montant non détaillé dans les sources consultées'),
      committed: cad(null, ['accords-fpt'], 'Entente asymétrique, montant non détaillé dans les sources consultées'),
      guaranteed: cad(null, ['accords-fpt']),
      conditional: cad(null, ['accords-fpt']),
      paid: cad(null, ['accords-fpt'], 'Montant non détaillé dans les sources consultées'),
      remaining: cad(null, ['accords-fpt']),
      conditional_flag: false,
      conditionIds: [],
      sourceIds: ['accords-fpt'],
    },
  ],
  conditions: [],
  sourceIds: ['accords-fpt', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

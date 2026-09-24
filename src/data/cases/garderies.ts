import type { Case } from '../types';

// Entente fédérale sur les services de garde. Le Canada et le Québec ont conclu une
// entente asymétrique respectant le réseau québécois préexistant. Montants vérifiés
// (quebec.ca, 2026-09-24) : entente initiale du 5 août 2021 ≈ 6 G$ sur 5 ans;
// renouvellement du 6 mars 2025 = 9,83 G$ (« près de 10 G$ ») sur 5 ans, jusqu'en
// 2030-31, « versé sans condition ». Répartition annuelle/versé réel non détaillée dans
// les communiqués → paid null (jamais estimé).
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const garderies: Case = {
  id: 'garderies',
  slug: 'garderies',
  title: 'Entente fédérale sur les services de garde',
  province: 'QC',
  domains: ['garde-enfants', 'services-sociaux'],
  dateStart: '2021',
  dateEnd: '2031',
  status: 'entente-federale-provinciale',
  interventionType: 'entente',
  autonomyImpact: {
    level: 'preservee',
    rationale:
      "L'entente est asymétrique et reconnaît le réseau québécois de services de garde préexistant; le Québec conserve son modèle plutôt que d'intégrer un cadre pancanadien uniforme.",
    assertedBy: 'Nature asymétrique de l\'entente et Comité consultatif du Québec',
    sourceIds: ['accords-fpt', 'comite-consultatif-qc'],
  },
  summary:
    "Le Canada et le Québec ont conclu une entente asymétrique de financement des services de garde (≈ 6 G$ sur 5 ans en 2021), renouvelée en 2025 (9,83 G$ jusqu'en 2030-31), reconnaissant le réseau québécois préexistant.",
  description:
    "Dans le cadre du système pancanadien d'apprentissage et de garde des jeunes enfants, le Canada et le Québec ont signé le 5 août 2021 une entente asymétrique d'environ 6 G$ sur 5 ans. Elle a été renouvelée le 6 mars 2025 pour 9,83 G$ (« près de 10 G$ ») sur cinq ans, prolongeant le financement jusqu'en 2030-31. Le renouvellement est décrit comme « versé sans condition » et reconnaît la compétence exclusive du Québec et son modèle de services de garde en place depuis longtemps.",
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
    { date: '2021-08-05', title: 'Entente asymétrique Canada–Québec sur les services de garde', description: '≈ 6 G$ sur 5 ans, respectant le réseau québécois.', sourceIds: ['garderies-entente-2021'] },
    { date: '2025-03-06', title: 'Renouvellement de l’entente', description: '9,83 G$ sur 5 ans jusqu’en 2030-31, versé sans condition.', sourceIds: ['garderies-renouv-2025'] },
  ],
  funding: [
    {
      id: 'garderies-qc-2021',
      program: 'Entente asymétrique Canada–Québec sur les services de garde (2021)',
      province: 'QC',
      federalDepartment: 'Emploi et Développement social Canada',
      announcementDate: '2021-08-05',
      agreementDate: '2021-08-05',
      period: '2021-2022 à 2025-2026',
      announced: cad(6_000_000_000, ['garderies-entente-2021'], '≈ 6 G$ sur 5 ans (entente asymétrique)'),
      committed: cad(6_000_000_000, ['garderies-entente-2021']),
      guaranteed: cad(null, ['garderies-entente-2021']),
      conditional: cad(null, ['garderies-entente-2021'], 'Entente asymétrique; pas de condition pancanadienne imposée'),
      paid: cad(null, ['garderies-entente-2021', 'comptes-publics-edsc-2025'], 'Part QC non ventilée. Total P/T « Apprentissage et garde des jeunes enfants » versé (Comptes publics 2025, national, toutes provinces) : 7 208 M$ en 2024-25, 6 179 M$ en 2023-24.'),
      remaining: cad(null, ['garderies-entente-2021']),
      conditional_flag: false,
      conditionIds: [],
      sourceIds: ['garderies-entente-2021', 'comptes-publics-edsc-2025'],
    },
    {
      id: 'garderies-qc-2025',
      program: 'Renouvellement de l’entente sur les services de garde (2025)',
      province: 'QC',
      federalDepartment: 'Emploi et Développement social Canada',
      announcementDate: '2025-03-06',
      agreementDate: '2025-03-06',
      period: '2026-2027 à 2030-2031',
      announced: cad(9_830_000_000, ['garderies-renouv-2025'], '« Près de 10 G$ » sur 5 ans'),
      committed: cad(9_830_000_000, ['garderies-renouv-2025']),
      guaranteed: cad(9_830_000_000, ['garderies-renouv-2025'], 'Décrit comme versé sans condition'),
      conditional: cad(null, ['garderies-renouv-2025'], 'Versé sans condition'),
      paid: cad(null, ['garderies-renouv-2025'], 'Entente débutant en 2026-27; versé non encore publié'),
      remaining: cad(null, ['garderies-renouv-2025']),
      conditional_flag: false,
      conditionIds: [],
      sourceIds: ['garderies-renouv-2025'],
    },
  ],
  conditions: [],
  sourceIds: ['garderies-entente-2021', 'garderies-renouv-2025', 'accords-fpt', 'comite-consultatif-qc', 'comptes-publics-edsc-2025'],
  lastVerified: '2026-09-24',
};

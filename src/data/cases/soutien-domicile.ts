import type { Case } from '../types';

// Initiative fédérale « Bien vieillir chez soi ». Vérifié via canada.ca (2026-09-24) :
// programme fédéral lancé en 2022; volet projets pilotes de soutien à domicile = 71
// projets pour 39,6 M$ (300 k$–800 k$/projet), fin des projets le 31 mars 2025. Des
// projets se déroulent au Québec. Montants effectivement versés aux organismes québécois
// non détaillés → paid null (jamais estimé).
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const soutienDomicile: Case = {
  id: 'soutien-domicile',
  slug: 'soutien-domicile',
  title: 'Initiative fédérale « Bien vieillir chez soi »',
  province: 'QC',
  domains: ['services-sociaux', 'sante'],
  dateStart: '2022',
  dateEnd: '2025',
  status: 'documente',
  interventionType: 'programme',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      'Le fédéral finance directement des organismes offrant des services qui touchent les réseaux provinciaux de santé et de services sociaux, orientant l\'offre sans passer par la province.',
    assertedBy: 'Comité consultatif du Québec',
    sourceIds: ['comite-consultatif-qc'],
  },
  summary:
    'Ottawa finance directement des organismes pour aider les aînés à rester à domicile.',
  description:
    "L'initiative fédérale « Bien vieillir chez soi », lancée en 2022, comporte un volet de projets pilotes de soutien à domicile : 71 projets pour 39,6 M$ (subventions de 300 k$ à 800 k$ par projet), dont la fin était prévue le 31 mars 2025. Des projets se déroulent au Québec. Ottawa verse ces subventions directement à des organismes.",
  federalAction:
    "Subventions fédérales versées directement à des organismes offrant des services de soutien à domicile aux aînés.",
  provincialCompetence:
    'Services sociaux et de santé, incluant le soutien à domicile — compétence provinciale.',
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "Le Comité consultatif sur les enjeux constitutionnels du Québec relève les subventions fédérales directes dans des services qui touchent les réseaux provinciaux.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Programme fédéral de subventions à des organismes pour aider les aînés à demeurer chez eux.",
      sourceIds: ['bvcs-annonce'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Commissaire à la santé et au bien-être (Québec)',
      stance:
        "Analyse québécoise du soutien à domicile soulignant la nécessité de transformer les soins et services.",
      sourceIds: ['csbe-soutien-domicile'],
    },
  ],
  legalStatus:
    'Programme fédéral de subventions; volet projets pilotes se terminant le 31 mars 2025. Aucun litige judiciaire.',
  events: [
    { date: '2022', title: 'Lancement de l’initiative « Bien vieillir chez soi »', sourceIds: ['bvcs-annonce'] },
    { date: '2025-03-31', title: 'Fin prévue du volet projets pilotes de soutien à domicile', sourceIds: ['bvcs-annonce'] },
  ],
  funding: [
    {
      id: 'bvcs-projets-pilotes',
      program: 'Bien vieillir chez soi — volet projets pilotes de soutien à domicile',
      province: 'QC',
      federalDepartment: 'Emploi et Développement social Canada',
      period: 'jusqu’au 2025-03-31',
      announced: cad(39_600_000, ['bvcs-annonce'], 'Volet projets pilotes : 71 projets, 300 k$–800 k$ par projet, fin le 31 mars 2025 (montant national, non exclusif au Québec)'),
      committed: cad(39_600_000, ['bvcs-annonce'], 'Volet projets pilotes, 71 projets'),
      guaranteed: cad(null, ['bvcs-annonce']),
      conditional: cad(null, ['bvcs-annonce']),
      paid: cad(null, ['bvcs-annonce'], 'Montants versés aux organismes québécois non détaillés dans les sources consultées'),
      remaining: cad(null, ['bvcs-annonce']),
      conditional_flag: false,
      conditionIds: [],
      sourceIds: ['bvcs-annonce', 'csbe-soutien-domicile'],
    },
  ],
  conditions: [],
  sourceIds: ['bvcs-annonce', 'csbe-soutien-domicile', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

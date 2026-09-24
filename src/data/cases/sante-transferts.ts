import type { Case } from '../types';

// Montants vérifiés via l'Accord Canada–Québec (canada.ca, consulté 2026-09-24):
// 496 M$/an priorités québécoises + 132,8 M$/an santé mentale, entente 2023-04-01 à
// 2027-03-31, ~6,7 G$ sur 10 ans. Montants effectivement versés non publiés sur la page
// consultée → null + note (jamais estimé).
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const santeTransferts: Case = {
  id: 'sante-transferts',
  slug: 'sante-transferts',
  title: 'Financement fédéral de la santé et conditions liées aux transferts',
  province: 'QC',
  domains: ['sante'],
  dateStart: '2023',
  dateEnd: '2027',
  status: 'entente-federale-provinciale',
  interventionType: 'financement-conditionnel',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "L'accord assortit le financement de priorités pancanadiennes et d'obligations de reddition de comptes, mais reconnaît la maîtrise d'œuvre du Québec sur la planification et la gestion des services.",
    assertedBy: "Lecture des conditions de l'accord et Comité consultatif du Québec",
    sourceIds: ['accord-sante-qc', 'comite-consultatif-qc'],
  },
  summary:
    'Ottawa a proposé un financement additionnel en santé lié à des priorités pancanadiennes. Le Québec a conclu une entente qui reconnaît sa compétence et lui permet de déterminer ses priorités.',
  description:
    'Dans le cadre du plan fédéral de 2023 (près de 200 G$ sur 10 ans pour l’ensemble des provinces et territoires), le Canada et le Québec ont signé un accord bilatéral. L’accord dirige le financement vers des priorités partagées tout en laissant au Québec la maîtrise d’œuvre de la planification et de la gestion de ses services.',
  federalAction:
    'Offre d’un financement additionnel en santé conditionné à l’affectation des fonds à des priorités pancanadiennes et à des obligations de reddition de comptes.',
  provincialCompetence:
    'Organisation et gestion des services de santé (compétence provinciale reconnue).',
  federalCompetence:
    'Pouvoir fédéral de dépenser; certains volets de santé publique.',
  argumentsFor: [
    'Le Comité consultatif sur les enjeux constitutionnels du Québec cite l’usage du pouvoir fédéral de dépenser dans des champs provinciaux comme un enjeu de compétence.',
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        'Le financement vise des priorités partagées convenues avec les provinces et n’enlève pas la gestion des services aux provinces.',
      sourceIds: ['accord-sante-qc'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        'L’accord reconnaît la compétence du Québec en santé et sa maîtrise d’œuvre de la planification, de l’organisation et de la gestion des services.',
      sourceIds: ['accord-sante-qc', 'comite-consultatif-qc'],
    },
  ],
  legalStatus:
    'Entente bilatérale en vigueur (2023-2027, renouvellement possible jusqu’en 2032-2033). Pas de litige judiciaire.',
  events: [
    { date: '2023-02', title: 'Plan fédéral en santé annoncé', description: 'Près de 200 G$ sur 10 ans pour les provinces et territoires.', sourceIds: ['accord-sante-qc'] },
    { date: '2023', title: 'Signature de l’accord bilatéral Canada–Québec', sourceIds: ['accord-sante-qc'] },
  ],
  funding: [
    {
      id: 'sante-priorites-qc',
      program: 'Accord bilatéral Canada–Québec — priorités partagées en santé',
      province: 'QC',
      federalDepartment: 'Santé Canada',
      announcementDate: '2023-02',
      agreementDate: '2023',
      period: '2023-2024 à 2026-2027',
      announced: cad(496_000_000, ['accord-sante-qc'], '496 M$ par année estimés pour les priorités québécoises'),
      committed: cad(496_000_000, ['accord-sante-qc'], 'Montant annuel prévu à l’accord'),
      guaranteed: cad(null, ['accord-sante-qc'], 'Répartition garanti/conditionnel non détaillée dans la source'),
      conditional: cad(null, ['accord-sante-qc']),
      paid: cad(null, ['accord-sante-qc'], 'Versements semestriels; montants effectivement versés non publiés sur la page consultée'),
      remaining: cad(null, ['accord-sante-qc']),
      conditional_flag: true,
      conditionIds: ['sante-priorites', 'sante-reddition'],
      sourceIds: ['accord-sante-qc'],
    },
    {
      id: 'sante-mentale-qc',
      program: 'Accord bilatéral Canada–Québec — santé mentale et dépendances',
      province: 'QC',
      federalDepartment: 'Santé Canada',
      agreementDate: '2023',
      period: '2023-2024 à 2026-2027',
      announced: cad(132_800_000, ['accord-sante-qc'], '132,8 M$ par année'),
      committed: cad(132_800_000, ['accord-sante-qc']),
      guaranteed: cad(null, ['accord-sante-qc']),
      conditional: cad(null, ['accord-sante-qc']),
      paid: cad(null, ['accord-sante-qc'], 'Non publié sur la page consultée'),
      remaining: cad(null, ['accord-sante-qc']),
      conditional_flag: true,
      conditionIds: ['sante-priorites', 'sante-reddition'],
      sourceIds: ['accord-sante-qc'],
    },
  ],
  conditions: [
    {
      id: 'sante-priorites',
      label: 'Affectation aux priorités partagées',
      detail:
        'Les fonds doivent être dirigés vers quatre priorités pancanadiennes (accès aux services de santé familiale, personnel de santé, santé mentale et dépendances, modernisation numérique).',
      mandatory: true,
      acceptedByProvince: true,
      contestedByProvince: null,
      consequenceIfUnmet: 'Le financement est lié au respect de ces priorités.',
      sourceIds: ['accord-sante-qc'],
    },
    {
      id: 'sante-reddition',
      label: 'Reddition de comptes et indicateurs comparables',
      detail:
        'Le Québec s’engage à rendre compte publiquement de l’usage des fonds et à collaborer avec l’Institut canadien d’information sur la santé sur des indicateurs comparables.',
      mandatory: true,
      acceptedByProvince: true,
      contestedByProvince: null,
      sourceIds: ['accord-sante-qc'],
    },
  ],
  sourceIds: ['accord-sante-qc', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

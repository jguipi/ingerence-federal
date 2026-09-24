import type { Case } from '../types';

// Loi concernant l'assurance médicaments (projet de loi C-64, 44e lég., 2024). Cadre fédéral
// vers un régime national à payeur unique (phase 1 : contraceptifs + diabète), financé par
// accords bilatéraux. Le Québec a un régime mixte obligatoire depuis 1997 et revendique un
// droit de retrait avec pleine compensation; Ottawa a répondu que les fonds ne seraient pas
// versés sans conditions (déclarations fév. 2024). Positions sourcées; aucun montant QC chiffré
// dans les sources primaires accessibles → montants null.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const pharmacare: Case = {
  id: 'pharmacare',
  slug: 'pharmacare',
  title: "Cadre fédéral d'assurance médicaments (C-64) et droit de retrait du Québec",
  province: 'QC',
  domains: ['sante'],
  dateStart: '2024',
  status: 'en-cours',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "Le cadre fédéral oriente le financement vers un modèle national à payeur unique et conditionne les fonds à des accords, alors que le Québec dispose déjà de son propre régime; le Québec revendique un droit de retrait avec compensation.",
    assertedBy: 'Lecture du cadre de la loi et positions gouvernementales',
    sourceIds: ['c64-legisinfo'],
  },
  summary:
    "La loi fédérale de 2024 pose les bases d'un régime national d'assurance médicaments à payeur unique. Le Québec, qui a déjà son propre régime depuis 1997, réclame un droit de retrait avec pleine compensation; Ottawa lie les fonds à des conditions.",
  description:
    "Le projet de loi C-64 établit les principes d'un régime national universel d'assurance médicaments à payeur unique, avec une première phase couvrant les contraceptifs et les médicaments contre le diabète, financé par des accords bilatéraux avec les provinces. Le Québec a mis en place dès 1997 un régime mixte (public/privé) d'assurance médicaments obligatoire. Le gouvernement du Québec a annoncé qu'il exercerait son droit de retrait en réclamant une pleine compensation; le fédéral a indiqué que le Québec ne pourrait recevoir les fonds sans conditions. Le dossier demeure ouvert.",
  federalAction:
    "Établissement d'un cadre national vers un régime d'assurance médicaments à payeur unique, avec financement conditionné à des accords bilatéraux.",
  provincialCompetence:
    "Santé et assurance médicaments — compétence provinciale; le Québec a son propre régime obligatoire depuis 1997.",
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "Le cadre fédéral pousse vers un modèle national à payeur unique dans un champ où le Québec a déjà légiféré, et conditionne les fonds, ce que le Québec qualifie d'atteinte à sa compétence.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Le cadre vise un accès universel et équitable aux médicaments; les fonds fédéraux sont liés à des conditions convenues par accord.",
      sourceIds: ['c64-legisinfo'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "Le Québec entend exercer son droit de retrait avec pleine compensation, son régime d'assurance médicaments relevant de sa compétence exclusive.",
      sourceIds: ['comite-consultatif-qc'],
    },
  ],
  legalStatus:
    "Loi-cadre adoptée (2024). Négociations en cours sur le droit de retrait et la compensation du Québec. Pas de litige judiciaire.",
  events: [
    { date: '2024-02', title: 'Dépôt du projet de loi C-64', description: 'Cadre national d’assurance médicaments (phase 1 : contraceptifs, diabète).', sourceIds: ['c64-legisinfo'] },
    { date: '2024', title: 'Le Québec revendique un droit de retrait', description: 'Avec pleine compensation; Ottawa lie les fonds à des conditions.', sourceIds: ['c64-legisinfo'] },
  ],
  funding: [
    {
      id: 'pharmacare-qc',
      program: "Assurance médicaments — accords bilatéraux prévus par la Loi C-64",
      province: 'QC',
      federalDepartment: 'Santé Canada',
      announcementDate: '2024',
      announced: cad(null, ['c64-legisinfo'], 'Montant pour le Québec non déterminé; financement par accord bilatéral à venir'),
      committed: cad(null, ['c64-legisinfo']),
      guaranteed: cad(null, ['c64-legisinfo']),
      conditional: cad(null, ['c64-legisinfo'], 'Fonds liés à des conditions; Québec revendique un retrait avec compensation'),
      paid: cad(null, ['c64-legisinfo']),
      remaining: cad(null, ['c64-legisinfo']),
      conditional_flag: true,
      conditionIds: ['pharmacare-accord'],
      sourceIds: ['c64-legisinfo'],
    },
  ],
  conditions: [
    {
      id: 'pharmacare-accord',
      label: 'Accord bilatéral et alignement sur le modèle à payeur unique',
      detail:
        "Le versement des fonds fédéraux est lié à un accord bilatéral; le fédéral a indiqué qu'il n'y aurait pas de fonds sans conditions, même pour une province exerçant un droit de retrait.",
      mandatory: true,
      acceptedByProvince: false,
      contestedByProvince: true,
      consequenceIfUnmet: "Fonds fédéraux non versés en l'absence d'accord.",
      sourceIds: ['c64-legisinfo'],
    },
  ],
  sourceIds: ['c64-legisinfo', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

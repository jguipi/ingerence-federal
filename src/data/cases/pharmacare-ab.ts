import type { Case } from '../types';

// Loi concernant l'assurance medicaments (C-64, 2024). L'Alberta, comme le Quebec, s'oppose
// au cadre federal, mais sans regime provincial d'assurance medicaments preexistant. La
// plupart des Albertains beneficient d'une assurance privee; l'Alberta defend la competence
// provinciale en sante et s'oppose au modele national a payeur unique. Aucun accord bilateral
// Alberta-Canada sur le pharmacare signe a la date de verification (2026-09-24).
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const pharmacareAb: Case = {
  id: 'pharmacare-ab',
  slug: 'pharmacare-ab',
  title: "Cadre fédéral d'assurance médicaments (C-64) — opposition de l'Alberta",
  province: 'AB',
  domains: ['sante'],
  dateStart: '2024',
  status: 'en-cours',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "Le cadre fédéral conditionne les fonds à l'adoption d'un modèle national à payeur unique dans un champ de compétence provinciale; l'Alberta s'y oppose au nom de la compétence provinciale en santé, sans disposer, contrairement au Québec, d'un régime provincial préexistant à défendre.",
    assertedBy: "Lecture du cadre de la loi et positions gouvernementales albertaines",
    sourceIds: ['c64-legisinfo'],
  },
  summary:
    "La loi fédérale de 2024 pose les bases d'un régime national d'assurance médicaments à payeur unique. L'Alberta, dont la population dépend principalement de l'assurance privée, s'oppose au modèle fédéral au nom de la compétence provinciale, sans avoir signé d'accord bilatéral. Contrairement au Québec, l'Alberta n'a pas de régime provincial préexistant à invoquer comme justification d'un droit de retrait.",
  description:
    "Le projet de loi C-64 établit les principes d'un régime national universel d'assurance médicaments à payeur unique, avec une première phase couvrant les contraceptifs et les médicaments contre le diabète, financé par des accords bilatéraux avec les provinces. En Alberta, la couverture médicaments est assurée principalement par l'assurance privée (employeurs) et des programmes ciblés provinciaux (AHCIP pour certains groupes). Le gouvernement de l'Alberta a exprimé son opposition au cadre fédéral, contestant la compétence d'Ottawa à orienter la politique de santé provinciale par le biais du pouvoir de dépenser.\n\nContrairement au Québec, qui peut invoquer son régime mixte obligatoire de 1997 pour réclamer un droit de retrait avec compensation, l'Alberta ne peut s'appuyer sur un régime équivalent préexistant. La province s'oppose donc sur le fond — la compétence provinciale en santé — sans la même assise juridique que le Québec. Aucun accord bilatéral sur le pharmacare n'avait été signé par l'Alberta à la date de vérification.",
  federalAction:
    "Établissement d'un cadre national vers un régime d'assurance médicaments à payeur unique, avec financement conditionné à des accords bilatéraux.",
  provincialCompetence:
    "Santé — compétence provinciale; politique du médicament et assurance médicaments relèvent de l'Alberta.",
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "Le cadre fédéral oriente les provinces vers un modèle à payeur unique dans un champ de compétence provinciale, en conditionnant les fonds à un accord; l'Alberta conteste cette intrusion sans disposer du levier d'un régime provincial préexistant que possède le Québec.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Le cadre vise un accès universel et équitable aux médicaments; les fonds fédéraux sont liés à des conditions convenues par accord bilatéral.",
      sourceIds: ['c64-legisinfo'],
    },
  ],
  provincialPosition: [
    {
      actor: "Gouvernement de l'Alberta (UCP)",
      stance:
        "La santé relève de la compétence provinciale; l'Alberta s'oppose à ce qu'Ottawa conditionne les fonds à l'adoption d'un modèle national à payeur unique, imposant ainsi un cadre dans un champ de compétence provinciale.",
      sourceIds: ['c64-legisinfo'],
    },
  ],
  legalStatus:
    "Loi-cadre adoptée (2024). Négociations en cours. Aucun accord bilatéral Alberta–Canada sur le pharmacare signé à 2026-09-24. Pas de litige judiciaire.",
  events: [
    { date: '2024-02', title: "Dépôt du projet de loi C-64", description: "Cadre national d'assurance médicaments (phase 1 : contraceptifs, diabète).", sourceIds: ['c64-legisinfo'] },
    { date: '2024', title: "Opposition de l'Alberta", description: "L'Alberta refuse de signer un accord bilatéral et conteste le cadre fédéral au nom de la compétence provinciale.", sourceIds: ['c64-legisinfo'] },
  ],
  funding: [
    {
      id: 'pharmacare-ab',
      program: "Assurance médicaments — accords bilatéraux prévus par la Loi C-64 (Alberta)",
      province: 'AB',
      federalDepartment: 'Santé Canada',
      announcementDate: '2024',
      announced: cad(null, ['c64-legisinfo'], "Montant pour l'Alberta non déterminé; financement par accord bilatéral non signé"),
      committed: cad(null, ['c64-legisinfo']),
      guaranteed: cad(null, ['c64-legisinfo']),
      conditional: cad(null, ['c64-legisinfo'], "Fonds liés à un accord non signé"),
      paid: cad(null, ['c64-legisinfo']),
      remaining: cad(null, ['c64-legisinfo']),
      conditional_flag: true,
      conditionIds: ['pharmacare-ab-accord'],
      sourceIds: ['c64-legisinfo'],
    },
  ],
  conditions: [
    {
      id: 'pharmacare-ab-accord',
      label: "Accord bilatéral et alignement sur le modèle à payeur unique",
      detail:
        "Le versement des fonds fédéraux est lié à un accord bilatéral; l'Alberta refuse de signer au motif que le cadre fédéral oriente la politique provinciale de santé dans un champ de compétence provinciale.",
      mandatory: true,
      acceptedByProvince: false,
      contestedByProvince: true,
      consequenceIfUnmet: "Fonds fédéraux non versés en l'absence d'accord.",
      sourceIds: ['c64-legisinfo'],
    },
  ],
  sourceIds: ['c64-legisinfo'],
  lastVerified: '2026-09-24',
};

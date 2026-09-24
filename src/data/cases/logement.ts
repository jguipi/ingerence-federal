import type { Case } from '../types';

// Fonds pour accélérer la construction de logements (FACL). Vérifié via quebec.ca
// (2026-09-24) : entente Canada–Québec du 9 nov. 2023 (Longueuil), contribution fédérale
// au Québec de 900 M$ (fonds total ~2 G$ dont ~la moitié pour le Québec). Montants
// effectivement versés non publiés sur les pages consultées → paid null (jamais estimé).
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const logement: Case = {
  id: 'logement',
  slug: 'logement',
  title: 'Fonds pour accélérer la construction de logements',
  province: 'QC',
  municipalities: ['Longueuil'],
  domains: ['logement'],
  dateStart: '2023',
  dateEnd: '2027',
  status: 'entente-federale-provinciale',
  interventionType: 'entente',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "La contribution fédérale est liée à des cibles et conditions de construction de logements qui orientent l'action provinciale et municipale sans se substituer à la compétence provinciale.",
    assertedBy: "Lecture des conditions de l'entente",
    sourceIds: ['facl-entente-qc'],
  },
  summary:
    "Le Canada et le Québec ont conclu une entente prévoyant une contribution fédérale de 900 M$ pour accélérer la construction de logements.",
  description:
    "Annoncée le 9 novembre 2023 à Longueuil, l'entente Canada–Québec sur le Fonds pour accélérer la construction de logements prévoit une contribution fédérale de 900 M$ au Québec. Le fonds total avoisine 2 G$, dont environ la moitié destinée au Québec. Le débat porte sur les conditions rattachées au financement fédéral et sur le rôle du fédéral auprès des municipalités.",
  federalAction:
    "Contribution financière fédérale visant à accélérer la construction de logements, assortie de cibles, dans un domaine touchant l'aménagement et les municipalités.",
  provincialCompetence:
    "Habitation, aménagement du territoire et relations avec les municipalités — compétence provinciale.",
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "Le Comité consultatif sur les enjeux constitutionnels du Québec relève le débat sur les conditions fédérales et le rôle du fédéral auprès des municipalités, de compétence provinciale.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        'La contribution vise à accélérer la construction de logements en appui aux efforts du Québec et des municipalités.',
      sourceIds: ['facl-entente-qc'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "L'entente a été conclue avec le Québec, qui conserve la maîtrise de l'habitation et des relations avec ses municipalités.",
      sourceIds: ['facl-entente-qc'],
    },
  ],
  legalStatus:
    'Entente bilatérale en vigueur (annoncée le 9 novembre 2023). Aucun litige judiciaire.',
  events: [
    { date: '2023-11-09', title: 'Annonce de l’entente Canada–Québec (Longueuil)', description: 'Contribution fédérale de 900 M$ au Québec.', sourceIds: ['facl-entente-qc'] },
    { date: '2023-12-11', title: 'Première vague de projets', description: '999 logements annoncés.', sourceIds: ['facl-schl-2024'] },
    { date: '2024-02-16', title: 'Deuxième vague de projets (SCHL)', description: '2 574 logements via 47 projets au Québec.', sourceIds: ['facl-schl-2024'] },
    { date: '2024', title: 'Point sur le logement — mise à jour économique du Québec', sourceIds: ['qc-point-nov2024'] },
  ],
  funding: [
    {
      id: 'facl-qc',
      program: 'Fonds pour accélérer la construction de logements — volet Québec',
      province: 'QC',
      federalDepartment: 'Logement, Infrastructures et Collectivités Canada',
      announcementDate: '2023-11-09',
      agreementDate: '2023-11-09',
      announced: cad(900_000_000, ['facl-entente-qc'], 'Contribution fédérale au Québec; fonds total ~2 G$ dont ~la moitié pour le Québec'),
      committed: cad(900_000_000, ['facl-entente-qc']),
      guaranteed: cad(null, ['facl-entente-qc']),
      conditional: cad(null, ['facl-entente-qc']),
      paid: cad(null, ['facl-entente-qc', 'qc-point-nov2024', 'facl-schl-2024'], 'Montants effectivement versés non publiés; 2 574 logements engagés via 47 projets (SCHL, 16 fév. 2024), sans total décaissé par province'),
      remaining: cad(null, ['facl-entente-qc']),
      conditional_flag: true,
      conditionIds: ['facl-cibles'],
      sourceIds: ['facl-entente-qc', 'qc-point-nov2024', 'facl-schl-2024'],
    },
  ],
  conditions: [
    {
      id: 'facl-cibles',
      label: 'Cibles de construction de logements',
      detail:
        'Le financement est associé à des objectifs visant à accélérer la construction de logements.',
      mandatory: true,
      acceptedByProvince: null,
      contestedByProvince: null,
      sourceIds: ['facl-entente-qc'],
    },
  ],
  sourceIds: ['facl-entente-qc', 'qc-point-nov2024', 'facl-schl-2024', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

import type { Case } from '../types';

// Fondation canadienne des bourses d'études du millénaire (1998). Programme fédéral direct
// versant des bourses aux étudiants dans un champ (éducation postsecondaire, aide financière
// aux études) de compétence provinciale exclusive. Dotation fédérale 2,5 G$ confirmée; ~325 M$
// distribués par an. Créée 1998, non renouvelée en février 2008. Le Québec a conclu une entente
// (déc. 1999) intégrant la part québécoise à son régime d'Aide financière aux études pour
// éviter le dédoublement. Part québécoise annuelle exacte non confirmée sur source primaire
// → montants QC null (jamais estimé).
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const boursesMillenaire: Case = {
  id: 'bourses-millenaire',
  slug: 'bourses-millenaire',
  title: "Bourses du millénaire — programme fédéral direct en éducation",
  province: 'QC',
  domains: ['education'],
  dateStart: '1998',
  dateEnd: '2008',
  status: 'entente-federale-provinciale',
  interventionType: 'pouvoir-de-depenser',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "Le fédéral a créé un programme direct de bourses aux étudiants dans un champ de compétence provinciale; le Québec a limité l'empiètement en négociant l'intégration des fonds à son propre régime d'aide financière.",
    assertedBy: "Lecture du mécanisme (programme direct) et de l'entente de 1999",
    sourceIds: ['bourses-millenaire-wiki', 'bourses-entente-banq'],
  },
  summary:
    "En 1998, Ottawa a créé une fondation dotée de 2,5 G$ versant des bourses directement aux étudiants — un champ (éducation) de compétence provinciale. Le Québec a négocié en 1999 l'intégration de sa part à son régime d'aide financière aux études.",
  description:
    "La Fondation canadienne des bourses d'études du millénaire, créée par une loi fédérale en 1998, était dotée de 2,5 G$ et distribuait environ 325 M$ par an en bourses versées directement aux étudiants (95 % selon les besoins financiers, 5 % au mérite). L'éducation postsecondaire et l'aide financière aux études relèvent de la compétence provinciale exclusive. Pour éviter le dédoublement avec son propre régime, le Québec a conclu une entente en décembre 1999 : la part québécoise des fonds fédéraux est remise au Québec et intégrée à son programme d'Aide financière aux études. La Fondation n'a pas été renouvelée à la fin de son mandat en février 2008.",
  federalAction:
    "Création d'un programme fédéral versant des bourses directement aux étudiants, dans un champ de compétence provinciale, au titre du pouvoir de dépenser.",
  provincialCompetence:
    "Éducation, y compris l'aide financière aux études — compétence provinciale exclusive.",
  federalCompetence:
    'Pouvoir fédéral de dépenser.',
  argumentsFor: [
    "Le programme versait des bourses directement aux individus dans un champ de compétence provinciale exclusive, sans passer par le Québec, avec un risque de dédoublement de son régime d'aide financière.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Le programme visait à améliorer l'accès aux études postsecondaires partout au pays, au titre du pouvoir de dépenser.",
      sourceIds: ['bourses-millenaire-wiki'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "L'éducation est de compétence provinciale exclusive; le Québec a exigé et obtenu que la part québécoise soit intégrée à son propre régime d'aide financière aux études.",
      sourceIds: ['bourses-entente-banq'],
    },
  ],
  legalStatus:
    "Entente d'administration Ottawa–Québec (déc. 1999). Pas de litige judiciaire. Programme non renouvelé en 2008.",
  events: [
    { date: '1998', title: 'Création de la Fondation', description: 'Dotation fédérale de 2,5 G$.', sourceIds: ['bourses-millenaire-wiki'] },
    { date: '1999-12', title: 'Entente Ottawa–Québec', description: 'La part québécoise intégrée au régime d’aide financière aux études du Québec.', sourceIds: ['bourses-entente-banq'] },
    { date: '2008-02', title: 'Non-renouvellement', description: 'Fin du mandat de 10 ans, remplacée par le Programme canadien de bourses aux étudiants.', sourceIds: ['bourses-millenaire-wiki'] },
  ],
  funding: [
    {
      id: 'bourses-millenaire-qc',
      program: "Fondation canadienne des bourses d'études du millénaire",
      province: 'QC',
      federalDepartment: 'Gouvernement du Canada',
      announcementDate: '1998',
      agreementDate: '1999-12',
      period: '1998 à 2008',
      announced: cad(2_500_000_000, ['bourses-millenaire-wiki'], 'Dotation fédérale NATIONALE (toutes provinces); ~325 M$ distribués par an au total'),
      committed: cad(null, ['bourses-millenaire-wiki']),
      guaranteed: cad(null, ['bourses-entente-banq'], 'Part québécoise intégrée à l’aide financière aux études; montant annuel QC non confirmé sur source primaire'),
      conditional: cad(null, ['bourses-entente-banq']),
      paid: cad(null, ['bourses-entente-banq'], 'Montant versé au Québec non détaillé dans les sources consultées'),
      remaining: cad(null, ['bourses-millenaire-wiki']),
      conditional_flag: false,
      conditionIds: [],
      sourceIds: ['bourses-millenaire-wiki', 'bourses-entente-banq'],
    },
  ],
  conditions: [],
  sourceIds: ['bourses-millenaire-wiki', 'bourses-entente-banq', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

import type { Case } from '../types';

// Québec (Procureur général) c. Canada (Procureur général), 2015 CSC 14 (27 mars 2015),
// [2015] 1 R.C.S. 693, dossier 35448. Majorité 5-4 : l'art. 29 de la Loi sur l'abolition du
// registre des armes d'épaule (LARA, L.C. 2012, c. 6) est CONSTITUTIONNEL; le fédéral pouvait
// détruire les données du registre, y compris celles liées au Québec, et le Québec n'a PAS
// droit à ces données. Le Québec voulait les récupérer pour créer son propre registre.
// Référence, date et dispositif lus sur le texte officiel de la CSC. Aucun montant.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const registreArmes: Case = {
  id: 'registre-armes',
  slug: 'registre-armes',
  title: "Destruction des données québécoises du registre des armes d'épaule",
  province: 'QC',
  domains: ['securite'],
  dateStart: '2012',
  dateEnd: '2015',
  status: 'decision-judiciaire',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'reduite',
    rationale:
      "Le fédéral a détruit les données du registre relatives au Québec et la Cour suprême a jugé qu'il en avait le droit, empêchant le Québec de récupérer ces données pour établir son propre registre.",
    assertedBy: 'Québec (P.G.) c. Canada (P.G.), 2015 CSC 14 (majorité) et position du Québec',
    sourceIds: ['ccsc-armes-2015'],
  },
  summary:
    "En abolissant le registre des armes d'épaule (2012), Ottawa a ordonné la destruction de toutes les données, y compris québécoises. Le Québec voulait les récupérer pour son propre registre; la Cour suprême a donné raison au fédéral (5-4) en 2015.",
  description:
    "La Loi sur l'abolition du registre des armes d'épaule (LARA, 2012) a supprimé l'obligation d'enregistrer les armes d'épaule et, à son article 29, exigé la destruction de toutes les données d'enregistrement. Le Québec souhaitait obtenir la transmission des données relatives à son territoire afin de créer son propre registre provincial. La Cour supérieure du Québec lui avait d'abord donné raison, puis la Cour d'appel a infirmé. Dans Québec (P.G.) c. Canada (P.G.), 2015 CSC 14, la Cour suprême a jugé, à 5 juges contre 4, que l'article 29 est constitutionnel : le Parlement, agissant dans sa compétence en droit criminel, pouvait démanteler le registre et détruire les données, et le principe du fédéralisme coopératif ne l'obligeait pas à transmettre les données au Québec.",
  federalAction:
    "Destruction, par une loi fédérale, des données d'enregistrement des armes d'épaule, y compris celles relatives au Québec, jugée valide par la Cour suprême.",
  provincialCompetence:
    "Le Québec invoquait le fédéralisme coopératif et son projet de registre provincial (sécurité publique).",
  federalCompetence:
    "Compétence fédérale en droit criminel (art. 91(27) de la Loi constitutionnelle de 1867).",
  argumentsFor: [
    "Le fédéral a détruit des données constituées avec la participation du Québec et lui a refusé leur transmission, empêchant la province de mener à bien son propre projet de registre — une lecture partagée par les 4 juges dissidents.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "La création et le démantèlement du registre relèvent de la compétence fédérale en droit criminel; le fédéralisme coopératif ne restreint pas une compétence fédérale par ailleurs valide et n'oblige pas à transmettre les données.",
      sourceIds: ['ccsc-armes-2015'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "Le Québec réclamait la transmission des données relatives à son territoire pour établir son propre registre; il soutenait que la destruction violait le principe du fédéralisme coopératif.",
      sourceIds: ['ccsc-armes-2015'],
    },
  ],
  legalStatus:
    "Article 29 de la LARA jugé constitutionnel (2015 CSC 14, majorité 5-4). Le Québec n'a pas obtenu les données; il a par la suite créé son propre registre à partir de zéro.",
  events: [
    { date: '2012', title: 'Abolition du registre (LARA)', description: 'L’article 29 exige la destruction des données.', sourceIds: ['ccsc-armes-2015'] },
    { date: '2015-03-27', title: 'Arrêt de la Cour suprême', description: 'Article 29 jugé constitutionnel (5-4); le Québec n’a pas droit aux données.', sourceIds: ['ccsc-armes-2015'] },
  ],
  funding: [],
  conditions: [],
  sourceIds: ['ccsc-armes-2015', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

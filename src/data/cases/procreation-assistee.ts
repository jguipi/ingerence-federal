import type { Case } from '../types';

// Renvoi relatif à la Loi sur la procréation assistée, 2010 CSC 61 (22 déc. 2010),
// [2010] 3 R.C.S. 457, dossier 32750. Le Québec a contesté par renvoi la Loi fédérale sur la
// procréation assistée. La Cour suprême a jugé (4-4, voix prépondérante du juge en chef =
// résultat favorable au Québec) que les dispositions RÉGLEMENTANT la pratique clinique et de
// recherche (art. 8-19, 40-53...) sont ULTRA VIRES : elles relèvent de la compétence provinciale
// sur la santé, non du droit criminel fédéral. Le Québec a gagné l'essentiel. Référence/dispositif
// à recouper : URL CSC (item 7905) non vérifiée par fetch (403); lue par ailleurs. Aucun montant.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const procreationAssistee: Case = {
  id: 'procreation-assistee',
  slug: 'procreation-assistee',
  title: 'Loi fédérale sur la procréation assistée — dispositions jugées ultra vires',
  province: 'QC',
  domains: ['sante'],
  dateStart: '2004',
  dateEnd: '2010',
  status: 'decision-judiciaire',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'preservee',
    rationale:
      "La Cour suprême a invalidé les dispositions fédérales réglementant la pratique clinique de la procréation assistée, les rattachant à la compétence provinciale sur la santé — le champ contesté par le Québec lui est reconnu.",
    assertedBy: "Renvoi relatif à la Loi sur la procréation assistée, 2010 CSC 61",
    sourceIds: ['ccsc-procreation-2010'],
  },
  summary:
    "Le Québec a contesté la Loi fédérale sur la procréation assistée. En 2010, la Cour suprême a jugé ultra vires les articles réglementant la pratique clinique : ils relèvent de la santé, compétence provinciale, non du droit criminel fédéral.",
  description:
    "La Loi fédérale sur la procréation assistée (2004) encadrait à la fois des interdits (clonage, marchandisation) et la réglementation détaillée de la pratique clinique et de la recherche en procréation assistée. Le Québec a soumis un renvoi à la Cour d'appel, puis l'affaire est montée à la Cour suprême. Dans le Renvoi relatif à la Loi sur la procréation assistée, 2010 CSC 61, la Cour a jugé (résultat partagé, voix prépondérante du juge en chef en faveur de la thèse du Québec) que les dispositions réglementant la prestation clinique et la recherche sont ultra vires du Parlement fédéral : elles relèvent de la compétence provinciale sur les hôpitaux, la santé et la pratique des professions. Seuls certains interdits de nature véritablement criminelle ont été maintenus.",
  federalAction:
    "Réglementation fédérale détaillée de la pratique clinique de procréation assistée, jugée ultra vires par la Cour suprême.",
  provincialCompetence:
    "Santé, hôpitaux, pratique médicale et professions — compétence provinciale.",
  federalCompetence:
    "Compétence fédérale en droit criminel (art. 91(27)), invoquée pour l'ensemble de la loi.",
  argumentsFor: [
    "Le Québec soutenait que le fédéral avait débordé le droit criminel pour réglementer, dans le détail, une activité médicale de compétence provinciale — thèse retenue par la Cour pour les dispositions contestées.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "L'ensemble de la loi relevait du droit criminel fédéral, visant à protéger la santé, la sécurité et la morale relativement à la procréation assistée.",
      sourceIds: ['ccsc-procreation-2010'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "La réglementation de la pratique clinique de procréation assistée relève de la compétence provinciale sur la santé; le recours au droit criminel était un prétexte à un empiètement.",
      sourceIds: ['ccsc-procreation-2010'],
    },
  ],
  legalStatus:
    "Dispositions réglementant la pratique clinique jugées ultra vires (2010 CSC 61). Le Québec a obtenu gain de cause sur l'essentiel du champ contesté.",
  events: [
    { date: '2004', title: 'Adoption de la loi fédérale', description: 'Loi sur la procréation assistée.', sourceIds: ['ccsc-procreation-2010'] },
    { date: '2010-12-22', title: 'Arrêt de la Cour suprême', description: 'Dispositions sur la pratique clinique jugées ultra vires (compétence provinciale).', sourceIds: ['ccsc-procreation-2010'] },
  ],
  funding: [],
  conditions: [],
  sourceIds: ['ccsc-procreation-2010', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

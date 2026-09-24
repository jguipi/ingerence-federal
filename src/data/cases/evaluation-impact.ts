import type { Case } from '../types';

// Loi sur l'évaluation d'impact (projet de loi C-69, 2019). Renvoi relatif à la Loi sur
// l'évaluation d'impact, 2023 CSC 23 (13 oct. 2023) : le régime des « projets désignés » et
// son règlement jugés LARGEMENT INCONSTITUTIONNELS (ultra vires), majorité 5-2; seuls les
// art. 81-91 (terres fédérales/hors Canada) sont valides. L'Alberta contestait, le Québec est
// intervenu du côté des provinces. Ottawa a amendé la loi en 2024. Jugement de source primaire.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const evaluationImpact: Case = {
  id: 'evaluation-impact',
  slug: 'evaluation-impact',
  title: "Loi fédérale sur l'évaluation d'impact (C-69) jugée largement inconstitutionnelle",
  province: 'QC',
  domains: ['environnement', 'ressources-naturelles'],
  dateStart: '2019',
  dateEnd: '2024',
  status: 'decision-judiciaire',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'preservee',
    rationale:
      "La Cour suprême a jugé le cœur du régime fédéral d'évaluation d'impact ultra vires : le tribunal a fait obstacle à l'empiètement fédéral et confirmé la compétence des provinces sur ces projets.",
    assertedBy: "Renvoi relatif à la Loi sur l'évaluation d'impact, 2023 CSC 23 (majorité)",
    sourceIds: ['ccsc-iaa-2023'],
  },
  summary:
    "La loi fédérale de 2019 soumettait de nombreux « projets désignés » à une évaluation fédérale. En 2023, la Cour suprême a jugé l'essentiel du régime inconstitutionnel (5-2), donnant raison aux provinces; le Québec était intervenu de leur côté.",
  description:
    "La Loi sur l'évaluation d'impact (2019) permettait au fédéral d'évaluer et d'assujettir à des conditions des « projets désignés », y compris des projets relevant largement des compétences provinciales. L'Alberta a renvoyé la question aux tribunaux. Dans le Renvoi relatif à la Loi sur l'évaluation d'impact (2023 CSC 23), la Cour suprême a jugé, à 5 juges contre 2, que le régime des projets désignés et son règlement outrepassent la compétence du Parlement; seules les dispositions visant les terres fédérales ou les projets hors du Canada (art. 81 à 91) demeurent valides. Le Québec est intervenu aux côtés des provinces contre le fédéral. À la suite de l'arrêt, Ottawa a modifié la loi en 2024.",
  federalAction:
    "Assujettissement de « projets désignés » à une évaluation d'impact fédérale, jugé largement ultra vires par la Cour suprême.",
  provincialCompetence:
    "Ouvrages locaux, propriété et droits civils, ressources naturelles non renouvelables (art. 92, 92A) — évaluation environnementale des projets de compétence provinciale.",
  federalCompetence:
    "Compétences fédérales sur certains aspects environnementaux (pêches, espèces, terres fédérales); jugées insuffisantes pour soutenir l'ensemble du régime.",
  argumentsFor: [
    "L'Alberta et les provinces intervenantes, dont le Québec, soutenaient que la loi permettait au fédéral d'assujettir à ses conditions des projets de compétence provinciale — position confirmée par la majorité de la Cour suprême.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Le régime visait à évaluer les effets environnementaux relevant de la compétence fédérale; après l'arrêt, la loi a été amendée pour se conformer à la décision.",
      sourceIds: ['ccsc-iaa-2023'],
    },
  ],
  provincialPosition: [
    {
      actor: "Gouvernement du Québec (intervenant)",
      stance:
        "Le Québec est intervenu pour dénoncer l'empiètement fédéral sur l'évaluation des projets de compétence provinciale; la Cour lui a essentiellement donné raison.",
      sourceIds: ['ccsc-iaa-2023'],
    },
  ],
  legalStatus:
    "Régime des projets désignés jugé ultra vires (2023 CSC 23, majorité 5-2). Loi amendée par le fédéral en 2024.",
  events: [
    { date: '2019', title: "Adoption de la Loi sur l'évaluation d'impact (C-69)", sourceIds: ['ccsc-iaa-2023'] },
    { date: '2023-10-13', title: 'Arrêt de la Cour suprême', description: 'Régime des projets désignés jugé largement inconstitutionnel (5-2).', sourceIds: ['ccsc-iaa-2023'] },
    { date: '2024', title: 'Amendements fédéraux', description: 'Ottawa modifie la loi pour se conformer à la décision.', sourceIds: ['ccsc-iaa-2023'] },
  ],
  funding: [],
  conditions: [],
  sourceIds: ['ccsc-iaa-2023', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

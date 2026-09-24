import type { Case } from '../types';

// Loi sur l'evaluation d'impact (C-69, 2019). L'ALBERTA A LANCE CE RENVOI a sa propre Cour
// d'appel en 2020; le Quebec n'etait qu'un intervenant du cote des provinces.
// Renvoi relatif a la Loi sur l'evaluation d'impact, 2023 CSC 23 (13 oct. 2023) :
// regime des projets designes et son reglement juges LARGEMENT ULTRA VIRES (5-2).
// Seuls les art. 81-91 (terres federales / hors Canada) demeurent valides. Ottawa a amende
// la loi en 2024 pour se conformer. Donnees financieres : aucune; pas de fonds transferes.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const evaluationImpactAb: Case = {
  id: 'evaluation-impact-ab',
  slug: 'evaluation-impact-ab',
  title: "Loi fédérale sur l'évaluation d'impact (C-69) — renvoi de l'Alberta",
  province: 'AB',
  domains: ['environnement', 'ressources-naturelles'],
  dateStart: '2019',
  dateEnd: '2024',
  status: 'decision-judiciaire',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'preservee',
    rationale:
      "La Cour suprême a jugé l'essentiel du régime d'évaluation d'impact ultra vires à la suite du renvoi de l'Alberta, confirmant la compétence provinciale sur les projets de ressources naturelles.",
    assertedBy: "Renvoi relatif à la Loi sur l'évaluation d'impact, 2023 CSC 23 (majorité 5-2)",
    sourceIds: ['ccsc-iaa-2023'],
  },
  summary:
    "L'Alberta a lancé le renvoi constitutionnel contre la Loi sur l'évaluation d'impact (C-69), qui soumettait ses projets de ressources naturelles à une évaluation fédérale. En 2023, la Cour suprême a jugé l'essentiel du régime inconstitutionnel (5-2), une victoire pour l'Alberta et les provinces.",
  description:
    "La Loi sur l'évaluation d'impact (2019) permettait au fédéral d'assujettir à des conditions des « projets désignés », y compris des projets miniers, pétroliers et gaziers relevant largement des compétences de l'Alberta. L'Alberta a renvoyé la question à sa Cour d'appel en 2020. La Cour d'appel de l'Alberta a conclu en 2021 que les parties contestées étaient inconstitutionnelles. Dans le Renvoi relatif à la Loi sur l'évaluation d'impact (2023 CSC 23), la Cour suprême a confirmé cette analyse : à 5 juges contre 2, le régime des projets désignés et son règlement outrepassent la compétence fédérale; seules les dispositions sur les terres fédérales et les projets hors du Canada (art. 81-91) demeurent valides. Le Québec était intervenu aux côtés des provinces contre le fédéral. À la suite de l'arrêt, Ottawa a amendé la loi en 2024.",
  federalAction:
    "Assujettissement de « projets désignés » — dont des projets de ressources naturelles albertains — à une évaluation d'impact fédérale, jugé largement ultra vires par la Cour suprême.",
  provincialCompetence:
    "Ressources naturelles non renouvelables et ouvrages connexes (art. 92A), propriété et droits civils (art. 92) — compétences provinciales; évaluation environnementale des projets de compétence provinciale.",
  federalCompetence:
    "Compétences fédérales sur certains aspects environnementaux (pêches, espèces, terres fédérales); jugées insuffisantes pour couvrir l'ensemble du régime.",
  argumentsFor: [
    "L'Alberta (requérante) soutenait que la loi permettait au fédéral de soumettre à conditions les projets de ressources naturelles relevant de sa compétence exclusive (art. 92A); la majorité de la Cour suprême a confirmé cette analyse.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Le régime visait à évaluer les effets relevant de la compétence fédérale; la loi a été amendée après l'arrêt pour se conformer aux balises constitutionnelles.",
      sourceIds: ['ccsc-iaa-2023'],
    },
  ],
  provincialPosition: [
    {
      actor: "Gouvernement de l'Alberta (requérant)",
      stance:
        "La loi outrepasse la compétence fédérale en soumettant à autorisation fédérale des projets de ressources naturelles relevant de la compétence exclusive de l'Alberta; la Cour suprême a essentiellement donné raison à cette position.",
      sourceIds: ['ccsc-iaa-2023'],
    },
  ],
  legalStatus:
    "Régime des projets désignés jugé ultra vires (2023 CSC 23, majorité 5-2). Loi amendée par le fédéral en 2024 pour se conformer à la décision.",
  events: [
    { date: '2019', title: "Adoption de la Loi sur l'évaluation d'impact (C-69)", sourceIds: ['ccsc-iaa-2023'] },
    { date: '2020', title: "Renvoi de l'Alberta à sa Cour d'appel", description: "L'Alberta conteste la constitutionnalité de la loi.", sourceIds: ['ccsc-iaa-2023'] },
    { date: '2021', title: "Cour d'appel de l'Alberta : loi inconstitutionnelle", description: "La Cour d'appel de l'Alberta conclut que les parties contestées sont inconstitutionnelles.", sourceIds: ['ccsc-iaa-2023'] },
    { date: '2023-10-13', title: "Cour suprême : régime largement ultra vires (5-2)", description: "Le régime des projets désignés est jugé inconstitutionnel; seuls les art. 81-91 sont valides.", sourceIds: ['ccsc-iaa-2023'] },
    { date: '2024', title: "Amendements fédéraux", description: "Ottawa modifie la loi pour se conformer à la décision.", sourceIds: ['ccsc-iaa-2023'] },
  ],
  funding: [],
  conditions: [],
  sourceIds: ['ccsc-iaa-2023'],
  lastVerified: '2026-09-24',
};

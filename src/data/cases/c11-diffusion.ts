import type { Case } from '../types';

// Loi sur la diffusion continue en ligne (projet de loi C-11), sanction royale 27 avril 2023.
// Modernise la Loi sur la radiodiffusion : assujettit les services de diffusion continue en ligne
// (streaming) à la réglementation du CRTC, avec seuils de revenus (services de 25 M$+ visés) et
// objectifs de contenu canadien/francophone. Le Québec réclame une place formelle dans la
// réglementation du contenu culturel/francophone diffusé sur son territoire (culture = champ
// partagé/provincial revendiqué). Contenu de la loi (CRTC, français) vérifié; seuils précis
// à recouper. Aucun litige constitutionnel tranché à ce jour.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const c11Diffusion: Case = {
  id: 'c11-diffusion',
  slug: 'c11-diffusion',
  title: 'Loi sur la diffusion continue en ligne (C-11) — réglementation fédérale du contenu',
  province: 'QC',
  domains: ['culture'],
  dateStart: '2023',
  status: 'documente',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'encadree',
    rationale:
      "Le fédéral, via le CRTC, réglemente la diffusion en ligne et les obligations de contenu canadien et francophone; le Québec réclame — sans l'obtenir formellement — un rôle dans l'encadrement du contenu culturel diffusé sur son territoire.",
    assertedBy: 'Lecture de la loi (compétence CRTC) et de la revendication québécoise',
    sourceIds: ['c11-diffusion'],
  },
  summary:
    "Sanctionnée en avril 2023, la loi C-11 assujettit les plateformes de diffusion en ligne à la réglementation du CRTC, avec des objectifs de contenu canadien et francophone. Le Québec réclame un rôle dans l'encadrement du contenu culturel sur son territoire.",
  description:
    "La Loi sur la diffusion continue en ligne (projet de loi C-11), sanctionnée le 27 avril 2023, modernise la Loi sur la radiodiffusion en soumettant les services de diffusion continue en ligne à la réglementation du Conseil de la radiodiffusion et des télécommunications canadiennes (CRTC). Le CRTC peut imposer des obligations de découvrabilité et de financement du contenu canadien, et des objectifs de programmation en langue française. Le Québec, invoquant sa responsabilité en matière de culture et de langue, réclame une place formelle dans la réglementation du contenu culturel et francophone diffusé sur son territoire, ainsi qu'une entente lui reconnaissant un rôle — ce que le régime fédéral ne prévoit pas comme tel.",
  federalAction:
    "Extension de la réglementation fédérale (CRTC) aux services de diffusion en ligne, avec objectifs de contenu canadien et francophone.",
  provincialCompetence:
    "Culture et langue — champs où le Québec revendique une compétence et un rôle dans l'encadrement du contenu.",
  federalCompetence:
    "Compétence fédérale sur la radiodiffusion et les télécommunications.",
  argumentsFor: [
    "Le Québec est écarté de la réglementation du contenu culturel et francophone diffusé sur son territoire, laissée au CRTC fédéral, alors qu'il revendique la culture comme champ de sa responsabilité.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "La radiodiffusion, y compris en ligne, relève de la compétence fédérale; la loi vise à soutenir le contenu canadien et francophone et à assujettir les grandes plateformes aux mêmes objectifs que les diffuseurs traditionnels.",
      sourceIds: ['c11-diffusion'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "Le Québec réclame une entente et un rôle formel dans la réglementation du contenu culturel et francophone diffusé sur son territoire, au nom de sa responsabilité en matière de culture et de langue.",
      sourceIds: ['comite-consultatif-qc'],
    },
  ],
  legalStatus:
    "Loi en vigueur (sanction royale 27 avril 2023); mise en œuvre par le CRTC. Pas de litige constitutionnel tranché à ce jour.",
  events: [
    { date: '2023-04-27', title: 'Sanction royale de C-11', description: 'La diffusion en ligne assujettie au CRTC.', sourceIds: ['c11-diffusion'] },
  ],
  funding: [],
  conditions: [],
  sourceIds: ['c11-diffusion', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

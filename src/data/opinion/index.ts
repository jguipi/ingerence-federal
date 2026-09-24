import type { ProvinceCode } from '../types';

// Opinion publique sur l'indépendance/souveraineté, par province.
//
// Contraintes (mêmes que le reste du site) :
//  - Uniquement des sondages ou résultats réellement publiés, avec sondeur, date,
//    taille d'échantillon et marge d'erreur quand disponibles.
//  - On COLLE aux libellés du sondage : yes/no = les réponses réellement mesurées;
//    `undecided` reste `null` si le sondage ne publie pas d'indécis (jamais estimé).
//  - Les référendums sont des sources PRIMAIRES (DGEQ). Les sondages compilés via
//    Wikipedia sont SECONDAIRES et à recouper avec le rapport du sondeur.
//  - Aucune projection, aucune moyenne « lissée », aucun classement de provinces.

export interface Poll {
  pollster: string;
  date: string;             // AAAA-MM ou AAAA
  kind: 'sondage' | 'referendum';
  question: string;         // ce qui a été demandé (paraphrase courte du libellé)
  sampleSize?: number;
  marginOfError?: string;   // ex. '±3 %'
  yes: number;              // % Oui / pour l'indépendance
  no: number;               // % Non / contre
  undecided: number | null; // % indécis; null = non publié par le sondage
  sourceIds: string[];
}

export interface ProvinceOpinion {
  province: ProvinceCode;
  label: string;            // intitulé du champ mesuré (varie selon la province)
  note: string;             // mise en garde de lecture
  polls: Poll[];            // du plus ancien au plus récent
}

export const opinion: ProvinceOpinion[] = [
  {
    province: 'QC',
    label: 'Souveraineté / indépendance du Québec',
    note:
      "Résultats référendaires officiels (DGEQ) et sondages récents. Les libellés de " +
      "question varient d'un sondeur à l'autre; les pourcentages excluent parfois les indécis.",
    polls: [
      {
        pollster: 'Référendum de 1980', date: '1980', kind: 'referendum',
        question: 'Mandat de négocier la souveraineté-association',
        yes: 40, no: 60, undecided: null,
        sourceIds: ['dgeq-referendums'],
      },
      {
        pollster: 'Référendum de 1995', date: '1995', kind: 'referendum',
        question: 'Souveraineté avec offre de partenariat',
        yes: 49.4, no: 50.6, undecided: null,
        sourceIds: ['dgeq-referendums'],
      },
      {
        pollster: 'Angus Reid', date: '2026-02', kind: 'sondage',
        question: 'Voteriez-vous Oui à la souveraineté ?',
        sampleSize: 939, yes: 27, no: 63, undecided: 10,
        sourceIds: ['wiki-souverainisme-qc'],
      },
      {
        pollster: 'Pallas Data', date: '2026-02', kind: 'sondage',
        question: 'Voteriez-vous Oui à la souveraineté ?',
        sampleSize: 1075, yes: 32, no: 60, undecided: 8,
        sourceIds: ['wiki-souverainisme-qc'],
      },
      {
        pollster: 'Mainstreet Research', date: '2026-05', kind: 'sondage',
        question: 'Voteriez-vous Oui à la souveraineté ?',
        sampleSize: 1225, yes: 23.1, no: 65.5, undecided: 11.4,
        sourceIds: ['wiki-souverainisme-qc'],
      },
      {
        pollster: 'Léger', date: '2026-05', kind: 'sondage',
        question: 'Voteriez-vous Oui à la souveraineté ? (répartis Oui/Non)',
        sampleSize: 1027, yes: 32, no: 68, undecided: null,
        sourceIds: ['wiki-souverainisme-qc'],
      },
    ],
  },
  {
    province: 'AB',
    label: "Séparation / indépendance de l'Alberta",
    note:
      "Sondages hypothétiques sur la séparation de l'Alberta. Le soutien varie fortement " +
      "selon le sondeur, la formulation et le contexte politique fédéral.",
    polls: [
      {
        pollster: 'Research Co.', date: '2021-02', kind: 'sondage',
        question: "Soutenez-vous la séparation de l'Alberta ?",
        sampleSize: 600, marginOfError: '±4 %', yes: 27, no: 73, undecided: null,
        sourceIds: ['wiki-separatisme-ab'],
      },
      {
        pollster: 'Research Co.', date: '2022-08', kind: 'sondage',
        question: "Soutenez-vous la séparation de l'Alberta ?",
        sampleSize: 700, marginOfError: '±4 %', yes: 25, no: 75, undecided: null,
        sourceIds: ['wiki-separatisme-ab'],
      },
      {
        pollster: 'Research Co.', date: '2023-06', kind: 'sondage',
        question: "Soutenez-vous la séparation de l'Alberta ?",
        sampleSize: 800, marginOfError: '±3 %', yes: 24, no: 76, undecided: null,
        sourceIds: ['wiki-separatisme-ab'],
      },
    ],
  },
];

export const getOpinion = (province: ProvinceCode): ProvinceOpinion | undefined =>
  opinion.find((o) => o.province === province);

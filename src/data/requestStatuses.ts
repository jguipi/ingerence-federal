import type { RequestStatus } from './types';

export interface RequestStatusDef {
  id: RequestStatus;
  label: string;
  color: string;       // green / amber / red / gray / purple
  description: string; // affiché sur /methodologie
}

// Piloté par données — ajouter un statut = une entrée. Couleurs sobres (voir §neutralité).
export const requestStatuses: RequestStatusDef[] = [
  {
    id: 'approuvee',
    label: 'Approuvée',
    color: 'green',
    description: 'Le fédéral a accédé à la demande de la province.',
  },
  {
    id: 'partielle',
    label: 'Partielle',
    color: 'amber',
    description: "Accordée en partie, ou assortie de conditions n'ayant pas satisfait la demande initiale.",
  },
  {
    id: 'rejetee',
    label: 'Rejetée',
    color: 'red',
    description: 'Le fédéral a refusé explicitement la demande.',
  },
  {
    id: 'sans-reponse',
    label: 'Sans réponse',
    color: 'gray',
    description: "Aucune réponse fédérale publique documentée à ce jour.",
  },
  {
    id: 'en-cours',
    label: 'En cours',
    color: 'purple',
    description: "Demande active dont l'issue n'est pas encore déterminée.",
  },
];

export const requestStatusDef = (id: RequestStatus): RequestStatusDef =>
  requestStatuses.find((s) => s.id === id) ?? requestStatuses[0];

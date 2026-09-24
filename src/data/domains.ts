export interface Domain {
  id: string;
  label: string;
}

// La liste peut évoluer — ajouter une entrée suffit.
export const domains: Domain[] = [
  { id: 'sante', label: 'Santé' },
  { id: 'education', label: 'Éducation' },
  { id: 'logement', label: 'Logement' },
  { id: 'immigration', label: 'Immigration' },
  { id: 'environnement', label: 'Environnement' },
  { id: 'ressources-naturelles', label: 'Ressources naturelles' },
  { id: 'infrastructures', label: 'Infrastructures' },
  { id: 'fiscalite', label: 'Fiscalité' },
  { id: 'langue', label: 'Langue' },
  { id: 'culture', label: 'Culture' },
  { id: 'securite', label: 'Sécurité' },
  { id: 'services-sociaux', label: 'Services sociaux' },
  { id: 'transport', label: 'Transport' },
  { id: 'developpement-economique', label: 'Développement économique' },
  { id: 'garde-enfants', label: "Garde d'enfants" },
  { id: 'eau', label: 'Eau' },
  { id: 'autres', label: 'Autres' },
];

export const domainLabel = (id: string): string =>
  domains.find((d) => d.id === id)?.label ?? id;

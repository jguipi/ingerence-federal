import type { Case } from '../types';

// Loi canadienne sur la santé (LCS) — déductions sur le Transfert canadien en santé.
// Chaque année, Santé Canada réduit le TCS versé aux provinces d'un montant égal aux frais
// facturés aux patients pour des services médicalement nécessaires (art. 18-20 LCS). Montants
// déduits au QUÉBEC vérifiés sur la page « Déductions et remboursements » (canada.ca, consulté
// 2026-09-24) : 41 867 224 $ (2020-21), 36 014 132 $ (2021-22), 35 249 525 $ (2022-23),
// 37 398 350 $ (2023-24). Chiffres exacts inscrits (source primaire) — jamais estimés.
const cad = (amount: number | null, sourceIds: string[], note?: string) =>
  ({ amount, currency: 'CAD' as const, note, sourceIds });

export const lcsDeductions: Case = {
  id: 'lcs-deductions',
  slug: 'lcs-deductions',
  title: 'Loi canadienne sur la santé — déductions sur le transfert au Québec',
  province: 'QC',
  domains: ['sante'],
  dateStart: '2005',
  status: 'conteste',
  interventionType: 'loi',
  autonomyImpact: {
    level: 'reduite',
    rationale:
      "Le fédéral réduit chaque année le transfert versé au Québec d'un montant égal aux frais facturés aux patients, sanctionnant financièrement des choix d'organisation des soins qui relèvent de la compétence provinciale.",
    assertedBy: 'Lecture du mécanisme de déduction de la Loi canadienne sur la santé',
    sourceIds: ['lcs-deductions', 'lcs-rapport-2324'],
  },
  summary:
    "En vertu de la Loi canadienne sur la santé, Ottawa retient chaque année une partie du transfert santé versé au Québec pour sanctionner les frais facturés aux patients — 37,4 M$ en 2023-24, surtout liés à l'imagerie diagnostique hors hôpital.",
  description:
    "La Loi canadienne sur la santé (1984) fixe cinq critères (gestion publique, intégralité, universalité, transférabilité, accessibilité) et interdit la surfacturation et les frais modérateurs pour les services médicalement nécessaires. Lorsqu'une province tolère de tels frais, Santé Canada déduit chaque mars du Transfert canadien en santé un montant équivalent. Au Québec, les déductions ont atteint 41,9 M$ (2020-21), 36,0 M$ (2021-22), 35,2 M$ (2022-23) et 37,4 M$ (2023-24), largement associées à des services d'imagerie et de diagnostic offerts en cliniques privées. Une politique fédérale de 2025 élargit à compter du 1er avril 2026 la couverture visée aux services fournis par des professionnels autres que les médecins, ce qui touche les médecins non participants du Québec.",
  federalAction:
    "Retenue annuelle sur le transfert santé égale aux frais facturés aux patients, en application des critères de la Loi canadienne sur la santé; élargissement prévu le 1er avril 2026.",
  provincialCompetence:
    "Organisation et prestation des services de santé, encadrement des cliniques et de la pratique médicale — compétence provinciale.",
  federalCompetence:
    "Pouvoir fédéral de dépenser; la Loi canadienne sur la santé conditionne le versement du transfert au respect de ses critères.",
  argumentsFor: [
    "Le mécanisme laisse au fédéral le pouvoir de sanctionner financièrement, chaque année, des décisions d'organisation des soins prises par le Québec dans son propre champ de compétence.",
    "Le Comité consultatif sur les enjeux constitutionnels du Québec relève l'usage du pouvoir fédéral de dépenser comme levier dans un champ provincial.",
  ],
  federalPosition: [
    {
      actor: 'Gouvernement du Canada',
      stance:
        "Les services médicalement nécessaires doivent être fournis sans frais au point de service; les déductions font simplement respecter les critères de la Loi canadienne sur la santé, communs à tout le pays.",
      sourceIds: ['lcs-deductions', 'lcs-rapport-2324'],
    },
  ],
  provincialPosition: [
    {
      actor: 'Gouvernement du Québec',
      stance:
        "Le Québec conteste la portée des déductions, invoquant l'organisation particulière de ses services et son autorité sur la pratique médicale et les cliniques.",
      sourceIds: ['comite-consultatif-qc'],
    },
  ],
  legalStatus:
    "Mécanisme administratif fédéral appliqué chaque année. Contestation politique du Québec; pas de litige judiciaire sur les déductions elles-mêmes.",
  events: [
    { date: '2021-03', title: 'Déductions 2020-21', description: '41,9 M$ retenus sur le transfert au Québec.', sourceIds: ['lcs-deductions'] },
    { date: '2022-03', title: 'Déductions 2021-22', description: '36,0 M$ retenus.', sourceIds: ['lcs-deductions'] },
    { date: '2023-03', title: 'Déductions 2022-23', description: '35,2 M$ retenus.', sourceIds: ['lcs-deductions'] },
    { date: '2024-03', title: 'Déductions 2023-24', description: '37,4 M$ retenus, surtout imagerie/diagnostic hors hôpital.', sourceIds: ['lcs-deductions', 'lcs-rapport-2324'] },
    { date: '2026-04-01', title: 'Élargissement de la politique fédérale', description: 'Couverture visée étendue aux services de professionnels autres que médecins.', sourceIds: ['lcs-rapport-2324'] },
  ],
  funding: [
    {
      id: 'lcs-deduction-qc',
      program: 'Déductions au titre de la Loi canadienne sur la santé — Québec',
      province: 'QC',
      federalDepartment: 'Santé Canada',
      period: '2020-2021 à 2023-2024',
      announced: cad(null, ['lcs-deductions'], 'Non applicable : il s’agit d’une retenue, non d’une somme annoncée'),
      committed: cad(null, ['lcs-deductions']),
      guaranteed: cad(null, ['lcs-deductions']),
      conditional: cad(null, ['lcs-deductions']),
      paid: cad(null, ['lcs-deductions', 'lcs-rapport-2324'], 'Déductions (retenues sur le transfert, non des versements) : 41,9 M$ (2020-21), 36,0 M$ (2021-22), 35,2 M$ (2022-23), 37,4 M$ (2023-24).'),
      remaining: cad(null, ['lcs-deductions']),
      conditional_flag: true,
      conditionIds: ['lcs-criteres'],
      sourceIds: ['lcs-deductions', 'lcs-rapport-2324'],
    },
  ],
  conditions: [
    {
      id: 'lcs-criteres',
      label: 'Interdiction de la surfacturation et des frais modérateurs',
      detail:
        "Aucun frais ne peut être facturé au patient pour un service médicalement nécessaire assuré; à défaut, le transfert est réduit d'un montant équivalent. La province peut être remboursée dans les 2 ans si elle élimine les frais.",
      mandatory: true,
      acceptedByProvince: null,
      contestedByProvince: true,
      consequenceIfUnmet: 'Déduction annuelle sur le Transfert canadien en santé.',
      sourceIds: ['lcs-deductions', 'lcs-rapport-2324'],
    },
  ],
  sourceIds: ['lcs-deductions', 'lcs-rapport-2324', 'comite-consultatif-qc'],
  lastVerified: '2026-09-24',
};

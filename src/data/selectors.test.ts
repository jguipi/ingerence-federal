import assert from 'node:assert';
import { ecart, formatMoney } from './selectors';
import type { Funding } from './types';

const m = (amount: number | null) => ({ amount, currency: 'CAD' as const, sourceIds: [] });
const base: Funding = {
  id: 't', program: 't', province: 'QC',
  announced: m(null), committed: m(null), guaranteed: m(null),
  conditional: m(null), paid: m(null), remaining: m(null),
  conditional_flag: false, conditionIds: [], sourceIds: [],
};

// écart calculé seulement si annoncé ET versé connus
assert.strictEqual(ecart({ ...base, announced: m(6e9), paid: m(4.2e9) }), 1.8e9);
// un montant manquant → null (« Données insuffisantes »), jamais estimé
assert.strictEqual(ecart({ ...base, announced: m(6e9), paid: m(null) }), null);
assert.strictEqual(ecart({ ...base, announced: m(null), paid: m(4.2e9) }), null);

assert.strictEqual(formatMoney(null), 'Données insuffisantes');
assert.strictEqual(formatMoney(6e9), '6 G$');
assert.strictEqual(formatMoney(496e6), '496 M$');

console.log('selectors: OK');

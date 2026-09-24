import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { judges, sittingJudges } from '../data/judges';
import { judgesByProvince } from '../data/selectors';
import { provinceName } from '../data/provinces';
import { SourceLink } from '../components/SourceLink';

const sitting = sittingJudges();
const departed = judges.filter((j) => j.retired).sort((a, b) => (a.retired! < b.retired! ? 1 : -1));
const byProvince = judgesByProvince();

const COLORS = ['#304f86', '#e07b39', '#2e7d4f', '#8b3a8b', '#b5880a', '#1a7a8a', '#c0392b', '#5d6d7e', '#7f8c8d'];

const chartData = byProvince.map((p, i) => ({
  name: provinceName(p.province),
  value: p.count,
  pct: Math.round(p.pct * 100),
  fill: COLORS[i % COLORS.length],
}));

const fmtDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });

export function Judges() {
  return (
    <div>
      <h1>Provenance provinciale des juges de la Cour suprême</h1>
      <p className="lead">
        La Cour suprême du Canada tranche les litiges de partage des compétences entre le
        fédéral et les provinces — plusieurs cas documentés sur ce site sont des décisions de
        cette cour. Cette page montre d'où viennent ses juges, par province de nomination.
      </p>
      <p>
        La Cour compte neuf juges (<em>Loi sur la Cour suprême</em>, art. 4). L'article 6 exige
        qu'<strong>au moins trois d'entre eux soient nommés parmi les juristes du Québec</strong> :
        cette part est prescrite par la loi. La répartition des six autres sièges (par convention :
        trois de l'Ontario, deux de l'Ouest, un de l'Atlantique) n'est pas codifiée. Les
        proportions ci-dessous sont donc descriptives et rappellent ce cadre légal — elles ne
        constituent pas un jugement sur une sur- ou sous-représentation.
      </p>
      <div className="sources" style={{ marginBottom: '1rem' }}>
        <SourceLink ids={['loi-cour-supreme-art6', 'scc-juges-liste']} />
      </div>

      <section className="chart" aria-label="Juges en poste par province de nomination">
        <h3>Juges en poste par province de nomination ({sitting.length})</h3>
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={(entry) => `${entry.name} · ${(entry.payload as typeof chartData[0]).pct} %`}
              labelLine={true}
            >
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              formatter={(v, name) => {
                const n = Number(v);
                return [`${n} juge${n > 1 ? 's' : ''}`, name as string];
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <p className="chart-note">
          Province de nomination (le siège pour lequel le juge est nommé), non l'origine
          personnelle. Le Québec y figure pour au moins trois sièges en vertu de l'article 6.
        </p>
      </section>

      <h2>Juges en poste</h2>
      <table className="fund-table">
        <thead>
          <tr><th>Juge</th><th>Province de nomination</th><th>Nomination</th></tr>
        </thead>
        <tbody>
          {sitting.map((j) => (
            <tr key={j.name}>
              <td>{j.name}{j.chief ? ' (juge en chef)' : ''}</td>
              <td>{provinceName(j.province)}</td>
              <td>{fmtDate(j.appointed)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Roulement 2016–2026</h2>
      <p>Juges ayant quitté la Cour au cours des dix dernières années :</p>
      <table className="fund-table">
        <thead>
          <tr><th>Juge</th><th>Province de nomination</th><th>Départ</th></tr>
        </thead>
        <tbody>
          {departed.map((j) => (
            <tr key={j.name}>
              <td>{j.name}{j.chief ? ' (juge en chef)' : ''}</td>
              <td>{provinceName(j.province)}</td>
              <td>{fmtDate(j.retired!)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

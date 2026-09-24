import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import { opinion } from '../data/opinion';
import { provinceName } from '../data/provinces';
import { SourceLink } from '../components/SourceLink';

export function Opinion() {
  return (
    <div>
      <h1>Opinion publique — souveraineté et séparation</h1>
      <p className="lead">
        Pourcentage de soutien à l'indépendance/souveraineté, par province, d'après des
        sondages et résultats référendaires <strong>réellement publiés</strong>. Chaque
        point cite son sondeur, sa date et sa taille d'échantillon. Les libellés de
        question varient; « — » indique une réponse (ex. indécis) non publiée par le
        sondage — jamais une estimation.
      </p>
      <p className="chart-note">
        Cette page est descriptive : aucune projection, aucune moyenne lissée, aucun
        classement des provinces. Les référendums sont des sources primaires; les
        compilations de sondages sont secondaires et à recouper avec le rapport du sondeur.
      </p>

      {opinion.map((o) => {
        const data = o.polls.map((p) => ({
          name: `${p.pollster} (${p.date})`,
          Oui: p.yes,
          Non: p.no,
        }));
        return (
          <section key={o.province} className="opinion-block">
            <h2>{provinceName(o.province)} — {o.label}</h2>
            <p className="opinion-note">{o.note}</p>

            <div className="chart" aria-label={`Soutien à l'indépendance — ${provinceName(o.province)}`}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-20} textAnchor="end" interval={0} height={70} fontSize={11} />
                  <YAxis domain={[0, 100]} tickFormatter={(v: number) => `${v} %`} width={55} fontSize={11} />
                  <Tooltip formatter={(v) => `${Number(v)} %`} />
                  <Legend />
                  <Line dataKey="Oui" stroke="#304f86" strokeWidth={2} />
                  <Line dataKey="Non" stroke="#7a3b3b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <table className="fund-table">
              <thead>
                <tr>
                  <th>Sondeur / scrutin</th><th>Date</th><th>Type</th><th>Question</th>
                  <th>Oui</th><th>Non</th><th>Indécis</th><th>n</th><th>Marge</th>
                </tr>
              </thead>
              <tbody>
                {o.polls.map((p, i) => (
                  <tr key={i}>
                    <td>{p.pollster}</td>
                    <td>{p.date}</td>
                    <td>{p.kind === 'referendum' ? 'Référendum' : 'Sondage'}</td>
                    <td>{p.question}</td>
                    <td>{p.yes} %</td>
                    <td>{p.no} %</td>
                    <td>{p.undecided == null ? '—' : `${p.undecided} %`}</td>
                    <td>{p.sampleSize ?? '—'}</td>
                    <td>{p.marginOfError ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <SourceLink ids={[...new Set(o.polls.flatMap((p) => p.sourceIds))]} />
          </section>
        );
      })}

      <p className="chart-note">
        Provinces sans mouvement souverainiste mesuré de façon récurrente (ex. Ontario,
        Colombie-Britannique) : « Données insuffisantes » — aucune série de sondages fiable
        n'est présentée tant qu'elle n'existe pas.
      </p>
    </div>
  );
}

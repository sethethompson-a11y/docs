export type LeaderboardResult = {
  rank: number;
  name: string;
  riser: string;
  faller: string;
  score: number;
};

type LeaderboardTableProps = {
  results: LeaderboardResult[];
};

export default function LeaderboardTable({ results }: LeaderboardTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700 bg-slate-900/60 shadow-premium animate-fadeIn">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-800/90 text-left uppercase tracking-wide text-slate-300">
          <tr>
            <th className="px-4 py-3">Rank</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Riser</th>
            <th className="px-4 py-3">Faller</th>
            <th className="px-4 py-3">Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, idx) => {
            const isTop3 = row.rank <= 3;
            return (
              <tr
                key={`${row.name}-${row.rank}`}
                className={`border-t border-slate-800 transition ${idx % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-900/60'} hover:bg-primary/15 ${isTop3 ? 'text-accent' : 'text-slate-200'}`}
              >
                <td className="px-4 py-3 font-semibold">#{row.rank}</td>
                <td className="px-4 py-3 font-medium text-white">{row.name}</td>
                <td className="px-4 py-3">{row.riser}</td>
                <td className="px-4 py-3">{row.faller}</td>
                <td className="px-4 py-3 font-bold">{row.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

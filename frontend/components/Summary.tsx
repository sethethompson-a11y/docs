type SummaryProps = {
  bestRiser: string;
  bestFaller: string;
};

export default function Summary({ bestRiser, bestFaller }: SummaryProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 animate-fadeIn">
      <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 shadow-premium">
        <p className="text-xs uppercase tracking-wide text-slate-400">Biggest riser pick</p>
        <p className="mt-2 text-xl font-semibold text-primary">{bestRiser || 'N/A'}</p>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 shadow-premium">
        <p className="text-xs uppercase tracking-wide text-slate-400">Biggest faller pick</p>
        <p className="mt-2 text-xl font-semibold text-accent">{bestFaller || 'N/A'}</p>
      </div>
    </section>
  );
}

type WinnerCardProps = {
  winner: string;
  score: number;
};

export default function WinnerCard({ winner, score }: WinnerCardProps) {
  return (
    <section className="animate-fadeIn rounded-xl border border-accent/50 bg-slate-900/60 p-6 shadow-premium">
      <p className="text-sm uppercase tracking-wider text-accent">Weekly winner</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{winner}</h2>
      <p className="mt-3 text-sm text-slate-300">Top score this week</p>
      <p className="mt-1 inline-block rounded-lg bg-primary/20 px-3 py-1 text-3xl font-extrabold text-accent animate-pulseScore">
        {score}
      </p>
    </section>
  );
}

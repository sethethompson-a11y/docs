'use client';

import { useEffect, useState } from 'react';
import LeaderboardTable, { LeaderboardResult } from '@/components/LeaderboardTable';
import WinnerCard from '@/components/WinnerCard';
import Summary from '@/components/Summary';

type ApiData = {
  week?: string;
  results?: LeaderboardResult[];
  summary?: {
    winner?: string;
    score?: number;
    best_riser?: string;
    best_faller?: string;
  };
};

const API_URL = process.env.NEXT_PUBLIC_RESULTS_URL ?? 'http://localhost:5000/results';

export default function HomePage() {
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, { cache: 'no-store' });
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        const payload = (await response.json()) as ApiData;
        if (!cancelled) {
          setData(payload);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load results');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const results = data?.results ?? [];
  const summary = data?.summary;

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8 text-center animate-fadeIn">
        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Weekly Golf Mover Game</h1>
        <p className="mt-2 text-base text-slate-300">Leaderboard Movement Challenge</p>
        <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">{data?.week ?? 'Current week'}</p>
      </header>

      {loading && <div className="mb-6 rounded-xl bg-slate-900/70 p-6 text-center shadow-premium">Loading leaderboard…</div>}
      {error && !loading && (
        <div className="mb-6 rounded-xl border border-red-500/50 bg-red-950/30 p-6 text-center text-red-200">
          Could not load data: {error}
        </div>
      )}

      {!loading && !error && results.length === 0 && (
        <div className="mb-6 rounded-xl bg-slate-900/70 p-6 text-center shadow-premium">No results posted yet.</div>
      )}

      {!error && results.length > 0 && (
        <div className="space-y-6">
          <WinnerCard winner={summary?.winner ?? results[0].name} score={summary?.score ?? results[0].score} />
          <LeaderboardTable results={results} />
          <Summary bestRiser={summary?.best_riser ?? ''} bestFaller={summary?.best_faller ?? ''} />
        </div>
      )}

      <footer className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">Built for the boys</footer>
    </main>
  );
}

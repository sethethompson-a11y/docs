import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weekly Golf Mover Game',
  description: 'Leaderboard Movement Challenge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import '../app/globals.css';
import { exo_2, orbitron } from './fonts';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer',
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${exo_2.variable} ${orbitron.variable}`}>
      <body className="bg-indigo-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs text-slate-500">
          Game data and images courtesy of{' '}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-indigo-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

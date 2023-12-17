import type { ReactNode } from 'react';
import NavBar from '../components/NavBar';
import '../app/globals.css';
import { orbitron } from './fonts';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="bg-indigo-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
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

import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'MiRetiro',
  description: 'Retiro de bienestar con medicina china y coaching',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
<main className="flex-grow pt-20">
          {children}
        </main>
        <footer className="bg-green-800 text-white text-center p-4">
          &copy; {new Date().getFullYear()} MiRetiro. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}

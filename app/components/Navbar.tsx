// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `hover:text-green-200 transition ${
      pathname === href ? 'underline font-semibold' : ''
    }`;

  return (
    <nav className="bg-green-600 shadow-lg py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-6">
        <h1 className="text-white text-3xl font-bold text-center md:text-left mb-4 md:mb-0">
          MiRetiro
        </h1>
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-white text-lg font-medium list-none">
          <li><Link href="/" className={linkClass('/')}>Inicio</Link></li>
          <li><Link href="/testimonios" className={linkClass('/testimonios')}>Testimonios</Link></li>
          <li><Link href="/contacto" className={linkClass('/contacto')}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
}

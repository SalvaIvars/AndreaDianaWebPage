"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Recursos Creativos", href: "/recursos" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre nosotras", href: "/sobre-mi" },
  { name: "Preguntas", href: "/faq" },
  { name: "Contacto", href: "/contacto" },
  { name: "Tienda", href: "/tienda" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-800`}>
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 bg-green-700 shadow-sm text-white">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold text-xl">
              Movent
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden md:flex gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative transition-all duration-200 ${
                      pathname === link.href
                        ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white"
                        : "text-green-100 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="md:hidden bg-green-700 border-t px-6 pb-4">
              <ul className="flex flex-col gap-3 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-1 px-2 rounded-md transition ${
                        pathname === link.href
                          ? "text-white font-semibold"
                          : "text-green-100 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* CONTENIDO */}
        <main className="min-h-[85vh]">{children}</main>

        {/* FOOTER */}
        <footer className="bg-green-50 text-sm text-gray-700 mt-16 border-t">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} Movent</p>
              <p className="text-xs text-gray-500">
                Cuerpo, consciencia y naturaleza.
              </p>
            </div>
            <div className="flex gap-4 text-green-700">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-900"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/549000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-900"
              >
                WhatsApp
              </a>
              <a href="mailto:hola@movent.com" className="hover:text-green-900">
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

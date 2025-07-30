"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `block px-3 py-2 rounded-md transition ${
      pathname === href ? "underline font-semibold" : ""
    } hover:text-green-200`;

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300
     ${
       scrolled
         ? "bg-green-700/95 py-2 shadow-lg backdrop-blur"
         : "bg-green-600 py-4"
     }`;

  return (
    <header className={navClass}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-white font-bold tracking-wide">
          <span
            className={`transition-all duration-300 ${
              scrolled ? "text-2xl" : "text-3xl"
            }`}
          >
            Movent
          </span>
        </Link>

        {/* Botón mobile */}
        <button
          aria-label="Abrir menú"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-6 text-white text-lg font-medium">
          <Link href="/" className={linkClass("/")}>
            Inicio
          </Link>
          <Link href="/recursos" className={linkClass("/recursos")}>
            Recursos Creativos
          </Link>
          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>
          <Link href="/sobre-mi" className={linkClass("/sobre-mi")}>
            Sobre nosotras
          </Link>
          <Link href="/faq" className={linkClass("/faq")}>
            Preguntas
          </Link>
          <Link href="/contacto" className={linkClass("/contacto")}>
            Contacto
          </Link>
          <Link href="/tienda" className={linkClass("/tienda")}>
            Tienda
          </Link>

          <Link href="/horarios" className={linkClass("/horarios")}>
            Horarios
          </Link>
        </nav>
      </div>

      {/* Menú mobile desplegable */}
      {open && (
        <nav className="md:hidden mt-3 px-4 pb-4 text-white text-lg font-medium">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className={linkClass("/")}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/recursos" className={linkClass("/recursos")}>
                Recursos Creativos
              </Link>
            </li>
            <li>
              <Link href="/blog" className={linkClass("/blog")}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/sobre-mi" className={linkClass("/sobre-mi")}>
                Sobre nosotras
              </Link>
            </li>
            <li>
              <Link href="/faq" className={linkClass("/faq")}>
                Preguntas
              </Link>
            </li>
            <li>
              <Link href="/contacto" className={linkClass("/contacto")}>
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/tienda" className={linkClass("/tienda")}>
                Tienda
              </Link>
            </li>
            <li>
              <Link href="/horarios" className={linkClass("/horarios")}>
                Horarios
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

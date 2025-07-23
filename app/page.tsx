'use client';

import Image from 'next/image';
import background from '../public/images/background.jpg';

export default function Home() {
  return (
    <>

      {/* HERO */}
      <section className="relative w-full h-[70vh]">
        <Image
          src={background}
          alt="Yoga"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
            El Yoga Como Una Vía De Liberación
          </h2>
          <p className="text-lg md:text-xl max-w-2xl drop-shadow-sm">
            Un camino que transitamos alegres no sólo con la mirada puesta en la reconexión
            con lo elevado y con lo profundo. Sino también con la intención de vivir una
            vida plena aquí y ahora.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <main className="p-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Bienvenida al retiro</h2>
        <p className="text-gray-700">Explora tu bienestar con terapias de coaching y medicina china.</p>
      </main>

      {/* TARJETAS ALTERNADAS */}
      <section className="space-y-12 p-6">
        {/* Tarjeta 1: Imagen izquierda */}
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
          <Image
            src="/images/imagen1.jpg"
            alt="Terapia energética"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-2xl font-bold mb-2 text-green-700">Terapia Energética</h3>
            <p className="text-gray-700">
              Armoniza cuerpo y mente con sesiones centradas en desbloquear emociones
              y restaurar tu energía vital.
            </p>
          </div>
        </div>

        {/* Tarjeta 2: Imagen derecha */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-5xl mx-auto">
          <Image
            src="/images/imagen1.jpg"
            alt="Coaching personal"
            width={400}
            height={300}
            className="rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-2xl font-bold mb-2 text-green-700">Coaching Personal</h3>
            <p className="text-gray-700">
              Acompañamiento para conectar con tu propósito, liberar bloqueos mentales
              y avanzar hacia una vida más plena.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

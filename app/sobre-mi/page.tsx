// app/sobre-mi/page.tsx
'use client';

import Image from 'next/image';

export default function SobreMi() {
  return (
    <section className="py-12 px-6 min-h-screen bg-white">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Sobre Nosotras</h2>

      {/* Persona 1 */}
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto mb-16">
        <Image
          src="/images/imagen1.jpg"
          alt="Andrea"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Andrea</h3>
          <p className="text-gray-700">
            Andrea es terapeuta de medicina china y guía espiritual con más de 10 años de experiencia.
            Su enfoque está centrado en la sanación energética y emocional a través del cuerpo.
            Su pasión es acompañar a mujeres en procesos de transformación interior profunda.
          </p>
        </div>
      </div>

      {/* Persona 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-5xl mx-auto">
        <Image
          src="/images/imagen1.jpg"
          alt="Diana"
          width={400}
          height={300}
          className="rounded-lg shadow-md"
        />
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Diana</h3>
          <p className="text-gray-700">
            Diana es coach de vida y formadora en técnicas de mindfulness y desarrollo personal.
            Su trabajo se enfoca en despertar el potencial interior de cada persona, integrando cuerpo, mente y propósito.
            Juntas, crean un espacio de retiro único y transformador.
          </p>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import background from '../public/images/background.jpg';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[80vh]">
        <Image
          src={background}
          alt="Yoga"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            El Yoga Como Una Vía De Liberación
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Un camino alegre hacia la reconexión con lo elevado y con lo profundo.
          </motion.p>
        </div>
      </section>

      {/* CONTENIDO */}
      <main className="p-8 text-center bg-white">
        <motion.h2
          className="text-4xl font-bold text-green-700 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Bienvenida al retiro
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Explora tu bienestar con terapias de coaching y medicina china en un espacio dedicado a tu transformación interior.
        </motion.p>
      </main>
      {/* TARJETAS ALTERNADAS */}
<section className="space-y-16 p-8 bg-gray-50">
  {/* Tarjeta 1 */}
  <motion.div
    className="flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Image
      src="/images/imagen1.jpg"
      alt="Terapia energética"
      width={400}
      height={300}
      className="rounded-lg shadow-lg object-cover"
    />
    <div>
      <h3 className="text-2xl font-semibold text-green-700 mb-2">Terapia Energética</h3>
      <p className="text-gray-600 text-lg">
        Armoniza cuerpo y mente con sesiones centradas en desbloquear emociones
        y restaurar tu energía vital.
      </p>
    </div>
  </motion.div>

  {/* Tarjeta 2 */}
  <motion.div
    className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-6xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <Image
      src="/images/imagen1.jpg"
      alt="Coaching personal"
      width={400}
      height={300}
      className="rounded-lg shadow-lg object-cover"
    />
    <div>
      <h3 className="text-2xl font-semibold text-green-700 mb-2">Coaching Personal</h3>
      <p className="text-gray-600 text-lg">
        Acompañamiento para conectar con tu propósito, liberar bloqueos mentales
        y avanzar hacia una vida más plena.
      </p>
    </div>
  </motion.div>
</section>
    </>
  );
}

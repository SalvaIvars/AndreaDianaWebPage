'use client';

import Image from 'next/image';
import background from '../public/images/background.jpg';
import { Heart, CupSoda, CalendarDays, Moon, Users, Flower, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Faq, { FaqItem } from './components/Faq';

const preguntasRetiro: FaqItem[] = [
  {
    pregunta: '¿Necesito experiencia previa en yoga o meditación?',
    respuesta: 'No, el retiro está abierto a todos los niveles. Guiamos cada práctica con amor y claridad.',
  },
  {
    pregunta: '¿Qué debo llevar al retiro?',
    respuesta: 'Ropa cómoda, manta, libreta, botella de agua reutilizable y muchas ganas de reconectar contigo.',
  },
  {
    pregunta: '¿Puedo asistir sola?',
    respuesta: '¡Claro que sí! Muchas personas vienen solas y encuentran aquí una comunidad cálida.',
  },
  {
    pregunta: '¿Hay opciones para alimentación vegetariana o vegana?',
    respuesta: 'Sí, la alimentación es consciente y adaptada. Avísanos tus necesidades al reservar.',
  },
  {
    pregunta: '¿Cuál es la política de cancelación?',
    respuesta: 'Puedes cancelar hasta 10 días antes. Después de ese plazo, la reserva no es reembolsable.',
  },
];

export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const imagenes = [
    { src: '/images/imagen1.jpg', titulo: 'Sesión de meditación al amanecer' },
    { src: '/images/imagen1.jpg', titulo: 'Taller de escritura consciente' },
    { src: '/images/imagen1.jpg', titulo: 'Alimentación consciente' },
    { src: '/images/imagen1.jpg', titulo: 'Ceremonia de fuego' },
    { src: '/images/imagen1.jpg', titulo: 'Tiempo de descanso' },
    { src: '/images/imagen1.jpg', titulo: 'Cierre grupal en la naturaleza' },
  ];

  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev! + 1) % imagenes.length);
  const prevImage = () => setLightboxIndex((prev) => (prev! - 1 + imagenes.length) % imagenes.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[80vh]">
        <Image src={background} alt="Yoga" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            El Retiro Como Una Vía De Liberación
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

      {/* ¿QUÉ INCLUYE? */}
      <main className="p-8 text-center bg-white">
        <section className="bg-white py-16 px-6">
          <motion.h2
            className="text-4xl font-bold text-center text-green-700 mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Qué incluye el retiro?
          </motion.h2>

          <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[
              { icon: Flower, texto: 'Sesiones de yoga y meditación guiadas' },
              { icon: CupSoda, texto: 'Alimentación consciente y detox' },
              { icon: Heart, texto: 'Terapias de medicina china y energéticas' },
              { icon: CalendarDays, texto: '3 días / 2 noches de descanso profundo' },
              { icon: Moon, texto: 'Rituales bajo la luna y fuego' },
              { icon: Users, texto: 'Conexión grupal y acompañamiento emocional' },
            ].map(({ icon: Icon, texto }, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-4 rounded-lg hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-green-700 w-10 h-10" />
                <p className="text-gray-700 text-lg">{texto}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* BIENVENIDA */}
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

      {/* TARJETAS */}
      <section className="space-y-16 p-8 bg-gray-50">
        {/* Tarjeta 1 */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image src="/images/imagen1.jpg" alt="Terapia energética" width={400} height={300} className="rounded-lg shadow-lg object-cover" />
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Terapia Energética</h3>
            <p className="text-gray-600 text-lg">
              Armoniza cuerpo y mente con sesiones centradas en desbloquear emociones y restaurar tu energía vital.
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
          <Image src="/images/imagen1.jpg" alt="Coaching personal" width={400} height={300} className="rounded-lg shadow-lg object-cover" />
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-2">Coaching Personal</h3>
            <p className="text-gray-600 text-lg">
              Acompañamiento para conectar con tu propósito, liberar bloqueos mentales y avanzar hacia una vida más plena.
            </p>
          </div>
        </motion.div>
      </section>

      {/* GALERÍA */}
      <section className="py-16 px-6 bg-white">
        <motion.h2
          className="text-4xl font-bold text-center text-green-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Galería del retiro
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {imagenes.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={img.src}
                alt={img.titulo}
                width={600}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </motion.button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl mx-auto w-full" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-white" onClick={closeLightbox}>
                <X size={32} />
              </button>
              <button className="absolute left-2 top-1/2 -translate-y-1/2 text-white" onClick={prevImage}>
                <ChevronLeft size={40} />
              </button>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white" onClick={nextImage}>
                <ChevronRight size={40} />
              </button>

              <motion.div
                key={lightboxIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -100) nextImage();
                  if (info.offset.x > 100) prevImage();
                }}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={imagenes[lightboxIndex].src}
                  alt={imagenes[lightboxIndex].titulo}
                  width={1200}
                  height={800}
                  className="rounded-lg object-contain max-h-[80vh] w-full shadow-2xl"
                />
                <p className="text-white text-center mt-4 text-lg">{imagenes[lightboxIndex].titulo}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ */}
      <Faq items={preguntasRetiro} />
    </>
  );
}

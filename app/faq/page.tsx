'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const faqs = [
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

export default function FaqPage() {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <motion.h2
        className="text-4xl font-bold text-center text-green-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Preguntas Frecuentes
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map(({ pregunta, respuesta }, index) => (
          <motion.details
            key={index}
            className="bg-white rounded-lg shadow-md p-4 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <summary className="cursor-pointer font-semibold text-green-700 text-lg list-none flex justify-between items-center">
              {pregunta}
              <span className="ml-2 transform group-open:rotate-180 transition duration-300">⌄</span>
            </summary>
            <p className="mt-2 text-gray-700">{respuesta}</p>
          </motion.details>
        ))}
      </div>

      {/* CTA FINAL */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-700 mb-4">
          ¿Tienes más preguntas o quieres saber algo específico?
        </p>
        <Link
          href="/contacto"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
        >
          Contáctanos aquí
        </Link>
      </div>
    </section>
  );
}

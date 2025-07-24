'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Heart, Clock, Leaf } from 'lucide-react';

export default function Horarios() {
  return (
    <section className="min-h-screen py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* TÍTULO PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-2">Horarios</h2>
          <p className="text-gray-600 text-lg">Consulta los detalles del retiro y las sesiones personales</p>
        </motion.div>

        {/* HORARIO DEL RETIRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mb-8 flex items-center gap-3 text-green-700">
            <CalendarDays className="w-6 h-6" />
            <h3 className="text-2xl font-semibold">Programa del Retiro</h3>
          </div>

          <div className="relative border-l-4 border-green-200 pl-6 space-y-10">
            {[
              {
                dia: 'Viernes',
                bloques: [
                  '17:00 – Llegada y bienvenida',
                  '18:00 – Círculo de apertura',
                  '20:00 – Cena consciente',
                ],
              },
              {
                dia: 'Sábado',
                bloques: [
                  '08:00 – Yoga y meditación',
                  '09:30 – Desayuno',
                  '11:00 – Taller de sanación energética',
                  '14:00 – Almuerzo',
                  '17:00 – Ceremonia de fuego',
                  '20:00 – Cena',
                ],
              },
              {
                dia: 'Domingo',
                bloques: [
                  '08:30 – Paseo consciente',
                  '10:00 – Círculo de cierre',
                  '12:00 – Despedida y salida',
                ],
              },
            ].map((dia, i) => (
              <motion.div
                key={i}
                className="bg-green-50 p-4 rounded-lg shadow-md border border-green-100"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-green-800 mb-2">{dia.dia}</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {dia.bloques.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* HORARIOS INDIVIDUALES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="mb-8 flex items-center gap-3 text-green-700">
            <Clock className="w-6 h-6" />
            <h3 className="text-2xl font-semibold">Sesiones Individuales</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Andrea */}
            <motion.div
              className="bg-white border border-green-200 rounded-xl p-6 shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3 text-green-800 font-semibold">
                <Heart className="w-5 h-5" />
                Andrea
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>Lunes: 10:00 – 14:00</li>
                <li>Miércoles: 16:00 – 20:00</li>
                <li>Viernes: 10:00 – 13:00</li>
              </ul>
            </motion.div>

            {/* Diana */}
            <motion.div
              className="bg-white border border-green-200 rounded-xl p-6 shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-3 text-green-800 font-semibold">
                <Leaf className="w-5 h-5" />
                Diana
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>Martes: 10:00 – 13:00</li>
                <li>Jueves: 17:00 – 21:00</li>
                <li>Sábado: 09:00 – 12:00</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

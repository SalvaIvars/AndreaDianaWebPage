'use client';

import { motion } from 'framer-motion';

export default function Testimonios() {
  return (
    <section className="bg-gray-100 py-12 px-6 min-h-screen">
      <motion.h2
        className="text-4xl font-bold text-center text-green-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonios
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 italic mb-4">
              “Texto del testimonio {i + 1}.”
            </p>
            <h4 className="font-semibold text-green-700">Nombre {i + 1}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

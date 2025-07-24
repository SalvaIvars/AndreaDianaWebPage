'use client';

import { motion } from 'framer-motion';

export type FaqItem = {
  pregunta: string;
  respuesta: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-center text-green-700 mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Preguntas Frecuentes
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map(({ pregunta, respuesta }, index) => (
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
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function Contacto() {
  return (
    <section className="min-h-screen py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-green-700 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          ¿Tienes dudas, reservas o peticiones? Escríbenos y te responderemos con cariño.
        </motion.p>

        <motion.form
          action="https://formsubmit.co/tu-email@ejemplo.com" // Reemplaza con tu correo o acción real
          method="POST"
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <input
            type="text"
            name="nombre"
            required
            placeholder="Tu nombre"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Tu email"
            className="w-full p-3 border rounded"
          />
          <textarea
            name="mensaje"
            rows={5}
            required
            placeholder="Tu mensaje"
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Enviar mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
}

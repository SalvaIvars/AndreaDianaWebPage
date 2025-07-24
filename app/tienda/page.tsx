'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const productos = [
  {
    nombre: 'Pack Esencias Florales',
    descripcion: 'Combinación personalizada para armonizar tu energía emocional.',
    precio: '25€',
    imagen: '/images/imagen1.jpg',
  },
  {
    nombre: 'Guía de Meditaciones',
    descripcion: 'Meditaciones guiadas para cada día del retiro.',
    precio: '15€',
    imagen: '/images/imagen1.jpg',
  },
  {
    nombre: 'Sesión Individual Online',
    descripcion: 'Consulta personal de medicina china y coaching energético.',
    precio: '50€',
    imagen: '/images/imagen1.jpg',
  },
];

export default function Tienda() {
  return (
    <section className="py-12 px-6 min-h-screen bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-green-700 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tienda
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {productos.map((producto, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image src={producto.imagen} alt={producto.nombre} width={250} height={200} className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-green-700">{producto.nombre}</h3>
            <p className="text-gray-600 mt-2 mb-4">{producto.descripcion}</p>
            <span className="text-green-800 font-bold text-lg">{producto.precio}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

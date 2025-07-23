// app/tienda/page.tsx
'use client';

import Image from 'next/image';

const productos = [
  {
    nombre: 'Pack Esencias Florales',
    descripcion: 'Combinación personalizada para armonizar tu energía emocional.',
    precio: '25€',
    imagen: '/images/imagen1.jpg',
  },
  {
    nombre: 'Guía de Meditaciones',
    descripcion: 'Accede a una serie de meditaciones guiadas para cada día del retiro.',
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
      <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Tienda</h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center text-center p-6"
          >
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={250}
              height={200}
              className="rounded mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700">{producto.nombre}</h3>
            <p className="text-gray-600 mt-2 mb-4">{producto.descripcion}</p>
            <span className="text-green-800 font-bold text-lg">{producto.precio}</span>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Más info
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

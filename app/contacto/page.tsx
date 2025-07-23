// app/contacto/page.tsx
'use client';

export default function Contacto() {
  return (
    <section className="min-h-screen py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-8">Contáctame</h2>
        <p className="text-center text-gray-600 mb-12">
          ¿Tienes preguntas o quieres reservar tu lugar en el retiro? Escríbeme:
        </p>
        <form
          action="https://formsubmit.co/tu-email@ejemplo.com"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}

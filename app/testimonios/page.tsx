// app/testimonios/page.tsx
'use client';

export default function Testimonios() {
  return (
    <section className="bg-gray-100 py-12 px-6 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Testimonios</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* Testimonio 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <p className="text-gray-700 italic mb-4">
            “Una experiencia transformadora. Me sentí renovada y en paz después del retiro.”
          </p>
          <h4 className="font-semibold text-green-700">Laura M.</h4>
        </div>

        {/* Testimonio 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <p className="text-gray-700 italic mb-4">
            “El acompañamiento fue muy humano y profundo. Lo recomiendo a cualquiera que busque reconectar consigo mismo.”
          </p>
          <h4 className="font-semibold text-green-700">Carlos G.</h4>
        </div>

        {/* Testimonio 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <p className="text-gray-700 italic mb-4">
            “No es solo un retiro, es una puerta hacia una nueva versión de ti.”
          </p>
          <h4 className="font-semibold text-green-700">Ana R.</h4>
        </div>
      </div>
    </section>
  );
}

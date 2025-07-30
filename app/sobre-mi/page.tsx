"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SobreMi() {
  return (
    <>
      {/* INTRO */}
      <section className="pt-16 pb-12 px-6 bg-white relative">
        <motion.h2
          className="text-5xl font-bold text-green-700 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sobre Nosotras
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos une una misma pulsación: el deseo de acompañar procesos humanos
          desde la presencia, la sensibilidad y el movimiento.
        </motion.p>

        {/* CURVA DECORATIVA */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
            className="w-full h-20"
          >
            <path
              d="M0,0 C150,100 350,0 500,100 L500,00 L0,0 Z"
              className="fill-sky-50"
            />
          </svg>
        </div>
      </section>

      {/* ANDREA */}
      <section className="bg-purple-50 py-16 px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/imagen1.jpg"
            alt="Andrea"
            width={400}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-2">Andrea</h3>
            <p className="text-gray-700 text-lg">
              Me apasiona sostener procesos de cambio interno. En cada
              acompañamiento busco despertar propósito, claridad y confianza,
              desde una escucha respetuosa y consciente.
            </p>
          </div>
        </motion.div>
      </section>

      {/* DIANA */}
      <section className="bg-sky-50 py-16 px-6">
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/imagen1.jpg"
            alt="Diana"
            width={400}
            height={300}
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold text-sky-700 mb-2">Diana</h3>
            <p className="text-gray-700 text-lg">
              Acompaño desde el cuerpo energético, liberando bloqueos que a
              veces ni sabíamos que llevábamos. Uso herramientas de medicina
              china, escucha corporal y ritualidad.
            </p>
          </div>
        </motion.div>
      </section>

      {/* LÍNEA DE TIEMPO */}
      <section className="bg-white py-20 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-semibold text-green-800 text-center mb-6">
            Nuestro camino compartido
          </h4>
          <ul className="relative space-y-10 text-gray-700 border-l-2 border-green-300 pl-6">
            <li>
              <p className="text-sm text-green-600 font-semibold mb-1">2013</p>
              <p>Nos conocimos en una formación de conciencia corporal.</p>
            </li>
            <li>
              <p className="text-sm text-green-600 font-semibold mb-1">2018</p>
              <p>Creamos nuestro primer taller conjunto.</p>
            </li>
            <li>
              <p className="text-sm text-green-600 font-semibold mb-1">2023</p>
              <p>
                Nace <strong>Movent</strong> como espacio para retiros y
                acompañamiento integral.
              </p>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* CITA FINAL */}
      <section className="bg-green-50 py-16 px-6 text-center">
        <motion.p
          className="text-xl italic text-gray-700 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          “Creemos en la ternura del cuerpo, en la sabiduría del proceso y en la
          fuerza de caminar acompañadas.”
        </motion.p>
        <p className="text-sm text-green-800 font-semibold">Andrea & Diana</p>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <p className="text-lg text-gray-600 mb-4">
          ¿Te resuena? Estamos aquí para acompañarte.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
        >
          Conversemos
        </Link>
      </section>
    </>
  );
}

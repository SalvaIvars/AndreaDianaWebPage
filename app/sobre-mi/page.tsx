'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <section className="py-12 px-6 min-h-screen bg-white">
      <motion.h2
        className="text-4xl font-bold text-green-700 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Sobre Nosotras
      </motion.h2>

      {/* Persona 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image src="/images/imagen1.jpg" alt="Andrea" width={400} height={300} className="rounded-lg shadow-md" />
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Andrea</h3>
          <p className="text-gray-700">
            Andrea es terapeuta de medicina china y guía espiritual con más de 10 años de experiencia...
          </p>
        </div>
      </motion.div>

      {/* Persona 2 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image src="/images/imagen1.jpg" alt="Diana" width={400} height={300} className="rounded-lg shadow-md" />
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Diana</h3>
          <p className="text-gray-700">
            Diana es coach de vida y formadora en técnicas de mindfulness y desarrollo personal...
          </p>
        </div>
      </motion.div>
    </section>
  );
}

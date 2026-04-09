"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section className="bg-black py-24 px-6 relative">
      {/* Background glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 border border-gray-700 bg-gray-900/50 rounded-full mb-6">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Depoimentos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Veja o Feedback dos nossos Clientes
          </h2>
          <p className="text-gray-400 font-inter">
            Isso é só alguns retornos que tivemos de clientes que fecharam projetos com nossa equipe
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#151515]/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative quote mark */}
          <div className="absolute top-4 right-8 text-7xl text-gray-800 font-serif opacity-30 select-none">"</div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex -space-x-4">
              {/* Fake Avatars overlapped */}
              <div className="w-20 h-20 rounded-full bg-gray-700 border-4 border-[#151515] bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop')] bg-cover" />
              <div className="w-20 h-20 rounded-full bg-gray-600 border-4 border-[#151515] bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop')] bg-cover" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
                ))}
                <span className="ml-2 text-white font-medium">5.0</span>
              </div>
              <p className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed mb-6 italic">
                "Estamos há mais de 7 anos trabalhando com excelência e comprometimento com todos nossos clientes, transparência e seriedade é o nosso lema e visão de negócio..."
              </p>
              <div>
                <h4 className="text-white font-bold font-montserrat">Fundadores e Sócio da N&E Marketing</h4>
                <span className="text-[#FFB800] text-sm">Cliente Especial</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

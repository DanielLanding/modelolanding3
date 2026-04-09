"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviewsData = [
  {
    name: "Misael Maramaldo",
    niche: "Mentor em Finanças",
    text: "Estamos a alguns meses de Assessoria e Consigo Ver os ganhos Foi uma Ótima escolha trabalhar com vocês. Resultados incríveis",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop"
  },
  {
    name: "Nilton Silva",
    niche: "Mentor de Relacionamentos",
    text: "Minha empresa ja faturou 2 Milhões a 1 ano e em menos de 1 mês que fechamos a consultoria completa a ganhos ja Passaram da minha marca.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    name: "Natalia Beauty",
    niche: "Mentoria de Beleza",
    text: "Esse time eh foda a estetica virou o maior sucesso graças a Vocês! Rendimento alto e passamos de uma salinha pra clínica de 3 andares em São Paulo!",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=150&h=150&fit=crop"
  }
];

const StatBox = ({ value, label }: { value: string, label: string }) => (
  <div className="bg-[#111111]/80 border border-white/5 rounded-xl p-4 md:p-5 flex flex-col items-center lg:items-start min-w-[110px] flex-1 lg:flex-none backdrop-blur-sm">
    <span className="text-xl md:text-2xl font-bold font-montserrat text-white mb-0.5">{value}</span>
    <span className="text-[#64748b] text-[10px] md:text-xs text-center lg:text-left leading-tight">{label}</span>
  </div>
);

export default function Reviews() {
  return (
    <section className="bg-black py-24 px-6 relative">
      {/* Background glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Lado Esquerdo - Titulação e Estatísticas */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left lg:sticky lg:top-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="inline-block px-4 py-1.5 border border-white/10 bg-black/40 backdrop-blur-md rounded-full mb-4 md:mb-6">
              <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Depoimentos</span>
            </div>
            
            <h2 className="text-[26px] sm:text-[28px] md:text-[40px] font-montserrat font-bold text-white mb-3 md:mb-6 leading-tight">
              Veja o Feedback<br className="hidden md:block"/> dos nossos Clientes
            </h2>
            
            <p className="text-[#64748b] font-inter text-[12px] sm:text-sm md:text-[15px] px-6 lg:px-0 max-w-sm mx-auto lg:mx-0">
              Isso é só alguns retornos que tivemos de clientes que fecharam projetos com nossa equipe
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap md:flex-nowrap gap-3 md:gap-4 mt-8 md:mt-10 lg:mt-12 w-full justify-center lg:justify-start px-2 lg:px-0"
          >
            <StatBox value="+07" label="Lançamentos no ano" />
            <StatBox value="99%" label="avaliações em 5 estrelas" />
            <StatBox value="4.8M" label="Faturamento em 2024" />
          </motion.div>
        </div>

        {/* Lado Direito - Cards de Depoimento empilhados */}
        <div className="lg:col-span-7 flex flex-col gap-5 md:gap-6 mt-4 lg:mt-0 w-full max-w-2xl mx-auto lg:ml-auto">
          {reviewsData.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-[#111111]/80 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/5 shadow-2xl relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 overflow-hidden bg-gray-800 shrink-0">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold font-montserrat text-sm md:text-base">{review.name}</h4>
                  <span className="text-[#FFB800] text-[10px] md:text-xs font-semibold uppercase tracking-wider">{review.niche}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>
              
              <p className="text-[#d1d5db] text-sm md:text-[15px] font-inter leading-relaxed italic">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

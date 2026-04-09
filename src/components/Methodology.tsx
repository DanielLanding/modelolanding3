"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "Gênesis",
    subtitle: "PRIMEIRA FASE - 4 DIAS",
    items: [
      "Pesquisa de Mercado",
      "Definição da Persona",
      "Definição do Produto",
      "Formato da Entrega",
      "Precificação atual",
      "Criação dos Bônus",
      "Mapa Mental das Aulas",
      "Reunião Semanal"
    ]
  },
  {
    title: "Êxodo",
    subtitle: "SEGUNDA FASE - 8 DIAS",
    items: [
      "Copywriting Ofertas",
      "Funis de Vendas",
      "Checkout",
      "Área de Membros",
      "Identidade Visual",
      "Criativos de Anúncio",
      "Config. de Produtos",
      "Automações de mkt"
    ]
  },
  {
    title: "Kairós",
    subtitle: "TERCEIRA FASE - 3 DIAS",
    items: [
      "Testes A/B de Páginas",
      "Validação de Criativos",
      "Validação de Públicos",
      "Validação de Ofertas",
      "Configuração BM",
      "FAMOSO ORDER BUMP",
      "CAMP. EMAIL MKT",
      "CAMP. WHATSAPP CRM"
    ]
  }
];

export default function Methodology() {
  return (
    <section className="bg-black py-24 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-block px-3 md:px-4 py-1 border border-gray-700 bg-gray-900/50 rounded-full mb-4 md:mb-6">
            <span className="text-[#FFB800] text-[10px] md:text-xs font-bold uppercase tracking-widest">Metodologia</span>
          </div>
          <h2 className="text-[28px] md:text-5xl font-montserrat font-bold text-white mb-4 md:mb-6 uppercase leading-tight">
            Como Podemos<br className="md:hidden" /> Te Ajudar?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-none mx-auto">
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl md:rounded-[2rem] p-6 md:p-10 flex flex-col items-center md:items-start text-center md:text-left shadow-xl hover:-translate-y-2 transition-transform duration-300 mx-2 md:mx-0"
            >
              <h3 className="text-2xl md:text-3xl font-poppins font-black text-black mb-1">{phase.title}</h3>
              <p className="text-gray-500 font-bold text-xs md:text-sm tracking-wider mb-6 md:mb-8">{phase.subtitle}</p>
              
              <ul className="w-full space-y-2.5 md:space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="bg-black rounded-full px-4 md:px-5 py-2.5 md:py-3 text-white text-[13px] md:text-sm font-medium w-full flex items-center justify-center md:justify-between">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

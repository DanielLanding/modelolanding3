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
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 border border-gray-700 bg-gray-900/50 rounded-full mb-6">
            <span className="text-[#FFB800] text-xs font-bold uppercase tracking-widest">Metodologia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6 uppercase">
            Como Podemos Te Ajudar?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white rounded-[2rem] p-10 flex flex-col items-start shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-3xl font-poppins font-black text-black mb-1">{phase.title}</h3>
              <p className="text-gray-500 font-bold text-sm tracking-wider mb-8">{phase.subtitle}</p>
              
              <ul className="w-full space-y-3">
                {phase.items.map((item, i) => (
                  <li key={i} className="bg-black rounded-full px-5 py-3 text-white text-sm font-medium w-full flex items-center justify-between">
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

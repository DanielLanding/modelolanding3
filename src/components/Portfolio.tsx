"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    name: "Camila Rossi",
    niche: "Expert no nicho financeiro especialista em escalar empresas e gerar lucro.",
    handle: "@ricocomcamila",
    link: "https://www.behance.net/gallery/213353291/LANCAMENTO-CAMILA-ROSSI",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Christian Hluchman",
    niche: "Expert no nicho de desenvolvimento pessoal especialista em treinamento comportamental.",
    handle: "@christianhluchan",
    link: "https://www.behance.net/gallery/213353411/LANCAMENTO-CHRISTIAN-HLUCHAN",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Daiane Souza",
    niche: "Expert no nicho da estética especialista em aplicação de Mega Hair.",
    handle: "@daianesousa_",
    link: "https://www.behance.net/gallery/213351827/LANCAMENTO-MEGA-HAIR",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Portfolio() {
  return (
    <section className="bg-black py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Mas antes de avançar veja alguns<br className="hidden md:block"/> dos nossos Lançamentos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-inter">
            São materiais de alta performance para você vender tranquilamente seu produto pelo preço que ele vale...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#151515] border border-gray-800"
            >
              <Image 
                src={item.img} 
                alt={item.name}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold font-montserrat text-white mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-300 font-inter mb-4 line-clamp-3">
                    {item.niche}
                  </p>
                  <p className="text-primary-gold font-medium text-sm mb-6">
                    {item.handle}
                  </p>
                  
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black bg-[#FFB800] px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#FFB800]/90"
                  >
                    Ver Materiais <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

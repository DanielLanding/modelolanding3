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
    <section className="bg-black pt-8 pb-24 md:py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-[24px] sm:text-[26px] md:text-5xl font-montserrat font-bold text-white mb-4 md:mb-6 leading-[1.2] md:leading-tight tracking-tight px-4 md:px-0">
            Mas antes de avançar <br className="md:hidden" />
            <span className="md:hidden">veja</span><br className="md:hidden" />
            <span className="hidden md:inline"> veja </span>
            alguns dos nossos <br className="md:hidden" />
            Lançamentos
          </h2>
          <p className="text-[12px] sm:text-xs md:text-base text-[#8f8f8f] max-w-2xl mx-auto font-inter px-8 md:px-0 leading-relaxed md:leading-normal">
            São materiais de alta performance para você vender<br className="md:hidden" /> tranquilamente seu produto pelo preço que ele<br className="md:hidden" /> vale...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-sm md:max-w-none mx-auto">
          {portfolioItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#151515] border border-white/5"
            >
              <Image 
                src={item.img} 
                alt={item.name}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg md:text-2xl font-bold font-montserrat text-white mb-1.5 md:mb-2">{item.name}</h3>
                  <p className="text-[11px] md:text-sm text-[#d1d1d1] font-inter mb-3 md:mb-4 line-clamp-3 leading-relaxed">
                    {item.niche}
                  </p>
                  <p className="text-primary-gold font-semibold text-[11px] md:text-sm mb-4 md:mb-6">
                    {item.handle}
                  </p>
                  
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-[9px] md:text-xs font-bold uppercase text-black bg-[#FFD100] hover:bg-[#FFD100]/90 px-4 py-2.5 md:px-6 md:py-3.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 w-max md:w-full"
                  >
                    VER MATERIAIS DO LANÇAMENTO +
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

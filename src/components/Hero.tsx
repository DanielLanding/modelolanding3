"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Flame } from "lucide-react";
import LeadFormModal from "./LeadFormModal";

const FloatingCard = ({ delay, className, text }: { delay: number, className: string, text: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: [0, -15, 0] }}
    transition={{
      delay,
      opacity: { duration: 0.8 },
      y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }}
    className={`absolute bg-[#151515]/40 backdrop-blur-md rounded-lg p-3 flex items-center gap-3 shadow-lg z-20 ${className}`}
  >
    <div className="bg-[#E74C3C]/90 p-2 rounded-md">
      <Flame className="w-5 h-5 text-white" />
    </div>
    <div className="pr-4">
      <p className="text-white/90 text-xs font-semibold">{text}</p>
      <p className="text-gray-400/90 text-[10px]">Sua comissão: R$798,58 - HP5953544782</p>
    </div>
    <span className="text-gray-500/80 text-[10px] self-start ml-2">há 1h</span>
  </motion.div>
);

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-24 pb-4 lg:pb-12 lg:pt-0">
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Imagem de Fundo Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/CAPA-3-scaled.png"
          alt="Background Hero Desktop"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* Imagem de Fundo Mobile */}
      <div className="absolute inset-0 z-0 block md:hidden bg-black">
        <Image
          src="/Design-sem-nome.png"
          alt="Background Hero Mobile"
          fill
          className="object-cover object-top pointer-events-none"
          priority
        />
        {/* Gradiente adicional para garantir legibilidade no mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000000] pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 30%, #000000 65%, #000000 100%)" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 relative z-10 pt-0 md:pt-0 pb-4 lg:pb-0 h-full">

        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 lg:pr-10 lg:pt-24"
        >
          <div className="inline-flex items-center gap-2 border border-white/10 lg:border-white/5 rounded-full px-4 py-1.5 md:px-4 md:py-1.5 bg-black lg:bg-black/30 backdrop-blur-sm z-10">
            {/* Outline dot instead of target icon */}
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-[1.5px] h-[1.5px] bg-white rounded-full"></div>
            </div>
            <span className="text-[10px] md:text-[10px] font-bold tracking-widest text-white uppercase mt-px">
              + DE 6 ANOS DE EXPERIÊNCIA
            </span>
          </div>

          <h1 className="text-[24px] sm:text-[26px] md:text-4xl lg:text-[54px] font-poppins font-semibold text-white leading-[1.2] lg:leading-[1.1] tracking-tight mt-3 mb-2 px-2 lg:px-0">
            Fazemos seu Lançamento <br />
            Completo do zero até as <br />
            Primeiras Vendas
          </h1>

          <p className="text-gray-300 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[18px] font-inter leading-[1.6] max-w-[340px] md:max-w-lg lg:max-w-[600px] mt-1 lg:mt-4 px-1 lg:px-0">
            Mesmo que você esteja começando do zero, sem<br className="md:hidden" />
            produto, sem audiência e sem saber o que fazer...<br className="md:hidden" />
            nós entramos com estratégia, execução e<br className="md:hidden" />
            acompanhamento pra colocar sua oferta no ar e<br className="md:hidden" />
            vender.
          </p>

          <div className="mt-3 lg:mt-6 w-full max-w-[420px] lg:max-w-[500px] flex flex-col items-center lg:items-start">
            <button
              onClick={() => setModalOpen(true)}
              className="flex w-full items-center justify-center bg-[#FFD100] text-black font-semibold text-[13px] lg:text-[16px] uppercase px-8 py-4 lg:py-4 md:py-3.5 rounded-full hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(255,209,0,0.15)] tracking-wide"
            >
              QUERO LANÇAR MEU PRODUTO!
            </button>
            <p className="hidden md:block mt-4 lg:mt-5 text-[#8b8b8b] text-[11px] lg:text-[13px] font-inter leading-snug md:pr-4 px-4 lg:px-0">
              Feito para quem quer parar de rasgar dinheiro e brincar de<br className="hidden md:block" /> marketing digital.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Image & Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-[320px] md:h-[600px] lg:h-[800px] flex items-end justify-center pointer-events-none lg:pointer-events-auto"
        >
          {/* Floating Hotmart-style Cards */}
          <FloatingCard
            delay={0.2}
            className="hidden lg:flex top-12 md:top-1/4 -left-4 md:-left-8 lg:-left-20 scale-[0.85] lg:scale-100"
            text="Venda realizada com Cartão"
          />
          <FloatingCard 
            delay={1.5} 
            className="top-6 sm:top-10 lg:top-2/3 -left-2 md:left-4 lg:left-10 scale-[0.70] md:scale-[0.8] lg:scale-75 origin-left opacity-90" 
            text="Venda realizada com Cartão de crédito" 
          />

        </motion.div>
      </div>
    </section>
  );
}

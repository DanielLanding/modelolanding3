"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Flame } from "lucide-react";

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
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-0">
      {/* Imagem de Fundo customizada sem desfoque e escuridão */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/CAPA-3-scaled.png"
          alt="Background Hero"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6 lg:pr-10"
        >
          <div className="inline-flex items-center gap-2 border border-gray-800 rounded-full px-4 py-1.5 bg-transparent">
            {/* Outline dot instead of target icon */}
            <div className="w-2.5 h-2.5 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
            </div>
            <span className="text-[10px] font-bold tracking-widest text-white uppercase mt-px">
              + DE 6 ANOS DE EXPERIÊNCIA
            </span>
          </div>

          <h1 className="text-4xl lg:text-[42px] font-poppins font-semibold text-white leading-[1.15] tracking-tight mt-2">
            Fazemos seu <br /> Lançamento Completo<br />
            do zero até as <br />
            Primeiras Vendas
          </h1>

          <p className="text-gray-300 text-[15px] font-inter leading-relaxed max-w-lg mt-2">
            Mesmo que você esteja começando do zero, sem produto, sem<br className="hidden md:block" /> audiência e sem saber o que fazer...<br />
            nós entramos com estratégia, execução e acompanhamento<br className="hidden md:block" /> pra colocar sua oferta no ar e vender.
          </p>

          <div className="mt-4 w-full max-w-[420px]">
            <a
              href="#cta"
              className="flex w-full items-center justify-center bg-[#FFD100] text-black font-semibold text-[13px] uppercase px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-colors"
            >
              QUERO LANÇAR MEU PRODUTO!
            </a>
            <p className="mt-4 text-[#8b8b8b] text-[11px] font-inter leading-snug pr-4">
              Feito para quem quer parar de rasgar dinheiro e brincar de<br /> marketing digital.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Image & Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full h-[600px] lg:h-[800px] flex items-end justify-center"
        >
          {/* Floating Hotmart-style Cards */}
          <FloatingCard
            delay={0.2}
            className="top-1/4 -left-8 lg:-left-20"
            text="Venda realizada com Cartão"
          />
          <FloatingCard 
            delay={1.5} 
            className="top-2/3 left-4 lg:left-10 scale-[0.8] lg:scale-75 origin-left opacity-90" 
            text="Venda realizada com Cartão de crédito" 
          />

        </motion.div>
      </div>
    </section>
  );
}

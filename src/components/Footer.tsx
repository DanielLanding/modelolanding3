import Image from "next/image";

const Facebook = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:items-end justify-between">
        
        {/* Lado Esquerdo - Fundadores (Desktop) / Move pro final no Mobile */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 lg:pr-12">
          <div className="flex -space-x-4 mb-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#0D0D0D] bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop')] bg-cover" />
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#0D0D0D] bg-[url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop')] bg-cover" />
          </div>
          <h4 className="text-[#FFB800] font-bold font-montserrat text-xs md:text-sm mb-2 uppercase">Fundadores e Sócio da N&E Marketing</h4>
          <p className="text-[#64748b] text-[9px] md:text-xs max-w-md leading-relaxed">
            Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores – Uma escola completa e pronta para lhe ensinar, na prática, o que fazer para ter sucesso em todas as áreas da sua vida no mercado imobiliário, com o propósito de transformar pessoas, elevar o nível da profissão e levar prosperidade a todos que tem paixão por vencer.
          </p>
        </div>

        {/* Lado Direito - Logo e Copyright */}
        <div className="flex flex-col items-center lg:items-end text-center lg:text-right order-1 lg:order-2 w-full">
          <h2 className="text-xl md:text-3xl font-black font-montserrat text-white mb-6 lg:mb-8 tracking-widest uppercase">
            O ESTRATEGISTA
          </h2>

          <div className="text-[#475569] text-[9px] md:text-[11px] flex flex-col items-center lg:items-end gap-1.5 md:gap-2 w-full mb-6 lg:mb-8 font-inter">
            <span className="font-semibold text-gray-400">Copyright © 2024, NEE Marketing.</span>
            <div className="flex items-center gap-1.5 md:gap-2">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
            <span className="max-w-[280px] lg:max-w-xs mt-1">Todos os direitos reservados pertencem aos seus respectivos criadores.</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mt-2 md:mt-0">
            <div className="opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image 
                src="/ibraciv_logo.png" 
                alt="Assinatura Ibraciv" 
                width={90} 
                height={30} 
                className="object-contain" 
              />
            </div>

            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/neemarketiing?locale=pt_BR" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-800 bg-transparent flex items-center justify-center text-gray-500 hover:border-[#FFB800] hover:text-[#FFB800] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a 
                href="https://www.instagram.com/neemarketing_/" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-800 bg-transparent flex items-center justify-center text-gray-500 hover:border-[#FFB800] hover:text-[#FFB800] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

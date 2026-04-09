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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-black font-montserrat text-white mb-2 tracking-widest uppercase">
            O Estrategista
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mb-5 leading-relaxed">
            Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores – Uma escola completa e pronta para lhe ensinar, na prática, o que fazer para ter sucesso em todas as áreas da sua vida no mercado imobiliário, com o propósito de transformar pessoas, elevar o nível da profissão e levar prosperidade a todos que tem paixão por vencer.
          </p>
          
          <div className="mb-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <Image 
              src="/ibraciv_logo.png" 
              alt="Assinatura Ibraciv" 
              width={120} 
              height={40} 
              className="object-contain" 
            />
          </div>

          <div className="text-gray-600 text-xs flex gap-2">
            <span>Copyright © 2024, Ibraciv.</span>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "O Estrategista – 2026",
  description: "+ DE 6 ANOS DE EXPERIÊNCIA Fazemos seu Lançamento Completo do zero até as Primeiras Vendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} ${poppins.variable} min-h-screen antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white font-montserrat">{children}</body>
    </html>
  );
}

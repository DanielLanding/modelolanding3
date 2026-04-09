"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [form, setForm] = useState({ nome: "", whatsapp: "", email: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrar com backend/CRM
    alert(`Obrigado, ${form.nome}! Entraremos em contato em breve.`);
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="inline-block bg-[#FFD100]/10 text-[#FFD100] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                Primeiro Passo
              </span>
              <h2 className="text-white text-2xl font-poppins font-semibold leading-snug">
                Vamos lançar seu produto
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Preencha os dados abaixo e entraremos em contato.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-300 text-xs font-semibold uppercase tracking-wide">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome completo"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-[16px] md:text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD100]/60 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-300 text-xs font-semibold uppercase tracking-wide">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="(11) 99999-9999"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-[16px] md:text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD100]/60 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-300 text-xs font-semibold uppercase tracking-wide">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-[16px] md:text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD100]/60 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-[#FFD100] text-black font-semibold text-[13px] uppercase tracking-wide px-8 py-4 md:py-3.5 rounded-full hover:bg-yellow-400 transition-colors"
              >
                Quero Lançar Meu Produto!
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
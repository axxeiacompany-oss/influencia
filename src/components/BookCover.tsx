import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck, 
  Award,
  Crown,
  Share2,
  Bookmark
} from 'lucide-react';
import { EBOOK_META } from '../data/ebookData';

interface BookCoverProps {
  onStartReading: () => void;
  onOpenWorksheet: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({
  onStartReading,
  onOpenWorksheet
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#14161f] via-[#0f1017] to-[#0a0a0f] border border-[#2b2d3c] shadow-2xl p-6 sm:p-12 mb-12">
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Book 3D Mockup / Luxury Cover Card */}
        <div className="w-full sm:w-72 lg:w-80 shrink-0 group perspective-1000">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-[#d4af37]/40 aspect-[3/4] bg-[#0c0d12] flex flex-col justify-between p-6 transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
            
            {/* Embedded Cover Image Background if available with overlay */}
            <img 
              src="/src/assets/images/metodo_influencia_cover_1791328984258.jpg" 
              alt="Capa Método Influência Milionária"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-75 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0e] via-[#0a0c12]/80 to-transparent" />

            {/* Top Emblem */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#f5d77f] text-[10px] tracking-widest uppercase font-mono">
                <Crown className="w-3.5 h-3.5" />
                <span>Edição Masterclass</span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono">2026</span>
            </div>

            {/* Middle Title */}
            <div className="relative z-10 my-auto text-center py-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#d4af37] block mb-1">
                O Método Definitivo
              </span>
              <h1 className="font-editorial-heading text-2xl sm:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#fff2cc] via-[#f5d77f] to-[#c59d3f] leading-tight">
                MÉTODO INFLUÊNCIA MILIONÁRIA
              </h1>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-3" />
              <p className="text-[11px] text-zinc-300 font-light tracking-wide uppercase">
                Influência · Estratégia · Posicionamento · Ação
              </p>
            </div>

            {/* Bottom Footer on Book */}
            <div className="relative z-10 border-t border-[#d4af37]/30 pt-3 text-center">
              <p className="text-[10px] text-zinc-400 italic">
                “Seu valor só cresce quando percebido e comunicado.”
              </p>
            </div>
          </div>
        </div>

        {/* Text Presentation & Value Proposition */}
        <div className="flex-1 text-left space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#f5d77f] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Versão Completa & Interativa Aprimorada</span>
          </div>

          <h2 className="font-editorial-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight leading-tight">
            Transforme seu Conhecimento em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae8b4] via-[#f5d77f] to-[#c59d3f]">Autoridade Magnética</span> e Faturamento Real.
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            O original era um rascunho de apenas 9 páginas esparsas. Esta edição expandida entrega o ecossistema completo: frameworks aprofundados, matriz de conteúdo G.P.E.E.A, arquitetura de oferta de alto valor, gerador inteligente de ganchos e um caderno de exercícios executivo com salvamento automático.
          </p>

          {/* 4 Pillars Tags */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            {EBOOK_META.pillares.map((p, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-[#171923] border border-[#2b2e3c] text-center">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#d4af37] block">Pilar 0{idx + 1}</span>
                <span className="text-xs font-semibold text-zinc-200">{p}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={onStartReading}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c59d3f] to-[#b88c1c] text-[#0d0e12] font-bold text-sm shadow-xl shadow-[#d4af37]/20 hover:from-[#fae8b4] hover:to-[#c59d3f] transition-all transform active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>Iniciar Leitura da Obra</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onOpenWorksheet}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#1a1c27] hover:bg-[#222533] border border-[#333649] text-zinc-200 font-semibold text-sm transition-all"
            >
              <span>Abrir Caderno de Ação</span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-400 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" /> 8 Capítulos Aprofundados
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" /> 100% Livre de Promessas Falsas
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

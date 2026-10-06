import React from 'react';
import { CHAPTERS, EBOOK_META } from '../data/ebookData';
import { UserAnswers } from '../utils/storage';
import { Printer, ArrowLeft, Check, Sparkles } from 'lucide-react';

interface PrintDocumentProps {
  userAnswers: UserAnswers;
  onClose: () => void;
}

export const PrintDocument: React.FC<PrintDocumentProps> = ({
  userAnswers,
  onClose
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-900">
      
      {/* Floating Toolbar (Hidden when printing) */}
      <div className="sticky top-0 z-50 bg-[#12131a] border-b border-[#292c3c] p-4 text-white no-print shadow-xl">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg bg-zinc-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Leitor Interativo</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-400 hidden sm:inline">
              Dica: Na janela de impressão, escolha <strong>Salvar como PDF</strong>.
            </span>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88c1c] text-zinc-950 font-bold text-xs sm:text-sm shadow-lg hover:from-[#fae8b4] transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Salvar em PDF Agora</span>
            </button>
          </div>
        </div>
      </div>

      {/* Printable Paper Canvas (A4 Styled container) */}
      <div className="max-w-4xl mx-auto my-6 p-4 sm:p-12 bg-white text-zinc-900 shadow-2xl font-editorial-sans print:my-0 print:p-0 print:shadow-none print:max-w-none">
        
        {/* PAGE 1: LUXURY PRINT COVER */}
        <div className="min-h-[297mm] p-12 flex flex-col justify-between border-8 border-[#d4af37]/40 relative print-page-break">
          {/* Subtle interior border */}
          <div className="absolute inset-4 border border-[#d4af37]/60 pointer-events-none" />

          {/* Top Header */}
          <div className="text-center pt-8">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#926514] font-bold block mb-2">
              Edição Masterclass Estratégica
            </span>
            <div className="w-12 h-0.5 bg-[#926514] mx-auto" />
          </div>

          {/* Center Title */}
          <div className="text-center my-auto py-12">
            <h1 className="font-editorial-heading text-4xl sm:text-5xl font-black tracking-wider text-zinc-900 leading-tight">
              MÉTODO INFLUÊNCIA<br />
              <span className="text-[#926514]">MILIONÁRIA</span>
            </h1>
            
            <p className="mt-4 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-zinc-600 font-semibold">
              E-book & Caderno de Ação Estratégico
            </p>

            <div className="my-8 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#926514] font-medium">
              <span>Influência</span>
              <span>•</span>
              <span>Estratégia</span>
              <span>•</span>
              <span>Posicionamento</span>
              <span>•</span>
              <span>Ação</span>
            </div>

            <div className="max-w-lg mx-auto p-6 bg-zinc-50 border-y border-[#d4af37]/40 my-8">
              <p className="font-editorial-serif italic text-base sm:text-lg text-zinc-800 leading-relaxed">
                {EBOOK_META.coreQuote}
              </p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="text-center pb-6 border-t border-zinc-200 pt-4">
            <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
              Material Educacional & Guia de Aplicação Executiva
            </p>
            <p className="text-[10px] text-zinc-400 mt-1">
              Todos os direitos reservados · Versão 2026
            </p>
          </div>
        </div>

        {/* PAGE 2: SUMÁRIO EXECUTIVO */}
        <div className="min-h-[297mm] p-12 flex flex-col justify-between print-page-break">
          <div>
            <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-3 mb-8">
              <h2 className="font-editorial-heading text-2xl font-black uppercase tracking-wider text-zinc-900">
                Sumário Executivo
              </h2>
              <span className="text-xs font-mono text-[#926514] font-bold">Método Influência Milionária</span>
            </div>

            <div className="space-y-4">
              {CHAPTERS.map((c) => (
                <div key={c.number} className="flex items-baseline justify-between py-2 border-b border-zinc-100">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono font-bold text-sm text-[#926514]">
                      0{c.number}.
                    </span>
                    <div>
                      <span className="font-semibold text-zinc-900 text-sm">
                        {c.title}
                      </span>
                      <p className="text-xs text-zinc-500 font-light mt-0.5">
                        {c.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-zinc-400">Pág. 0{c.number + 2}</span>
                </div>
              ))}

              <div className="flex items-baseline justify-between py-2 border-b border-zinc-100">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono font-bold text-sm text-[#926514]">09.</span>
                  <div>
                    <span className="font-semibold text-zinc-900 text-sm">Caderno de Ação & Respostas do Leitor</span>
                    <p className="text-xs text-zinc-500 font-light mt-0.5">Exercícios e compromissos personalizados</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-400">Pág. 11</span>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-3 flex justify-between text-[10px] text-zinc-400 font-mono">
            <span>Método Influência Milionária</span>
            <span>Página 2</span>
          </div>
        </div>

        {/* PAGES 3+: CHAPTERS */}
        {CHAPTERS.map((c) => (
          <div key={c.number} className="min-h-[297mm] p-12 flex flex-col justify-between print-page-break">
            <div>
              {/* Chapter Header */}
              <div className="border-b-2 border-zinc-900 pb-3 mb-6 flex items-baseline justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#926514] font-bold block mb-1">
                    Capítulo 0{c.number}
                  </span>
                  <h2 className="font-editorial-heading text-2xl font-black text-zinc-900">
                    {c.title}
                  </h2>
                </div>
                <span className="text-xs font-mono text-zinc-400">{c.readTime}</span>
              </div>

              <div className="p-3 bg-zinc-50 border-l-4 border-[#926514] mb-6 text-xs italic text-zinc-700">
                “{c.tagline}”
              </div>

              {/* Sections */}
              <div className="space-y-6 text-xs sm:text-sm text-zinc-800 leading-relaxed font-light">
                {c.sections.map((sec) => (
                  <div key={sec.id} className="space-y-2">
                    <h3 className="font-editorial-heading font-bold text-sm text-zinc-900">
                      {sec.title}
                    </h3>
                    {sec.content.map((p, idx) => (
                      <p key={idx} className="text-justify leading-relaxed">
                        {p}
                      </p>
                    ))}

                    {sec.callout && (
                      <div className="p-3 my-3 bg-amber-50/60 border border-amber-200 rounded text-xs text-zinc-800">
                        <strong className="block text-[#926514] mb-1 uppercase tracking-wider text-[10px] font-mono">
                          ★ {sec.callout.title}
                        </strong>
                        {sec.callout.text}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaway */}
              <div className="mt-8 p-4 bg-zinc-100 border border-zinc-200 text-center rounded">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#926514] font-bold block mb-1">
                  Princípio Central
                </span>
                <p className="font-editorial-serif italic text-sm text-zinc-800">
                  “{c.keyTakeaway}”
                </p>
              </div>
            </div>

            {/* Page Footer */}
            <div className="border-t border-zinc-200 pt-3 flex justify-between text-[10px] text-zinc-400 font-mono">
              <span>Método Influência Milionária</span>
              <span>Página {c.number + 2}</span>
            </div>
          </div>
        ))}

        {/* FINAL PAGE: WORKSHEET & CHECKLIST SUMMARY */}
        <div className="min-h-[297mm] p-12 flex flex-col justify-between print-page-break">
          <div>
            <div className="border-b-2 border-zinc-900 pb-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#926514] font-bold block mb-1">
                Caderno de Aplicação Executiva
              </span>
              <h2 className="font-editorial-heading text-2xl font-black text-zinc-900">
                Seu Plano Personalizado
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3 border border-zinc-300 rounded bg-zinc-50">
                <strong className="block text-zinc-900 font-bold mb-1 uppercase tracking-wider text-[10px]">
                  1. Minha Declaração de Posicionamento:
                </strong>
                <p className="text-zinc-800 whitespace-pre-wrap font-mono text-[11px]">
                  {userAnswers.posicionamentoFormula}
                </p>
              </div>

              <div className="p-3 border border-zinc-300 rounded bg-zinc-50">
                <strong className="block text-zinc-900 font-bold mb-1 uppercase tracking-wider text-[10px]">
                  2. Mapeamento de Concorrentes & Território:
                </strong>
                <p className="text-zinc-800 whitespace-pre-wrap font-mono text-[11px]">
                  {userAnswers.concorrentesAnalise}
                </p>
              </div>

              <div className="p-3 border border-zinc-300 rounded bg-zinc-50">
                <strong className="block text-zinc-900 font-bold mb-1 uppercase tracking-wider text-[10px]">
                  3. Estrutura da Oferta Mínima:
                </strong>
                <p className="text-zinc-800 whitespace-pre-wrap font-mono text-[11px]">
                  {userAnswers.estruturaOferta}
                </p>
              </div>

              <div className="p-3 border border-zinc-300 rounded bg-zinc-50">
                <strong className="block text-zinc-900 font-bold mb-1 uppercase tracking-wider text-[10px]">
                  4. Termo de Compromisso dos 30 Dias:
                </strong>
                <p className="text-zinc-800 whitespace-pre-wrap font-mono text-[11px]">
                  {userAnswers.compromisso30Dias}
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="mt-6 border-t border-zinc-200 pt-4">
              <h4 className="font-editorial-heading font-bold text-xs uppercase tracking-wider text-zinc-900 mb-2">
                Checklist de Validação Final
              </h4>
              <div className="space-y-1.5 text-xs text-zinc-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-zinc-900">[✓]</span> Sei quem quero ajudar.
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-zinc-900">[✓]</span> Sei qual problema resolvo.
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-zinc-900">[✓]</span> Tenho uma mensagem clara.
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-zinc-900">[✓]</span> Tenho pilares de conteúdo definidos.
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-zinc-900">[✓]</span> Tenho uma oferta com processo e entregáveis.
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-zinc-900">[✓]</span> Tenho uma chamada para ação clara sem ruído.
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-zinc-900">[✓]</span> Tenho um plano de execução de 30 dias ativo.
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-200 pt-3 flex justify-between text-[10px] text-zinc-400 font-mono">
            <span>Método Influência Milionária</span>
            <span>Página 11 (Fim do Documento)</span>
          </div>
        </div>

      </div>
    </div>
  );
};

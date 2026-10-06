import React from 'react';
import { 
  X, 
  Check, 
  AlertCircle, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Layout, 
  Zap, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface BeforeAfterModalProps {
  onClose?: () => void;
  onGoToReader: () => void;
}

export const BeforeAfterModal: React.FC<BeforeAfterModalProps> = ({
  onClose,
  onGoToReader
}) => {
  const comparisons = [
    {
      aspect: "Design & Identidade Visual",
      before: "Documento Word/Google Docs simples, fonte Arial/Times básica em fundo branco com mais de 80% de espaço vazio não aproveitado.",
      after: "Identidade editorial Masterclass de alto luxo (Obsidian Charcoal & Gold Foil), tipografia nobre (Cinzel + Newsreader), grid moderno e capas estilizadas."
    },
    {
      aspect: "Profundidade de Conteúdo",
      before: "Apenas 1 a 2 frases curtas por página. Conceitos esquemáticos sem detalhamento de mercado ou nuances estratégicas.",
      after: "Capítulos densos e substanciais. Cada princípio explicado com causa raiz, estudos de caso, psicologia da audiência e armadilhas a evitar."
    },
    {
      aspect: "Visualização de Frameworks",
      before: "Listas de texto simples (1, 2, 3, 4) sem nenhum suporte visual, gráfico ou fluxo de raciocínio.",
      after: "Frameworks visuais interativos dos 4 Pilares, o Sistema de Roteiros G.P.E.E.A e a Pirâmide do Funil de Confiança em 5 estágios."
    },
    {
      aspect: "Aplicação Prática & Exercícios",
      before: "Instruções soltas como 'escreva em uma frase' sem espaço para preenchimento ou validação.",
      after: "Caderno Executivo Interativo com formulários estruturados, modelos por nicho (B2B, Finanças, Saúde, Design, Tech) e salvamento em tempo real."
    },
    {
      aspect: "Ferramentas & Aceleradores",
      before: "Nenhuma ferramenta complementar disponível.",
      after: "Gerador Inteligente de Ganchos com mais de 30 templates psicológicos, roteiro completo de gravação de 60 segundos e leitor de áudio integrado."
    },
    {
      aspect: "Exportação & Impressão",
      before: "PDF estático e visualmente desinteressante.",
      after: "Botão de impressão nativo com folha de estilo A4 profissional, capa personalizada, paginação editorial e sumário limpo para impressão ou download."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171924] via-[#141620] to-[#171924] border border-[#2d3042] shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f5d77f] text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Auditoria Comparativa de Melhorias</span>
        </div>
        <h2 className="font-editorial-heading text-2xl sm:text-3xl font-extrabold text-white">
          Do Rascunho de 9 Páginas à Edição Masterclass
        </h2>
        <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-2xl font-light">
          Veja detalhadamente como o e-book original foi transformado em uma experiência editorial e prática completa de alta autoridade.
        </p>
      </div>

      {/* Comparisons Table */}
      <div className="space-y-4">
        {comparisons.map((c, idx) => (
          <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#111218] border border-[#262836] shadow-lg">
            <h3 className="font-editorial-heading text-base font-bold text-zinc-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>{c.aspect}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Before */}
              <div className="p-4 rounded-xl bg-[#161214] border border-red-500/20 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Original (PDF Anterior)</span>
                </div>
                <p className="text-zinc-400 leading-relaxed font-light">
                  {c.before}
                </p>
              </div>

              {/* After */}
              <div className="p-4 rounded-xl bg-[#121915] border border-emerald-500/30 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 text-emerald-300 font-semibold mb-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Nova Versão Aprimorada</span>
                </div>
                <p className="text-zinc-200 leading-relaxed font-light">
                  {c.after}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="p-6 rounded-2xl bg-[#151722] border border-[#2c2f42] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="font-editorial-heading font-bold text-zinc-100 text-base">
            Pronto para explorar o conteúdo aprofundado?
          </h4>
          <p className="text-xs text-zinc-400">
            Comece pelo Capítulo 1 ou experimente o Caderno de Ação.
          </p>
        </div>

        <button
          onClick={onGoToReader}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88c1c] text-zinc-950 font-bold text-sm shadow-lg hover:from-[#fae8b4] hover:to-[#c59d3f] transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>Acessar Leitor do E-book</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

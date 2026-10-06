import React, { useState } from 'react';
import { 
  Chapter, 
  CHAPTERS 
} from '../data/ebookData';
import { 
  FourPillarsFramework, 
  GPEEAFramework, 
  FunnelFramework 
} from './FrameworkVisuals';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  Share2, 
  Sparkles, 
  Lightbulb, 
  AlertTriangle, 
  Layers, 
  Check, 
  Copy, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { UserAnswers } from '../utils/storage';

interface ChapterReaderProps {
  currentChapterIndex: number;
  setCurrentChapterIndex: (index: number) => void;
  completedChapters: Record<number, boolean>;
  toggleChapterCompleted: (index: number) => void;
  isNarrating: boolean;
  toggleNarration: () => void;
  userAnswers: UserAnswers;
  onUpdateAnswer: (key: keyof UserAnswers, value: any) => void;
  onGoToWorksheet: () => void;
  fontSize: 'sm' | 'base' | 'lg';
  setFontSize: (size: 'sm' | 'base' | 'lg') => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  currentChapterIndex,
  setCurrentChapterIndex,
  completedChapters,
  toggleChapterCompleted,
  isNarrating,
  toggleNarration,
  userAnswers,
  onUpdateAnswer,
  onGoToWorksheet,
  fontSize,
  setFontSize
}) => {
  const chapter = CHAPTERS[currentChapterIndex];
  const isCompleted = !!completedChapters[currentChapterIndex];
  const [copiedExerciseId, setCopiedExerciseId] = useState<string | null>(null);

  const handleCopyTemplate = (templateText: string, id: string) => {
    navigator.clipboard.writeText(templateText);
    setCopiedExerciseId(id);
    setTimeout(() => setCopiedExerciseId(null), 2000);
  };

  const fontSizeClasses = {
    sm: 'text-sm sm:text-base leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-relaxed',
  }[fontSize];

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Chapter Navigation Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 border-b border-[#252835] scrollbar-none">
        {CHAPTERS.map((c, idx) => {
          const isActive = idx === currentChapterIndex;
          const isDone = !!completedChapters[idx];
          return (
            <button
              key={c.slug}
              onClick={() => setCurrentChapterIndex(idx)}
              className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                isActive
                  ? 'bg-[#d4af37] text-zinc-950 font-bold shadow-md shadow-[#d4af37]/20'
                  : isDone
                  ? 'bg-[#181a24] text-[#f5d77f] border border-[#d4af37]/30 hover:bg-[#202230]'
                  : 'bg-[#12131a] text-zinc-400 border border-[#232533] hover:text-zinc-200 hover:bg-[#1a1c26]'
              }`}
            >
              {isDone && <Check className="w-3 h-3 text-[#d4af37]" />}
              <span>Cap {c.number}: {c.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Chapter Reader Container */}
      <article className="p-6 sm:p-10 rounded-3xl bg-[#111218] border border-[#262836] shadow-xl relative">
        
        {/* Top Header of the Chapter */}
        <div className="border-b border-[#252835] pb-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#d4af37] tracking-widest uppercase px-2.5 py-1 rounded bg-[#d4af37]/10 border border-[#d4af37]/25 font-semibold">
                Capítulo {chapter.number} de {CHAPTERS.length}
              </span>
              <span className="text-xs text-zinc-400">· {chapter.readTime} de leitura</span>
            </div>

            {/* Reading Tools: Text Size & Audio */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#181a24] rounded-lg p-0.5 border border-[#2b2d3c]">
                <button
                  onClick={() => setFontSize('sm')}
                  className={`px-2 py-1 text-xs rounded ${fontSize === 'sm' ? 'bg-[#282a3a] text-white' : 'text-zinc-400'}`}
                  title="Fonte pequena"
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize('base')}
                  className={`px-2 py-1 text-xs rounded ${fontSize === 'base' ? 'bg-[#282a3a] text-white' : 'text-zinc-400'}`}
                  title="Fonte normal"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-1 text-xs rounded ${fontSize === 'lg' ? 'bg-[#282a3a] text-white' : 'text-zinc-400'}`}
                  title="Fonte grande"
                >
                  A+
                </button>
              </div>

              <button
                onClick={toggleNarration}
                className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                  isNarrating
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                    : 'bg-[#181a24] text-zinc-300 border-[#2b2d3c] hover:bg-[#222434]'
                }`}
                title="Ouvir capítulo com voz sintetizada"
              >
                {isNarrating ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-[#d4af37]" />}
                <span className="text-xs hidden sm:inline">{isNarrating ? 'Parar Áudio' : 'Ouvir'}</span>
              </button>
            </div>
          </div>

          <h2 className="font-editorial-heading text-2xl sm:text-4xl font-extrabold text-zinc-100 mb-2 leading-tight">
            {chapter.title}
          </h2>

          <p className="text-[#f5d77f] font-editorial-serif italic text-base sm:text-lg">
            {chapter.subtitle}
          </p>

          <div className="mt-4 p-3.5 rounded-xl bg-[#171924] border border-[#2b2e40] text-xs sm:text-sm text-zinc-300 italic flex items-center gap-2.5">
            <span className="text-[#d4af37] font-bold text-base">“</span>
            <span>{chapter.tagline}</span>
            <span className="text-[#d4af37] font-bold text-base">”</span>
          </div>
        </div>

        {/* Chapter Content Sections */}
        <div className="space-y-8 font-editorial-sans">
          {chapter.sections.map((section, sIdx) => (
            <section key={section.id} className="space-y-4">
              <h3 className="font-editorial-heading text-lg sm:text-xl font-bold text-[#f0f2f7] flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#d4af37] rounded-sm shrink-0" />
                <span>{section.title}</span>
              </h3>

              {section.content.map((p, pIdx) => {
                // If it's the very first paragraph of chapter, add subtle drop cap styling
                const isFirst = sIdx === 0 && pIdx === 0;
                return (
                  <p 
                    key={pIdx} 
                    className={`${fontSizeClasses} text-zinc-300 leading-relaxed font-light ${
                      isFirst ? 'first-letter:float-left first-letter:text-4xl first-letter:pr-2.5 first-letter:font-editorial-heading first-letter:font-bold first-letter:text-[#f5d77f]' : ''
                    }`}
                  >
                    {p}
                  </p>
                );
              })}

              {/* Callout box if present */}
              {section.callout && (
                <div className={`p-4 sm:p-5 rounded-2xl border transition-all my-4 ${
                  section.callout.type === 'insight'
                    ? 'bg-[#18161f] border-amber-500/30 text-amber-200'
                    : section.callout.type === 'warning'
                    ? 'bg-[#1c1417] border-red-500/30 text-red-200'
                    : section.callout.type === 'formula'
                    ? 'bg-[#131b1c] border-emerald-500/30 text-emerald-200'
                    : 'bg-[#161924] border-[#3b4059] text-zinc-200'
                }`}>
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
                    {section.callout.type === 'insight' && <Lightbulb className="w-4 h-4 text-amber-400" />}
                    {section.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-rose-400" />}
                    {section.callout.type === 'formula' && <Sparkles className="w-4 h-4 text-emerald-400" />}
                    {section.callout.type === 'framework' && <Layers className="w-4 h-4 text-sky-400" />}
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
                    {section.callout.text}
                  </p>
                </div>
              )}

              {/* Embedded Framework Visuals based on Chapter */}
              {chapter.number === 1 && sIdx === 1 && <FourPillarsFramework />}
              {chapter.number === 4 && sIdx === 1 && <GPEEAFramework />}
              {chapter.number === 6 && sIdx === 0 && <FunnelFramework />}

              {/* In-Chapter Exercise Box */}
              {section.exercise && (
                <div className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#161822] to-[#12131a] border border-[#d4af37]/30 shadow-lg">
                  <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] flex items-center justify-center text-xs font-bold">
                        ✍️
                      </div>
                      <h4 className="font-editorial-heading font-bold text-sm sm:text-base text-[#f5d77f]">
                        {section.exercise.title}
                      </h4>
                    </div>

                    {section.exercise.template && (
                      <button
                        onClick={() => handleCopyTemplate(section.exercise!.template!, section.exercise!.id)}
                        className="text-xs flex items-center gap-1 px-2.5 py-1 rounded bg-[#202332] text-zinc-300 hover:text-white border border-[#2e3248] transition-colors"
                      >
                        {copiedExerciseId === section.exercise.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
                            <span>Copiar Template</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 mb-3">
                    {section.exercise.instructions}
                  </p>

                  {/* Direct input for quick recording */}
                  <div className="space-y-2">
                    <textarea
                      rows={3}
                      value={
                        section.exercise.id === 'posicionamento-formula'
                          ? userAnswers.posicionamentoFormula
                          : section.exercise.id === 'concorrentes-analise'
                          ? userAnswers.concorrentesAnalise
                          : section.exercise.id === 'planejamento-7-dias'
                          ? userAnswers.planejamento7Dias
                          : section.exercise.id === 'estrutura-oferta'
                          ? userAnswers.estruturaOferta
                          : userAnswers.compromisso30Dias
                      }
                      onChange={(e) => {
                        const id = section.exercise!.id;
                        if (id === 'posicionamento-formula') onUpdateAnswer('posicionamentoFormula', e.target.value);
                        else if (id === 'concorrentes-analise') onUpdateAnswer('concorrentesAnalise', e.target.value);
                        else if (id === 'planejamento-7-dias') onUpdateAnswer('planejamento7Dias', e.target.value);
                        else if (id === 'estrutura-oferta') onUpdateAnswer('estruturaOferta', e.target.value);
                        else if (id === 'compromisso-30-dias') onUpdateAnswer('compromisso30Dias', e.target.value);
                      }}
                      placeholder={section.exercise.placeholder}
                      className="w-full p-3 text-xs sm:text-sm rounded-xl bg-[#0c0d12] border border-[#2c2f42] text-zinc-200 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-y"
                    />

                    <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <Check className="w-3 h-3" /> Salvo automaticamente no Caderno
                      </span>
                      <button
                        onClick={onGoToWorksheet}
                        className="text-[#f5d77f] hover:underline flex items-center gap-1"
                      >
                        <span>Abrir Caderno Completo</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Key Takeaway Card at Chapter End */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#171924] via-[#1a1c29] to-[#171924] border border-[#d4af37]/35 text-center">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#d4af37] font-semibold block mb-1">
            Lição Central do Capítulo
          </span>
          <p className="font-editorial-serif text-base sm:text-lg italic text-[#f0ede6]">
            “{chapter.keyTakeaway}”
          </p>
        </div>

        {/* Chapter Completion & Navigation Footer */}
        <div className="mt-8 pt-6 border-t border-[#252835] flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={() => toggleChapterCompleted(currentChapterIndex)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-[#1a1c27] text-zinc-300 border border-[#2b2e40] hover:text-white hover:border-[#d4af37]/50'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-zinc-500'}`} />
            <span>{isCompleted ? 'Capítulo Concluído ✓' : 'Marcar como Concluído'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentChapterIndex(Math.max(0, currentChapterIndex - 1))}
              disabled={currentChapterIndex === 0}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-[#181a24] border border-[#292b3a] text-xs sm:text-sm text-zinc-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={() => setCurrentChapterIndex(Math.min(CHAPTERS.length - 1, currentChapterIndex + 1))}
              disabled={currentChapterIndex === CHAPTERS.length - 1}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88c1c] text-zinc-950 font-bold text-xs sm:text-sm shadow-md hover:from-[#fae8b4] hover:to-[#c59d3f] disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <span>Próximo Capítulo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </article>
    </div>
  );
};

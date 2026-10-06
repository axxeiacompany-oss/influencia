import React from 'react';
import { 
  BookOpen, 
  PenTool, 
  Sparkles, 
  Printer, 
  Volume2, 
  VolumeX, 
  SlidersHorizontal,
  BookmarkCheck,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'reader' | 'worksheet' | 'generator' | 'comparison';
  setActiveTab: (tab: 'reader' | 'worksheet' | 'generator' | 'comparison') => void;
  progressPercent: number;
  isNarrating: boolean;
  toggleNarration: () => void;
  onOpenPrint: () => void;
  theme: 'dark' | 'light' | 'sepia';
  setTheme: (theme: 'dark' | 'light' | 'sepia') => void;
  completedChaptersCount: number;
  totalChapters: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  progressPercent,
  isNarrating,
  toggleNarration,
  onOpenPrint,
  theme,
  setTheme,
  completedChaptersCount,
  totalChapters
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 no-print
      bg-[#0d0e12]/95 border-[#272935] text-[#e2e4e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('reader')}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#d4af37] via-[#aa820a] to-[#5a4405] p-0.5 shadow-lg shadow-[#d4af37]/20 flex items-center justify-center">
              <div className="w-full h-full bg-[#121318] rounded-[6px] flex items-center justify-center">
                <span className="font-editorial-heading text-lg font-bold text-[#f5d77f]">M</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial-heading font-extrabold text-sm sm:text-base tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#fae8b4] via-[#e2c168] to-[#c59d3f]">
                  MÉTODO INFLUÊNCIA
                </span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border border-[#d4af37]/40 text-[#f5d77f] font-mono font-semibold">
                  MILIONÁRIA
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden sm:block">
                Edição Masterclass Interativa · 2026
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('reader')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'reader'
                  ? 'bg-[#d4af37]/15 text-[#f5d77f] border border-[#d4af37]/30 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Leitor</span>
            </button>

            <button
              onClick={() => setActiveTab('worksheet')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'worksheet'
                  ? 'bg-[#d4af37]/15 text-[#f5d77f] border border-[#d4af37]/30 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <PenTool className="w-4 h-4" />
              <span className="hidden sm:inline">Caderno de Ação</span>
              <span className="sm:hidden">Ação</span>
            </button>

            <button
              onClick={() => setActiveTab('generator')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'generator'
                  ? 'bg-[#d4af37]/15 text-[#f5d77f] border border-[#d4af37]/30 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#f5d77f]" />
              <span className="hidden sm:inline">Gerador de Ganchos</span>
              <span className="sm:hidden">Ganchos</span>
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === 'comparison'
                  ? 'bg-[#d4af37]/15 text-[#f5d77f] border border-[#d4af37]/30 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
              }`}
              title="Comparar com o PDF original"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Antes x Depois</span>
            </button>
          </nav>

          {/* Action Tools: Audio, Print, Theme, Progress */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Speech Button */}
            <button
              onClick={toggleNarration}
              title={isNarrating ? "Pausar leitura narrada" : "Ouvir capítulo narrado"}
              className={`p-2 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                isNarrating
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                  : 'border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60'
              }`}
            >
              {isNarrating ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden lg:inline text-[11px] font-medium">{isNarrating ? 'Ouvindo...' : 'Áudio'}</span>
            </button>

            {/* Print / Export PDF */}
            <button
              onClick={onOpenPrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#c59d3f] to-[#aa820a] hover:from-[#e2c168] hover:to-[#b88c1c] text-[#0f1015] font-semibold text-xs sm:text-sm shadow-md shadow-[#d4af37]/15 transition-all active:scale-95"
              title="Imprimir ou Salvar E-book em PDF Formatado"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Baixar / Imprimir PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Reading Progress Bar */}
      <div className="w-full bg-[#1c1e27] h-1 relative overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#c59d3f] via-[#f5d77f] to-[#e2c168] transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { BookCover } from './components/BookCover';
import { ChapterReader } from './components/ChapterReader';
import { WorksheetSection } from './components/WorksheetSection';
import { HookGenerator } from './components/HookGenerator';
import { BeforeAfterModal } from './components/BeforeAfterModal';
import { PrintDocument } from './components/PrintDocument';
import { CHAPTERS, EBOOK_META } from './data/ebookData';
import { 
  UserAnswers, 
  loadUserAnswers, 
  saveUserAnswers, 
  defaultUserAnswers 
} from './utils/storage';
import { 
  BookOpen, 
  PenTool, 
  Sparkles, 
  CheckCircle, 
  Printer, 
  SlidersHorizontal,
  ChevronUp
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'reader' | 'worksheet' | 'generator' | 'comparison'>('reader');
  const [isPrintOpen, setIsPrintOpen] = useState(false);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [theme, setTheme] = useState<'dark' | 'light' | 'sepia'>('dark');
  const [userAnswers, setUserAnswers] = useState<UserAnswers>(() => loadUserAnswers());
  const [completedChapters, setCompletedChapters] = useState<Record<number, boolean>>(() => {
    try {
      const stored = localStorage.getItem('metodo_completed_chapters');
      return stored ? JSON.parse(stored) : { 0: true };
    } catch {
      return { 0: true };
    }
  });
  const [isNarrating, setIsNarrating] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync userAnswers to localStorage
  useEffect(() => {
    saveUserAnswers(userAnswers);
  }, [userAnswers]);

  // Sync completedChapters to localStorage
  useEffect(() => {
    localStorage.setItem('metodo_completed_chapters', JSON.stringify(completedChapters));
  }, [completedChapters]);

  // Listen to window scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Audio Speech Synthesis for narration
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stopNarration = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsNarrating(false);
    }
  };

  const startNarration = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Seu navegador não suporta leitura por áudio.');
      return;
    }

    window.speechSynthesis.cancel();
    const chapter = CHAPTERS[currentChapterIndex];
    
    // Build textual script to speak
    const fullText = `Capítulo ${chapter.number}: ${chapter.title}. ${chapter.subtitle}. Tagline: ${chapter.tagline}. ` +
      chapter.sections.map(s => `${s.title}. ${s.content.join(' ')}`).join(' ') +
      ` Lição central: ${chapter.keyTakeaway}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.05;

    // Try to find a pt-BR voice
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang.includes('pt-BR') || v.lang.includes('pt_BR') || v.lang.includes('pt'));
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onend = () => {
      setIsNarrating(false);
    };
    utterance.onerror = () => {
      setIsNarrating(false);
    };

    speechRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsNarrating(true);
  };

  const toggleNarration = () => {
    if (isNarrating) {
      stopNarration();
    } else {
      startNarration();
    }
  };

  // Stop narration on chapter change or tab change
  useEffect(() => {
    stopNarration();
  }, [currentChapterIndex, activeTab]);

  const toggleChapterCompleted = (index: number) => {
    setCompletedChapters(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleUpdateAnswer = (key: keyof UserAnswers, value: any) => {
    setUserAnswers(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleResetAnswers = () => {
    if (window.confirm('Tem certeza de que deseja restaurar as respostas sugeridas de exemplo?')) {
      setUserAnswers(defaultUserAnswers);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate overall reading progress
  const completedChaptersCount = Object.values(completedChapters).filter(Boolean).length;
  const progressPercent = Math.min(100, Math.round(((currentChapterIndex + 1) / CHAPTERS.length) * 100));

  if (isPrintOpen) {
    return (
      <PrintDocument
        userAnswers={userAnswers}
        onClose={() => setIsPrintOpen(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0d12] text-[#e2e4e9] flex flex-col font-editorial-sans selection:bg-[#d4af37]/30 selection:text-[#fef08a]">
      
      {/* Top Sticky Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        progressPercent={progressPercent}
        isNarrating={isNarrating}
        toggleNarration={toggleNarration}
        onOpenPrint={() => setIsPrintOpen(true)}
        theme={theme}
        setTheme={setTheme}
        completedChaptersCount={completedChaptersCount}
        totalChapters={CHAPTERS.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Cover Hero Banner (shown on reader tab at top) */}
        {activeTab === 'reader' && currentChapterIndex === 0 && (
          <BookCover
            onStartReading={() => {
              const el = document.getElementById('chapter-content');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenWorksheet={() => setActiveTab('worksheet')}
          />
        )}

        {/* Tab 1: Interactive Reader */}
        {activeTab === 'reader' && (
          <div id="chapter-content">
            <ChapterReader
              currentChapterIndex={currentChapterIndex}
              setCurrentChapterIndex={setCurrentChapterIndex}
              completedChapters={completedChapters}
              toggleChapterCompleted={toggleChapterCompleted}
              isNarrating={isNarrating}
              toggleNarration={toggleNarration}
              userAnswers={userAnswers}
              onUpdateAnswer={handleUpdateAnswer}
              onGoToWorksheet={() => setActiveTab('worksheet')}
              fontSize={fontSize}
              setFontSize={setFontSize}
            />
          </div>
        )}

        {/* Tab 2: Interactive Worksheet */}
        {activeTab === 'worksheet' && (
          <WorksheetSection
            userAnswers={userAnswers}
            onUpdateAnswer={handleUpdateAnswer}
            onResetAnswers={handleResetAnswers}
          />
        )}

        {/* Tab 3: Hook & Script Generator */}
        {activeTab === 'generator' && (
          <HookGenerator />
        )}

        {/* Tab 4: Before vs After Comparison */}
        {activeTab === 'comparison' && (
          <BeforeAfterModal
            onGoToReader={() => setActiveTab('reader')}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-[#1e202c] bg-[#090a0e] py-10 text-center text-xs text-zinc-500 no-print">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
            <span className="font-editorial-heading font-bold text-zinc-300 text-sm tracking-wider uppercase">
              Método Influência Milionária
            </span>
          </div>

          <p className="max-w-lg mx-auto text-zinc-400 font-editorial-serif italic text-sm">
            {EBOOK_META.coreQuote}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400 text-xs pt-2">
            <button onClick={() => setActiveTab('reader')} className="hover:text-amber-300 transition-colors">
              Leitor dos Capítulos
            </button>
            <button onClick={() => setActiveTab('worksheet')} className="hover:text-amber-300 transition-colors">
              Caderno de Ação
            </button>
            <button onClick={() => setActiveTab('generator')} className="hover:text-amber-300 transition-colors">
              Gerador de Ganchos
            </button>
            <button onClick={() => setActiveTab('comparison')} className="hover:text-amber-300 transition-colors">
              Auditoria Antes x Depois
            </button>
            <button onClick={() => setIsPrintOpen(true)} className="hover:text-amber-300 transition-colors">
              Imprimir / Salvar PDF
            </button>
          </div>

          <div className="text-[11px] text-zinc-400 pt-4 border-t border-zinc-900">
            Material educacional e estratégico · Edição Expandida 2026 · Todos os direitos reservados
          </div>
        </div>
      </footer>

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#1b1d28] hover:bg-[#d4af37] text-zinc-300 hover:text-zinc-950 border border-[#2e3146] shadow-xl transition-all"
          title="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}

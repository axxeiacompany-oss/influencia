import React, { useState } from 'react';
import { 
  UserAnswers, 
  defaultUserAnswers 
} from '../utils/storage';
import { 
  NICHE_PRESETS 
} from '../data/ebookData';
import { 
  Check, 
  Copy, 
  Download, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Save, 
  PenTool, 
  HelpCircle,
  FileText
} from 'lucide-react';

interface WorksheetSectionProps {
  userAnswers: UserAnswers;
  onUpdateAnswer: (key: keyof UserAnswers, value: any) => void;
  onResetAnswers: () => void;
}

export const WorksheetSection: React.FC<WorksheetSectionProps> = ({
  userAnswers,
  onUpdateAnswer,
  onResetAnswers
}) => {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number | null>(null);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const checklistItems = [
    "1. Sei com precisão cirúrgica quem quero ajudar e quem NÃO é meu cliente ideal.",
    "2. Sei exatamente qual problema urgente e doloroso eu consigo solucionar.",
    "3. Tenho uma mensagem clara e concisa que qualquer pessoa compreende em 5 segundos.",
    "4. Meus pilares de conteúdo estão definidos em um território exclusivo de diferenciação.",
    "5. Minha oferta está estruturada com escopo, método, preço e transformação tangível.",
    "6. Sei conduzir chamadas para ação sem confusão e direcionar pessoas para conversas no direct.",
    "7. Tenho um plano de execução de 30 dias agendado no meu calendário e vou cumpri-lo inegociavelmente."
  ];

  const completedChecklistCount = Object.values(userAnswers.checklistState).filter(Boolean).length;
  const checklistProgress = Math.round((completedChecklistCount / checklistItems.length) * 100);

  const handleToggleChecklist = (index: number) => {
    const newState = {
      ...userAnswers.checklistState,
      [index]: !userAnswers.checklistState[index]
    };
    onUpdateAnswer('checklistState', newState);
  };

  const handleApplyPreset = (index: number) => {
    setSelectedPresetIndex(index);
    const p = NICHE_PRESETS[index];
    const formula = `Eu ajudo [${p.publico}] a [${p.transformacao}] por meio de [${p.metodo}] sem [${p.sem}].`;
    onUpdateAnswer('posicionamentoFormula', formula);
  };

  const handleExportText = () => {
    const content = `================================================
MÉTODO INFLUÊNCIA MILIONÁRIA — CADERNO DE AÇÃO
Edição Masterclass Interativa
================================================

1. MINHA DECLARAÇÃO DE POSICIONAMENTO:
${userAnswers.posicionamentoFormula}

------------------------------------------------
2. AUDITORIA DE CONCORRENTES & TERRITÓRIO:
${userAnswers.concorrentesAnalise}

------------------------------------------------
3. PLANNER DE CONTEÚDO DOS 7 DIAS:
${userAnswers.planejamento7Dias}

------------------------------------------------
4. ARQUITETURA DA MINHA OFERTA MÍNIMA:
${userAnswers.estruturaOferta}

------------------------------------------------
5. MEU TERMO DE COMPROMISSO DE 30 DIAS:
${userAnswers.compromisso30Dias}

------------------------------------------------
STATUS DO CHECKLIST FINAL (${completedChecklistCount}/7 concluídos):
${checklistItems.map((item, idx) => `[${userAnswers.checklistState[idx] ? 'X' : ' '}] ${item}`).join('\n')}

================================================
Gerado em: ${new Date().toLocaleDateString('pt-BR')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Metodo-Influencia-Caderno-Acao-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyAll = () => {
    const text = `POSICIONAMENTO:\n${userAnswers.posicionamentoFormula}\n\nOFERTA:\n${userAnswers.estruturaOferta}\n\nPLANO 30 DIAS:\n${userAnswers.compromisso30Dias}`;
    navigator.clipboard.writeText(text);
    setCopyStatus('Copiado com sucesso!');
    setTimeout(() => setCopyStatus(null), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171924] via-[#141620] to-[#171924] border border-[#2d3042] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f5d77f] text-xs font-semibold mb-3">
            <PenTool className="w-3.5 h-3.5" />
            <span>Caderno de Aplicação Executiva</span>
          </div>
          <h2 className="font-editorial-heading text-2xl sm:text-3xl font-extrabold text-white">
            Seu Plano de Influência em Prática
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-xl font-light">
            Preencha cada exercício passo a passo. Todas as respostas são salvas automaticamente no seu navegador e você pode exportá-las a qualquer momento.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handleExportText}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b88c1c] text-[#0d0e12] font-bold text-xs sm:text-sm shadow-md hover:from-[#fae8b4] hover:to-[#c59d3f] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Exportar TXT</span>
          </button>

          <button
            onClick={handleCopyAll}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#202330] hover:bg-[#282b3d] border border-[#31354a] text-zinc-300 hover:text-white text-xs sm:text-sm transition-all"
          >
            <Copy className="w-4 h-4" />
            <span>{copyStatus || 'Copiar Resumo'}</span>
          </button>

          <button
            onClick={onResetAnswers}
            className="p-2 rounded-xl bg-[#1c1d27] hover:bg-rose-950/40 border border-[#2b2d3d] hover:border-rose-700/50 text-zinc-400 hover:text-rose-300 text-xs transition-all"
            title="Restaurar respostas padrão"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress & Checklist Overview */}
      <div className="p-6 rounded-3xl bg-[#111218] border border-[#262836] shadow-lg">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#f5d77f]" />
            <h3 className="font-editorial-heading text-base font-bold text-zinc-100">
              Checklist Final de Prontidão Estratégica
            </h3>
          </div>
          <span className="font-mono text-xs font-bold text-[#f5d77f] px-2.5 py-1 rounded bg-[#d4af37]/15 border border-[#d4af37]/30">
            {completedChecklistCount} de {checklistItems.length} ({checklistProgress}%)
          </span>
        </div>

        <div className="w-full bg-[#1b1d28] h-2 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-gradient-to-r from-[#c59d3f] to-[#f5d77f] transition-all duration-300"
            style={{ width: `${checklistProgress}%` }}
          />
        </div>

        <div className="space-y-2.5">
          {checklistItems.map((item, idx) => {
            const isChecked = !!userAnswers.checklistState[idx];
            return (
              <label 
                key={idx}
                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isChecked 
                    ? 'bg-[#151d1e] border-emerald-500/30 text-zinc-200' 
                    : 'bg-[#151720] border-[#252835] text-zinc-400 hover:bg-[#191b26]'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggleChecklist(idx)}
                  className="mt-0.5 rounded border-zinc-700 text-[#d4af37] focus:ring-0 focus:ring-offset-0 bg-[#0d0e14] h-4 w-4"
                />
                <span className={`text-xs sm:text-sm leading-relaxed ${isChecked ? 'text-zinc-200 font-medium' : 'text-zinc-400'}`}>
                  {item}
                </span>
              </label>
            );
          })}
        </div>

        {checklistProgress === 100 && (
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-[#121c17] border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <strong className="block text-white font-semibold">Parabéns! Base Estratégica 100% Concluída.</strong>
              Você possui todos os 7 alicerces blindados. Agora sua única prioridade é a consistência diária nos 30 dias.
            </div>
          </div>
        )}
      </div>

      {/* EXERCISE 1: Declaração de Posicionamento */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#111218] border border-[#262836] shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] flex items-center justify-center text-xs font-bold font-mono">
              01
            </span>
            <h3 className="font-editorial-heading text-lg font-bold text-zinc-100">
              Declaração de Posicionamento Magnética
            </h3>
          </div>
          <span className="text-xs text-zinc-400">Capítulo 2: Mentalidade e Clareza</span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 font-light">
          A fórmula que faz qualquer pessoa entender o seu valor em 5 segundos:
          <br />
          <code className="text-[#f5d77f] bg-[#1a1c27] px-2 py-0.5 rounded text-xs mt-1 inline-block">
            “Eu ajudo [PÚBLICO] a [TRANSFORMAÇÃO] por meio de [MÉTODO] sem [MAIOR DOR].”
          </code>
        </p>

        {/* Preset Selector */}
        <div>
          <span className="text-xs text-zinc-400 block mb-2 font-medium">Ou escolha um modelo de nicho para iniciar:</span>
          <div className="flex flex-wrap gap-2">
            {NICHE_PRESETS.map((p, idx) => (
              <button
                key={p.name}
                onClick={() => handleApplyPreset(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedPresetIndex === idx
                    ? 'bg-[#d4af37] text-zinc-950 font-bold'
                    : 'bg-[#181a24] text-zinc-400 border border-[#282a3c] hover:text-zinc-200'
                }`}
              >
                {p.name.split('/')[0]}
              </button>
            ))}
          </div>
        </div>

        <textarea
          rows={3}
          value={userAnswers.posicionamentoFormula}
          onChange={(e) => onUpdateAnswer('posicionamentoFormula', e.target.value)}
          className="w-full p-4 text-xs sm:text-sm rounded-xl bg-[#0b0c10] border border-[#2b2d3e] text-zinc-200 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-y"
          placeholder="Escreva sua declaração..."
        />
      </div>

      {/* EXERCISE 2: Auditoria de Concorrentes */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#111218] border border-[#262836] shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] flex items-center justify-center text-xs font-bold font-mono">
              02
            </span>
            <h3 className="font-editorial-heading text-lg font-bold text-zinc-100">
              Mapeamento de 3 Concorrentes & Território Exclusivo
            </h3>
          </div>
          <span className="text-xs text-zinc-400">Capítulo 3: Posicionamento</span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 font-light">
          Analise o que seus principais concorrentes fazem bem, onde eles falham (ângulos mortos) e qual é o espaço que você pode ocupar de forma legítima.
        </p>

        <textarea
          rows={5}
          value={userAnswers.concorrentesAnalise}
          onChange={(e) => onUpdateAnswer('concorrentesAnalise', e.target.value)}
          className="w-full p-4 text-xs sm:text-sm rounded-xl bg-[#0b0c10] border border-[#2b2d3e] text-zinc-200 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-y font-mono"
          placeholder="Ex: Concorrente 1: [...] | Falha: [...] | Meu Diferencial: [...]"
        />
      </div>

      {/* EXERCISE 3: Planner dos 7 Dias de Conteúdo */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#111218] border border-[#262836] shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] flex items-center justify-center text-xs font-bold font-mono">
              03
            </span>
            <h3 className="font-editorial-heading text-lg font-bold text-zinc-100">
              Planner Semanal dos 7 Dias de Conteúdo
            </h3>
          </div>
          <span className="text-xs text-zinc-400">Capítulo 4: Conteúdo que Gera Atenção</span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 font-light">
          A fórmula dos 7 dias: 2 publicações educativas + 2 de conexão humana + 2 de prova/bastidores + 1 de conversão direta.
        </p>

        <textarea
          rows={7}
          value={userAnswers.planejamento7Dias}
          onChange={(e) => onUpdateAnswer('planejamento7Dias', e.target.value)}
          className="w-full p-4 text-xs sm:text-sm rounded-xl bg-[#0b0c10] border border-[#2b2d3e] text-zinc-200 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-y font-mono"
          placeholder="Dia 1 (Educativo): ...&#10;Dia 2 (Conexão): ...&#10;Dia 3 (Prova): ..."
        />
      </div>

      {/* EXERCISE 4: Arquitetura da Oferta */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#111218] border border-[#262836] shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] flex items-center justify-center text-xs font-bold font-mono">
              04
            </span>
            <h3 className="font-editorial-heading text-lg font-bold text-zinc-100">
              Arquitetura da Oferta Mínima Viável
            </h3>
          </div>
          <span className="text-xs text-zinc-400">Capítulo 5: Oferta e Monetização</span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 font-light">
          Defina para quem é, qual a dor resolvida, qual o processo passo a passo, o que está incluso e qual a chamada para ação.
        </p>

        <textarea
          rows={5}
          value={userAnswers.estruturaOferta}
          onChange={(e) => onUpdateAnswer('estruturaOferta', e.target.value)}
          className="w-full p-4 text-xs sm:text-sm rounded-xl bg-[#0b0c10] border border-[#2b2d3e] text-zinc-200 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-y"
          placeholder="Público: ...&#10;Problema: ...&#10;Processo: ...&#10;Entregáveis: ...&#10;Próximo passo: ..."
        />
      </div>

      {/* EXERCISE 5: Termo de Compromisso de 30 Dias */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#111218] border border-[#262836] shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] flex items-center justify-center text-xs font-bold font-mono">
              05
            </span>
            <h3 className="font-editorial-heading text-lg font-bold text-zinc-100">
              Termo de Compromisso de 30 Dias
            </h3>
          </div>
          <span className="text-xs text-zinc-400">Capítulo 7: Plano de Ação de 30 Dias</span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-300 font-light">
          Assuma um compromisso público com a sua própria disciplina. Estabeleça metas factíveis e inegociáveis.
        </p>

        <textarea
          rows={3}
          value={userAnswers.compromisso30Dias}
          onChange={(e) => onUpdateAnswer('compromisso30Dias', e.target.value)}
          className="w-full p-4 text-xs sm:text-sm rounded-xl bg-[#0b0c10] border border-[#2b2d3e] text-zinc-200 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] resize-y"
          placeholder="Meu compromisso para os próximos 30 dias..."
        />
      </div>

    </div>
  );
};

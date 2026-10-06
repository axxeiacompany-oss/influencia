import React, { useState } from 'react';
import { 
  HOOK_TEMPLATES, 
  NICHE_PRESETS 
} from '../data/ebookData';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Wand2, 
  RefreshCw, 
  Layers, 
  Send, 
  MessageSquare, 
  Flame,
  ArrowRight
} from 'lucide-react';

export const HookGenerator: React.FC = () => {
  const [topic, setTopic] = useState('Consultoria de Vendas B2B');
  const [targetAudience, setTargetAudience] = useState('Diretores comerciais e fundadores');
  const [painPoint, setPainPoint] = useState('Ciclo de vendas longo e propostas ignoradas');
  const [solution, setSolution] = useState('Framework de qualificação cirúrgica em 3 perguntas');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['Todos', 'Contraintuitivo & Choque', 'Tutorial Prático & Rápido', 'História & Bastidor', 'Conversão & Oferta'];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Generate customized hooks by interpolating user inputs
  const generateHooks = () => {
    const list: { id: string; category: string; hook: string; description: string }[] = [
      {
        id: 'h1',
        category: 'Contraintuitivo & Choque',
        hook: `Pare de tentar ${painPoint.toLowerCase() || 'vender no improviso'} se você quer ${solution.toLowerCase() || 'fechar contratos'} em 2026.`,
        description: 'Quebra de crença comum para capturar atenção imediata no primeiro segundo.'
      },
      {
        id: 'h2',
        category: 'Contraintuitivo & Choque',
        hook: `A mentira que a maioria dos especialistas conta sobre ${topic || 'esse mercado'} e que está custando o seu dinheiro.`,
        description: 'Gera indignação e curiosidade profunda.'
      },
      {
        id: 'h3',
        category: 'Contraintuitivo & Choque',
        hook: `Por que 90% de ${targetAudience.toLowerCase() || 'profissionais'} continuam travados em ${painPoint.toLowerCase()} (e a única mudança que destrava tudo).`,
        description: 'Segmenta o público-alvo e promete a chave de resolução.'
      },
      {
        id: 'h4',
        category: 'Tutorial Prático & Rápido',
        hook: `O roteiro exato de 3 passos para dominar ${solution.toLowerCase()} em menos de 15 minutos por dia.`,
        description: 'Promete resultado rápido e processo simples e sem dor.'
      },
      {
        id: 'h5',
        category: 'Tutorial Prático & Rápido',
        hook: `Faça isto hoje mesmo se você é ${targetAudience.toLowerCase()} e quer eliminar de vez ${painPoint.toLowerCase()}.`,
        description: 'Chamada direta para quem já está desesperado pelo resultado.'
      },
      {
        id: 'h6',
        category: 'Tutorial Prático & Rápido',
        hook: `O checklist simples que eu uso para aplicar ${solution.toLowerCase()} sem complicações técnicas.`,
        description: 'Perfeito para posts carrossel e materiais para download.'
      },
      {
        id: 'h7',
        category: 'História & Bastidor',
        hook: `O erro embaraçoso que me custou caro em ${topic} até eu finalmente entender este detalhe...`,
        description: 'Humaniza a marca e gera forte identificação por vulnerabilidade controlada.'
      },
      {
        id: 'h8',
        category: 'História & Bastidor',
        hook: `Como um cliente nosso saiu de ${painPoint.toLowerCase()} para colher os primeiros frutos em apenas 30 dias com ${solution.toLowerCase()}.`,
        description: 'Estudo de caso verificável que destrói o ceticismo.'
      },
      {
        id: 'h9',
        category: 'Conversão & Oferta',
        hook: `Se você faz parte de ${targetAudience.toLowerCase()} e está cansado de sofrer com ${painPoint.toLowerCase()}, este convite é para você.`,
        description: 'Filtro de qualificação comercial rigoroso.'
      },
      {
        id: 'h10',
        category: 'Conversão & Oferta',
        hook: `Comente a palavra "PLANO" se você quer que eu analise como implementar ${solution.toLowerCase()} no seu caso específico.`,
        description: 'Chamada de palavra-chave para automação e conversa no direct.'
      }
    ];

    if (selectedCategory === 'Todos') return list;
    return list.filter(item => item.category === selectedCategory);
  };

  const currentHooks = generateHooks();

  const fullScript = `[GANCHO (0 a 3s)]:
"${currentHooks[0]?.hook}"

[PROBLEMA (4 a 15s)]:
"A verdade é que a maioria de ${targetAudience.toLowerCase()} passa semanas enfrentando ${painPoint.toLowerCase()}, achando que o problema é falta de sorte ou de seguidores."

[EXPLICAÇÃO (15 a 40s)]:
"Mas a causa raiz é muito mais simples: sem um método estruturado de ${solution.toLowerCase()}, todo esforço diário vira ruído e cansaço mental."

[EXEMPLO (40 a 55s)]:
"Quando você implementa esse ajuste simples no seu posicionamento, as pessoas deixam de pechinchar e passam a enxergar seu valor em minutos."

[AÇÃO / CTA (Final)]:
"Se você quer ver como aplicar isso na prática, comente 'ROTEIRO' abaixo que eu te envio o guia completo no Direct."`;

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      
      {/* Intro Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171924] via-[#141620] to-[#171924] border border-[#2d3042] shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#f5d77f] text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#f5d77f]" />
          <span>Ferramenta Estratégica do Método</span>
        </div>
        <h2 className="font-editorial-heading text-2xl sm:text-3xl font-extrabold text-white">
          Gerador Inteligente de Ganchos & Roteiros
        </h2>
        <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-2xl font-light">
          Insira as informações do seu nicho e receba instantaneamente ganchos magnéticos de alta retenção baseados nos princípios do Método Influência Milionária.
        </p>
      </div>

      {/* Input Parameters Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#111218] border border-[#262836] shadow-lg space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-editorial-heading text-base font-bold text-zinc-100 flex items-center gap-2">
            <Wand2 className="w-4 h-4 text-[#f5d77f]" />
            <span>Personalize para seu Nicho</span>
          </h3>
          <span className="text-xs text-zinc-400">Preencha os campos para personalizar os ganchos</span>
        </div>

        {/* Quick Presets */}
        <div>
          <span className="text-xs text-zinc-400 block mb-2 font-medium">Modelos prontos rápidos:</span>
          <div className="flex flex-wrap gap-2">
            {NICHE_PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => {
                  setTopic(p.name);
                  setTargetAudience(p.publico);
                  setPainPoint(p.dor);
                  setSolution(p.metodo);
                }}
                className="px-3 py-1.5 rounded-lg text-xs bg-[#171924] text-zinc-300 border border-[#2b2d3c] hover:border-[#d4af37]/50 hover:text-white transition-all"
              >
                {p.name.split('/')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Assunto Central / Seu Nicho
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: Finanças para Médicos"
              className="w-full p-3 rounded-xl bg-[#0c0d12] border border-[#2c2f40] text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Público-Alvo Específico
            </label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              placeholder="Ex: Médicos recém-formados e residentes"
              className="w-full p-3 rounded-xl bg-[#0c0d12] border border-[#2c2f40] text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Maior Dor ou Obstáculo
            </label>
            <input
              type="text"
              value={painPoint}
              onChange={(e) => setPainPoint(e.target.value)}
              placeholder="Ex: Não saber onde investir e trabalhar sem sobrar caixa"
              className="w-full p-3 rounded-xl bg-[#0c0d12] border border-[#2c2f40] text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
              Solução / Método / Transformação
            </label>
            <input
              type="text"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              placeholder="Ex: Gestão de carteira simplificada em 30 min/mês"
              className="w-full p-3 rounded-xl bg-[#0c0d12] border border-[#2c2f40] text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-[#d4af37]"
            />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#d4af37] text-zinc-950 font-bold shadow-md shadow-[#d4af37]/20'
                : 'bg-[#151722] text-zinc-400 border border-[#272a3a] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Generated Hooks List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-editorial-heading text-lg font-bold text-zinc-100 flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Ganchos Personalizados ({currentHooks.length})</span>
          </h3>
          <span className="text-xs text-zinc-400">Clique para copiar qualquer gancho</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {currentHooks.map((h) => {
            const isCopied = copiedId === h.id;
            return (
              <div
                key={h.id}
                className="p-4 sm:p-5 rounded-2xl bg-[#12131b] border border-[#262838] hover:border-[#d4af37]/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20 font-semibold">
                      {h.category}
                    </span>
                    <span className="text-[11px] text-zinc-400">{h.description}</span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-zinc-100 leading-snug">
                    “{h.hook}”
                  </p>
                </div>

                <button
                  onClick={() => handleCopy(h.hook, h.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 ${
                    isCopied
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-[#1a1c27] text-zinc-300 border border-[#2d3042] hover:text-white hover:bg-[#222534]'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete Ready-to-Record GPEEA Script Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141620] to-[#0f1017] border border-[#d4af37]/30 shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
            <h3 className="font-editorial-heading text-lg font-bold text-[#f5d77f]">
              Roteiro Completo Pronto para Gravação (Método G.P.E.E.A)
            </h3>
          </div>
          <button
            onClick={() => handleCopy(fullScript, 'full-script')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#202332] text-xs font-semibold text-zinc-200 border border-[#2f334a] hover:bg-[#282c40] transition-colors"
          >
            {copiedId === 'full-script' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Roteiro Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Copiar Roteiro Inteiro</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-zinc-400 font-light">
          Um roteiro de 60 segundos com início magnético, retenção psicológica e chamada de ação clara.
        </p>

        <pre className="p-4 sm:p-5 rounded-2xl bg-[#090a0e] border border-[#222533] text-xs sm:text-sm text-zinc-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
          {fullScript}
        </pre>
      </div>

    </div>
  );
};

import React, { useState } from 'react';
import { 
  Compass, 
  Target, 
  Layers, 
  Zap, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Flame, 
  TrendingUp, 
  MessageSquare,
  Users,
  Award
} from 'lucide-react';

export const FourPillarsFramework: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: "1. Mentalidade & Clareza",
      icon: Compass,
      color: "from-amber-500/20 to-amber-600/5 text-amber-300 border-amber-500/30",
      summary: "Quem fala para todos, não é lembrado por ninguém.",
      detail: "Define cirurgicamente sua proposta de valor, a dor aguda que você resolve e a transformação concreta. Elimina a síndrome do impostor através da certeza do mecanismo de entrega.",
      checkpoint: "Saber em 5 segundos explicar quem você ajuda e qual dor você aniquila."
    },
    {
      id: 1,
      title: "2. Posicionamento Único",
      icon: Target,
      color: "from-yellow-500/20 to-yellow-600/5 text-yellow-300 border-yellow-500/30",
      summary: "Ocupar um território inegociável na mente do mercado.",
      detail: "Elimina a concorrência por preço. Você define um núcleo temático intocável, adota uma narrativa contrária às ilusões do nicho e atrai apenas o cliente qualificado que valoriza qualidade.",
      checkpoint: "Ter uma tese clara de mercado e um inimigo comum bem definido."
    },
    {
      id: 2,
      title: "3. Conteúdo & Retenção",
      icon: Layers,
      color: "from-orange-500/20 to-orange-600/5 text-orange-300 border-orange-500/30",
      summary: "A engenharia diária de transmissão de autoridade.",
      detail: "Aplicação do método G.P.E.E.A (Gancho, Problema, Explicação, Exemplo, Ação) distribuído nos 4 pilares: Educativo, Prova, Conexão e Conversão. Conteúdo que gera respeito, não dancinhas vazias.",
      checkpoint: "Roteiros estruturados para parar o feed nos primeiros 3 segundos."
    },
    {
      id: 3,
      title: "4. Estratégia & Execução",
      icon: Zap,
      color: "from-emerald-500/20 to-emerald-600/5 text-emerald-300 border-emerald-500/30",
      summary: "Transformar atenção dispersa em caixa e relacionamentos sólidos.",
      detail: "Oferta Mínima Viável, chamadas de ação precisas, funil de conversas diretas e execução disciplinada do plano de 30 dias. Mensagem sem execução é mera frustração.",
      checkpoint: "Processo diário de prospecção e conversas no direct."
    }
  ];

  return (
    <div className="my-8 p-6 rounded-2xl bg-[#13151c] border border-[#2b2d38] shadow-xl">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <h4 className="font-editorial-heading text-sm uppercase tracking-widest text-[#f5d77f]">
            Framework Interativo: Os 4 Pilares da Influência
          </h4>
        </div>
        <span className="text-xs text-zinc-400">Clique para inspecionar cada engrenagem</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          const isSelected = activePillar === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActivePillar(p.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                isSelected
                  ? `bg-gradient-to-b ${p.color} shadow-lg ring-1 ring-[#d4af37]/50`
                  : 'bg-[#181a24] border-[#262835] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-[#f5d77f]' : 'text-zinc-500'}`} />
              <div className="font-semibold text-xs sm:text-sm text-zinc-100">{p.title}</div>
              <div className="text-[11px] text-zinc-400 line-clamp-1 mt-1">{p.summary}</div>
            </button>
          );
        })}
      </div>

      <div className="p-4 sm:p-5 rounded-xl bg-[#0d0e14] border border-[#252834]">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#f5d77f] mb-2">
          <span>{pillars[activePillar].title}</span>
          <span className="text-zinc-600">·</span>
          <span className="text-xs text-zinc-400 font-normal italic">{pillars[activePillar].summary}</span>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
          {pillars[activePillar].detail}
        </p>
        <div className="flex items-center gap-2 text-xs text-amber-200/90 bg-amber-500/10 border border-amber-500/20 px-3 py-2 rounded-lg">
          <Check className="w-4 h-4 text-amber-400 shrink-0" />
          <span><strong>Objetivo Prático:</strong> {pillars[activePillar].checkpoint}</span>
        </div>
      </div>
    </div>
  );
};

export const GPEEAFramework: React.FC = () => {
  const steps = [
    {
      letter: "G",
      name: "Gancho (Hook)",
      time: "0 a 3 segundos",
      desc: "Quebra de padrão mental e promessa do que será entregue.",
      example: "“Se você ainda perde 2 horas tentando criar posts, este checklist vai salvar sua semana.”"
    },
    {
      letter: "P",
      name: "Problema",
      time: "4 a 15 segundos",
      desc: "Descreve a dor específica com empatia cirúrgica.",
      example: "“A maioria dos especialistas fica com o perfil fantasma porque não tem um método rápido.”"
    },
    {
      letter: "E",
      name: "Explicação",
      time: "15 a 40 segundos",
      desc: "Apresenta o princípio lógico e a causa raiz do problema.",
      example: "“Criar do zero todo dia gasta sua dopamina. O segredo é ter 3 matrizes prontas.”"
    },
    {
      letter: "E",
      name: "Exemplo",
      time: "40 a 55 segundos",
      desc: "Ilustra com um caso real ou aplicação direta no nicho.",
      example: "“Veja como o Dr. Marcelo gerou 8 orçamentos em 48h usando apenas o modelo de Prova Social.”"
    },
    {
      letter: "A",
      name: "Ação (CTA)",
      time: "Final",
      desc: "Comando singular e sem atrito para gerar o próximo passo.",
      example: "“Comente a palavra ROTEIRO que eu te envio o PDF direto no seu direct.”"
    }
  ];

  return (
    <div className="my-8 p-6 rounded-2xl bg-[#13151c] border border-[#2b2d38] shadow-xl">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <h4 className="font-editorial-heading text-sm uppercase tracking-widest text-[#f5d77f]">
            Arquitetura de Roteiro: O Sistema G.P.E.E.A
          </h4>
        </div>
        <span className="text-xs text-zinc-400">Estrutura psicológica para posts, reels e vídeos longos</span>
      </div>

      <div className="space-y-3">
        {steps.map((s, idx) => (
          <div key={idx} className="p-3.5 rounded-xl bg-[#181a24] border border-[#272938] hover:border-[#d4af37]/40 transition-colors">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37]/30 to-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center font-bold text-[#f5d77f] text-sm">
                  {s.letter}
                </div>
                <div>
                  <div className="font-semibold text-sm text-zinc-100 flex items-center gap-2">
                    {s.name}
                    <span className="text-[10px] text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded font-mono">{s.time}</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">{s.desc}</div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-xs italic text-amber-200/90 bg-[#10121a] px-3 py-2 rounded-lg border border-[#202330]">
              💡 <strong>Exemplo de Script:</strong> {s.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FunnelFramework: React.FC = () => {
  const stages = [
    { name: "Atenção (Topo)", action: "Descobrir que você existe", metric: "Ganchos fortes, Reels, Compartilhamentos" },
    { name: "Interesse (Meio-Alto)", action: "Consumir conteúdo educativo e visitar perfil", metric: "Visitas ao perfil, Novos seguidores" },
    { name: "Confiança (Meio-Baixo)", action: "Acompanhar histórias, bastidores e provas", metric: "Retenção nos Stories, Respostas, DMs" },
    { name: "Decisão (Fundo)", action: "Avaliar a oferta e pedir detalhes", metric: "Aplicações, Mensagens de compra, Orçamentos" },
    { name: "Relacionamento (Pós)", action: "Entrega excelente, retenção e indicações", metric: "Depoimentos espontâneos, Recompra" }
  ];

  return (
    <div className="my-8 p-6 rounded-2xl bg-[#13151c] border border-[#2b2d38] shadow-xl">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <h4 className="font-editorial-heading text-sm uppercase tracking-widest text-[#f5d77f]">
            O Funil de Confiança: Da Atenção ao Caixa
          </h4>
        </div>
        <span className="text-xs text-zinc-400">Jornada sem empurro e com alto valor</span>
      </div>

      <div className="space-y-2">
        {stages.map((stage, idx) => {
          const widths = ["w-full", "w-[92%]", "w-[84%]", "w-[76%]", "w-[68%]"];
          return (
            <div key={idx} className="flex justify-center">
              <div className={`${widths[idx]} p-3 rounded-xl bg-gradient-to-r from-[#171a26] via-[#1a1d2c] to-[#171a26] border border-[#2b2e40] flex items-center justify-between gap-2`}>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f5d77f] text-[11px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-semibold text-xs sm:text-sm text-zinc-200">{stage.name}</span>
                </div>
                <div className="text-right text-[11px]">
                  <span className="text-zinc-400 hidden sm:inline">{stage.action} · </span>
                  <span className="text-amber-300 font-medium">{stage.metric}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export interface UserAnswers {
  posicionamentoFormula: string;
  concorrentesAnalise: string;
  planejamento7Dias: string;
  estruturaOferta: string;
  compromisso30Dias: string;
  checklistState: Record<number, boolean>;
  notes: Record<string, string>;
}

const STORAGE_KEY = 'metodo_influencia_user_data_v1';

export const defaultUserAnswers: UserAnswers = {
  posicionamentoFormula: "Eu ajudo médicos e profissionais da saúde a atraírem clientes particulares qualificados por meio de posicionamento de autoridade no Instagram sem precisar fazer dancinhas ou postar 10 vezes ao dia.",
  concorrentesAnalise: "1. Perfil X: Muito bom em reels curtos, mas peca em profundidade e não oferece suporte individual.\n2. Perfil Y: Excelente em artigos longos, mas linguagem excessivamente acadêmica e inacessível.\n3. Meu Espaço: Didática simplificada, foco 100% em retorno prático e suporte próximo.",
  planejamento7Dias: "Dia 1 (Educativo): Os 3 erros que custam R$ 10.000 no seu perfil todos os meses.\nDia 2 (Conexão): Por que recusei 5 propostas tentadoras para manter minha integridade.\nDia 3 (Prova): Bastidores do diagnóstico feito com cliente na última terça-feira.\nDia 4 (Educativo): O checklist de 5 minutos antes de apertar 'publicar'.\nDia 5 (Conexão): O que eu odeio no marketing digital atual (e como fazer diferente).\nDia 6 (Prova): Análise antes e depois de um caso real de transformação.\nDia 7 (Conversão): Abrindo 3 vagas para o meu acompanhamento exclusivo deste mês.",
  estruturaOferta: "Público: Especialistas que já faturam acima de R$ 5k/mês.\nProblema: Dependência exclusiva de indicações boca a boca instáveis.\nProcesso: 4 sessões individuais de 1h + plano de ação customizado de 60 dias.\nEntregáveis: Gravação das reuniões, modelos de ganchos validados e suporte via WhatsApp por 60 dias.\nCTA: Envie 'PLANO' no direct para análise prévia de perfil.",
  compromisso30Dias: "Nos próximos 30 dias, meu compromisso inegociável é publicar 20 conteúdos estratégicos, iniciar pelo menos 30 conversas qualificadas no direct e fechar 4 novos clientes para o meu programa de acompanhamento.",
  checklistState: {
    0: true,
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
  },
  notes: {},
};

export function loadUserAnswers(): UserAnswers {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return defaultUserAnswers;
    return { ...defaultUserAnswers, ...JSON.parse(data) };
  } catch (e) {
    console.error('Failed to load user answers from storage:', e);
    return defaultUserAnswers;
  }
}

export function saveUserAnswers(data: UserAnswers): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save user answers:', e);
  }
}

export interface ChapterSection {
  id: string;
  title: string;
  content: string[];
  callout?: {
    type: 'insight' | 'warning' | 'framework' | 'formula';
    title: string;
    text: string;
    bullets?: string[];
  };
  exercise?: {
    id: string;
    title: string;
    instructions: string;
    placeholder: string;
    template?: string;
    examples?: string[];
  };
}

export interface Chapter {
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  readTime: string;
  tagline: string;
  summary: string;
  sections: ChapterSection[];
  keyTakeaway: string;
}

export const EBOOK_META = {
  title: "Método Influência Milionária",
  subtitle: "O Manual Estratégico Definitivo para Transformar Conhecimento em Autoridade, Audiência e Negócios Sólidos",
  edition: "Edição Masterclass Aprofundada",
  author: "Material Educacional & Estratégico",
  coreQuote: "“Sua influência cresce quando seu valor é percebido, comunicado e colocado em prática.”",
  pillares: ["Influência", "Estratégia", "Posicionamento", "Ação"],
  totalPages: 9,
  readingTimeMin: 18,
};

export const CHAPTERS: Chapter[] = [
  {
    number: 1,
    slug: "o-que-e-o-metodo",
    title: "O que é o Método Influência Milionária?",
    subtitle: "A fundação da autoridade digital e os quatro pilares do ecossistema",
    readTime: "3 min",
    tagline: "Influência não é métrica de vaidade — é capacidade de gerar ação e confiança.",
    summary: "O Método Influência Milionária é uma estrutura educacional focada em desenvolver presença digital, comunicação, posicionamento e capacidade de transformar conhecimento em oportunidades reais.",
    sections: [
      {
        id: "1-1",
        title: "A Verdadeira Ideia Central da Influência",
        content: [
          "No mercado digital contemporâneo, existe uma armadilha frequente: confundir popularidade com autoridade. Milhares de seguidores acumulados através de dancinhas ou piadas passageiras muitas vezes não geram um único cliente.",
          "Influência real significa ser reconhecido por uma mensagem sólida, resolver problemas reais e construir confiança ao longo do tempo. Quando você constrói influência legítima, seu público não apenas consome seu conteúdo, mas busca sua orientação e confia em sua recomendação."
        ],
        callout: {
          type: "insight",
          title: "Princípio da Moeda de Confiança",
          text: "Audiência atrai olhos; autoridade atrai respeito; confiança atrai negócios. O objetivo do Método Influência Milionária é construir o ativo mais escasso da internet: confiança inabalável."
        }
      },
      {
        id: "1-2",
        title: "Os Quatro Pilares Indissociáveis",
        content: [
          "O método apoia-se em quatro engrenagens que só funcionam em perfeita sinergia. Isolar qualquer um dos pilares quebra todo o fluxo de crescimento:",
          "1. Mentalidade e Clareza: Saber exatamente quem você é, a quem serve e qual valor entrega. Sem clareza, você vira uma cópia genérica.",
          "2. Posicionamento: A forma cirúrgica como você se diferencia e finca sua bandeira no mercado, tornando a concorrência irrelevante.",
          "3. Conteúdo e Comunicação: A engenharia diária de transmissão de autoridade que atrai, retém e educa o público qualificado.",
          "4. Estratégia e Execução: O sistema prático de conversão, monetização e hábitos diários. Uma boa mensagem sem execução vira apenas frustração."
        ],
        callout: {
          type: "framework",
          title: "A Equação da Influência",
          text: "Influência Sustentável = (Clareza + Posicionamento) × (Conteúdo Magnético) × Execução Consistente."
        }
      },
      {
        id: "1-3",
        title: "O Código de Ética: O que o Método NÃO Promete",
        content: [
          "O Método Influência Milionária não é um bilhete de loteria, fórmula mágica de enriquecimento instantâneo ou sistema de ganhos automatizados sem esforço.",
          "Resultados profissionais e financeiros dependem da maturidade do seu mercado, qualidade da sua oferta, profundidade da sua experiência, capacidade de execução diária e disciplina em testar e ajustar. Aqueles que prometem atalhos fáceis geralmente lucram apenas vendendo a ilusão."
        ],
        callout: {
          type: "warning",
          title: "Compromisso com a Realidade",
          text: "Construir autoridade exige consistência e entrega de valor genuíno. Fuja de atalhos insustentáveis que comprometem sua reputação a longo prazo."
        }
      }
    ],
    keyTakeaway: "Influência sustentável é construída na intersecção entre resolver um problema real, comunicar seu valor com clareza e executar com consistência inabalável."
  },
  {
    number: 2,
    slug: "mentalidade-e-clareza",
    title: "Mentalidade e Clareza",
    subtitle: "Antes da influência, defina quem você ajuda e qual transformação você gera",
    readTime: "3 min",
    tagline: "Quem fala com todo mundo, não é ouvido por ninguém.",
    summary: "Antes de buscar influência e audiência, é indispensável dominar a clareza sobre seu público-alvo, a transformação prometida e por que as pessoas deveriam dedicar atenção ao que você fala.",
    sections: [
      {
        id: "2-1",
        title: "O Filtro das Quatro Perguntas de Ouro",
        content: [
          "A maioria dos criadores trava porque começa perguntando: 'O que devo postar hoje?'. A pergunta correta é muito anterior: 'Que dor real eu tenho capacidade de aliviar hoje?'.",
          "Para estabelecer uma mentalidade afiada de autoridade, responda com sinceridade a estas quatro perguntas fundamentais:",
          "• Qual problema específico você consegue explicar melhor do que a média?",
          "• Quem é a pessoa exata que está passando as noites acordada por causa desse problema?",
          "• Que experiência prática, histórico ou estudo você possui para fundamentar suas opiniões?",
          "• Qual é a transformação concreta, mensurável e desejável que você é capaz de gerar na vida ou negócio dessa pessoa?"
        ]
      },
      {
        id: "2-2",
        title: "A Regra da Consistência: Processos Superam a Motivação",
        content: [
          "A motivação é volátil e traiçoeira. Se você produzir apenas nos dias em que acordar inspirado, sua presença digital será errática e amadora.",
          "Profissionais não dependem de inspiração: eles constroem processos simples e repetíveis que podem ser executados mesmo nos dias mais comuns e cansativos. O sucesso do método vem de tornar a produção um hábito inegociável, e não um evento raro."
        ],
        callout: {
          type: "formula",
          title: "A Regra dos 1% Diários",
          text: "Uma publicação estratégica bem executada por dia equivale a 365 pontos de contato por ano com seu público ideal."
        }
      },
      {
        id: "2-3",
        title: "A Fórmula da Declaração de Posicionamento Magnética",
        content: [
          "Para validar sua clareza, você precisa ser capaz de resumir sua proposta de valor em uma única frase inequívoca:",
          "Fórmula Fundamental: 'Eu ajudo [tipo de pessoa específica] a [alcançar o resultado desejado] por meio de [método, habilidade ou processo próprio] sem [maior obstáculo ou sofrimento clássico].'",
          "Exemplos práticos de aplicação:",
          "• Finanças: 'Eu ajudo médicos autônomos a organizar suas finanças e investir com segurança por meio de um método de gestão simplificada em 30 minutos semanais.'",
          "• Fitness: 'Eu ajudo mães ocupadas a recuperarem sua energia e disposição através de treinos em casa de 20 minutos sem dietas restritivas.'",
          "• B2B / Vendas: 'Eu ajudo consultores de tecnologia a fechar contratos de alto valor por meio de prospecção consultiva no LinkedIn sem depender de anúncios caros.'"
        ],
        exercise: {
          id: "posicionamento-formula",
          title: "Exercício Prático de Clareza",
          instructions: "Escreva e refine sua declaração de posicionamento. Depois, teste com um amigo ou pessoa comum: se ela não entender em 5 segundos, simplifique o vocabulário.",
          placeholder: "Ex: Eu ajudo [profissionais liberais] a [atrair clientes qualificados todos os meses] por meio de [posicionamento de autoridade no Instagram] sem [precisar produzir dancinhas ou postar 10 vezes ao dia].",
          template: "Eu ajudo [PÚBLICO ESPECÍFICO] a [TRANSFORMAÇÃO DESEJADA] por meio de [SEU MÉTODO] sem [MAIOR OBJEÇÃO/DOR]."
        }
      }
    ],
    keyTakeaway: "A clareza precede a autoridade. Quando você sabe com precisão cirúrgica a quem serve, todo o seu conteúdo ganha magnetismo instantâneo."
  },
  {
    number: 3,
    slug: "posicionamento",
    title: "Posicionamento Estratégico",
    subtitle: "Como ser lembrado e ocupar um território exclusivo na mente da audiência",
    readTime: "3 min",
    tagline: "Posicionamento forte reduz a confusão e transforma seu nome em sinônimo de solução.",
    summary: "Posicionamento não é apenas um slogan. É o espaço psicológico que você reivindica e defende na mente do seu público quando alguém pensa na sua área de atuação.",
    sections: [
      {
        id: "3-1",
        title: "Escolhendo seu Território Primário e Subtemas",
        content: [
          "O maior erro dos novatos é querer falar sobre tudo: produtividade, moda, finanças, motivação e marketing, tudo na mesma conta. O resultado é ruído absoluto.",
          "Para construir autoridade rápida, domine primeiro um território restrito. Defina um Assunto Principal (seu núcleo de expertise) e de dois a três Subtemas que apoiem o assunto principal.",
          "Por exemplo: se seu tema é 'Liderança para Novos Gestores', seus subtemas podem ser: 1) Gestão de conversas difíceis; 2) Delegação de tarefas sem estresse; 3) Produtividade da equipe."
        ]
      },
      {
        id: "3-2",
        title: "Os 5 Eixos de Diferenciação Radical",
        content: [
          "Em qualquer nicho, já existem concorrentes estabelecidos. Como se destacar? Você não precisa reinventar a roda, apenas escolher um vetor claro de diferenciação:",
          "1. Pela Experiência Prática: Você ensina o que viveu nas trincheiras, com cicatrizes e casos reais, e não teorias acadêmicas.",
          "2. Pela Didática / Forma de Ensinar: Você simplifica o que os outros complicam, tornando o assunto acessível e dinâmico.",
          "3. Pelo Público-Alvo: Em vez de 'advocacia geral', você se posiciona para 'advocacia imobiliária para construtoras'.",
          "4. Pelo Ponto de Vista / Antítese: Você assume uma posição firme e polêmica com base na verdade (ex: 'Pare de tentar postar 5 vezes ao dia: foque em profundidade semanal').",
          "5. Pela Linguagem e Estilo: Seu tom pode ser mais direto, acolhedor, sofisticado ou bem-humorado."
        ],
        callout: {
          type: "insight",
          title: "O Poder da Polarização Saudável",
          text: "Um posicionamento que agrada a todo mundo não apaixona ninguém. Tenha a coragem de dizer claramente no que você acredita e o que você abomina no seu nicho."
        }
      },
      {
        id: "3-3",
        title: "Mapeamento Estratégico de Concorrência",
        content: [
          "Para encontrar seu espaço legítimo, analise os principais nomes do seu mercado não com inveja, mas com olhar clínico de estrategista.",
          "Identifique o que eles fazem muito bem, mas principalmente localize as 'falhas e ângulos mortos': o que eles esquecem de falar? Que tipo de cliente eles não atendem com atenção? Esse é o seu oceano azul."
        ],
        exercise: {
          id: "concorrentes-analise",
          title: "Exercício Prático de Mapeamento de Mercado",
          instructions: "Selecione 3 concorrentes ou perfis de referência no seu nicho e preencha a análise comparativa.",
          placeholder: "Concorrente 1: Faz bem [didática visual], mas falta [suporte próximo e casos reais]. Meu espaço: Atendimento personalizado e direto ao ponto.",
          template: "Ref 1: [Nome] | Faz bem: [...] | Ponto cego: [...] | Meu espaço exclusivo: [...]"
        }
      }
    ],
    keyTakeaway: "Você não precisa ser o primeiro do mercado; você só precisa ser a escolha mais óbvia e específica para o cliente que tem o problema que você domina."
  },
  {
    number: 4,
    slug: "conteudo-que-gera-atencao",
    title: "Conteúdo que Gera Atenção e Confiança",
    subtitle: "A engenharia do conteúdo magnético e a estrutura dos 4 tipos de publicação",
    readTime: "4 min",
    tagline: "O objetivo do conteúdo não é publicar por publicar — é iniciar conversas que geram autoridade.",
    summary: "Conteúdo estratégico é uma alavanca para demonstrar domínio prático, criar identificação emocional e qualificar o público para o próximo passo comercial.",
    sections: [
      {
        id: "4-1",
        title: "A Matriz dos Quatro Tipos de Conteúdo",
        content: [
          "Um perfil saudável e lucrativo equilibra quatro categorias complementares de conteúdo. Se você focar apenas em uma delas, sua estratégia quebra:",
          "1. Conteúdo Educativo (Gera Respeito): Ensina um passo a passo, desvenda um erro comum ou entrega um checklist acionável. Mostra que você domina o ofício.",
          "2. Conteúdo de Prova e Processo (Destrói o Ceticismo): Mostra seus bastidores, estudos de caso, impressões de tela, clientes satisfeitos ou a sua própria jornada em tempo real.",
          "3. Conteúdo de Conexão e Humanidade (Gera Empatia): Compartilha suas histórias pessoais, valores, erros do passado, filosofias de vida e o porquê de você fazer o que faz.",
          "4. Conteúdo de Conversão (Gera Faturamento): Apresenta diretamente sua solução, responde a dúvidas frequentes sobre contratação e convida para uma ação comercial."
        ]
      },
      {
        id: "4-2",
        title: "A Estrutura de Alta Retenção: G.P.E.E.A",
        content: [
          "Cada post ou vídeo com alto impacto segue uma arquitetura narrativa psicológica precisa:",
          "• Gancho (Hook): Os primeiros 3 segundos ou primeira linha. Precisa quebrar o padrão mental e responder: 'Por que eu deveria parar para ver isso agora?'.",
          "• Problema: Descreva a dor ou a dúvida com tanta clareza que o leitor sinta que você está lendo a mente dele.",
          "• Explicação: Revele a causa raiz do problema e explique por que as soluções comuns falham.",
          "• Exemplo: Dê um caso prático, analogia ou aplicação do mundo real para ancorar o aprendizado.",
          "• Ação (CTA): Conclua com um direcionamento único (comentar uma palavra-chave, salvar o post, enviar direct ou acessar o link)."
        ],
        callout: {
          type: "formula",
          title: "Anatomia do Gancho Irresistível",
          text: "Ganchos eficazes combinam Curiosidade + Especificidade + Benefício Tangível. Evite começos mornos como 'Hoje vim falar sobre...'."
        }
      },
      {
        id: "4-3",
        title: "O Desafio Prático de Conteúdo dos 7 Dias",
        content: [
          "Para quebrar a inércia e testar seu posicionamento, execute a rotina balanceada de uma semana:",
          "• Dia 1 (Educativo): O maior erro que pessoas no seu nicho cometem e como consertar hoje.",
          "• Dia 2 (Conexão): Uma decisão difícil que você tomou na sua carreira e o que ela te ensinou.",
          "• Dia 3 (Prova): Um bastidor do seu trabalho ou um resultado real alcançado por você/cliente.",
          "• Dia 4 (Educativo): Tutorial em 3 passos simples para resolver uma dor cotidiana do seu público.",
          "• Dia 5 (Conexão): O que você não tolera no seu mercado (seu manifesto de valores).",
          "• Dia 6 (Prova/Processo): A análise minuciosa de um case de sucesso ou processo de entrega.",
          "• Dia 7 (Conversão): Convite aberto para agendamento, diagnóstico gratuito ou conhecer sua oferta principal."
        ],
        exercise: {
          id: "planejamento-7-dias",
          title: "Planner Semanal de Publicações",
          instructions: "Escreva os títulos ou temas centrais para suas próximas 7 publicações seguindo a matriz.",
          placeholder: "Dia 1: Como parar de perder tempo com [x]...\nDia 2: Por que eu quase desisti de [y] em 2024...\nDia 3: Bastidores de como entregamos o projeto [z]...",
          template: "D1 (Edu): ... | D2 (Con): ... | D3 (Prova): ... | D4 (Edu): ... | D5 (Con): ... | D6 (Prova): ... | D7 (Conv): ..."
        }
      }
    ],
    keyTakeaway: "A retenção é filha do gancho; a autoridade é filha do ensino profundo; a venda é filha da confiança gerada na jornada."
  },
  {
    number: 5,
    slug: "oferta-e-monetizacao",
    title: "Oferta e Monetização Ética",
    subtitle: "Como estruturar um produto ou serviço que as pessoas compram com entusiasmo",
    readTime: "3 min",
    tagline: "Audiência sem oferta é apenas vaidade. Monetização exige solução concreta para uma dor real.",
    summary: "Influência abre portas e atrai olhares, mas faturamento só acontece quando você apresenta uma oferta clara, justa e irresistível para o público certo.",
    sections: [
      {
        id: "5-1",
        title: "Comece Sempre Pelo Problema, Não Pelo Produto",
        content: [
          "O erro clássico de empreendedores é passar semanas criando um curso ou consultoria mirabolante sem antes validar se existe alguém disposto a pagar por aquilo.",
          "Não pergunte: 'O que eu posso vender?'. Pergunte: 'Qual é o problema urgente, doloroso e financeiramente relevante que meu público já gasta dinheiro para tentar resolver?'. Se não há problema, não há mercado."
        ]
      },
      {
        id: "5-2",
        title: "A Arquitetura da Oferta Simples e Convincente",
        content: [
          "Uma oferta poderosa é transparente e não precisa de enrolação. Ela responde com perfeição a cinco perguntas essenciais:",
          "1. Para quem é (e para quem NÃO é): Qualificação nítida de quem extrairá o maior benefício.",
          "2. Qual problema resolve: A dor exata que será eliminada ou o objetivo que será alcançado.",
          "3. Qual é o processo: As fases ou etapas claras de acompanhamento para que o cliente se sinta seguro.",
          "4. O que está incluído: Acesso, encontros, ferramentas, modelos, garantias e suporte.",
          "5. Qual é o próximo passo imediato: Como fechar ou se candidatar (ex: 'Envie uma mensagem no WhatsApp com a palavra AUDITORIA')."
        ],
        callout: {
          type: "framework",
          title: "A Pirâmide de Valor",
          text: "Quanto mais próximo você estiver da implementação e do resultado prático do cliente, maior será o valor percebido e a precificação justa da sua solução."
        }
      },
      {
        id: "5-3",
        title: "Ética, Honestidade e Reputação a Longo Prazo",
        content: [
          "No mercado digital, a tentação de exagerar promessas é grande. Porém, marcas milionárias e duradouras são construídas na verdade radical.",
          "Nunca invente números, depoimentos forjados ou garantias que você não possa sustentar. Estabeleça expectativas realistas, alinhe o comprometimento necessário do cliente e seja transparente sobre as condições. A reputação é o ativo que mais gera juros compostos na sua carreira."
        ],
        exercise: {
          id: "estrutura-oferta",
          title: "Exercício: O Rascunho da sua Oferta Mínima",
          instructions: "Defina os 5 elementos da sua oferta de serviço ou mentoria em poucas linhas.",
          placeholder: "Para quem: Empresários locais faturando até 50k.\nProblema: Falta de novos clientes previsíveis.\nProcesso: Diagnóstico em 3 dias + Plano de ação em 4 semanas.\nEntrega: 4 reuniões individuais + modelos prontos de anúncios.\nPróximo passo: Agendar chamada de 15 minutos.",
          template: "Público: [...] | Problema: [...] | Solução/Processo: [...] | O que inclui: [...] | Chamada para Ação: [...]"
        }
      }
    ],
    keyTakeaway: "Uma grande oferta não é aquela que tenta empurrar um produto; é aquela que faz o cliente perceber que recusar custará mais caro do que aceitar."
  },
  {
    number: 6,
    slug: "estrategia-de-conversao",
    title: "Estratégia de Conversão & O Funil de Confiança",
    subtitle: "Transformando seguidores em conversas, propostas e clientes apaixonados",
    readTime: "3 min",
    tagline: "Conversão é transformar atenção dispersa em uma ação comercial deliberada e voluntária.",
    summary: "Não espere que as pessoas adivinhem que você tem vagas abertas. É papel do estrategista guiar o público por um caminho suave de tomada de decisão.",
    sections: [
      {
        id: "6-1",
        title: "As Cinco Etapas do Funil de Confiança",
        content: [
          "A jornada de um desconhecido até se tornar cliente pagante obedece a um fluxo natural de cinco estágios:",
          "1. Atenção: A pessoa para o feed e descobre que você existe através de um gancho forte.",
          "2. Interesse: Ela consome seu conteúdo, visita seu perfil e decide acompanhar seu trabalho com frequência.",
          "3. Confiança: Ela percebe consistência, veracidade e profundidade nas suas análises ao longo das semanas.",
          "4. Decisão: Diante de uma oportunidade ou oferta bem comunicada, ela opta por investir na sua orientação.",
          "5. Relacionamento: Ela recebe uma entrega impecável, tem resultados reais e se torna promotora espontânea da sua marca."
        ]
      },
      {
        id: "6-2",
        title: "A Arte da Chamada para Ação (CTA) Sem Fricção",
        content: [
          "Muitas pessoas falham na conversão porque dão comandos conflitantes: 'Curta, comente, compartilhe, salve, entre no grupo do Telegram e clique no link da bio!'. O excesso de escolhas gera paralisia.",
          "Use sempre UMA ÚNICA chamada clara por publicação. Alinhe a chamada com o estágio de relacionamento:",
          "• Chamada de baixo compromisso: 'Qual é a sua opinião sobre isso? Deixe nos comentários.'",
          "• Chamada de captura: 'Comente GUIA para receber o material complementar no seu direct.'",
          "• Chamada de alta intenção comercial: 'Quer que eu monte esse plano para o seu negócio? Envie a palavra PROPOSTA no direct.'"
        ],
        callout: {
          type: "insight",
          title: "Conversas no Direct Fecham Contratos",
          text: "Nas redes sociais, o feed é a vitrine pública onde você atrai olhares; as mensagens privadas (Direct/WhatsApp) são a mesa de reunião onde você fecha os negócios."
        }
      },
      {
        id: "6-3",
        title: "As Métricas que Realmente Movem o Ponteiro",
        content: [
          "Pare de sofrer por curtidas ou visualizações de reels que não trazem nenhum cliente. Foque nos números vitais da sua operação:",
          "• Alcance qualificado de público-alvo (quantos perfis do seu cliente ideal viram seu conteúdo).",
          "• Retenção e salvamentos (indicador real de utilidade do material compartilhado).",
          "• Conversas iniciadas no Direct (o melhor termômetro de demanda reprimida).",
          "• Propostas e diagnósticos apresentados na semana.",
          "• Taxa de fechamento e faturamento gerado por cliente."
        ]
      }
    ],
    keyTakeaway: "Vender não é pressionar ninguém a comprar; é conduzir com clareza quem já percebeu que precisa da sua ajuda."
  },
  {
    number: 7,
    slug: "plano-de-acao-30-dias",
    title: "Plano de Ação de 30 Dias",
    subtitle: "O roteiro de execução prática para sair da teoria e colher os primeiros frutos",
    readTime: "4 min",
    tagline: "Planejamento sem execução é alucinação. Trinta dias de foco absoluto mudam o jogo.",
    summary: "Dividido em quatro blocos semanais progressivos, este cronograma serve para orientar seu foco diário e eliminar a procrastinação.",
    sections: [
      {
        id: "7-1",
        title: "Semana 1 — Fundação & DNA Estratégico",
        content: [
          "Meta da semana: Eliminar a dúvida sobre quem você é e construir os ativos básicos de posicionamento.",
          "• Dia 1 e 2: Definir com clareza cirúrgica o nicho, o cliente ideal e a maior dor a ser resolvida.",
          "• Dia 3: Escrever sua Declaração de Posicionamento e atualizar biografia do perfil, foto profissional e link de contato.",
          "• Dia 4 e 5: Definir seus 3 pilares de conteúdo e mapear os 3 principais concorrentes para identificar o que falta no mercado.",
          "• Dia 6 e 7: Criar um banco de 15 ideias de ganchos e temas usando as dúvidas reais do seu público."
        ]
      },
      {
        id: "7-2",
        title: "Semana 2 — Produção & Ritmo de Postagem",
        content: [
          "Meta da semana: Construir consistência de publicação e testar o tempo de resposta da audiência.",
          "• Dia 8 a 14: Executar o Desafio dos 7 Dias de Conteúdo (2 educativos, 2 de conexão, 2 de prova/bastidor e 1 chamada).",
          "• Monitorar atentamente quais ganchos geraram mais salvamentos, comentários e directs.",
          "• Responder 100% dos comentários e mensagens privadas em até duas horas, estabelecendo diálogos humanos."
        ]
      },
      {
        id: "7-3",
        title: "Semana 3 — Estruturação & Apresentação da Oferta",
        content: [
          "Meta da semana: Colocar uma proposta comercial no ar e abrir as portas para os primeiros clientes.",
          "• Dia 15 a 17: Detalhar sua Oferta Mínima Viável (formato de entrega, etapas, preço justo e prazo de acompanhamento).",
          "• Dia 18 a 19: Criar um formulário simples de aplicação ou uma página de agendamento de diagnóstico gratuito de 20 minutos.",
          "• Dia 20 e 21: Fazer uma série de stories estratégicos e um post carrossel apresentando as vagas abertas para o projeto piloto."
        ]
      },
      {
        id: "7-4",
        title: "Semana 4 — Otimização, Vendas e Consolidação",
        content: [
          "Meta da semana: Conduzir conversas de vendas, coletar feedbacks de clientes e retroalimentar o ecossistema.",
          "• Dia 22 a 26: Realizar as chamadas de diagnóstico, tirar dúvidas e apresentar propostas comerciais com segurança.",
          "• Dia 27 e 28: Coletar impressões sinceras dos prospectos: por que compraram ou quais foram as dúvidas restantes?",
          "• Dia 29 e 30: Documentar os aprendizados, refinar sua mensagem central e planejar o ciclo dos próximos 30 dias com base no que comprovadamente funcionou."
        ],
        exercise: {
          id: "compromisso-30-dias",
          title: "Termo de Compromisso de Execução",
          instructions: "Defina sua meta para os próximos 30 dias e assuma um compromisso consigo mesmo.",
          placeholder: "Nos próximos 30 dias, meu foco principal será: atrair [3 clientes de mentoria] cobrando [R$ 1.500 cada], publicando [5 vezes por semana] sem falhar.",
          template: "Minha meta em 30 dias: [...] | Número de posts: [...] | Número de conversas no direct: [...] | Faturamento meta: R$ [...]"
        }
      }
    ],
    keyTakeaway: "A consistência nos dias normais é o que constrói a reputação nos dias extraordinários. Execute os 30 dias sem pular nenhuma etapa."
  },
  {
    number: 8,
    slug: "checklist-e-conclusao",
    title: "Checklist de Maestria & Conclusão",
    subtitle: "A auditoria final do seu ecossistema e o convite para a maestria contínua",
    readTime: "2 min",
    tagline: "Influência é uma construção diária. Ela nasce da união entre valor, clareza, confiança e consistência.",
    summary: "Faça uma revisão rigorosa dos sete pontos de controle antes de acelerar sua produção e celebre o início da sua nova fase profissional.",
    sections: [
      {
        id: "8-1",
        title: "Checklist de Auditoria Estratégica",
        content: [
          "Antes de investir dinheiro em tráfego ou reclamar do algoritmo, certifique-se de que sua base está 100% blindada:",
          "■ [ ] 1. Sei com precisão cirúrgica quem quero ajudar e quem NÃO é meu cliente ideal.",
          "■ [ ] 2. Sei exatamente qual problema urgente e doloroso eu consigo solucionar.",
          "■ [ ] 3. Tenho uma mensagem clara e concisa que qualquer pessoa compreende em 5 segundos.",
          "■ [ ] 4. Meus pilares de conteúdo estão definidos em um território exclusivo de diferenciação.",
          "■ [ ] 5. Minha oferta está estruturada com escopo, método, preço e transformação tangível.",
          "■ [ ] 6. Sei conduzir chamadas para ação sem confusão e direcionar pessoas para conversas no direct/WhatsApp.",
          "■ [ ] 7. Tenho um plano de execução de 30 dias agendado no meu calendário e vou cumpri-lo inegociavelmente."
        ]
      },
      {
        id: "8-2",
        title: "Conclusão e Manifesto Final",
        content: [
          "Influência verdadeira não é um acidente de percurso nem privilégio de quem já nasceu famoso. Ela nasce da combinação paciente entre valor real, clareza inegociável, comunicação estratégica, confiança inabalável e execução consistente.",
          "Este e-book não foi feito para ficar esquecido em uma pasta de downloads. Ele foi desenhado para ser o seu mapa de bordo prático.",
          "Coloque cada capítulo em movimento a partir de hoje. O mercado está faminto por vozes autênticas, honestas e que realmente dominam o que ensinam.",
          "Seu valor só se transforma em riqueza quando você tem a coragem de comunicá-lo com maestria ao mundo."
        ],
        callout: {
          type: "insight",
          title: "Mensagem de Fechamento",
          text: "“Sua influência cresce quando seu valor é percebido, comunicado e colocado em prática.” — Método Influência Milionária."
        }
      }
    ],
    keyTakeaway: "Você tem agora em mãos o mapa completo. A única variável que determina o tamanho do seu resultado é a velocidade e a disciplina da sua aplicação."
  }
];

export const HOOK_TEMPLATES = [
  {
    category: "Contraintuitivo & Choque",
    hooks: [
      "Pare de fazer [X] se você ainda quer [Y] em 2026.",
      "A mentira que te contaram sobre [TEMA] que está custando seu dinheiro.",
      "Por que 95% das pessoas falham ao tentar [OBJETIVO] (e o segredo dos 5%).",
      "Eu passei 5 anos fazendo [X] do jeito errado até descobrir isto...",
      "O conselho popular sobre [TEMA] que é uma armadilha disfarçada."
    ]
  },
  {
    category: "Tutorial Prático & Rápido",
    hooks: [
      "O passo a passo de 3 minutos para você finalmente dominar [HABILIDADE].",
      "O roteiro exato que eu uso para [RESULTADO] sem precisar de [DOR].",
      "Copie e cole este método simples para resolver [PROBLEMA COMUM].",
      "Como sair do zero em [ÁREA] em apenas 4 semanas de foco diário.",
      "Os 3 ajustes rápidos no seu perfil que duplicam a confiança dos clientes."
    ]
  },
  {
    category: "História & Bastidor",
    hooks: [
      "O pior erro financeiro que já cometi no meu negócio (e a lição de ouro).",
      "O que ninguém te conta sobre os bastidores de fechar contratos de [R$ X].",
      "Como um cliente meu saiu de [PONTO A RUIM] para [PONTO B BOM] em 45 dias.",
      "A conversa de 10 minutos que mudou completamente minha visão sobre [TEMA].",
      "O que eu faria se tivesse que recomeçar do absoluto zero hoje."
    ]
  },
  {
    category: "Conversão & Oferta",
    hooks: [
      "Se você é [PÚBLICO] e está cansado de [DOR], leia isto até o fim.",
      "Estamos abrindo apenas 5 vagas para o nosso projeto de acompanhamento em [TEMA].",
      "O diagnóstico gratuito que mostra onde você está deixando dinheiro na mesa.",
      "Como funciona a nossa mentoria individual na prática (sem mistérios).",
      "Comente [PALAVRA-CHAVE] que eu te envio o material secreto no Direct."
    ]
  }
];

export const NICHE_PRESETS = [
  {
    name: "Consultor / Mentor de Negócios",
    publico: "empresários de pequeno e médio porte",
    dor: "vendas estagnadas e falta de previsibilidade",
    transformacao: "estruturar um time comercial e dobrar o faturamento",
    metodo: "o Método Escala Previsível em 6 etapas",
    sem: "precisar trabalhar 14 horas por dia",
  },
  {
    name: "Especialista em Finanças / Investimentos",
    publico: "profissionais liberais e médicos",
    dor: "trabalhar muito e não ver o dinheiro sobrar no fim do mês",
    transformacao: "construir uma carteira de renda passiva sólida",
    metodo: "uma estratégia de alocação inteligente em 30 minutos por mês",
    sem: "precisar virar refém do mercado financeiro ou especular",
  },
  {
    name: "Nutrição & Saúde / Personal Trainer",
    publico: "mulheres executivas com rotina acelerada",
    dor: "cansaço crônico, inchaço e efeito sanfona",
    transformacao: "conquistar o peso ideal com alta vitalidade",
    metodo: "o protocolo de nutrição metabólica eficiente",
    sem: "dietas restritivas malucas ou horas na academia",
  },
  {
    name: "Designer / Criativo / Social Media",
    publico: "marcas que querem transmitir sofisticação",
    dor: "atrair clientes que pechincham preço e não valorizam o serviço",
    transformacao: "cobrar 3x a 5x mais por projeto",
    metodo: "o posicionamento visual de alto padrão",
    sem: "precisar de milhares de seguidores para fechar contratos",
  },
  {
    name: "Tecnologia / Carreira / Desenvolvedor",
    publico: "desenvolvedores júnior e pleno",
    dor: "estagnar na carreira e ser reprovado em entrevistas internacionais",
    transformacao: "conquistar vagas remotas em dólar",
    metodo: "o framework de portfólio estratégico e engenharia de soft skills",
    sem: "precisar de graduações intermináveis",
  }
];

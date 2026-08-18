# Direção visual — Cadastro de Proximidade

## Abordagens consideradas

### Abordagem 1 — Missão Contemporânea
Interface institucional com sidebar escura, cartões claros e acentos dourados, transmitindo organização, acolhimento e confiança. A navegação em etapas torna o formulário mais compreensível e reduz a sensação de burocracia.

**Probability:** 0.06

### Abordagem 2 — Arquivo Editorial
Uma leitura mais documental, inspirada em fichários e relatórios impressos, com tipografia serifada, linhas de registro e forte hierarquia textual. A estética enfatiza memória, cuidado e rastreabilidade.

**Probability:** 0.03

### Abordagem 3 — Minimalismo Cívico
Composição clara e silenciosa, com poucos elementos, bastante espaço negativo e acentos em azul petróleo. O foco recai sobre a ação principal e sobre a clareza do processo.

**Probability:** 0.08

## Abordagem escolhida — Missão Contemporânea

### Design Movement
Modernismo institucional acolhedor, combinando a precisão de um painel administrativo com a materialidade suave de uma identidade comunitária.

### Core Principles
1. **Orientação antes da ação:** a pessoa sempre sabe em que etapa está, por que está preenchendo e qual é o próximo passo.
2. **Acolhimento sem excesso:** superfícies suaves, contraste controlado e microcopy humano, sem perder a eficiência operacional.
3. **Hierarquia assimétrica:** uma coluna de contexto fixa conduz o processo; o conteúdo principal respira em cartões e blocos bem definidos.
4. **Confiança visual:** informações de status, destino dos dados e privacidade ficam visíveis e objetivas.

### Color Philosophy
O azul petróleo profundo da coluna lateral cria uma sensação de estabilidade e pertencimento. O fundo marfim reduz a frieza de uma interface de cadastro, enquanto o dourado queimado funciona como assinatura de atenção e sinaliza progresso. O verde suave é reservado a estados positivos e online.

### Layout Paradigm
Composição em duas zonas: uma lateral de identidade e orientação, e uma área de trabalho ampla com cabeçalho, resumo e formulário. Em telas menores, a lateral se transforma em uma faixa superior compacta, mantendo o progresso em uma sequência horizontal rolável.

### Signature Elements
- Painel lateral azul petróleo com textura atmosférica sutil.
- Rótulos em caixa alta com espaçamento generoso e dourado queimado.
- Cartões brancos com cantos moderados, sombra difusa e divisórias finas, evitando uma aparência de grade genérica.

### Interaction Philosophy
Toda interação deve confirmar o estado do sistema: etapas ativas ganham uma borda dourada e um pequeno marcador; ações importantes usam feedback de pressionamento e foco visível; o formulário do Tally aparece em um bloco integrado, sem parecer um redirecionamento abrupto.

### Animation
Entradas suaves de opacidade e deslocamento vertical curto, em até 240 ms, com pequenas defasagens entre cartões. A troca de etapa usa transição curta e discreta. Hover altera sombra e contraste, nunca tamanho do layout. Respeitar `prefers-reduced-motion`.

### Typography System
- **Display:** Manrope, pesos 600–800, para títulos e números de etapa.
- **Body:** DM Sans, pesos 400–600, para instruções e labels.
- Títulos compactos e fortes; corpo com altura de linha confortável; rótulos sempre pequenos, semibold, em caixa alta e com letter-spacing.

### Brand Essence
**Cadastro de Proximidade** é uma porta digital para conhecer, acompanhar e integrar pessoas à vida comunitária com cuidado e clareza. Personalidade: atento, confiável, humano.

### Brand Voice
Headlines são diretas e calorosas; CTAs são verbos claros; microcopy explica sem infantilizar.

> “Cada resposta aproxima a missão das pessoas.”
>
> “Preencha com calma. O próximo passo está indicado.”

### Wordmark & Logo
Símbolo abstrato formado por duas formas curvas que se aproximam, sugerindo encontro e caminho compartilhado, acompanhado por um wordmark em caixa baixa com peso forte e espaçamento compacto.

### Signature Brand Color
**Azul Proximidade — `#092637`**, um azul petróleo profundo, próprio da marca e usado como âncora visual.

## Style Decisions

- O wordmark principal é “cadastro de proximidade”, enquanto “Missão Guarulhos · Shalom” aparece como afiliação contextual.
- O bloco do formulário Tally deve ser percebido como continuação da interface, usando orientação em português, textura editorial e motivos de conexão ao redor do embed.
- Ações e microcopy próprias da camada de orientação usam linguagem acolhedora em português; o conteúdo interno do Tally permanece sob controle do formulário externo.

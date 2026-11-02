---
name: "Konexo Landing Page"
description: "Agência de Marketing e Presença Digital para PMEs — design system extraído do código atual"
colors:
  ink: "#0A0A0B"
  ink-2: "#111113"
  ink-3: "#1A1A1E"
  line: "rgba(244, 241, 234, 0.12)"
  bone: "#F4F1EA"
  muted: "#A1A1A8"
  muted-ink: "#5A5A52"
  volt: "#C8FF2E"
  volt-ink: "#0A0A0B"
  violet: "#7C5CFF"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.14em"
    textTransform: "uppercase"
  serif:
    fontFamily: "'Instrument Serif', Georgia, serif"
    fontStyle: "italic"
    fontWeight: 400
    letterSpacing: "-0.01em"
rounded:
  sm: "16px"
  md: "28px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  edge: "max(var(--gutter), calc((100% - var(--container)) / 2 + var(--gutter)))"
  container: "1320px"
  section-y: "clamp(4rem, min(8vw, 11vh), 7rem)"
components:
  btn:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.volt-ink}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
    minHeight: "52px"
    fontFamily: "{typography.display.fontFamily}"
    fontWeight: 600
    fontSize: "1rem"
    letterSpacing: "-0.01em"
  btn-hover:
    backgroundColor: "#d9ff5c"
  btn-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    border: "1px solid {colors.line}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
    minHeight: "52px"
  btn-ghost-hover:
    borderColor: "{colors.volt}"
    textColor: "{colors.volt}"
  btn-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.6rem"
    minHeight: "52px"
  btn-ink-hover:
    backgroundColor: "#232326"
  btn-sm:
    minHeight: "44px"
    padding: "0.6rem 1.2rem"
    fontSize: "0.95rem"
  card:
    backgroundColor: "{colors.ink-3}"
    borderColor: "{colors.line}"
    borderWidth: "1px"
    rounded: "{rounded.md}"
    padding: "2rem"
  card-hover:
    borderColor: "rgba(200, 255, 46, 0.5)"
    transform: "translateY(-4px)"
  plan-card:
    backgroundColor: "#fff"
    borderColor: "rgba(10, 10, 11, 0.1)"
    borderWidth: "1px"
    rounded: "{rounded.md}"
    padding: "2.4rem 2.2rem"
  plan-card-hover:
    transform: "translateY(-6px)"
    boxShadow: "0 26px 60px rgba(10, 10, 11, 0.12)"
  plan-card-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    borderColor: "{colors.ink}"
  fcard:
    backgroundColor: "{colors.ink-3}"
    borderColor: "{colors.line}"
    borderWidth: "1px"
    rounded: "{rounded.sm}"
    padding: "1.1rem 1.2rem"
    boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45)"
  header:
    backgroundColor: "transparent"
    borderColor: "transparent"
    borderWidth: "1px"
    borderBottom: true
  header-scrolled:
    backgroundColor: "rgba(10, 10, 11, 0.72)"
    backdropFilter: "blur(14px)"
    borderBottomColor: "{colors.line}"
  menu:
    backgroundColor: "{colors.ink}"
  logo:
    fontFamily: "{typography.display.fontFamily}"
    fontWeight: 700
    fontSize: "1.45rem"
    letterSpacing: "-0.03em"
  eyebrow:
    fontFamily: "{typography.label.fontFamily}"
    fontWeight: 600
    fontSize: "0.875rem"
    letterSpacing: "0.14em"
    textTransform: "uppercase"
    color: "{colors.muted}"
    gap: "0.6rem"
  eyebrow-pulse:
    width: "8px"
    height: "8px"
    borderRadius: "50%"
    background: "{colors.volt}"
  glow:
    borderRadius: "50%"
    filter: "blur(120px)"
    opacity: "0.14"
  glow-volt:
    background: "{colors.volt}"
  glow-violet:
    background: "{colors.violet}"
  grain:
    opacity: "0.04"
    animation: "grain-shift 1.2s steps(4) infinite"
  progress:
    height: "2px"
    background: "{colors.volt}"
    transformOrigin: "0 50%"
  cursor:
    width: "12px"
    height: "12px"
    borderRadius: "50%"
    background: "{colors.volt}"
    mixBlendMode: "difference"
  cursor-active:
    width: "76px"
    height: "76px"
    mixBlendMode: "normal"
    background: "{colors.volt}"
  wpp-float:
    width: "58px"
    height: "58px"
    borderRadius: "50%"
    background: "{colors.volt}"
    boxShadow: "0 12px 32px rgba(200, 255, 46, 0.28)"
  wpp-float-hover:
    background: "#d9ff5c"
    transform: "scale(1.08)"
  wpp-float-pulse:
    border: "1.5px solid {colors.volt}"
    animation: "wpp-pulse 2.4s var(--ease) infinite"
  skip-link:
    background: "{colors.volt}"
    color: "{colors.volt-ink}"
    padding: "0.8rem 1.2rem"
    rounded: "{rounded.pill}"
    fontWeight: 600
  depo-card:
    backgroundColor: "{colors.ink-3}"
    borderColor: "{colors.line}"
    borderWidth: "1px"
    rounded: "{rounded.md}"
    padding: "2.6rem"
  depo-quote:
    fontFamily: "{typography.display.fontFamily}"
    fontWeight: 500
    fontSize: "clamp(1.2rem, 2vw, 1.5rem)"
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  depo-photo:
    width: "52px"
    height: "52px"
    borderRadius: "50%"
    border: "1px dashed {colors.line}"
  step-card:
    backgroundColor: "{colors.ink-3}"
    borderColor: "{colors.line}"
    borderWidth: "1px"
    rounded: "{rounded.md}"
    padding: "2.4rem 2.2rem"
  step-num:
    fontFamily: "{typography.display.fontFamily}"
    fontWeight: 800
    fontSize: "9rem"
    lineHeight: 1
    letterSpacing: "-0.05em"
    color: "transparent"
    webkitTextStroke: "1px {colors.line}"
  case-row:
    borderColor: "{colors.line}"
    borderWidth: "1px"
  case-row-hover:
    background: "rgba(244, 241, 234, 0.03)"
    paddingLeft: "1.4rem"
  case-row-go:
    width: "44px"
    height: "44px"
    borderRadius: "{rounded.circle}"
    border: "1px solid {colors.line}"
  case-row-go-hover:
    background: "{colors.volt}"
    color: "{colors.volt-ink}"
    borderColor: "{colors.volt}"
    transform: "rotate(45deg)"
  faq-q:
    fontFamily: "{typography.display.fontFamily}"
    fontWeight: 600
    fontSize: "clamp(1.1rem, 2vw, 1.45rem)"
    letterSpacing: "-0.02em"
    minHeight: "44px"
  faq-icon:
    width: "36px"
    height: "36px"
    borderRadius: "{rounded.circle}"
    border: "1px solid {colors.line}"
  faq-icon-open:
    background: "{colors.volt}"
    color: "{colors.volt-ink}"
    borderColor: "{colors.volt}"
    transform: "rotate(45deg)"
  bento-card:
    backgroundColor: "{colors.ink-3}"
    borderColor: "{colors.line}"
    borderWidth: "1px"
    rounded: "{rounded.md}"
    padding: "2rem"
  bento-card-hover:
    borderColor: "rgba(200, 255, 46, 0.5)"
    transform: "translateY(-4px)"
  bento-icon:
    width: "44px"
    height: "44px"
    borderRadius: "12px"
    border: "1px solid {colors.line}"
    color: "{colors.volt}"
  bento-arrow:
    width: "36px"
    height: "36px"
    borderRadius: "{rounded.circle}"
    border: "1px solid {colors.line}"
    color: "{colors.muted}"
  bento-arrow-hover:
    background: "{colors.volt}"
    color: "{colors.volt-ink}"
    transform: "rotate(45deg)"
  modulo:
    border: "1px solid rgba(10, 10, 11, 0.18)"
    borderRadius: "{rounded.pill}"
    padding: "0.7rem 1.3rem"
  modulo-hover:
    borderColor: "{colors.ink}"
    transform: "translateY(-2px)"
  nav-link:
    color: "{colors.muted}"
    fontSize: "0.95rem"
  nav-link-hover:
    color: "{colors.bone}"
  mobile-nav-link:
    fontFamily: "{typography.display.fontFamily}"
    fontWeight: 700
    fontSize: "clamp(2.4rem, 9vw, 4rem)"
    letterSpacing: "-0.04em"
    lineHeight: 1.05
    color: "{colors.bone}"
  mobile-nav-link-hover:
    color: "{colors.volt}"
---

# Design System: Konexo Landing Page

## Overview

**Creative North Star: "O Laboratório Volt"**

A Konexo vive na tensão entre **precisão técnica** e **energia bruta**. O fundo preto-profundo (`--ink`) é a lousa; o **Volt** (`#C8FF2E`) é o traço de giz neon que risca a superfície, guia o olhar e sinaliza ação. O roxo (`--violet`) aparece como profundidade — o "backstage" da estratégia. A tipografia alterna entre o **grotesco técnico** (Bricolage Grotesque) para estrutura e o **serif editorial** (Instrument Serif) para o toque humano. Nada é decorativo: cada glow, cada linha animada, cada card flutuante serve para demonstrar **método, prazo e números claros** — a promessa da marca.

**Key Characteristics:**
- **Paleta restrita**: 3 cores funcionais (ink, bone, volt) + 1 de profundidade (violet) + neutros
- **Tipografia fluida com `clamp()`**: escala sem breakpoints fixos, legível em qualquer viewport
- **Espaçamento rítmico**: `--gutter`, `--section-y`, `--container` como única métrica espacial
- **Borda arredondada generosa (28px)**: linguagem de forma consistente, "amigável mas séria"
- **Movimento contido**: `cubic-bezier(.16, 1, .3, 1)` como easing universal; reduced-motion respeitado nativamente
- **Camadas de profundidade**: grain fixo (ruído sutil), glows radiais, cards elevados com sombra forte, header glassmorphic no scroll
- **Interações táteis**: magnetic buttons, cursor customizado, hover states que "respondem" (setas rotacionam, badges pulsam)

---

## Colors

A paleta é **intencionalmente mínima**. Cada cor tem papel único e não intercambiável.

### Primary
- **Volt Neon** (`#C8FF2E` / `oklch(92% 0.28 110)`): A cor de **ação e foco**. Usada em CTAs primários, links hover, ícones de prova, números de destaque, pulse dots, cursor, barra de progresso, botão WhatsApp flutuante. **Regra**: aparece em ≤10% da superfície visível — sua raridade é o ponto.

### Secondary
- **Violet Profundo** (`#7C5CFF` / `oklch(58% 0.26 270)`): Cor de **profundidade e backstage**. Apenas em glows decorativos de fundo (hero, sections) e gradientes sutis (avatar do phone card). Nunca em texto ou UI funcional.

### Tertiary (não usado como role independente)
- O roxo não tem papel terciário ativo; atua só como atmosfera.

### Neutral
- **Ink** (`#0A0A0B` / `oklch(8% 0 0)`): Fundo principal, texto em cards claros, header scrolled. O "preto" da marca.
- **Ink-2** (`#111113`): Fundo alternado de sections (`.section--alt`), containers de cards.
- **Ink-3** (`#1A1A1E`): Cards elevados (floating cards, depoimentos, steps, bento, FAQ) — cria separação tonal sutil do fundo principal.
- **Bone** (`#F4F1EA` / `oklch(94% 0.005 85)`): Texto principal, backgrounds de plano featured, "papel" off-white. Não é branco puro — tem calor.
- **Muted** (`#A1A1A8` / `oklch(65% 0.01 260)`): Texto secundário, labels, placeholders, bordas sutis, ícones inativos.
- **Muted-ink** (`#5A5A52` / `oklch(40% 0.02 80)`): Texto muted sobre fundos claros (planos light, combos) — garante contraste AA.
- **Line** (`rgba(244, 241, 234, 0.12)`): Borda universal, divisores, strokes de SVG, underlines animados. A "linha de grade" do sistema.

### Named Rules

**The One Voice Rule.** O Volt é usado em ≤10% de qualquer tela. Sua raridade é o ponto — ele guia, não decora.

**The Ink-First Rule.** Fundos são escuros por padrão (`--ink`). Seções claras (`.section--light`) existem apenas para contraste deliberado (planos, combos) e usam `--bone` + `--muted-ink` + `--ink` para texto.

**The Line Consistency Rule.** Todas as bordas, divisores e strokes usam `--line` (rgba bone 12%). Nunca hex fixo. Isso garante que a "grade" respire com o tema.

---

## Typography

**Display Font:** Bricolage Grotesque (opsz 12..96, wght 400..800) — grotesco técnico, voz da estrutura  
**Body Font:** Inter (wght 400..600) — legibilidade longa, voz da explicação  
**Serif Accent:** Instrument Serif (ital 0;1) — editorial, humano, usado só em `<em class="serif">` para palavras-chave no hero e headlines

**Character:** O par Grotesque + Serif cria tensão controlada: o técnico enquadra, o editorial emociona. Inter desaparece em corpo longo. Tudo em `clamp()` — nada de breakpoints tipográficos.

### Hierarchy

- **Display** (700, `clamp(2.8rem, min(5.6vw, 10.5vh), 6.25rem)`, 0.96, -0.04em): Hero H1 apenas. `text-wrap: balance`.
- **Headline** (700, `clamp(2.1rem, min(5vw, 8.5vh), 4.5rem)`, 0.96, -0.03em): Section H2, case-row names, footer word.
- **Title** (600, `clamp(1.5rem, 2.6vw, 2.25rem)`, 1.05, -0.02em): Section H3, step cards, depoimento quotes, FAQ questions.
- **Body** (400, `clamp(1rem, 1.15vw, 1.175rem)`, 1.6, 0): Parágrafos, leads, list items, form labels. Max 60–65ch.
- **Label** (600, 0.875rem, 1, 0.14em, uppercase): Eyebrows, plan badges, modulo tags, meta labels, nav mobile numbers.
- **Serif Accent** (400, italic, inherit size, -0.01em): `<em class="serif">` em hero H1 e H2 — apenas palavras-chave ("encontrada", "escolhida", "estratégia").

### Named Rules

**The Serif Sparingly Rule.** Instrument Serif aparece apenas em `<em class="serif">` dentro de headlines — nunca em corpo, nunca em UI. É tempero, não prato principal.

**The Clamp-Only Rule.** Nenhum `font-size` fixo em rem/px fora de `clamp()` ou componentes de UI fixa (botões, badges). A escala é fluida por design.

**The Balance Rule.** Headlines usam `text-wrap: balance` para evitar viúvas visuais em linhas curtas.

---

## Layout

**Modelo espacial:** Container centralizado (`max-width: 1320px`, padding `--gutter`) + grid de 12 colunas implícito via `grid-template-columns` com `fr` e `span`. Sections usam `padding-block: var(--section-y)` (4rem–7rem fluido). Gutter fluido `clamp(1.25rem, 4vw, 3rem)` garante respiro em mobile e desktop.

**Densidade:** Alta no hero (grid 1.15fr / .85fr), média em bento (6 colunas), baixa em depoimentos (cards 560px fixos com snap). Footer usa 4 colunas (1.4fr 1fr 1fr 1fr) colapsando para 2→1.

**Ritmo vertical:** `--section-y` entre sections, `gap: 1.2rem–3rem` dentro de grids, `margin-bottom: 1.6rem–3rem` entre blocos semânticos. Tudo derivado de `--section-y` ou `--gutter`.

**Breakpoints observados (via media queries):**
- 1200px: hero grid ajustado, numeros 2-col, footer 2-col
- 900px: header → burger, hero stack, cenario stack, bento 2-col, planos 1-col, oferta 2-col, sobre stack
- 700px: método → lista vertical, controles escondidos
- 640px: bento 1-col, numeros 2-col compacto, oferta 1-col, form 1-col, footer 1-col, floating cards reposicionados

**Named Rules**

**The Container Rule.** Nada escapa do `--container` (1320px) sem decisão explícita (full-bleed glows, header fixed, wpp-float, preloader).

**The Gutter Rule.** Espaçamento lateral **sempre** `var(--gutter)` via `.container` ou `var(--edge)` (que já inclui gutter) em viewports com snap/scroll-padding. Nunca hardcode `padding-inline`.

---

## Elevation & Depth

O sistema **não usa sombras em UI de repouso** (botões, cards, inputs são flat com border). Profundidade é transmitida por:

1. **Camadas tonais**: `--ink` → `--ink-2` → `--ink-3` → `--bone` (cada step +1 nível de "elevação" visual)
2. **Borda universal** (`--line`): define contorno, substitui sombra em repouso
3. **Sombras apenas em estado/flutuação**:
   - Floating cards (hero): `0 24px 60px rgba(0,0,0,.45)` — elevação dramática, "flutuam"
   - Plan cards hover: `0 26px 60px rgba(10,10,11,.12)` — sutil, responde ao cursor
   - Depoimentos/Steps/Bento: border only, hover = border-color + translateY
   - WPP float: `0 12px 32px rgba(200,255,46,.28)` — glow colorido, pulsa
   - Case preview (fixed): `0 30px 80px rgba(0,0,0,.55)` — modal-like
4. **Glows radiais** (`.glow--volt`, `.glow--violet`): `filter: blur(120px)`, `opacity: .14` — atmosfera, não UI
5. **Grain fixo** (`.grain`): ruído SVG animado `opacity: .04` — textura de "papel/filme", sempre no topo
6. **Header glassmorphic** no scroll: `backdrop-filter: blur(14px)`, `bg: rgba(10,10,11,.72)`, border `--line`

### Shadow Vocabulary

- **float-heavy** (`0 24px 60px rgba(0,0,0,.45)`): Hero floating cards only — máximo destaque
- **card-hover** (`0 26px 60px rgba(10,10,11,.12)`): Plan cards hover — sutil, confirma interação
- **modal-deep** (`0 30px 80px rgba(0,0,0,.55)`): Case preview fixed — isolamento total
- **wpp-glow** (`0 12px 32px rgba(200,255,46,.28)`): WhatsApp float — branded, pulsa
- **glass-header** (`backdrop-filter: blur(14px)`): Header scrolled — superfície vítrea

### Named Rules

**The Flat-By-Default Rule.** Superfícies são flat (border-only) em repouso. Sombras aparecem apenas como resposta a estado (hover, flutuação intencional, fixed/modal) ou identidade de marca (WPP).

**The Tonal Ladder Rule.** Profundidade = tom de fundo. `--ink` (base) → `--ink-2` (section alt) → `--ink-3` (card) → `--bone` (light section). Não invente sombras para criar hierarquia; mude o tom.

---

## Shapes

**Linguagem de forma:** Cantos generosos (`--radius: 28px`), pílulas (`999px`) para ações, círculos para avatares/indicadores, `12px` para ícones pequenos (bento). Consistência radical — apenas 4 raios no sistema todo.

**Bordas:** `1px solid var(--line)` universal. Hover → `border-color: rgba(200,255,46,.5)` (cards) ou `var(--volt)` (botões ghost, nav, case-row go). Nunca `box-shadow` como hover principal em cards.

**Silhuetas recorrentes:**
- Cards retangulares com `--radius` (plan, depoimento, step, bento, FAQ, fcard)
- Pílulas (`999px`): botões, badges, módulos, tags, chips
- Círculos (`50%`): avatar phone, reel check, WPP float, case-row go, depo photo, faq icon, step rail dots
- Setas rotacionadas (45°) como affordance de "ir/expandir" (bento arrow, case-row go, faq icon, reel check)

**Clipping/Overflow:** `overflow: hidden` em cards com `::before` radial gradient (bento), `clip-path: inset()` no menu mobile (abre/fecha), `overflow-x: clip` em sections + html.

### Named Rules

**The Four-Radius Rule.** Só `--radius` (28px), `--radius-sm` (16px), `999px` (pill), `50%` (circle). Nada de `8px`, `4px`, `12px` (exceto bento icon 12px — componente único).

**The Border-First Rule.** Contorno = `--line` 1px. Hover = mudança de cor da borda + translateY. Sombra só em exceções documentadas.

---

## Components

### Buttons
**Character:** Táteis, confiantes, magnéticos. `min-height: 52px` (touch target), `border-radius: 999px`, `font-family: display`, `font-weight: 600`. SVG seta desliza 5px no hover. Magnetic effect (JS) atrai cursor.

- **Primary (`.btn--volt`)**: `bg: var(--volt)`, `color: var(--volt-ink)`. Hover: `bg: #d9ff5c` (volt mais claro).
- **Ghost (`.btn--ghost`)**: `border: 1px var(--line)`, `color: var(--bone)`, transparent bg. Hover: `border-color: var(--volt)`, `color: var(--volt)`.
- **Ink (`.btn--ink`)**: `bg: var(--ink)`, `color: var(--bone)`. Hover: `bg: #232326`.
- **Small (`.btn--sm`)**: `min-height: 44px`, `padding: .6rem 1.2rem`, `font-size: .95rem`.

**Focus-visible:** `outline: 2px solid var(--volt)`, `outline-offset: 3px` (global).

### Header / Nav
**Character:** Leve, invisível até scroll. `position: fixed`, `z-index: 1000`. Logo: display 700, 1.45rem, X inline. Nav links: muted, underline animado (scaleX 0→1, origin troca). CTA: btn--volt `--sm` com magnetic.

**Scrolled:** Glassmorphic — `rgba(10,10,11,.72)` + `backdrop-filter: blur(14px)` + border `--line`.

**Mobile Menu:** Full-screen, `clip-path: inset(0 0 100% 0) → inset(0 0 0% 0)`, `transition: .6s var(--ease)`. Links: display 700, clamp(2.4rem, 9vw, 4rem), números em volt (01, 02...).

### Floating Cards (Hero)
**Character:** Evidência viva do trabalho. 4 cards posicionados absolutamente sobre stage com linhas SVG conectando. `bg: var(--ink-3)`, `border: var(--line)`, `radius: --radius-sm`, `shadow: float-heavy`.

- **Phone**: 216px, radius 26px, grid 3×3 de thumbnails com gradientes de marca
- **Metric**: 230px, número grande display volt (+212%), sparkline SVG
- **Maps**: 210px, rating 4.9 + estrelas volt, pin row
- **Reel**: 250px, status check circle volt, agendamento

### Bento Grid (Serviços)
**Character:** Denso, informativo, hover revelador. Grid 6-col, cards `span 2/3/4`. `bg: var(--ink-3)`, `border: var(--line)`, `radius: --radius`. Hover: `border-color: rgba(volt,.5)`, `translateY(-4px)`, radial glow `::before` aparece.

Icon: 44px square, radius 12px, border `--line`, volt icon. Arrow: 36px circle, rotaciona 45° no hover → vira volt.

### Cases (Table Rows)
**Character:** Tabela elegante, hover expande. Grid 5-col (name, meta, metric, go). Name: display 700 clamp(1.5rem, 3vw, 2.4rem). Metric: muted + strong volt. Go: 44px circle, border `--line`, hover → volt + rotate 45°.

**Preview (desktop only):** Fixed 320×220, `modal-deep` shadow, 4 slides com gradientes de marca, fade transition.

### Depoimentos (Carousel)
**Character:** Carrossel touch/snap, cards 560px/86vw. `bg: var(--ink-3)`, `border: var(--line)`, `radius: --radius`. Quote: display 500 clamp(1.2rem, 2vw, 1.5rem). Photo: 52px circle, border dashed `--line`, gradient bg. Controls: 48px circle buttons, hover → volt.

### Método (Horizontal Snap)
**Character:** Passos largos (400px/82vw), numeração outline gigante (9rem, text-stroke `--line`). Step: `bg: var(--ink-3)`, `border: var(--line)`, `radius: --radius`. Deliverable: `color: var(--volt)`, seta `→`. Rail: linha 2px `--line` + fill volt animado (scaleX).

**Mobile (<700px):** Vira lista vertical, snap off, numeração 4.5rem top-right, controles escondidos.

### Planos (Pricing Cards)
**Character:** 3 colunas, featured invertido (ink + volt). Card: `#fff` / `border: rgba(ink,.1)` / `radius: --radius` / `padding: 2.4rem`. Hover: `translateY(-6px)` + `card-hover` shadow.

Featured: `bg: var(--ink)`, `color: var(--bone)`, `border: var(--ink)`, badge volt absolutinho top-center. Price: display 800 clamp(2rem, 3vw, 2.7rem). List: check volt (`#6f9a00` light / `var(--volt)` featured). Muted items: `var(--muted-ink)` / `var(--muted)`.

**Módulos:** Pills `border: rgba(ink,.18)`, `radius: 999px`, `padding: .7rem 1.3rem`, hover → `border: var(--ink)` + `translateY(-2px)`. Bold label + muted spec.

### FAQ (Accordion)
**Character:** Grid-row animation suave. Question: display 600 clamp(1.1rem, 2vw, 1.45rem), min-height 44px. Icon: 36px circle, border `--line`, hover/open → volt bg + rotate 45°. Answer: `grid-template-rows: 0fr → 1fr` (`.5s var(--ease)`), muted text, max 62ch.

### WhatsApp Float
**Character:** Sempre acessível, branded, pulsa. Fixed 58px circle, `bg: var(--volt)`, `wpp-glow` shadow, `scale(0)→scale(1)` entrance. Hover: `#d9ff5c` + `scale(1.08)`. Pulse ring: `::after` border volt, `scale(1)→scale(1.65)` + `opacity:.8→0` loop 2.4s.

### Cursor & Progress (Desktop only)
**Progress:** Top 2px volt bar, `transform: scaleX(0→1)` ligado ao scroll progress.

**Cursor:** 12px circle, `mix-blend-mode: difference`, `bg: var(--volt)`. Hover em interativo → `is-active`: 76px, `mix-blend-mode: normal`, label aparece (data-cursor). `@media (hover: none)` → `display: none`.

### Preloader
**Character:** Marca animada, contador 0→100. Logo X desenhado (stroke-dasharray), tag "Conectando sua marca", counter. `display: none` em reduced-motion.

### Forms
**Character:** Grid 2-col (label+input), inputs flat `bg: var(--ink-3)`, `border: var(--line)`, `radius: --radius-sm`, focus → `border: var(--volt)`. Submit: btn--volt full-width. Checkbox custom: 20px square, border `--line`, check volt.

### Marquee
**Character:** Loop infinito 28s, uppercase display 600, letter-spacing .14em, muted + volt separators. `animation: marquee-scroll 28s linear infinite`. Reverse variant exists.

### Glows (Decorative)
**Character:** Radiais, blur 120px, opacity .14. Volt (energia) + Violet (profundidade). Posicionados absolutamente em hero, sections. Z-index 0 (atrás do conteúdo).

### Grain
**Character:** Ruído SVG fractal 240×240, `opacity: .04`, `animation: grain-shift 1.2s steps(4) infinite`. Fixed, z-index 2000, pointer-events none. Textura sutil de "filme/papel".

---

## Do's and Don'ts

### Do:
- **Do** usar `--ink`, `--ink-2`, `--ink-3`, `--bone`, `--muted`, `--muted-ink`, `--volt`, `--violet`, `--line` como únicas cores — nunca hex arbitrário.
- **Do** usar `clamp()` para todo tamanho de fonte fluido (exceto UI fixa: botões, badges, labels).
- **Do** usar `var(--gutter)` ou `var(--edge)` para espaçamento lateral — nunca `padding-inline: 2rem` hardcoded.
- **Do** usar `--radius` (28px) para cards, `--radius-sm` (16px) para cards menores/inputs, `999px` para pílulas, `50%` para círculos.
- **Do** manter Volt em ≤10% da tela — ele é sinal, não ruído.
- **Do** animar com `var(--ease)` (`cubic-bezier(.16, 1, .3, 1)`) e durações 0.3–0.6s.
- **Do** respeitar `prefers-reduced-motion`: desabilitar cursor, preloader, grain animation, alongar marquee, instant reveal.
- **Do** usar `text-wrap: balance` em headlines.
- **Do** usar `<em class="serif">` apenas para palavras-chave em headlines — nunca em corpo.
- **Do** usar `border: 1px solid var(--line)` como contorno padrão — hover muda cor da borda + translateY.
- **Do** usar `focus-visible` global (outline volt 2px offset 3px) — nunca remover.
- **Do** manter `min-height: 44px/52px` em alvos de toque (botões, links mobile, FAQ questions).

### Don't:
- **Don't** introduzir nova cor (azul, vermelho, verde que não seja volt) — a paleta é fechada.
- **Don't** usar `font-size` fixo em rem/px para texto fluido — só `clamp()`.
- **Don't** usar `padding-inline` hardcoded — só `var(--gutter)` / `var(--edge)`.
- **Don't** inventar radius (`8px`, `4px`, `12px` fora do bento-icon) — só os 4 do sistema.
- **Don't** usar Volt em backgrounds grandes, texto de corpo, ou bordas decorativas — só CTAs, highlights, ícones de ação, cursor, progress.
- **Don't** usar easing diferente de `--ease` — consistência de motion é identidade.
- **Don't** animar propriedades que não sejam `transform`, `opacity`, `color`, `background`, `border-color`, `width/height` (grid-rows) — performance.
- **Don't** remover `focus-visible` ou `skip-link` — acessibilidade é inegociável.
- **Don't** usar `box-shadow` em cards em repouso — só border. Sombra = estado (hover/float/fixed).
- **Don't** colocar Instrument Serif fora de `<em class="serif">` em headlines — ele é acento, não fonte de UI.
- **Don't** quebrar o container (1320px) sem ser full-bleed intencional (glows, header, wpp, preloader).
- **Don't** usar `z-index` arbitrário — escala documentada: 0 (glows) → 900 (case preview) → 1000 (header) → 1100 (menu) → 1500 (wpp) → 2000 (grain) → 2500 (progress) → 3000 (skip-link) → 3500 (cursor).

---

<!-- SEED: established from existing codebase; re-run /impeccable document if design tokens drift. -->
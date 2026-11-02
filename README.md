# Konexo Landing Page

Landing page profissional da Konexo — Agência de Marketing e Presença Digital para PMEs.

## 📁 Estrutura do Projeto

```
├── index.html                 # Entry point principal
├── package.json               # Dependências e scripts
├── vite.config.js             # Configuração do Vite
├── css/
│   ├── main.css               # Importa todos os módulos CSS
│   ├── base/
│   │   ├── tokens.css         # Design tokens (cores, tipografia, espaçamento)
│   │   └── reset.css          # Reset e estilos base
│   ├── components/
│   │   ├── buttons.css        # Botões
│   │   ├── preloader.css      # Preloader
│   │   ├── progress-cursor.css # Barra de progresso + cursor
│   │   └── header.css         # Header e menu mobile
│   ├── sections/
│   │   ├── hero.css           # Hero section
│   │   ├── prova.css          # Logo strip
│   │   ├── cenario.css        # Cenário
│   │   ├── servicos.css       # Bento grid de serviços
│   │   ├── metodo.css         # Carrossel do método
│   │   ├── cases.css          # Cases
│   │   ├── numeros.css        # Números/estatísticas
│   │   ├── planos.css         # Planos e módulos
│   │   ├── oferta.css         # Oferta/diagnóstico
│   │   ├── depoimentos.css    # Depoimentos
│   │   ├── sobre.css          # Sobre/time
│   │   ├── faq.css            # FAQ
│   │   ├── diagnostico.css    # Formulário de diagnóstico
│   │   └── footer.css         # Footer + WhatsApp float
│   └── utilities/
│       ├── layout.css         # Container, sections
│       ├── effects.css        # Grain, glows, skip link
│       ├── typography.css     # Eyebrow, headings, reveals
│       └── responsive.css     # Breakpoints + reduced motion
├── js/
│   ├── main.js                # Entry point principal
│   ├── config/
│   │   └── config.js          # Configuração central (WhatsApp, email, etc.)
│   ├── utils/
│   │   ├── dom.js             # Utilitários DOM
│   │   ├── smooth-scroll.js   # Navegação suave
│   │   ├── component-loader.js # Carregador de componentes HTML
│   │   └── scroll-trigger-refresh.js # Refresh do ScrollTrigger
│   └── components/
│       ├── preloader.js
│       ├── header.js
│       ├── cursor.js
│       ├── magnetic.js
│       ├── spotlight.js
│       ├── split-titles.js
│       ├── reveals.js
│       ├── marquee.js
│       ├── hero-float.js
│       ├── metodo-carousel.js
│       ├── counters.js
│       ├── cases-preview.js
│       ├── depoimentos.js
│       ├── faq.js
│       ├── wpp-float.js
│       ├── footer-parallax.js
│       ├── plan-select.js
│       ├── form.js
│       ├── cases-renderer.js
│       ├── numeros-renderer.js
│       ├── planos-renderer.js
│       ├── depoimentos-renderer.js
│       ├── sobre-renderer.js
│       ├── faq-renderer.js
│       └── faq-schema.js
├── components/
│   ├── header.html
│   ├── hero.html
│   ├── prova.html
│   ├── cenario.html
│   ├── servicos.html
│   ├── metodo.html
│   ├── cases.html
│   ├── numeros.html
│   ├── planos.html
│   ├── oferta.html
│   ├── depoimentos.html
│   ├── sobre.html
│   ├── faq.html
│   ├── diagnostico.html
│   └── footer.html
└── data/
    ├── faq.json
    ├── plans.json
    ├── team.json
    ├── cases.json
    ├── depoimentos.json
    └── numeros.json
```

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## ⚙️ Configuração

Edite `js/config/config.js` para personalizar:
- Número do WhatsApp
- Mensagem padrão do WhatsApp
- Email de contato
- Instagram
- Mostrar/ocultar preços
- Habilitar/desabilitar preloader, cursor, grain, etc.

## 📝 Dados

Todos os dados dinâmicos estão em `data/`:
- **faq.json** — Perguntas frequentes (também gera schema.org FAQPage)
- **plans.json** — Planos, módulos adicionais, combos
- **team.json** — Time e valores da empresa
- **cases.json** — Cases de sucesso
- **depoimentos.json** — Depoimentos de clientes
- **numeros.json** — Estatísticas animadas

## 🎨 Design Tokens

Tokens centralizados em `css/base/tokens.css`:
- Cores (--ink, --bone, --volt, --violet, etc.)
- Tipografia (--font-display, --font-serif, --font-body)
- Escala fluida de tipos (--fs-hero, --fs-h2, etc.)
- Espaçamento (--gutter, --container, --section-y)
- Bordas (--radius, --radius-sm)
- Easing (--ease)

## 🧩 Componentes HTML

Componentes em `components/` são carregados dinamicamente via `component-loader.js`. Cada section é um arquivo separado para facilitar manutenção.

## 📦 Build

O Vite configura:
- Code splitting de CSS
- Hash nos assets para cache busting
- Preservação da estrutura de pastas em `dist/assets/`
- Source maps para debug

## 🔧 Tecnologias

- **CSS**: Vanilla CSS com Custom Properties (design tokens)
- **JS**: ES Modules, GSAP + ScrollTrigger para animações
- **Scroll**: Lenis (smooth scroll opcional)
- **Build**: Vite
- **Fonts**: Google Fonts (Bricolage Grotesque, Instrument Serif, Inter)
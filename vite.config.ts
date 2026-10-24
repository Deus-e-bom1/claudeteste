# Argenta — landing page de demonstração

Landing page em React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide.
"Argenta" é uma marca fictícia. A página não coleta dados nem oferece crédito.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # typecheck + build de produção
npm run preview  # servir o build
```

## Estrutura

- `src/components/CreditCard.tsx` — cartão de titânio (CSS/SVG), tilt 3D, brilho móvel, flutuação
- `src/components/Reveal.tsx` — fade + movimento vertical ao rolar
- `src/components/*` — Header, Hero, Benefits, HowItWorks, Indicators, CardFeature, FinalCTA, Footer
- `src/pages/Demo.tsx` — página de destino dos botões (`#/demo`)
- `src/index.css` — superfície titânio e ajustes globais

## Notas

- Todas as animações respeitam `prefers-reduced-motion`.
- Os indicadores descrevem a própria demo; não há estatísticas de aprovação ou avaliações.
- Para trocar a marca, edite `Logo.tsx`, o texto do cartão em `CreditCard.tsx` e o rodapé.
- Este código foi escrito sem acesso ao npm, então ainda não foi compilado: rode `npm run build`
  e corrija qualquer erro de tipo que aparecer.

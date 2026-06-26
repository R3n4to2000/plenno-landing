# Decisões

## 2026-06-26

- Manter a landing em Vite/React, sem migração para Next.js nesta etapa.
- Priorizar performance mobile por CSS responsivo: conteúdo visível por padrão, animações apenas em desktop com preferência de movimento habilitada.
- Remover efeitos caros no mobile (`backdrop-filter`, blur grande, orbs e animações contínuas) preservando a identidade visual no desktop.
- Usar `content-visibility: auto` nas seções abaixo do hero em mobile para reduzir custo inicial de layout/pintura.


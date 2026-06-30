# Decisões

## 2026-06-26

- Manter a landing em Vite/React, sem migração para Next.js nesta etapa.
- Priorizar performance mobile por CSS responsivo: conteúdo visível por padrão, animações apenas em desktop com preferência de movimento habilitada.
- Remover efeitos caros no mobile (`backdrop-filter`, blur grande, orbs e animações contínuas) preservando a identidade visual no desktop.
- Usar `content-visibility: auto` nas seções abaixo do hero em mobile para reduzir custo inicial de layout/pintura.

## 2026-06-29

- Manter o fluxo de demonstração dentro do projeto Vite/React, com roteamento simples por `window.location.pathname`.
- Usar função server-side em `api/public/demo-leads.ts` para inserir leads no Supabase via service role, sem expor chave no client.
- Não usar SDK do Supabase no client para evitar insert público com anon key.
- Expor `NEXT_PUBLIC_SALES_WHATSAPP_NUMBER` no Vite via `envPrefix`, mantendo a chave service role apenas no servidor.
- Não abrir WhatsApp automaticamente neste primeiro fluxo; manter botão visível na página de obrigado.

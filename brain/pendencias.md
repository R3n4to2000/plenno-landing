# Pendências

## 2026-06-26

- Testar a página em um celular real na mesma rede pelo endereço de rede do Vite.
- Se ainda houver lentidão em aparelhos muito antigos, avaliar lazy rendering dos mockups mais pesados ou substituir QR Codes em grid por SVG/imagem estática.

## 2026-06-29

- Aplicar a migration `supabase/migrations/20260629120000_create_demo_leads.sql` no Supabase do Plenno.
- Configurar `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` e `VITE_SALES_WHATSAPP_NUMBER` no ambiente de deploy.
- Validar o envio real do formulário em ambiente com a função `/api/public/demo-leads` ativa e Supabase configurado.
- Confirmar no WhatsApp comercial se a mensagem pré-formatada atende ao processo manual de venda.

## 2026-06-30

- Configurar no projeto da Vercel as variáveis `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` e `VITE_SALES_WHATSAPP_NUMBER`; o fallback `NEXT_PUBLIC_SALES_WHATSAPP_NUMBER` é apenas compatibilidade temporária.
- Remover ou marcar como teste o lead `lead.teste@example.com` salvo durante validação local, se ele tiver ficado no Supabase de produção.

## 2026-07-01

- Configurar `VITE_SALES_WHATSAPP_NUMBER` nos ambientes locais e de deploy.
- Preencher `VITE_PLENNO_DEMO_VIDEO_URL` com a URL do YouTube quando o vídeo de demonstração estiver pronto.
- Testar o clique real do WhatsApp em celular e desktop após configurar o número comercial.

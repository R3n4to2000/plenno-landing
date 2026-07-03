# Plenno Landing Page

Landing page estática do Plenno em Vite + React.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Este projeto é uma landing estática. Use somente variáveis públicas com prefixo `VITE_`, pois elas são embutidas no bundle final no momento do build.

```env
VITE_DEMO_LEADS_ENDPOINT=https://acsgeowqlomkltrwanqo.supabase.co/functions/v1/demo-leads
VITE_DEMO_LEADS_WHATSAPP_CLICKED_ENDPOINT=https://acsgeowqlomkltrwanqo.supabase.co/functions/v1/demo-leads-whatsapp-clicked
VITE_SALES_WHATSAPP_NUMBER=5562982801925
VITE_PLENNO_DEMO_VIDEO_URL=
```

Não coloque `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_URL` server-side ou qualquer segredo no frontend.

## Integração Supabase

O formulário envia leads para `VITE_DEMO_LEADS_ENDPOINT` e espera:

```json
{
  "success": true,
  "leadId": "uuid-do-lead",
  "trackingToken": "uuid-do-token"
}
```

Na página de obrigado, o botão `Continuar no WhatsApp` tenta chamar `VITE_DEMO_LEADS_WHATSAPP_CLICKED_ENDPOINT` com `leadId` e `trackingToken`. Se o tracking falhar, o WhatsApp abre mesmo assim.

As Edge Functions precisam aceitar CORS para o domínio final da HostGator em `ALLOWED_ORIGINS`, além dos domínios locais usados em testes:

```txt
https://seudominio.com.br
http://localhost:5173
http://localhost:3000
```

## Build estático para HostGator

```bash
npm run lint
npm run build
```

Envie o conteúdo de `dist/` para a HostGator. O arquivo `public/.htaccess` é copiado para `dist/.htaccess` no build e habilita fallback SPA para rotas como:

- `/solicitar-demonstracao`
- `/solicitar-demonstracao/obrigado`
- `/como-funciona`

As variáveis `VITE_` precisam existir antes de rodar `npm run build`.

## Vercel

A produção da landing não depende de `npx vercel dev`, Vercel Functions ou envs da Vercel. O `vercel.json` pode permanecer apenas para preview temporário, se ainda for útil.

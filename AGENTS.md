# AGENTS.md — alias

Mobile-first "Linktree" style payment data app (Next.js 16, Tailwind CSS v4, Lucide).

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Build + typecheck |
| `npm run lint` | ESLint |

## Structure

- `src/app/page.tsx` — main page (client component), wires Header (avatar + name + subtitle), Wallet cards grid, and Footer
- `src/components/wallet-card.tsx` — wallet card with clipboard copy (2s "¡Copiado!" feedback) and QR Dialog toggle
- `src/components/ui/dialog.tsx` — minimal Shadcn-style dialog (ESC to close, overlay click dismiss)
- `src/lib/data.ts` — wallet definitions (Mercado Pago, Lemon Cash, Belo, Brubank) with brand colors and aliases

## Key conventions

- **Responsive grid**: wallet cards use `grid grid-cols-1 lg:grid-cols-3 gap-4` — 1 columna en mobile, 3 en desktop
- **Wallet brand colors** are set inline (`style={{ backgroundColor, color }}`) per `src/lib/data.ts`
- Clipboard copy uses `navigator.clipboard.writeText` with a `textarea` fallback
- Share uses `navigator.share` with `navigator.clipboard.writeText` fallback
- All interactive elements have hover, active, and focus states
- No `package-lock.json` is committed; run `npm install` on clone

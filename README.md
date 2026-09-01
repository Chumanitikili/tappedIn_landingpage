# TappedIn — Claim more in WhatsApp

TappedIn is a conversion-focused landing page for discovering deals, vouchers, and coupons through WhatsApp. The experience is built around a simple customer journey: **scan a QR code, start a WhatsApp conversation, and claim the offer**.

## Highlights

The landing page includes a branded TappedIn hero experience, QR-to-WhatsApp journey messaging, inclusive campaign imagery, a realistic mobile chat mock-up, voucher and ticket-inspired offer surfaces, and responsive layouts for desktop and mobile screens. Motion is intentionally restrained so that QR, chat, voucher, and claim moments receive emphasis without distracting from the conversion path.

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- shadcn/ui primitives
- Framer Motion
- Wouter
- TypeScript

## Local development

Install dependencies with `pnpm install`, then start the Vite development server with `pnpm dev`. The production build can be generated with `pnpm build`; `pnpm check` runs the TypeScript validation pass.

## Project structure

The main customer-facing experience lives under `client/src`. Shared constants are kept in `shared`, and the Vite/Express production entry point is under `server`. Environment files and generated build artifacts are excluded through `.gitignore`.

## Brand direction

TappedIn uses a turquoise-led visual system centered on `#38CAB5`, with editorial retail and voucher cues rather than a generic SaaS layout. The footer includes the product attribution **Powered by rather.chat**.

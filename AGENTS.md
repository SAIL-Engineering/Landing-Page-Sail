# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds Next.js App Router pages, layouts, and route handlers.
- `components/` contains shared React components; `components/ui/` is for UI primitives.
- `data/` stores static content and configuration.
- `lib/`, `utils/`, and `types/` keep reusable helpers and shared types.
- `public/` is for static assets like images, icons, and fonts.

## Build, Test, and Development Commands
- `npm install` installs dependencies (Node 20.x, npm 10.x).
- `npm run dev` clears `.next` and starts the local dev server.
- `npm run build` creates the production build.
- `npm run start` runs the production server from `.next`.
- `npm run lint` runs ESLint with Next.js rules.
- `npm run typecheck` runs TypeScript checks without emitting files.
- `npm run format` formats code with Prettier and the Tailwind plugin.
- `npm run check` runs typecheck, lint, and build as a pre-deploy gate.

## Coding Style & Naming Conventions
- TypeScript + React; follow Next.js App Router file patterns (`app/<route>/page.tsx`).
- Component filenames use kebab-case (e.g., `components/case-study-carousel.tsx`).
- Let Prettier handle formatting; avoid manual alignment and run `npm run format`.
- Tailwind is the primary styling system; keep class order as formatted.

## Testing Guidelines
- No dedicated test framework is configured yet.
- Use `npm run lint`, `npm run typecheck`, and `npm run build` to validate changes.
- If you add tests, document how to run them here.

## Commit & Pull Request Guidelines
- Commits are short, imperative, and plain (e.g., "Fix TypeScript error").
- Keep commits scoped to one change when possible.
- PRs should include: summary, testing performed, and screenshots for UI changes.
- Link related issues and call out any deployment or config impact.

## Security & Configuration Tips
- Keep secrets in `.env.local`; do not commit secrets.
- Update `.env.local` for Supabase or other services before running locally.

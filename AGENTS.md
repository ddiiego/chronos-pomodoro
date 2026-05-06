# AGENTS.md

## Build & verify

```powershell
npm run dev          # start dev server with --host
npm run build        # typecheck (tsc -b) then vite build
npm run lint         # eslint .
```

- **Build runs typecheck first** (`tsc -b`). If the build fails, run `npx tsc -b` to see type errors directly.
- There is **no test suite** configured yet.
- `eslint.config.js` uses flat config (ESLint 9). Ignored: `dist/`.

## Architecture

- **React 19 + Vite 7 + SWC** (`@vitejs/plugin-react-swc`), no Babel.
- **Entry**: `index.html` → `src/main.tsx` → `App.tsx` (global CSS + state placeholder) → renders `<Home />` page directly.
- **No router** is installed yet. `Menu` uses raw `<a href="#">` links. Pages (`Home`, `AboutPomodoro`, `NotFound`) exist but are not wired through routing.
- **State** is declared in `App.tsx` as `useState(initialStatus)` with type `TaskStateModel` (from `src/models/`) but is **not passed down** to children — early scaffold, not wired.
- **Theme**: dark/light via `document.documentElement.setAttribute('data-theme', ...)` persisted to `localStorage`. CSS custom properties in `src/styles/theme.css` (`:root` = dark, `:root[data-theme='light']` overrides). Global reset in `src/styles/global.css` with `font-size: 62.5%` on `<html>` for rem math.

## Styling

- **CSS Modules** everywhere: each component folder has `styles.module.css`.
- **Global CSS**: `theme.css` and `global.css` imported in `App.tsx` and `MainTemplate/index.tsx`.
- Icons: `lucide-react`.

## Conventions

- **Named exports only** — no `export default` in the codebase.
- Every component is a **folder** with `index.tsx` + `styles.module.css`.
- Props types are `type` aliases extending `React.ComponentProps<'element'>` when wrapping native elements.
- Path alias: none. Imports use relative paths.
- TypeScript `verbatimModuleSyntax` is on — use `import type` for type-only imports.
- `erasableSyntaxOnly` is on — no `enum`, no `namespace`.
- No path alias configured (no `@/` shortcuts).

## Language

- UI is in **Brazilian Portuguese** (`<html lang="pt-BR">`).
- Some Portuguese variable/class names appear (e.g., `Conteiner`). Do not "correct" these unless the user asks.

## Known misspellings

These exist in the codebase and should be preserved unless the user asks to fix them:
- `templetes/` (directory) → expected `templates/`
- `Conteiner/` → expected `Container/`
- `Defaulinput/` → expected `DefaultInput/`
- `DefaultButtom/` → expected `DefaultButton/`
- `MainTempleteProps` → expected `MainTemplateProps`
- `shortBraekTime` → expected `shortBreakTime` (in `TaskStateModel`)
- `link-houver` → expected `link-hover` (CSS variable in light theme)
- `text-muded` → expected `text-muted` (CSS class reference)

## Pomodoro domain

- 8 cycles per session: odd = work (25 min), even 2/4/6 = short break (5 min), cycle 8 = long break (15 min).
- Cycle dots: yellow = work, green = short break, blue = long break.
- State shape defined in `src/models/TaskStateModel.tsx`.

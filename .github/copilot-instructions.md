# Copilot Instructions for NachoLZ-Astro-Portfolio

## Project Overview
- **Astro** static site for developer portfolio, using **Tailwind CSS** for styling and custom components in `.astro` files.
- Main entry: `src/pages/index.astro` uses a layout (`src/layouts/Layout.astro`) and composes sections from `src/components`.
- Internationalization (i18n) is handled via `src/i18n` with JSON files and a helper in `index.ts`.

## Key Architecture & Patterns
- **Component Structure:**
  - All UI sections (AboutMe, Projects, Experience, etc.) are modular Astro components in `src/components`.
  - Icons are separate Astro components in `src/components/icons`.
  - Layout is managed by `src/layouts/Layout.astro` (sets up global styles, header, footer, and slots for content).
- **Routing:**
  - Pages live in `src/pages`. Main page is `index.astro`.
- **Styling:**
  - Tailwind CSS is configured in `tailwind.config.mjs` and applied globally.
  - Font is set via `@fontsource-variable/onest` in the layout.
- **i18n:**
  - Language JSONs (`en.json`, `es.json`) and a helper (`getI18N`) for locale selection.
- **Data:**
  - Project and experience data are hardcoded in their respective components (`Projects.astro`, `Experience.astro`).

## Developer Workflows
- **Development:**
  - Start dev server: `pnpm dev` or `npm run dev` (see `package.json` scripts).
- **Build:**
  - Run `pnpm build` or `npm run build` (runs Astro check and build).
- **Preview:**
  - Run `pnpm preview` or `npm run preview`.
- **Lint/Typecheck:**
  - Astro type checking is included in build (`astro check`).
- **No explicit test setup** detected.

## Conventions & Integration Points
- **Path Aliases:** Use `@/` for `src/` (see `tsconfig.json`).
- **Dark Mode:** Controlled by Tailwind's `darkMode: 'class'`.
- **View Transitions:** Uses `astro:transitions` in layout for smooth page transitions.
- **External Integrations:**
  - Uses `astro-robots-txt` for robots.txt generation.
  - Font loaded via npm package.
- **Images:**
  - Static images in `public/` and `public/projects/`.

## Examples
- To add a new section, create a component in `src/components`, import and use it in a page or layout.
- To add a new language, add a JSON file in `src/i18n` and update `LANGUAGES` in `index.ts`.

## References
- Main files: `src/pages/index.astro`, `src/layouts/Layout.astro`, `src/components/*`, `src/i18n/*`, `tailwind.config.mjs`, `tsconfig.json`, `astro.config.mjs`.
- See `README.md` for project description and contributor info.

---
**Feedback:** Please review and suggest improvements or clarify any missing conventions, workflows, or architectural details.

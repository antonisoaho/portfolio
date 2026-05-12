# Portfolio Website

Portfolio site built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Sanity](https://www.sanity.io/) for structured content. The UI is a single scrolling page with optional standalone routes for sharing deep links.

[Live Demo](https://www.isoaho.se/)

## Stack

- **Next.js** (App Router) · **React** · **Tailwind CSS**
- **Sanity** (`next-sanity`) for projects and the home “Recent work” section
- **EmailJS** for the contact form · **Framer Motion** where motion is used
- **React Three Fiber / Three.js** are included for 3D utilities under `src/components/models`; the current home layout does not mount a 3D hero.

## Images

<details>
<summary>Click to expand</summary>

![Home Page](/public/preview/home-page.png)  
![About Page](/public/preview/about-page.png)  
![Contact Page](/public/preview/contact-page.png)

</details>

## Information architecture

| Route | Purpose |
|--------|--------|
| `/` | **Main experience**: hero, `#work` (Sanity-driven cards), `#about`, `#contact` — all wrapped in the site shell. |
| `/about` | Standalone about page (same `AboutDetails` content as the home section, own metadata). |
| `/contact` | Standalone contact page (same `Form` as home, own metadata). |
| `/studio` | Embedded Sanity Studio (Next.js catch-all route). |

Primary navigation uses in-page anchors (`/#work`, `/#about`, `/#contact`) defined in `src/app/site-nav.js`, plus an external resume link.

## App Router overview

<details>
<summary>Click to expand</summary>

### `src/app/layout.jsx`

Root layout: global styles, Inter font variable, default SEO metadata and `metadataBase`.

### `src/app/page.jsx`

Home page: composes `SiteShell` with hero, `RecentWork`, `AboutDetails`, and `Form` in separate sections.

### `src/app/(sub pages)/layout.jsx`

Wraps sub-routes in `SiteShell` with extra top padding for standalone pages.

### `src/app/(sub pages)/about/page.jsx` · `src/app/(sub pages)/contact/page.jsx`

Focused layouts for `/about` and `/contact` with route-specific metadata.

### `src/app/site-nav.js`

Exports `siteNavItems` (hash links), `resumeLink`, and `socialLinks` for the header/footer.

### `src/app/studio/[[...tool]]/page.jsx`

Sanity Studio entry mounted inside the Next app.

</details>

## Components

<details>
<summary>Click to expand</summary>

### `src/components/layout/SiteShell.jsx`

Page frame: background treatments, `SiteHeader`, `<main>`, and `SiteFooter`.

### `src/components/layout/SiteHeader.jsx` · `SiteFooter.jsx`

Sticky glass header with nav from `site-nav.js`; footer with social links.

### `src/components/home/RecentWork.jsx`

Server component: loads curated home cards via `getHomeWork()` and renders the `#work` section.

### `src/components/about/index.jsx`

`AboutDetails` — profile sections and stats used on `/` and `/about`.

### `src/components/contact/Form.jsx`

Contact form (react-hook-form + EmailJS + toasts).

### `src/lib/portfolioGrid.js`

Shared layout helpers for the work grid (CSS class names / layout constants).

</details>

## Sanity

<details>
<summary>Click to expand</summary>

### `sanity.config.js` · `sanity.cli.js`

Studio and CLI configuration (project ID, dataset, plugins such as `structureTool` and `visionTool`).

### `src/sanity/schemaTypes/`

Document and object types: `blockContentType`, `categoryType`, `projectType`, `homeWorkType` (home “Recent work” cards), aggregated in `index.js`.

### `src/sanity/structure.js`

Studio sidebar: **Recent work (home)** first, then categories and projects.

### `src/sanity/lib/`

- `client.js` — `next-sanity` client (reads `NEXT_PUBLIC_SANITY_*` env vars).
- `image.js` — image URL builder.
- `homeWork.js` — query/fetch for home work cards.

</details>

## Local development

```bash
npm install
npm run dev
```

Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION` in your environment so the home work section and any GROQ-backed content resolve at build/runtime.

Scripts: `dev`, `build`, `start`, `lint` (see `package.json`).

## Info

Denna app är en portföljwebbplats byggd med Next.js ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white), Three.js ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white) och Sanity.io ![Sanity](https://img.shields.io/badge/Sanity-000000?style=flat&logo=sanity&logoColor=white). Den innehåller flera sidor och komponenter för att visa information om projekt, kontaktinformation och mer.

[Live Demo](https://www.isoaho.se/)

<details>
<summary>

### Bilder

</summary>

![Home Page](/public/preview/home-page.png)
![About Page](/public/preview/about-page.png)
![Contact Page](/public/preview/contact-page.png)
![Projects Page](/public/preview/projects-page.png)

</details>

<details>
<summary>

### Översikt

</summary>

#### `src/app/page.jsx`

- **Beskrivning**: Startsidan.
- **Innehåll**:
  - Innehåller navigationskomponenten (`Navigation`).
  - Innehåller en 3D-modellvisare (`RenderModel`).

#### `src/app/(sub pages)/about/page.jsx`

- **Beskrivning**: Om mig-sidan.
- **Innehåll**:
  - Innehåller information om mig som utvecklare och vem jag är (`AboutDetails`).
  - Innehåller en 3D-modellvisare (`RenderModel`).

#### `src/app/(sub pages)/contact/page.jsx`

- **Beskrivning**: Kontakt-sidan.
- **Innehåll**:
  - Innehåller en rubrik och beskrivning.
  - Innehåller ett kontaktformulär (`Form`).

#### `src/app/(sub pages)/projects/page.jsx`

- **Beskrivning**: Projekt-sidan.
- **Innehåll**:
  - Innehåller en lista över projekt (`Projects`).
  - Innehåller en 3D-modellvisare (`RenderModel`).

#### `src/app/(sub pages)/projects/[slug]/page.jsx`

- **Beskrivning**: Projektdetaljsidan.
- **Innehåll**:
  - Visar detaljer om ett specifikt projekt (`ProjectDetails`).

### Komponenter

#### `src/components/navigation/index.jsx`

- **Beskrivning**: Navigationskomponenten.
- **Innehåll**:
  - Använder `NavButton` för att skapa navigationsknappar.
  - Dynamiskt layout beroende på skärmstorlek.

#### `src/components/projects/index.jsx`

- **Beskrivning**: Projektkomponenten.
- **Innehåll**:
  - Visar en lista över projekt (`ProjectList`).

#### `src/components/about/index.jsx`

- **Beskrivning**: Om mig-komponenten.
- **Innehåll**:
  - Visar olika sektioner med information och statistik.

#### `src/components/contact/Form.jsx`

- **Beskrivning**: Kontaktformulärkomponenten.
- **Innehåll**:
  - Hanterar formulärinmatning och skickar e-post via EmailJS.

### Sanity

#### `sanity.config.js`

- **Beskrivning**: Konfigurationsfil för Sanity Studio.
- **Innehåll**:
  - Definierar projekt-ID och dataset.
  - Inkluderar plugins som `visionTool` och `structureTool`.

#### `src/sanity/schemaTypes/index.js`

- **Beskrivning**: Schema för Sanity.
- **Innehåll**:
  - Definierar dokumenttyper som "category" och "project".

#### `src/sanity/structure.js`

- **Beskrivning**: Struktur för Sanity Studio.
- **Innehåll**:
  - Definierar hur dokumenttyper ska visas i Sanity Studio.
  </details>

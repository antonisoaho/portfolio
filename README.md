## Documentation

### Översikt

Denna app är en portföljwebbplats byggd med Next.js och Sanity.io. Den innehåller flera sidor och komponenter för att visa information om projekt, kontaktinformation och mer.

### Sidor

#### `src/app/page.jsx`

- **Beskrivning**: Startsidan.
- **Innehåll**:
  - Innehåller navigationskomponenten (`Navigation`).
  - Innehåller en 3D-modellvisare (`RenderModel`).

#### `src/app/(sub pages)/about/page.jsx`

- **Beskrivning**: Om mig-sidan.
- **Innehåll**:
  - Innehåller information om utvecklaren (`AboutDetails`).
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
  - Visar olika sektioner med information om erfarenhet och statistik.

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

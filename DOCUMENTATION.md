## Documentation

### Översikt

Denna app är en portföljwebbplats byggd med Next.js och Sanity.io. Den innehåller flera sidor och komponenter för att visa information om projekt, kontaktinformation och mer.

### Komponenter

#### `src/app/(sub pages)/contact/page.jsx`

- **Beskrivning**: Kontakt-sidan.
- **Innehåll**:
  - Visar en bakgrundsbild.
  - Innehåller en rubrik och beskrivning.
  - Innehåller ett kontaktformulär (`Form`).

#### `src/components/navigation/index.jsx`

- **Beskrivning**: Navigationskomponenten.
- **Innehåll**:
  - Använder `NavButton` för att skapa navigationsknappar.
  - Dynamiskt layout beroende på skärmstorlek.

#### `sanity.config.js`

- **Beskrivning**: Konfigurationsfil för Sanity Studio.
- **Innehåll**:
  - Definierar projekt-ID och dataset.
  - Inkluderar plugins som `visionTool` och `structureTool`.

#### `src/app/page.jsx`

- **Beskrivning**: Startsidan.
- **Innehåll**:
  - Visar en bakgrundsbild.
  - Innehåller navigationskomponenten (`Navigation`).
  - Innehåller en 3D-modellvisare (`RenderModel`).

#### `src/app/globals.css`

- **Beskrivning**: Globala CSS-stilar.
- **Innehåll**:
  - Definierar grundläggande stilar och anpassade Tailwind CSS-klasser.

#### `src/components/FireFliesBackground.jsx`

- **Beskrivning**: Komponent för att visa eldflugor i bakgrunden.
- **Innehåll**:
  - Skapar och animerar eldflugor på skärmen.

#### `src/app/(sub pages)/layout.jsx`

- **Beskrivning**: Layout för undersidor.
- **Innehåll**:
  - Innehåller en hemknapp (`HomeBtn`).
  - Visar barnkomponenter.

#### `src/components/projects/ProjectLayout.jsx`

- **Beskrivning**: Layout för att visa enskilda projekt.
- **Innehåll**:
  - Visar projektets namn, beskrivning och datum.

#### `src/components/about/index.jsx`

- **Beskrivning**: Komponent för att visa information om "Om mig".
- **Innehåll**:
  - Visar olika sektioner med information om erfarenhet och statistik.

#### `src/app/data.js`

- **Beskrivning**: Datafil för navigationsknappar och projekt.
- **Innehåll**:
  - Definierar en lista med navigationsknappar (`BtnList`).
  - Innehåller data om projekt (`projectsData`).

#### `src/sanity/structure.js`

- **Beskrivning**: Struktur för Sanity Studio.
- **Innehåll**:
  - Definierar hur dokumenttyper som "category" och "project" ska visas i Sanity Studio.

#### `src/components/about/ItemLayout.jsx`

- **Beskrivning**: Layoutkomponent för att visa objekt i "Om mig"-sektionen.
- **Innehåll**:
  - Använder `framer-motion` för animeringar.
  - Visar barnkomponenter med anpassade klasser.

#### `src/app/layout.jsx`

- **Beskrivning**: Rotlayout för appen.
- **Innehåll**:
  - Inkluderar globala stilar och komponenter som `FireFliesBackground` och `Sound`.

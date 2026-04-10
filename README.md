# Portfolio Website

This app is a portfolio website built with Next.js ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white), Three.js ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=three.js&logoColor=white), and Sanity.io ![Sanity](https://img.shields.io/badge/Sanity-000000?style=flat&logo=sanity&logoColor=white). It includes pages and components for an about section, contact, and more.

[Live Demo](https://www.isoaho.se/)

## Images

<details>
<summary>Click to expand</summary>

![Home Page](/public/preview/home-page.png)  
![About Page](/public/preview/about-page.png)  
![Contact Page](/public/preview/contact-page.png)

</details>

## Overview

<details>
<summary>Click to expand</summary>

### `src/app/page.jsx`

- **Description**: The home page.  
- **Content**:  
  - Includes the navigation component (`Navigation`).  
  - Includes a 3D model viewer (`RenderModel`).  

### `src/app/(sub pages)/about/page.jsx`

- **Description**: The About Me page.  
- **Content**:  
  - Includes information about me as a developer and who I am (`AboutDetails`).  
  - Includes a 3D model viewer (`RenderModel`).  

### `src/app/(sub pages)/contact/page.jsx`

- **Description**: The Contact page.  
- **Content**:  
  - Includes a header and description.  
  - Includes a contact form (`Form`).  

</details>

## Components

<details>
<summary>Click to expand</summary>

### `src/components/navigation/index.jsx`

- **Description**: The navigation component.  
- **Content**:  
  - Uses `NavButton` to create navigation buttons.  
  - Adapts layout dynamically based on screen size.  

### `src/components/about/index.jsx`

- **Description**: The About Me component.  
- **Content**:  
  - Displays various sections with information and statistics.  

### `src/components/contact/Form.jsx`

- **Description**: The contact form component.  
- **Content**:  
  - Handles form input and sends emails via EmailJS.  

</details>

## Sanity

<details>
<summary>Click to expand</summary>

### `sanity.config.js`

- **Description**: Configuration file for Sanity Studio.  
- **Content**:  
  - Defines project ID and dataset.  
  - Includes plugins like `visionTool` and `structureTool`.  

### `src/sanity/schemaTypes/index.js`

- **Description**: Schema for Sanity.  
- **Content**:  
  - Defines document types such as "category" and "project".  

### `src/sanity/structure.js`

- **Description**: Structure for Sanity Studio.  
- **Content**:  
  - Defines how document types should be displayed in Sanity Studio.  

</details>

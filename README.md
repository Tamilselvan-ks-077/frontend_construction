# 🏗️ Jothis Construction

> **Jothis Construction** is a premium, high-end civil engineering, architecture, and construction website showcasing luxury residential builds, corporate developments, spatial renovations, and 3D BIM architectural planning (Delivering premium craftsmanship since 2011).

---

## 🎨 Premium Visual System & Styling

The website's user interface is styled to wow visitors at first glance, featuring custom elements, responsive grids, and micro-interactions.

### 1. Curated Sapphire Blue Theme
Instead of basic styling variables, the entire application branding has been overhauled to a **Sapphire Blue & Slate** system inside the Tailwind configuration. Every active link, solid button,Counter card background, selection highlights, and stats panel dynamically renders in deep, elite sapphire cobalt shades.

### 2. Overlapping Twin Building Logo (`Building2`)
A customized modern geometric logo replaced the generic builder helmet:
* **Gradient Badge:** The skyline sits in a 3D-feeling gradient block (`bg-gradient-to-tr from-amber-700 to-amber-500`).
* **Active Project Pulsar:** A small pulsing golden/amber beacon dot (`animate-ping`) sits at the corner to represent active, living engineering sites.
* **Micro-Interaction:** Hovering anywhere on the logo triggers a smooth **6-degree rotation** (`group-hover:rotate-6`) using transition properties.
* **Metallic Typography:** **Construction** is rendered with a modern blue-to-navy metallic gradient shine (`bg-clip-text text-transparent`).

### 3. Balanced Navigation Bar
The Quote call-to-action button was removed from the header to establish elegant spacing. The company **Logo** stays anchored on the left, and the **Page Navigation Links** cleanly align to the right in a spacious layout.

---

## 🛠️ Technology Stack

* **Core Framework:** React 19 (Functional Components, Hooks)
* **Build Engine:** Vite 8 (Ultra-fast Hot Module Replacement)
* **Styling (CSS):** Tailwind CSS v3 (Custom Utility & Component layers)
* **Icon System:** Lucide React (Vector-precise engineering outlines)
* **Animation & Router:** Framer Motion & React Router DOM (Dynamic navigation and layout structures)

---

## 📂 Folder Anatomy

```text
jothis-construction/
├── public/                 # Static public assets (Favicon, configuration)
├── src/
│   ├── assets/             # Active asset files
│   ├── components/
│   │   └── common/         # Modular reusable components (Button, Navbar, Footer, etc.)
│   ├── layouts/            # Page structures (MainLayout with outlet matching)
│   ├── pages/              # High-end structured pages:
│   │   ├── Home.jsx        # Landing page with stats, values, divisions, and testimonials
│   │   ├── About.jsx       # Company history and executive safety credentials
│   │   ├── Services.jsx    # Structural divisions, BIM architectures, and estimates
│   │   ├── Projects.jsx    # Portfolio grid with built-in filtration and luxury reviews
│   │   └── Contact.jsx     # Site audit requests and estimation blueprints
│   ├── routes/             # AppRoutes mapping pages to standard routes
│   ├── App.jsx             # Root entry loader
│   ├── index.css           # Custom CSS utilities & base styling overrides
│   └── main.jsx            # React client DOM render bootstrapper
├── eslint.config.js        # Strict lint rules for clean formatting
├── tailwind.config.js      # Color override systems & Tailwind specifications
└── vite.config.js          # Fast React compilations & plugins
```

---

## 🚀 Getting Started

Follow these instructions to clone, build, and run the Jothis Construction project locally.

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or higher recommended) and **npm** installed on your system.

### 2. Installation
Clone the repository and install all dependencies:
```bash
# Clone the repository
git clone https://github.com/Tamilselvan-ks-077/frontend_construction.git

# Navigate into the project folder
cd frontend_construction

# Install node dependencies
npm install
```

### 3. Local Development
Start the Vite hot-reloading development server:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** (or the port specified in your console) in your web browser.

### 4. Build & Production Preview
To generate a production-ready compressed bundle and check for lint or type errors:
```bash
# Compile and build the build outputs under dist/
npm run build

# Preview the production-built website locally
npm run preview
```

---

## 🛡️ License & Copyright
© 2011 - Present **Jothis Construction**. All rights reserved. Registered architectural design and engineering services.

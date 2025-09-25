# 🚀 Personal Portfolio - Ignacio Lizana

This is my personal portfolio website, built with **[Astro](https://astro.build/)** and **[Tailwind CSS](https://tailwindcss.com/)**.
It’s designed to showcase my projects, skills, and experience in a clean, fast, and modern way.

🌐 **Live Site**: [https://nacholz.com/](https://nacholz.com/)

---

## ✨ Features

- ⚡ **Blazing fast** performance with Astro’s static site generation
- 🎨 **Modern design** using Tailwind CSS utilities
- 📱 **Fully responsive** on desktop, tablet, and mobile
- 🌙 **Dark mode support** with theme toggle
- 🧩 **Reusable components** for projects, experience, and skills sections
- 🌐 **Multi-language support** (English / Spanish) with i18n
- 🏷️ **Technology tags system** with consistent styling across components
- 🖼️ **Image previews** for projects and experience with hover effects
- 🔗 **Social links integration** (GitHub, LinkedIn, etc.)
- 🤖 **SEO optimized** with robots.txt generation
- 📦 **Component-based architecture** for easy maintenance

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.4.5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.1
- **Language**: TypeScript v5.3.3
- **Font**: [Onest Variable](https://fonts.google.com/specimen/Onest) from Google Fonts
- **Icons**: Custom SVG icon components
- **Deployment**: Static site generation
- **Package Manager**: npm/pnpm/bun supported

---

## 📂 Project Structure

```
NachoLZ-Astro-Portfolio/
├── 📁 public/                    # Static assets
│   ├── 📁 experience/           # Experience section images
│   ├── 📁 projects/             # Project screenshots
│   ├── favicon.svg              # Site favicon
│   └── *.webp                   # Optimized images
├── 📁 src/
│   ├── 📁 components/           # Reusable Astro components
│   │   ├── 📁 icons/           # SVG icon components
│   │   │   ├── React.astro     # Technology icons
│   │   │   ├── TypeScript.astro
│   │   │   ├── Unity.astro
│   │   │   └── ...             # 25+ technology icons
│   │   ├── AboutMe.astro       # About section
│   │   ├── Experience.astro    # Work experience timeline
│   │   ├── ExperienceItem.astro # Individual experience card
│   │   ├── Projects.astro      # Projects showcase
│   │   ├── TechTags.astro      # Shared technology tags
│   │   ├── Hero.astro          # Landing hero section
│   │   ├── Header.astro        # Navigation header
│   │   ├── Footer.astro        # Site footer
│   │   ├── ThemeToggle.astro   # Dark/light mode toggle
│   │   ├── LanguageToggle.astro # Language switcher
│   │   └── ...                 # Other UI components
│   ├── 📁 i18n/                # Internationalization
│   │   ├── en.json             # English translations
│   │   ├── es.json             # Spanish translations
│   │   └── index.ts            # i18n configuration
│   ├── 📁 layouts/             # Page layouts
│   │   └── Layout.astro        # Base layout template
│   ├── 📁 pages/               # Route pages
│   │   ├── index.astro         # Homepage
│   │   └── components.astro    # Component showcase
│   └── env.d.ts                # TypeScript environment types
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have one of these package managers installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [pnpm](https://pnpm.io/) (recommended)
- [bun](https://bun.sh/) (alternative)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NachoLZ/NachoLZ-Astro-Portfolio.git
   cd NachoLZ-Astro-Portfolio
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using pnpm (recommended)
   pnpm install

   # Using bun
   bun install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the portfolio in action! 🎉

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `npm run dev` | Start development server with hot reload |
| **Build** | `npm run build` | Build for production (includes type checking) |
| **Preview** | `npm run preview` | Preview production build locally |
| **Type Check** | `astro check` | Run TypeScript type checking |

---

## 🎨 Customization

### Adding New Technology Tags

1. **Create a new icon** in `src/components/icons/YourTech.astro`
2. **Add to TechTags.astro**:
   ```typescript
   import YourTech from "./icons/YourTech.astro";

   export const TAGS = {
     // ... existing tags
     YOURTECH: {
       name: "Your Technology",
       class: "bg-[#yourcolor] text-white",
       icon: YourTech,
     },
   };
   ```
3. **Use in components**:
   ```typescript
   tags: [TAGS.YOURTECH, TAGS.REACT]
   ```

### Adding New Projects

Edit `src/components/Projects.astro`:
```typescript
const PROJECTS = [
  {
    title: "Your Project Name",
    description: "Project description...",
    link: "https://your-project.com",
    github: "https://github.com/you/project",
    image: "/projects/your-project.webp",
    tags: [TAGS.REACT, TAGS.TYPESCRIPT],
  },
  // ... other projects
];
```

### Adding New Experience

Edit `src/components/Experience.astro`:
```typescript
const EXPERIENCE = [
  {
    date: "Start Date – End Date",
    title: "Your Position",
    company: "Company Name",
    description: "What you did...",
    image: "/experience/company.webp",
    tags: [TAGS.REACT, TAGS.NODEJS],
    link: "https://company.com",
    github: "https://github.com/company/project"
  },
  // ... other experiences
];
```

---

## 🌐 Internationalization

The portfolio supports multiple languages using Astro's i18n features:

- **English** (`en`): Default language
- **Spanish** (`es`): Secondary language

### Adding New Languages

1. **Create translation file**: `src/i18n/fr.json` (for French)
2. **Update i18n config**: `src/i18n/index.ts`
3. **Add language toggle**: Update `LanguageToggle.astro`

---

## 🎯 Key Components

### 🏷️ TechTags System
Centralized technology tags with consistent styling:
- **25+ technology icons** (React, TypeScript, Unity, Python, etc.)
- **Consistent color schemes** matching official brand colors
- **Reusable across components** (Experience, Projects)

### 🖼️ Image Previews
Interactive image previews with:
- **Hover animations** (scale, shadow effects)
- **Responsive design** (mobile-friendly)
- **Optimized WebP format** for fast loading

### 🌙 Theme System
Dark/light mode support:
- **System preference detection**
- **Manual toggle** in header
- **Persistent user choice** (localStorage)

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files ready for deployment.

### Deploy to Vercel (Recommended)

1. **Connect your GitHub repository** to [Vercel](https://vercel.com)
2. **Vercel auto-detects** Astro and configures build settings
3. **Deploy automatically** on every push to main branch

### Deploy to Netlify

1. **Connect repository** to [Netlify](https://netlify.com)
2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Use GitHub Actions** for automated deployment
3. **Configure base URL** in `astro.config.mjs` if needed

---

## 📱 Browser Support

- ✅ **Chrome** (latest)
- ✅ **Firefox** (latest)
- ✅ **Safari** (latest)
- ✅ **Edge** (latest)
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

---

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License** - see the [LICENSE.md](LICENSE.md) file for details.

This means you can:
- ✅ **Share** — copy and redistribute the material in any medium or format
- ✅ **Adapt** — remix, transform, and build upon the material

Under the following terms:
- 📝 **Attribution** — You must give appropriate credit
- 🚫 **NonCommercial** — You may not use the material for commercial purposes

---

## 👨‍💻 Author

**Ignacio Lizana**
- 🌐 Portfolio: [https://nacholz.com/](https://nacholz.com/)
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/ignacio-lizana)
- 🐙 GitHub: [@NachoLZ](https://github.com/NachoLZ)
- 📧 Email: your.email@example.com

---

## 🙏 Acknowledgments

- **[Astro](https://astro.build/)** - Amazing static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons
- **[Vercel](https://vercel.com/)** - Deployment platform
- **Community** - Thanks to all contributors and supporters!

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and ☕ by [Ignacio Lizana](https://github.com/NachoLZ)

</div>

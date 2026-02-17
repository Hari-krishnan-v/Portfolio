# Personal Developer Portfolio

A modern, high-end personal developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and WebGL.

## Features

- 🎨 **Milky White Theme**: Elegant glassmorphism UI with smooth gradients.
- 🚀 **Next.js App Router**: Optimized for performance and SEO.
- ⚡ **Framer Motion & WebGL**: Buttery smooth animations, 3D tilt cards, and page transitions.
- 📱 **Fully Responsive**: Looks great on all devices.
- 📄 **Data-Driven**: Content is dynamically rendered from `data/portfolio.json`.
- 🔍 **SEO Optimized**: Includes Sitemap, Robots.txt, JSON-LD Structured Data, and Open Graph tags.
- 🖱️ **Advanced Interactions**: 
    - Typewriter effect for roles.
    - Magnetic buttons.
    - Active section highlighting.
    - Scroll-to-top button.
    - 3D Project Cards.

## Getting Started

1.  Navigate to the project directory:
    ```bash
    cd portfolio
    ```

2.  Install dependencies (including new 3D libraries):
    ```bash
    # Install specific versions compatible with React 18
    npm install three @react-three/fiber@^8.16.8 @react-three/drei framer-motion-3d --legacy-peer-deps
    # If not already installed:
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

-   **Content**: Edit `data/portfolio.json` to update your personal information, projects, and skills.
-   **Styling**: Modify `tailwind.config.ts` or `app/globals.css` to tweak the theme.
-   **Icons**: We use [Lucide React](https://lucide.dev/) for icons.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new).

1.  Push your code to a GitHub repository.
2.  Import the project in Vercel.
3.  Deploy!

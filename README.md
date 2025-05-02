# codevior-website

[![Next.js Version](https://img.shields.io/badge/next.js-14.x-blue)](https://nextjs.org/) [![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A modern, production-ready web application built with [Next.js](https://nextjs.org/) and optimized with the new [App Router](https://nextjs.org/docs/app) and automatic **Geist** font loading via `next/font`.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Custom Fonts](#custom-fonts)
- [Learn More](#learn-more)
- [Deployment](#deployment)
- [License](#license)

## Demo

A live demo will be available soon!

## Features

- **Next.js App Router** for server components and enhanced routing.
- **Automatic Font Optimization** using `next/font` and Geist.
- **Zero-config CSS** support with built-in global and module styles.
- **TypeScript** support out of the box.
- **Fast Refresh** for instant feedback during development.
- **SEO-friendly** with SSR and ISR.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- A package manager: npm, Yarn, pnpm, or bun

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/codevior-website.git
   cd codevior-website
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to see the app in action.

## Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start development server          |
| `npm run build` | Build for production              |
| `npm run start` | Run production server after build |
| `npm run lint`  | Run ESLint checks                 |

## Project Structure

```plaintext
.
├── app              # Next.js App Router root
│   ├── page.tsx     # Main page component
│   └── layout.tsx   # Shared layout component
├── components       # Reusable UI components
├── public           # Static assets (images, fonts, etc.)
├── styles           # Global styles and CSS modules
├── next.config.js   # Next.js configuration
├── tsconfig.json    # TypeScript configuration
└── package.json     # Project metadata and scripts
```

## Custom Fonts

This project uses the new `next/font` system to optimize and inline the **Geist** font from Vercel:

```ts
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geist",
});
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Overview](https://nextjs.org/docs/app)
- [next/font Guide](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)

## Deployment

Deploy effortlessly on [Vercel](https://vercel.com/), the platform behind Next.js:

```bash
vercel login
vercel --prod
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

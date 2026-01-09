# Omar Abdelaleem's Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive portfolio website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. This portfolio showcases my work, skills, and professional journey in a clean, interactive interface with smooth animations and a focus on performance.

## 🚀 Features

- **Modern UI/UX** - Built with a focus on user experience and modern design principles
- **Responsive Design** - Fully responsive layout that works on all devices
- **Performance Optimized** - Fast loading times and smooth animations with Next.js 14
- **Project Showcase** - Dedicated section to highlight my best work with detailed case studies
- **Interactive Elements** - Engaging user interactions and animations using Framer Motion
- **Dark Mode** - Built-in dark mode support with system preference detection
- **Contact Form** - Functional contact form with email notifications
- **PDF Viewer** - Integrated CV/Resume viewer
- **Modern Stack** - Built with the latest web technologies for optimal performance

## 🛠️ Tech Stack

### Core
- [Next.js 14](https://nextjs.org/) - React framework for server-rendered applications
- [TypeScript](https://www.typescriptlang.org/) - For type-safe JavaScript development
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components

### Animations & UI
- [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons library
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit

### Forms & Data
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [EmailJS](https://www.emailjs.com/) - For contact form functionality

### Performance
- [Next.js Image Optimization](https://nextjs.org/docs/pages/api-reference/components/image) - Optimized image loading
- [Vercel Analytics](https://vercel.com/analytics) - Performance insights
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm, yarn, or pnpm
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your configuration.

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `start` - Start production server
- `lint` - Run ESLint
- `format` - Format code with Prettier
- `type-check` - Check TypeScript types

## 🚀 Getting Started Locally

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn how to use Tailwind CSS.
- [Framer Motion Documentation](https://www.framer.com/motion/) - Animation library for React.
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Omar Abdelaleem - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## Show your support

Give a ⭐️ if you like this project!

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fportfolio&project-name=portfolio&repository-name=portfolio)

1. Push your code to a GitHub repository
2. Import the repository on [Vercel](https://vercel.com/import)
3. Add your environment variables in the Vercel dashboard
4. Deploy! 🚀

### Other Platforms

You can also deploy to other platforms like Netlify, or any static hosting service that supports Next.js:

- [Netlify](https://www.netlify.com/with/nextjs/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)

## 📝 Environment Variables

To run this project, you'll need to add the following environment variables to your `.env.local` file:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📂 Project Structure
```
  components/
    common/
      Navbar.tsx
      Footer.tsx
      Button.tsx
      SectionTitle.tsx
    landing/
      Hero.tsx
      TechStack.tsx
      SocialLinks.tsx
      ScrollDown.tsx
    about/
      Bio.tsx
      Skills.tsx
      Timeline.tsx
    projects/
      ProjectCard.tsx
      ProjectGrid.tsx
  styles/
    globals.css
    variables.css
  lib/
    utils.ts
    constants.ts
    data/
      projects.ts
      socialLinks.ts
      techstack.ts
  hooks/
    useScroll.ts
    useTheme.ts
  context/
    ThemeContext.tsx
  public/
    images/
      avatar.png
      tech/
      projects/

```
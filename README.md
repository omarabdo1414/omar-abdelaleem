This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure
src/
  app/
    (site)/
      layout.tsx
      page.tsx
      about/
        page.tsx
      projects/
        page.tsx
      contact/
        page.tsx
    api/
      contact/
        route.ts
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


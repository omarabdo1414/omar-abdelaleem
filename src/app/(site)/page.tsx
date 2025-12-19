import Hero from "@/components/landing/Hero";
import FeaturedProjects from "@/components/landing/FeacheredProjects";
import About from "./about/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProjects />
      <About />
    </main>
  );
}

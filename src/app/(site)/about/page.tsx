import Bio from "@/components/about/Bio";
import Skills from "@/components/about/Skills";
import Timeline from "@/components/about/Timeline";

const AboutPage = () => {
  return (
    <section className="flex flex-col section-container">
      <Bio />
      <Skills />
      <Timeline />
    </section>
  )
}

export default AboutPage;
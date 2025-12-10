import { Button } from "../ui/button";
import Image from "next/image";

import MyImage from "@/public/images/Omar.png"

function Hero() {
  return (
    <section className="section-container">
      <div className="home max-md:flex-col max-md:text-center">
        <div className="hero-info max-md:items-center">
          <h1 className="lg:text-5xl text-3xl font-bold">Omar Abd El-Aleem</h1>
          <p className="text-[16px] lg:text-[18px] text-muted-foreground">Creative Front-End Developer | Building Intuitive Web Experiences</p>
          <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-base font-bold leading-normal tracking-[0.015em] text-white hover:bg-primary/90">
            <span className="truncate">View My Work</span>
          </Button>
        </div>
        <div className="hero-img">
          <Image src={MyImage} alt="Omar Abd El-Aleem" width={400} height={600} className="rounded-lg dark:drop-shadow-[0_0_30px_rgba(58,58,140,1)] drop-shadow-[0_0_30px_rgba(100,100,100,1)]" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
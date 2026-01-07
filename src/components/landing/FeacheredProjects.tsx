import { Button } from "../ui/button";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

const FeaturedProjects = () => {
    return (
        <section className='section-container flex items-center justify-center'>
            <div className='max-md:flex-col max-md:gap-4 flex items-center justify-between w-[90%] rounded-xl border dark:border-white/10 dark:bg-white/5 p-8 backdrop:blur-sm'>
                <div className='flex items-center justify-center flex-col gap-4 max-md:text-center max-md:gap-2'>
                    <h3 className="text-2xl font-bold dark:text-white">Featured Projects</h3>
                    <p className="dark:text-white/60 max-w-md text-muted-foreground">A selection of my best work.</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Link href="#projects">
                        <Button className="hover:bg-black/15 flex min-w-[84px] w-30 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 dark:bg-white/10 bg-black/10 text-sm font-bold leading-normal tracking-[0.015em] dark:text-white text-black transition-colors dark:hover:bg-white/15">
                            View All
                            <MdArrowForward className="text-lg dark:text-white" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects;
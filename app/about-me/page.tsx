import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { toolsAndLibraries } from "@/utils"
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex flex-col 2xl:flex-row justify-center items-center gap-10 2xl:gap-20 h-full mx-auto px-5 xl:px-10 2xl:pr-20">
      <div className="flex flex-col gap-3">
        <h1> Who am I ? </h1>
        <p>
          I am a 25 years old Full Stack Developer based in Brazil, with a strong interest in
          technologies that directly impact users, such as web and software development,
          AI, and virtual reality.
        </p>
        <p>
          My first encounter with programming was during my Nanotechnology degree,
          where I learned mathematical logic using Python.
        </p>
        <p>
          After a few years,
          I decided to follow this passion by enrolling in Driven&apos;s
          Full-Stack Web Development Bootcamp, where I confirmed my calling for this field.
        </p>
        <h2> Let&apos;s develop something cool together! </h2>
      </div>
      <div className="flex flex-col mx-auto 2xl:my-auto gap-5 w-[75%] sm:w-[28rem] md:w-[80%] 2xl:w-[65rem]">
        {Object.keys(toolsAndLibraries).map((key, index) => (
          <Carousel className="" key={"Carousel " + index} opts={{ align: "start", loop: true }}>
            <CarouselContent className="ml-0 sm:ml-4">
              {toolsAndLibraries[key].map((e, i) => {
                return e.src ? (
                  <CarouselItem className="basis-1/3 sm:basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/4" key={"Carousel Item " + i}>
                    <a href={e.link} key={index} target="blank">
                      <Image className="w-fit h-16 sm:h-20 rounded-2xl" alt={e.alt} src={e.src} width="1920" height="1080" />
                    </a>
                  </CarouselItem>
                ) : (
                  <CarouselItem className="basis-1/3 sm:basis-1/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/4" key={"Carousel Item " + i}>
                    <a className="[&>svg]:w-16 sm:[&>svg]:w-20 [&>svg]:h-16 [&>svg]:bg-[#242938] [&>svg]:p-2 [&>svg]:rounded-2xl" href={e.link} target="blank">
                      {e.svg}
                    </a>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ))}
      </div>
    </div>
  )
}
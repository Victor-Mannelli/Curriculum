import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { toolsAndLibraries } from "@/utils"
import MySelf from "../public/images/me.png"
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="
      flex flex-col justify-center min-h-[calc(100vh-1.75rem)] w-4/5 m-auto gap-5 pb-5
      sm:justify-start sm:pt-16 sm:gap-20 sm:pl-10 sm:pr-28 sm:w-full
      xl:flex-row xl:pt-36
    ">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col items-center gap-3">
          <Image src={MySelf} alt="MySelf" className="h-36 w-fit rounded-md" width="1920" height="1080" />
          <h2> Victor Mendes Mannelli </h2>
        </div>
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
      <div className="flex flex-col w-4/5 sm:w-[90%] mx-auto xl:mt-32 gap-5">
        {Object.keys(toolsAndLibraries).map((key, index) => (
          <Carousel key={"Carousel " + index} opts={{ align: "start", loop: true }}>
            <CarouselContent className="sm:ml-5">
              {toolsAndLibraries[key].map((e, i) => {
                return e.src ? (
                  <CarouselItem className="basis-1/3 lg:basis-1/4 3xl:basis-1/5" key={"Carousel Item " + i}>
                    <a href={e.link} key={index} target="blank">
                      <Image className="w-fit h-16 sm:h-20 rounded-2xl" alt={e.alt} src={e.src} width="1920" height="1080" />
                    </a>
                  </CarouselItem>
                ) : (
                  <CarouselItem className="basis-1/3 lg:basis-1/4 3xl:basis-1/5" key={"Carousel Item " + i}>
                    <a className="[&>svg]:w-16 sm:[&>svg]:w-20 [&>svg]:h-16 sm:[&>svg]:h-20 [&>svg]:bg-[#242938] [&>svg]:p-2 [&>svg]:rounded-2xl" href={e.link} target="blank">
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
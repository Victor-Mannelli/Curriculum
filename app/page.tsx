import ContactMe from "./contact-me/page";
import Projects from "./projects/page";
import AboutMe from "./about-me/page";
import MyExp from "./my-exp/page";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-[calc(100vh-5rem)]">
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] snap-start">
        <AboutMe />
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] dark:bg-[#1d1d1d] bg-[#F8F8F8] snap-start">
        <MyExp />
      </div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-5 snap-start">
        <h1 className="text-3xl py-3"> My Projects </h1>
        <Projects />
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] dark:bg-[#1d1d1d] bg-[#F8F8F8] snap-start">
        <ContactMe />
      </div>
    </div>
  );
}

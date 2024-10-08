import { Particle } from "@/components/particle/Particle";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Header } from "@/components/header/header";

export function Home() {

  const [text] = useTypewriter({
    words: ["Web", "Freelance", "Fullstack"],
    loop: true,
    delaySpeed: 500,
  });

  return (
      <div className="flex flex-col h-screen overflow-hidden fixed">
        <Particle className="absolute inset-0 z-0" />

        <Header
          className="fixed top-0 left-0 right-0 z-10" 
        />

        <main className="flex flex-col justify-center items-center w-[100vw] flex-1 relative z-10">
          <div className="text-center">
            <h1 className="text-white md:text-7xl font-bold text-3xl uppercase">
              Erick Berdnaski
            </h1>
            <span className="text-gray-300 font-light md:text-3xl text-xl md:mt-4">
              Desenvolvedor{" "}
              <span className="text-purple-500 font-light md:text-3xl text-xl">
                <Cursor /> {text}
              </span>
            </span>
          </div>
        </main>
      </div>
  );
}

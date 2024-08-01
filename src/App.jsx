import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"



const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-400 selection:text-red-500">
      <div className="flixed top-0 -z-10 h-full w-full">
        <div className="absolute w-full h-full bg-cyan-800 ">
          <div className="container mx-auto px-8">
            <Navbar />
            <Hero/>
            <About/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

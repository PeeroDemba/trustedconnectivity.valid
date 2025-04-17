import { useEffect, useRef } from "react";
import AboutUs from "./components/AboutUs";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Insights from "./components/Insights";

function App() {
  const mouseRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {});

  return (
    <div
      onMouseMove={(e) => {
        if (mouseRef.current !== null) {
          mouseRef.current.style.left = `${String(e.clientX)}px`;
          mouseRef.current.style.top = `${String(e.clientY)}px`;
        }
      }}
    >
      <p
        ref={mouseRef}
        className="bg-[#ccc] hidden lg:block h-[6px] w-[6px] rounded-full z-[1000] fixed transition-all duration-200"
      ></p>
      <Header />
      <Categories />
      <Insights />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

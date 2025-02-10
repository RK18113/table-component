import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Speaker from "./components/Speaker";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const values = {
    topic1: "description1",
    topic2: "description2",
    topic3: "description3",
    topic4: "description4",
    topic5: "description5",
    topic6: "description6",
    topic7: "description7",
    topic8: "description8",
  };

  return (
    <>
      <div className="bg-black h-[400vh] w-screen">
        <div className=" bg-black h-screen w-screen flex justify-center items-center text-white text-5xl">
          <span className="overflow-hidden">Scroll Down</span>
        </div>
        <div className="flex flex-wrap">
          <Speaker values={values} name="MS.CAT" subname="SPEAKER"></Speaker>
        </div>

        <div className="bg-black h-screen w-screen"></div>
      </div>
    </>
  );
}

export default App;

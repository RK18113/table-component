import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopicDescription from "./components/TopicDescription";
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
      <div className="bg-black h-screen w-screen flex justify-center items-center text-white text-5xl">
        <div>Scroll Down</div>
      </div>
      <div className="bg-white h-[1px] w-screen"></div>

      <div className="bg-black min-h-screen w-screen flex flex-nowrap justify-center items-start px-10 py-2 gap-10">
        <div className="w-[40%]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBWB76EZKUgHdARYa-XNyIzoiJiUiyKiFrg&s"
            alt=""
            className="w-full h-[60vh] rounded-lg shadow-lg"
          />
        </div>
        <TopicDescription values={values} />
      </div>

      <div className="bg-black h-screen w-screen"></div>
    </>
  );
}

export default App;

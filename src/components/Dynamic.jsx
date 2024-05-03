import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Dynamic() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  useGSAP(() => {
    gsap.from("#inputText", {
      x: 700,

      duration: 1,
      ease: "circ.out",
    });
  });
  return (
    <div className="flex flex-col items-center  my-[20%] lg:my-[10%]">
      <form className="flex gap-5">
        <label htmlFor="info" className="text-xl">
          {" "}
          Enter your text
        </label>
        <input
          type="text"
          id="info"
          value={input}
          placeholder="text..."
          className="p-1 border-2 border-stone-400 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 "
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <h1 id="inputText" className="text-5xl font-bold text-center my-[10%]">
        {`Your input text is ${input}`}
      </h1>
    </div>
  );
}

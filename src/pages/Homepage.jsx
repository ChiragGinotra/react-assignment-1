import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Homepage() {
  useGSAP(() => {
    gsap.from("#homeText", {
      y: -600,
      scale: 2,
      duration: 1.5,
      ease: "bounce.out",
    });
  });
  return (
    <h1
      id="homeText"
      className="text-5xl font-bold text-center my-[30%] lg:my-[20%]"
    >
      Homepage
    </h1>
  );
}

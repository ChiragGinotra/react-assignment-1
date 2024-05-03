import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageA() {
  useGSAP(() => {
    gsap.from("#pageA", {
      x: -600,

      duration: 1,
      ease: "circ.out",
    });
  });
  return (
    <h1
      id="pageA"
      className="text-5xl font-bold text-center my-[30%] lg:my-[20%]"
    >
      You are viewing Page A
    </h1>
  );
}

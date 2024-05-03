import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function PageB() {
  useGSAP(() => {
    gsap.from("#pageB", {
      y: 500,

      duration: 1,
      ease: "circ.out",
    });
  });
  return (
    <h1
      id="pageB"
      className="text-5xl font-bold text-center my-[30%] lg:my-[20%]"
    >
      You are viewing Page B
    </h1>
  );
}

import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();

      let xTransform = gsap.utils.random(-100, 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )

        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )

        .to(
          elem,
          {
            xPercent: xTransform,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        );
    });
  });
  return (
    <>
      <div className="w-full bg-zinc-900">
        <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 1, "--c": 3 }}
          >
            <img src="src/assets/img-1.jpg" alt="Image 1" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 1, "--c": 7 }}
          >
            <img src="src/assets/img-2.jpg" alt="Image 2" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 2, "--c": 2 }}
          >
            <img src="src/assets/img-3.jpg" alt="Image 3" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 2, "--c": 6 }}
          >
            <img src="src/assets/img-4.jpg" alt="Image 4" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 3, "--c": 4 }}
          >
            <img src="src/assets/img-5.jpg" alt="Image 5" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 3, "--c": 8 }}
          >
            <img src="src/assets/img-6.jpg" alt="Image 6" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 4, "--c": 1 }}
          >
            <img src="src/assets/img-7.jpg" alt="Image 7" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 4, "--c": 5 }}
          >
            <img src="src/assets/img-8.jpg" alt="Image 8" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 5, "--c": 2 }}
          >
            <img src="src/assets/img-9.jpg" alt="Image 9" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 5, "--c": 6 }}
          >
            <img src="src/assets/img-10.jpg" alt="Image 10" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 6, "--c": 3 }}
          >
            <img src="src/assets/img-11.jpg" alt="Image 11" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 6, "--c": 7 }}
          >
            <img src="src/assets/img-12.jpg" alt="Image 12" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 7, "--c": 5 }}
          >
            <img src="src/assets/img-13.jpg" alt="Image 13" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 7, "--c": 8 }}
          >
            <img src="src/assets/img-14.jpg" alt="Image 14" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 8, "--c": 1 }}
          >
            <img src="src/assets/img-15.jpg" alt="Image 15" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 8, "--c": 4 }}
          >
            <img src="src/assets/img-15 (3).jpg" alt="Image 16" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 9, "--c": 2 }}
          >
            <img src="src/assets/img-16.jpg" alt="Image 17" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 9, "--c": 6 }}
          >
            <img src="src/assets/img-17.jpg" alt="Image 18" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 10, "--c": 3 }}
          >
            <img src="src/assets/img-18.jpg" alt="Image 19" />
          </div>
          <div
            className="elem col-span-1 row-span-1"
            style={{ "--r": 10, "--c": 7 }}
          >
            <img src="src/assets/img-19.jpg" alt="Image 20" />
          </div>
        </div>

        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white font-['Helvetica']">
          <h1 className="text-9xl mb-4 font-bold">
            Thomas Vance<sup>®</sup>
          </h1>
          <h2 className="text-5xl">並外れたファッション</h2>
        </div>

        <div className="w-full h-screen bg-[#D1D1D1] flex items-center justify-center mx-auto py-96 relative z-[999] font-['Helvetica']">
          <p className="text-5xl w-3/4 leading-[4rem] text-black font-regular text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            quisquam atque est, dicta quam ut porro labore nisi commodi
            quibusdam suscipit molestias asperiores neque exercitationem eveniet
            vitae adipisci voluptates dolorem sed veritatis modi. Voluptatem
            voluptate aliquam quisquam, hic quod rerum. Dolores nesciunt
            consequuntur <sup>®</sup>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;

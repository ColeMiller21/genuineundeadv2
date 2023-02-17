import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ImageAnimations() {
  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Select all images
    const images = document.querySelectorAll(".image-class");

    // Scale images up and then out on scroll
    gsap.utils.toArray(images).forEach((image, index) => {
      ScrollTrigger.create({
        trigger: image,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          gsap.to(image, {
            scale: 10,
            opacity: 1 - self.progress,
            delay: index * 0.5,
          });
        },
      });
    });
  }, []);

  return (
    <>
      {/* render your images here */}
      <img className="image-class" src="/images/carousel/captain.png" />
      <img className="image-class" src="/images/carousel/cowboy.png" />
      <img className="image-class" src="/images/carousel/human.png" />
      <img className="image-class" src="/images/carousel/paint.png" />
      <img className="image-class" src="/images/carousel/rose.png" />
      <img className="image-class" src="/images/carousel/titanium.png" />
    </>
  );
}

export default ImageAnimations;

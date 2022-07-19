import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TestimonialData } from "./TestimonialData";

const Testimonial = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",

    loop: true,

    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="py-12 grid mx-4 md:mx-20">
      <div className="mb-4 md:mb-10">
        <h1 className="mx-auto text-[#000A37] text-center font-black text-2xl md:text-4xl">
          Words from the street
        </h1>
        <p className="text-center">
          Here&apos;s what our community say about our work
        </p>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {TestimonialData.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden flex items-center flex-none md:w-[350px] md:h-[300px] h-[200px] w-[250px] flex-wrap md:flex-nowrap  mx-5"
            >
              <div className="border border-gray-800 p-4 md:p-8">
                <div className="flex justify-between md:justify-evenly mb-3">
                  <div className="md:hidden relative h-[40px]  flex w-[40px]">
                    <Image
                      className="rounded-full"
                      alt={item.title}
                      layout="fill"
                      src={item.image}
                      objectFit="cover"
                    />
                  </div>
                  <div className="mr-3 md:flex hidden relative h-[50px]   w-[50px]">
                    <Image
                      className="rounded-full"
                      alt={item.title}
                      layout="fill"
                      src={item.image}
                      objectFit="cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-md md:text-2xl font-black ">
                      {item.title}
                    </h1>
                    <h3 className="">{item.subtitle}</h3>
                  </div>
                </div>
                <h2 className="md:text-xs text-[9px]">{item.text}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-3xl md:text-7xl text-center">.</div>
    </div>
  );
};
export default Testimonial;

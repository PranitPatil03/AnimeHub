"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { spinner } from "../../public";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "@/app/action";
import AnimeCard, { AnimeProp } from "./AnimeCard";

let pageNumber = 2;

const Loader = () => {
  const { ref, inView } = useInView();
  const [AnimeData, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(pageNumber++).then((data) => {
        setData([...AnimeData, ...data]);
      });
    }
  }, [inView, AnimeData]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {AnimeData.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src={spinner}
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Loader;

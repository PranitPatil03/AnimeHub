"use client";

import Image from "next/image";
import { episodes, star } from "../../public";
import { fetchAnimeById } from "@/app/action";
import { getTranslation } from "@/services/translate";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface AnimeProp {
  id: string;
  name: string;
  description: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}

/* const handleClick = async (
  e: React.MouseEvent<HTMLDivElement>,
  anime: AnimeProp
) => {
  e.preventDefault();

  const { id } = anime;

  const data = await fetchAnimeById(id);
  console.log(data);
  fetchTranslation(data.description);
}; */

const fetchTranslation = async (description: string) => {
  try {
    const translation = await getTranslation(description);
    console.log(translation);
  } catch (error) {
    console.error("Error fetching translation:", error);
  }
};

const AnimeCard = ({ anime }: Prop) => {

    const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>,anime: AnimeProp) => {
    e.preventDefault();
    const { id } = anime;
    const data = await fetchAnimeById(id);
    router.push(`/anime/${id}`);
  };


  return (
    <>
      <div className="max-w-sm rounded relative w-full">
        <div className="relative w-full h-[37vh]">
          <Image
            src={`https://shikimori.one/${anime.image.original}`}
            alt={anime.name}
            fill
            className="rounded-xl cursor-pointer"
            onClick={(e) => handleClick(e, anime)}
          />
        </div>
        <div className="py-4 flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
              {anime.name}
            </h2>
            <div className="py-1 px-2 bg-[#161921] rounded-sm">
              <p className="text-white text-sm font-bold capitalize">
                {anime.kind}
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={episodes}
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">
                {anime.episodes || anime.episodes_aired}
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image
                src={star}
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base font-bold text-[#FFAD49]">
                {anime.score}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeCard;

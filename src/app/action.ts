"use server";

import axios from "axios";

export const fetchAnime = async ({ page }: number) => {
  const data = await axios.get(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const { data: animeData } = data;

  return animeData;
};

export const fetchAnimeById = async ({ id }: string) => {

  console.log(id)

  const data = await axios.get(`https://shikimori.one/api/animes/${id}`);

  console.log(data)

  // const { data: animeData } = data;

  // return animeData;
};

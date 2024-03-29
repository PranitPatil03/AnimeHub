import Loader from "@/components/Loader";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { fetchAnime } from "./action";

export default async function Home() {
  const pageNumber = 1;
  const data = await fetchAnime(pageNumber);

  return (
    <>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
        <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item: AnimeProp, index:number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </section>
        <Loader />
      </main>
    </>
  );
}

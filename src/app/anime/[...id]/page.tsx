"use client"

import { TestObj } from "@/app/_data";

export default function AnimeProfilePage({ params }: {
  params: {
    id: number
  }
}) {

  return (
    <>
      <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 border">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-mono text-4xl font-bold">{TestObj.name}</h2>
            <p className="font-mono text-xl font-light">{TestObj.kind} | Total Episodes {TestObj.episodes}</p>
            <hr className="border w-full border-gray-700"/>
            <h3 className="font-mono text-2xl font-light">Description</h3>
            <p className="font-mono text-base font-extralight">{TestObj.description}</p>
          </div>
          <div className="w-full">
            <img src={TestObj.image.original} className="w-full"/>
          </div>
        </div>

      </main>
    </>
  );
}

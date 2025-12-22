"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

type StreamingTopContentProps = {
  title: string;
  logoSrc: string;
  genre: string;
  queryKey: string[];
  queryFn: () => Promise<any[]>;
};

export function StreamingTopContent({
  title,
  logoSrc,
  genre,
  queryKey,
  queryFn,
}: StreamingTopContentProps) {
  const { data, error } = useQuery({
    queryKey,
    queryFn,
  });

  if (error) {
    return <p>Erro ao carregar filmes</p>;
  }

  return (
    <div className="w-[70%]">
      <h1 className="text-3xl text-center my-8 font-semibold flex items-center justify-center gap-2">
        {title}
        <Image
          src={logoSrc}
          alt={`${title} Logo`}
          width={100}
          height={50}
          className="rounded-3xl"
        />
        ? ( {genre} )
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-6">
        {data?.map((movie: any) => (
          <div
            key={movie.id}
            className="group bg-zinc-900 rounded-xl overflow-hidden shadow hover:scale-[1.03] transition"
          >
            <Image
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/poster-placeholder.png"
              }
              alt={movie.title}
              width={250}
              height={350}
              className="object-cover w-62.5 h-87.5"
            />

            <div className="p-3">
              <h2 className="text-sm font-semibold leading-tight line-clamp-2">
                {movie.title}
              </h2>

              <div className="flex items-center justify-between mt-2 text-xs text-zinc-400">
                <span>⭐ {movie.vote_average.toFixed(1)}</span>
                <span>{movie.release_date?.slice(0, 4)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

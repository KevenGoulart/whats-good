"use client";

import { getTopParamountMovies } from "@/services/paramount/paramount-top-movies";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function ParamountTopMovies() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["top-Paramount-movies"],
    queryFn: () => getTopParamountMovies(),
  });

  if (isLoading) {
    return <p>Carregando filmes...</p>;
  }

  if (error) {
    return <p>Erro ao carregar filmes</p>;
  }

  return (
    <div>
      <h1 className="text-4xl text-center my-8 font-semibold">
        What's Good On Paramount?
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-6">
        {data.map((movie: any) => (
          <div
            key={movie.id}
            className="group bg-zinc-900 rounded-xl overflow-hidden shadow hover:scale-[1.03] transition"
          >
            <div className="relative aspect-2/3">
              <Image
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/poster-placeholder.png"
                }
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>

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

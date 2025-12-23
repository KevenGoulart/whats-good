"use client";

import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type StreamingTopContentProps = {
  title: string;
  logoSrc: string;
  genre: string;
  queryKey: string[];
  queryFn: () => Promise<any[]>;
  defaultCollapsed?: boolean;
};

export function StreamingTopContent({
  title,
  logoSrc,
  genre,
  queryKey,
  queryFn,
  defaultCollapsed = false,
}: StreamingTopContentProps) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
    enabled: !collapsed,
  });

  if (isLoading) {
    return <p></p>;
  }

  if (error) {
    return <p>Erro ao carregar conteúdo</p>;
  }

  return (
    <section className="w-[70%] bg-slate-800 p-4 rounded-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-4 font-semibold flex items-center pl-2 gap-2">
            {title}
            <Image
              src={logoSrc}
              alt="logo"
              width={100}
              height={50}
              className="rounded-3xl"
            />
            ( {genre} )
          </h1>
        </div>
        <div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="cursor-pointer"
          >
            <ChevronDown size={52} />
          </button>
        </div>
      </div>
      {collapsed ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {data?.map((movie: any) => (
            <div
              key={movie.id}
              className="group bg-zinc-900 rounded-xl overflow-hidden shadow hover:scale-[1.03] transition"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={250}
                height={350}
                className="object-cover w-62.5 h-87.5"
              />

              <div className="p-3">
                <h2 className="font-semibold leading-tight line-clamp-2">
                  {movie.title}
                </h2>

                <div className="flex items-center justify-between mt-2 text-zinc-400">
                  <span>⭐ {movie.vote_average.toFixed(1)}</span>
                  <span>{movie.release_date?.slice(0, 4)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-10 gap-3">
          {data?.slice(0, 10).map((movie: any) => (
            <div
              key={movie.id}
              className="group bg-zinc-900 rounded-xl overflow-hidden shadow hover:scale-[1.03] transition"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={120}
                height={120}
                className="object-cover w-32 h-32"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn,
    enabled: !collapsed,
  });

  if (isLoading) {
    return <div className="h-40" />;
  }

  return (
    <section
      className="
        relative md:w-[70%] mx-4
        bg-linear-to-br from-black/80 via-zinc-900/90 to-black/80
        backdrop-blur-xl
        border border-white/10
        p-6
        rounded-[32px]
        shadow-[0_0_80px_rgba(0,0,0,0.8)]
        overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
      >
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight flex flex-col md:flex-row items-center gap-3">
          <span className="text-white/90">{title}</span>

          <div className="flex items-center gap-4 text-sm md:text-base text-zinc-400">
            <Image
              src={logoSrc}
              alt="logo"
              width={90}
              height={40}
              className="rounded-xl border border-white/10"
            />
            <span className="text-xl font-bold uppercase tracking-widest">
              {genre}
            </span>
          </div>
        </h1>

        <button
          className="
            text-zinc-400
            hover:text-white
            transition-all duration-300
            hover:scale-110
          "
        >
          <ChevronDown
            size={48}
            className={`transition-transform duration-300 ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`
          relative z-10 grid grid-cols-5 md:grid-cols-10 gap-3 mt-6
          transition-all duration-500 ease-out
          ${
            collapsed
              ? "opacity-0 scale-95 pointer-events-none h-0 overflow-hidden"
              : "opacity-100 scale-100"
          }
        `}
      >
        {data?.slice(0, 10).map((movie: any) => (
          <div
            key={movie.id}
            className="
              bg-zinc-900/80 rounded-xl overflow-hidden
              transition-all duration-300
              hover:scale-110
              hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
            "
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster"
              width={150}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div
        className={`
          relative z-10
          transition-all duration-700 ease-in-out
          overflow-hidden
          ${
            collapsed
              ? "max-h-750 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
          {data?.map((movie: any) => (
            <div
              key={movie.id}
              className="
                relative
                bg-zinc-900/80
                rounded-xl
                overflow-hidden
                shadow-lg
                transition-all duration-300
                hover:scale-[1.05]
                hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
              "
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title ?? movie.name}
                width={300}
                height={450}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-3 w-full">
                <h2 className="font-semibold leading-tight line-clamp-2">
                  {movie.title ?? movie.name}
                </h2>

                <div className="flex items-center justify-between mt-1 text-zinc-400 text-sm">
                  <span>⭐ {movie.vote_average.toFixed(1)}</span>
                  <span>
                    {movie.release_date?.slice(0, 4) ??
                      movie.first_air_date?.slice(0, 4)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href={`/${queryKey.join("-")}`}
            className="text-4xl font-semibold underline text-white/90 hover:text-white/70 transition"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.location.href = `/${queryKey.join("-")}`;
            }}
          >
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  );
}

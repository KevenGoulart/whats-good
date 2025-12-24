"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { streamingPages, StreamingSlug } from "@/utils/streaming-pages";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function StreamingPage() {
  const { slug } = useParams<{ slug: StreamingSlug }>();

  const config = streamingPages[slug];

  if (!config) {
    notFound();
  }

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: config.queryKey,
      queryFn: ({ pageParam }) => config.queryFn({ pageParam }),
      initialPageParam: 1,
      getNextPageParam: (_, pages) => pages.length + 1,
    });

  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  const items = data?.pages.flat() ?? [];

  return (
    <section className="md:w-[70%] md:mx-auto mx-4 p-6 text-white/90">
      <div className="flex items-center gap-8 mb-6">
        <Link
          href="/"
          className="hover:scale-150 transition-transform hover:text-white/80"
        >
          <ChevronLeft size={60} />
        </Link>

        <h1 className="text-5xl font-semibold">{config.title}</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item: any) => {
          const rating = parseFloat(item.vote_average ?? 0);

          return (
            <div
              key={item.id}
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
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title ?? item.name}
                width={300}
                height={450}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-3 w-full">
                <h2 className="font-semibold leading-tight line-clamp-2">
                  {item.title ?? item.name}
                </h2>

                <div className="flex items-center justify-between mt-1 text-zinc-400 text-sm">
                  <span>
                    ⭐ {Number.isFinite(rating) ? rating.toFixed(1) : "—"}
                  </span>
                  <span>
                    {item.release_date?.slice(0, 4) ??
                      item.first_air_date?.slice(0, 4)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div ref={loadMoreRef} className="h-10" />

      {isFetchingNextPage && (
        <p className="text-center mt-4 text-zinc-400">Carregando mais...</p>
      )}
    </section>
  );
}

"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { streamingPages, StreamingSlug } from "@/utils/streaming-pages";

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
    <section className="w-[70%] mx-auto p-6">
      <h1 className="text-5xl font-semibold mb-6 text-center">
        {config.title}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item: any) => (
          <div
            key={item.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              width={250}
              height={350}
              className="object-cover w-full"
            />

            <div className="p-3">
              <h2 className="font-semibold line-clamp-2">{item.title}</h2>

              <div className="flex justify-between text-sm text-zinc-400 mt-2">
                <span>⭐ {item.vote_average.toFixed(1)}</span>
                <span>{item.release_date?.slice(0, 4)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div ref={loadMoreRef} className="h-10" />

      {isFetchingNextPage && (
        <p className="text-center mt-4 text-zinc-400">Carregando mais...</p>
      )}
    </section>
  );
}

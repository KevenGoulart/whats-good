"use client";

import { StreamingTopContent } from "@/components/top-content";
import { getTopAppleMovies } from "@/services/apple/apple-top-movies";
import { getTopAppleShows } from "@/services/apple/apple-top-shows";
import { getTopDisneyMovies } from "@/services/disney/disney-top-movies";
import { getTopDisneyShows } from "@/services/disney/disney-top-shows";
import { getTopHboMovies } from "@/services/hbo/hbo-top-movies";
import { getTopHboShows } from "@/services/hbo/hbo-top-shows";
import { getTopNetflixMovies } from "@/services/netflix/netflix-top-movies";
import { getTopNetflixShows } from "@/services/netflix/netflix-top-shows";
import { getTopParamountMovies } from "@/services/paramount/paramount-top-movies";
import { getTopParamountShows } from "@/services/paramount/paramount-top-shows";
import { getTopPrimeMovies } from "@/services/prime/prime-top-movies";
import { getTopPrimeShows } from "@/services/prime/prime-top-shows";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-900 min-h-screen flex flex-col items-center gap-2 py-4">
        <h1 className="text-5xl font-semibold mt-4">O que tem de bom?</h1>
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/netflix.png"
          genre="Filmes"
          queryKey={["top-netflix-movies"]}
          queryFn={getTopNetflixMovies}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/netflix.png"
          genre="Séries"
          queryKey={["top-netflix-shows"]}
          queryFn={getTopNetflixShows}
        />
        <StreamingTopContent
          title="O que tem de bom no"
          logoSrc="/prime.png"
          genre="Filmes"
          queryKey={["top-prime-movies"]}
          queryFn={getTopPrimeMovies}
        />
        <StreamingTopContent
          title="O que tem de bom no"
          logoSrc="/prime.png"
          genre="Séries"
          queryKey={["top-prime-shows"]}
          queryFn={getTopPrimeShows}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/hbo.jpeg"
          genre="Filmes"
          queryKey={["top-hbo-movies"]}
          queryFn={getTopHboMovies}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/hbo.jpeg"
          genre="Séries"
          queryKey={["top-hbo-shows"]}
          queryFn={getTopHboShows}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/disney.jpeg"
          genre="Filmes"
          queryKey={["top-disney-movies"]}
          queryFn={getTopDisneyMovies}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/disney.jpeg"
          genre="Séries"
          queryKey={["top-disney-shows"]}
          queryFn={getTopDisneyShows}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/appletv.png"
          genre="Filmes"
          queryKey={["top-appletv-movies"]}
          queryFn={getTopAppleMovies}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/appletv.png"
          genre="Séries"
          queryKey={["top-appletv-shows"]}
          queryFn={getTopAppleShows}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/paramount.jpeg"
          genre="Filmes"
          queryKey={["top-paramount-movies"]}
          queryFn={getTopParamountMovies}
        />
        <StreamingTopContent
          title="O que tem de bom na"
          logoSrc="/paramount.jpeg"
          genre="Séries"
          queryKey={["top-paramount-shows"]}
          queryFn={getTopParamountShows}
        />
      </div>
    </div>
  );
}

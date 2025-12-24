"use client";

import LiquidEther from "@/components/LiquidEther";
import SplitText from "@/components/SplitText";
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
    <div className="relative w-full min-h-screen overflow-hidden text-white/90">
      {/* <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div> */}
      <div className="relative z-10 min-h-screen flex flex-col items-center gap-8 py-4">
        <SplitText
          text="O que tem de bom?"
          className="text-5xl md:text-6xl font-semibold text-center"
          delay={70}
          duration={2}
          ease="elastic.out(1, 0.3)"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
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

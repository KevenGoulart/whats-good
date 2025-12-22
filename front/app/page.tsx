import AppleTopMovies from "@/components/apple-top-movies";
import AppleTopShows from "@/components/apple-top-shows";
import DisneyTopMovies from "@/components/disney-top-movies";
import DisneyTopShows from "@/components/disney-top-shows";
import HboTopMovies from "@/components/hbo-top-movies";
import HboTopShows from "@/components/hbo-top-shows";
import NetflixTopMovies from "@/components/netflix-top-movies";
import NetflixTopShows from "@/components/netflix-top-shows";
import ParamountTopMovies from "@/components/paramount-top-movies";
import ParamountTopShows from "@/components/paramount-top-shows";
import PrimeTopMovies from "@/components/prime-top-movies";
import PrimeTopShows from "@/components/prime-top-shows";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-900 min-h-screen flex flex-col items-center gap-2">
        <h1 className="text-5xl font-semibold mt-8">What's Good?</h1>
        <NetflixTopMovies />
        <NetflixTopShows />
        <HboTopMovies />
        <HboTopShows />
        <PrimeTopMovies />
        <PrimeTopShows />
        <DisneyTopMovies />
        <DisneyTopShows />
        <AppleTopMovies />
        <AppleTopShows />
        <ParamountTopMovies />
        <ParamountTopShows />
      </div>
    </div>
  );
}

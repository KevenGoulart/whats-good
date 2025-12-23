import { getTopNetflixMovies } from "@/services/netflix/netflix-top-movies";
import { getTopNetflixShows } from "@/services/netflix/netflix-top-shows";

import { getTopPrimeMovies } from "@/services/prime/prime-top-movies";
import { getTopPrimeShows } from "@/services/prime/prime-top-shows";

import { getTopHboMovies } from "@/services/hbo/hbo-top-movies";
import { getTopHboShows } from "@/services/hbo/hbo-top-shows";

import { getTopDisneyMovies } from "@/services/disney/disney-top-movies";
import { getTopDisneyShows } from "@/services/disney/disney-top-shows";

import { getTopAppleMovies } from "@/services/apple/apple-top-movies";
import { getTopAppleShows } from "@/services/apple/apple-top-shows";

import { getTopParamountMovies } from "@/services/paramount/paramount-top-movies";
import { getTopParamountShows } from "@/services/paramount/paramount-top-shows";

export const streamingPages = {
  "top-netflix-movies": {
    title: "Netflix • Filmes",
    provider: "netflix",
    type: "movie",
    queryKey: ["top-netflix-movies-infinite"],
    queryFn: getTopNetflixMovies,
  },

  "top-netflix-shows": {
    title: "Netflix • Séries",
    provider: "netflix",
    type: "show",
    queryKey: ["top-netflix-shows-infinite"],
    queryFn: getTopNetflixShows,
  },

  "top-prime-movies": {
    title: "Prime Video • Filmes",
    provider: "prime",
    type: "movie",
    queryKey: ["top-prime-movies-infinite"],
    queryFn: getTopPrimeMovies,
  },

  "top-prime-shows": {
    title: "Prime Video • Séries",
    provider: "prime",
    type: "show",
    queryKey: ["top-prime-shows-infinite"],
    queryFn: getTopPrimeShows,
  },

  "top-hbo-movies": {
    title: "HBO • Filmes",
    provider: "hbo",
    type: "movie",
    queryKey: ["top-hbo-movies-infinite"],
    queryFn: getTopHboMovies,
  },

  "top-hbo-shows": {
    title: "HBO • Séries",
    provider: "hbo",
    type: "show",
    queryKey: ["top-hbo-shows-infinite"],
    queryFn: getTopHboShows,
  },

  "top-disney-movies": {
    title: "Disney+ • Filmes",
    provider: "disney",
    type: "movie",
    queryKey: ["top-disney-movies-infinite"],
    queryFn: getTopDisneyMovies,
  },

  "top-disney-shows": {
    title: "Disney+ • Séries",
    provider: "disney",
    type: "show",
    queryKey: ["top-disney-shows-infinite"],
    queryFn: getTopDisneyShows,
  },

  "top-appletv-movies": {
    title: "Apple TV+ • Filmes",
    provider: "appletv",
    type: "movie",
    queryKey: ["top-appletv-movies-infinite"],
    queryFn: getTopAppleMovies,
  },

  "top-appletv-shows": {
    title: "Apple TV+ • Séries",
    provider: "appletv",
    type: "show",
    queryKey: ["top-appletv-shows-infinite"],
    queryFn: getTopAppleShows,
  },

  "top-paramount-movies": {
    title: "Paramount+ • Filmes",
    provider: "paramount",
    type: "movie",
    queryKey: ["top-paramount-movies-infinite"],
    queryFn: getTopParamountMovies,
  },

  "top-paramount-shows": {
    title: "Paramount+ • Séries",
    provider: "paramount",
    type: "show",
    queryKey: ["top-paramount-shows-infinite"],
    queryFn: getTopParamountShows,
  },
} as const;

export type StreamingSlug = keyof typeof streamingPages;

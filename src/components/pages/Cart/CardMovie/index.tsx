import { ItemsCart } from "@/types/context";
import { CardMovieDesktop } from "./CardMovieDesktop";
import { CardMovieMobile } from "./CardMovieMobile";

export const CardMovie = (movieData: ItemsCart) => {
  return (
    <>
      <CardMovieDesktop {...movieData} />
      <CardMovieMobile {...movieData} />
    </>
  );
};

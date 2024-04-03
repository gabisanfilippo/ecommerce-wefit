"use client";

import { Input } from "@/components/ui/Input";
import * as S from "./style";
import { CardAddMovie } from "./CardAddMovie";
import { api } from "@/services/api";
import { Product, ProductsList } from "@/types/products";
import { useEffect, useState } from "react";

export const SearchMovies = () => {
  const [moviesList, setMoviesList] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get<ProductsList>("/products");
        setMoviesList(response.data.products);
      } catch (error: any) {
        throw new Error(error.message);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <Input />
      <S.CardsContainer>
        {moviesList.map((movie, index) => {
          return (
            <CardAddMovie
              movieData={movie}
              key={index + movie.id + "movieId"}
            />
          );
        })}
      </S.CardsContainer>
    </>
  );
};

"use client";

import { Input } from "@/components/ui/Input";
import * as S from "./style";
import { CardAddMovie } from "./CardAddMovie";
import { api } from "@/services/api";
import { Product, ProductsList } from "@/types/products";
import { useEffect, useState } from "react";

interface IMoviesData {
  isLoading: boolean;
  data: null | Product[];
  isError: boolean;
}

export const SearchMovies = () => {
  const [moviesData, setMoviesData] = useState<IMoviesData>({
    isLoading: false,
    data: null,
    isError: false,
  });

  useEffect(() => {
    async function getProducts() {
      setMoviesData((prev) => ({ ...prev, isLoading: true }));

      try {
        const response = await api.get<ProductsList>("/products");
        setMoviesData((prev) => ({
          ...prev,
          isError: false,
          data: response.data.products,
        }));
      } catch (error: any) {
        setMoviesData((prev) => ({
          ...prev,
          isError: true,
        }));
        throw new Error(error.message);
      } finally {
        setMoviesData((prev) => ({ ...prev, isLoading: false }));
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <Input />
      <S.CardsContainer>
        {(!moviesData.data || moviesData.isLoading) && <>carregando...</>}
        {moviesData.isLoading && <>erro...</>}
        {moviesData.data && moviesData.data.length === 0 && <>vazio</>}
        {moviesData.data?.map((movie, index) => {
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

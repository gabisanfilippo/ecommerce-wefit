"use client";

import { Input } from "@/components/ui/Input";
import * as S from "./style";
import { CardAddMovie } from "./CardAddMovie";
import { api } from "@/services/api";
import { Product, ProductsList } from "@/types/products";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface IMoviesData {
  isLoading: boolean;
  data: null | Product[];
  isError: boolean;
}

export const SearchMovies = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const titleFilter = searchParams.get("title");

  const [moviesData, setMoviesData] = useState<IMoviesData>({
    isLoading: false,
    data: null,
    isError: false,
  });

  useEffect(() => {
    async function getProducts() {
      setMoviesData((prev) => ({ ...prev, isLoading: true }));

      try {
        const response = await api.get<ProductsList>(
          `/products?title=${titleFilter || ""}`
        );

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
  }, [titleFilter]);

  function onSearch(value: string) {
    if (value) router.push(`/search?title=${value}`);
    else router.push(`/`);
  }

  return (
    <>
      <Input defaultValue={titleFilter} onSearch={onSearch} />
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

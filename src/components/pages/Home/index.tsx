"use client";

import { Input } from "@/components/ui/Input";
import * as S from "./style";
import { CardAddMovie } from "./CardAddMovie";
import { api } from "@/services/api";
import { Product } from "@/types/products";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/ui/Loading";
import { Empty } from "@/components/ui/Empty";

interface IMoviesData {
  isLoading: boolean;
  data: null | Product[];
}

export const SearchMovies = (pageProps: any) => {
  const router = useRouter();
  const titleFilter = pageProps.pageProps.searchParams?.title;

  const [moviesData, setMoviesData] = useState<IMoviesData>({
    isLoading: false,
    data: null,
  });

  useEffect(() => {
    async function getProducts() {
      setMoviesData((prev) => ({ ...prev, isLoading: true }));

      try {
        const response = await api.listProducts(titleFilter);
        setMoviesData((prev) => ({
          ...prev,
          data: response.data.products,
        }));
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setMoviesData((prev) => ({ ...prev, isLoading: false }));
      }
    }

    getProducts();
  }, [titleFilter]);

  function handleValue(value: string) {
    if (value) router.push(`/search?title=${value}`);
    else router.push(`/`);
  }

  return (
    <>
      <Input
        placeholder="Buscar filme pelo nome"
        defaultValue={titleFilter}
        handleValue={handleValue}
        showIcon
      />
      <S.CardsContainer>
        {(!moviesData.data || moviesData.isLoading) && <Loading />}
        {moviesData.data?.length === 0 && <Empty mode="reload" />}
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

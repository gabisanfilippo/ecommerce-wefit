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
import { IPageProps } from "@/types/commom";

export const SearchPage = ({ pageProps }: IPageProps) => {
  const router = useRouter();
  const titleFilter = pageProps?.searchParams?.title;

  const [moviesData, setMoviesData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getProducts() {
    try {
      setIsLoading(true);
      const response = await api.listProducts(titleFilter);
      setMoviesData(response.data.products);
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
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
        {isLoading && <Loading />}
        {moviesData.length === 0 && !isLoading && <Empty mode="reload" />}
        {moviesData.map((movie, index) => {
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

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/lib/styledServerSide";
import { Layout } from "@/components/layout";
import { IChildren } from "@/types/commom";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste Front React WeFit",
  description: "WeMovies - Compra online de filmes",
};

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

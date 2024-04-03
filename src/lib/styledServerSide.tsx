"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { GlobalStyle } from "@/styles/global";
import { CartContextProvider } from "@/contexts/CartContext";
import { IChildren } from "@/types/commom";

export default function StyledComponentsRegistry({ children }: IChildren) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined")
    return (
      <CartContextProvider>
        <GlobalStyle />
        {children}
      </CartContextProvider>
    );

  return (
    <CartContextProvider>
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <GlobalStyle />
        {children}
      </StyleSheetManager>
    </CartContextProvider>
  );
}

import "../styles/globals.css";
import { ShoppingCartProvider } from "./lib/shopppingCartContext";
import { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
    </ShoppingCartProvider>
  );
}

export default MyApp;

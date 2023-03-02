import { Head, Html, Main, NextScript } from "next/document";
import PageLoader from "../components/Loaders/page";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/mokshalogo.svg" />
      </Head>
      <body>
        <PageLoader />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

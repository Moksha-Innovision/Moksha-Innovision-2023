import { Head, Html, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/mokshalogo.svg" />
      </Head>
      <body>
        <div
          className="grid h-screen w-screen place-items-center bg-black bg-event-pattern bg-contain bg-fixed"
          id="globalLoader"
        >
          <Image
            src="/WEBSITE loader.svg"
            width={300}
            priority={true}
            height={300}
            alt={"loader"}
            className="animate-pulse"
          />
         
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

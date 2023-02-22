import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/mokshalogo.svg" />
      </Head>
      <body>
        <div
          className="grid h-screen w-screen place-items-center bg-black"
          id="globalLoader"
        >
          <img
            src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/footerLogo.svg"
            width={300}
            height={300}
            alt={"loader"}
            className="animate-pulse"
          />
          <img
            src="/logbg.svg"
            width={300}
            height={300}
            alt={"loader"}
            className="absolute animate-wheel opacity-20"
          />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

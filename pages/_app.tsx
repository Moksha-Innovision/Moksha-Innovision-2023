import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.scss";

import Script from "next/script";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  let [show, setShow] = useState(false);

  useEffect(() => {
    let t;
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        t = setTimeout(() => {
          loader.remove();
          setShow(true);
        }, 1000);
      }
    }
  }, []);

  return (
    <>
      <Script
        id="my-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-S34Q7PDGZS"
        strategy="afterInteractive"
      ></Script>
      <Script id="my-scrip">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-S34Q7PDGZS');
`}
      </Script>
      <NextNProgress />
      <ParallaxProvider>
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          {show && <Component {...pageProps} />}
        </SessionContextProvider>
      </ParallaxProvider>
    </>
  );
}
export default MyApp;

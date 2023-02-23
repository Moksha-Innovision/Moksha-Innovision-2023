import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/globals.scss";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  let [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");

      if (loader)
        setTimeout(() => {
          loader.remove();
          setShow(true);
        }, 2000);
    }
  }, []);

  return (
    <>
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

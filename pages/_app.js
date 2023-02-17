import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Layout from "../components/sections/Layout";
import { appWithTranslation } from "next-i18next";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);
  return (
    <ParallaxProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ParallaxProvider>
  );
}

export default appWithTranslation(MyApp);

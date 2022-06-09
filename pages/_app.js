import "../styles/globals.css";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

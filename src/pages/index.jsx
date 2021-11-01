import { useEffect, useState } from "react";
import Head from "next/head";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Loader from "../components/Loader";
import Header from "../components/home/Header";
import Banner from "../components/home/Banner";
import About from "../components/home/About";
import Marquee from "../components/home/Marquee";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      <Head>
        <title>Run for Leni | Home</title>
        <meta name="description" content="Lalaban tayo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <Header />
              <Banner />
              {!loading && <About />}
              <Marquee />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}

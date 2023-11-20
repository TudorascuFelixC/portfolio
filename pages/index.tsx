import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen span-y snap-mandatory overflaw-scroll z-0">
      <Head>
        <title>Felix Portfolio</title>
      </Head>

      <Header />
      {/*Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/*About Me */}
      {/*Experience */}
      {/*Projects */}
      {/*Contact Me */}
    </div>
  );
};

export default Home;

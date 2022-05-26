import Head from "next/head";
import React from "react";
import Betting from "../../components/Betting";

const Rotary = () => {
  return (
    <>
      <Head>
        <title>Rotary Game | Safe Bet</title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className="bg-gradient-to-br from-tertiary-color via-main to-tertiary-color">
        <Betting />
      </main>
    </>
  );
};

export default Rotary;

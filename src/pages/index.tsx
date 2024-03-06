// src/pages/index.tsx
import Dashboard from "@/components/sections/Dashboard/Dashboard";
import Head from "next/head";
import Header from "@/components/sections/Header";
import React from "react";
import RecentPlays from "@/components/sections/RecentPlays/RecentPlays";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Faqs from "@/components/sections/Faqs/Faqs";
import Why from "@/components/sections/Why/Why";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>GambleSol - Double or Nothing</title>
        <meta name="title" content="GambleSol - Double or Nothing" />
        <meta
          name="description"
          content="A fair, simple, and decentralized casino on Solana."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gamblesol.vercel.app/" />
        <meta
          property="og:title"
          content="A fair, simple, and decentralized casino on Solana."
        />
        <meta
          property="og:description"
          content="A fair, simple, and decentralized casino on Solana."
        />
        <meta
          property="og:image"
          content="https://gamblesol.vercel.app/logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://gamblesol.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Gamba v2 Casino Platform - Next.js"
        />
        <meta
          property="twitter:description"
          content="A fair, simple, and decentralized casino on Solana."
        />
        <meta
          property="twitter:image"
          content="https://gamblesol.vercel.app/logo.png"
        />
        <link rel="icon" href="./favicon.png" sizes="any" />
      </Head>
      <Hero />
      <Dashboard />
      <About />
      <Faqs />
      <Why /> 
    </>
  );
}

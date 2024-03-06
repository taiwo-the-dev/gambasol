// src/components/sections/Dashboard/Dashboard.tsx

import { GAMES } from "@/games";
import { GameCard } from "./GameCard";
import React from "react";
import { WelcomeBanner } from "./WelcomeBanner";
import Wrapper from "@/components/Wrapper";

export function GameGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-4'>
      {GAMES.map((game, index) => (
        <div className='row gy-4 justify-content-center' key={index}>
          <div className='col-lg-4 col-xl-3 col-md-6 col-sm-6'>
            <GameCard key={game.id} game={game} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Dashboard() {
  return (
    <section className="game-section padding-top padding-bottom bg_img">
      <Wrapper>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-xl-5'>
            <div className='section-header text-center'>
              <h2 className='section-header__title'>Top Awesome Games</h2>
              <p>
                A casino is a facility for certain types of gambling. Casinos
                are often built combined with hotels, resorts,.
              </p>
            </div>
          </div>
        </div>
        <GameGrid />
      </Wrapper>
    </section>
  );
}

// src/components/sections/Dashboard/GameCard.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GameBundle } from "gamba-react-ui-v2";
import Image from "next/image";
import { useCurrentPool } from "gamba-react-ui-v2";

interface GameCardProps {
  game: GameBundle;
  key?: string | number;
}

export function GameCard({ game }: GameCardProps) {
  const router = useRouter();
  const small = router.pathname !== "/";
  const imagePath = `/games/${game.id}/logo.png`;
  const backgroundStyle = {
    aspectRatio: small ? "1 / 0.5" : "1 / 0.6",
    backgroundColor: game.meta.background,
  };

  const pool = useCurrentPool();

  const MaxPayout = (pool.maxPayout / 1e9).toFixed(2);
  const MinWager = parseFloat((pool.minWager / 1e9).toFixed(2));

  console.log(MaxPayout, MinWager);

  return (
    <div className='game-item'>
      <div className='game-inner'>
        <div className='game-item__thumb'>
          <img src={imagePath} alt='game' />
        </div>
        <div className='game-item__content w-full'>
          {/* <h4 className='title'>{game.meta.name}</h4> */}
          {/* <p className='invest-info'>Min Wager: <span className="invest-amount">{MinWager}</span></p>
          <p className='invest-info'>Max Payout - <span className="invest-amount">{MaxPayout}</span></p> */}
          <div className='w-fit flex mx-auto items-center justify-center cmn--btn active btn--md radius-0'>
            {game.id === "wheel" ? (
              <Link href='#' passHref>
                Coming Soon
              </Link>
            ) : (
              <Link href={`/play/${game.id}`} passHref>
                Play Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

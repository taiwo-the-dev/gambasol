// src/pages/play/[gameId].tsx
import CustomRenderer, {
  CustomError,
  GameSlider,
} from "@/components/sections/Game/Game";

import { GAMES } from "@/games";
import { GambaUi } from "gamba-react-ui-v2";
import React from "react";
import { useRouter } from "next/router";
import RecentPlays from "@/components/sections/RecentPlays/RecentPlays";
import Wrapper from "@/components/Wrapper";
import logoVid from "../../../public/gamba.gif";
import Image from "next/image";

interface GameProps {
  gameId: string;
  key?: string;
}

const Game: React.FC<GameProps> = ({ gameId }) => {
  const game = GAMES.find((x) => x.id === gameId);

  return (
    <>
      {game ? (
        <div className='flex flex-col justify-center items-center mx-auto max-w-7xl max-sm:max-w-sm pt-20'>
          <GambaUi.Game game={game} errorFallback={<CustomError />}>
            <CustomRenderer />
          </GambaUi.Game>
        </div>
      ) : (
        <div className='bg-black animate-pulse mt-20 flex flex-col justify-center items-center mx-auto max-w-5xl px-10 py-20 rounded-lg shadow-xl'>
          <div className='flex flex-col justify-center items-center max-w-lg rounded-lg'>
            <Image src={logoVid} alt="logo" />
            <p className='text-2xl text-white mt-5'>
              Loading or Invalid game ID...
            </p>
          </div>
        </div>
      )}
      <Wrapper>
        <div className='py-4'>
          <GameSlider />
        </div>
        <div className='py-4'>
          <div className='row justify-content-center'>
            <div className='col-lg-7 col-xl-6'>
              <div className='section-header text-center'>
                <h2 className='section-header__title'>
                  Recently Played Games
                </h2>
              </div>
            </div>
          </div>
          <RecentPlays />
        </div>
      </Wrapper>

      {/* <div className="flex flex-col justify-center items-center mx-auto max-w-7xl max-sm:max-w-sm mb-4">
        <div className="py-4">
          <GameSlider />
        </div>
      </div> */}
    </>
  );
};

const GamePage: React.FC = () => {
  const router = useRouter();
  const { gameId } = router.query;

  return (
    <>
      <Game gameId={gameId as string} key={gameId as string} />
    </>
  );
};

export default GamePage;

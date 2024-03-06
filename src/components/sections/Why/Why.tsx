import Wrapper from "@/components/Wrapper";
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import RecentPlays from "../RecentPlays/RecentPlays";

const Why = () => {
  return (
    <section className='why-section padding-top padding-bottom overflow-hidden'>
      <Wrapper>
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
      </Wrapper>
      <div className='shapes'>
        <img
          src='../../../public/assets/images/why/shape.png'
          alt='why'
          className='shape shape1'
        />
      </div>
    </section>
  );
};

export default Why;
